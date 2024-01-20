'use client';
import { Button, message } from 'antd';
import React, { useEffect, useRef, useState } from 'react'
import Webcam from 'react-webcam';
import * as faceapi from 'face-api.js';
import dayjs from 'dayjs';
import { useRouter } from 'next/navigation';
import Swal from 'sweetalert2';

const CameraPresensi = ({allPegawai, allKehadiran}) => {
  let continueDetecting = true;
  const canvasRef = useRef(null);
  const webcamRef = useRef(null);
  const today = dayjs().format('DD/MM/YYYY');
  const [messageApi, contextHolder] = message.useMessage();
  const [webcamEnabled, setWebcamEnabled] = useState(false)
  const router = useRouter();
  
  useEffect(() => {
    loadModels();
    detectFace();
  }, [])
  

  const loadModels = async () => {
    await faceapi.nets.ssdMobilenetv1.loadFromUri('/models');
    await faceapi.nets.faceLandmark68Net.loadFromUri('/models');
    await faceapi.nets.faceRecognitionNet.loadFromUri('/models');
  };

  const detectFace = async () => {
    if(!continueDetecting) return;
    if (webcamRef.current && webcamRef.current.video.readyState === 4) {
      const video = webcamRef.current.video;
      const labeledDescriptors = await loadLabeledImages();
      const faceMatcher = new faceapi.FaceMatcher(labeledDescriptors);
      
      const detections = await faceapi
      .detectSingleFace(video, new faceapi.SsdMobilenetv1Options())
      .withFaceLandmarks()
      .withFaceDescriptor();
      
      console.log(detections);

      if(detections){
        canvasRef.current.innerHTML = faceapi.createCanvasFromMedia(video);

        faceapi.matchDimensions(canvasRef.current, {
          width: 432, 
          height: 324,
        })

        const resized = faceapi.resizeResults(detections, {
          width: 432, 
          height: 324,
        })
        
        const bestMatch = faceMatcher.findBestMatch(detections.descriptor);
        
        console.log("bestMatch", bestMatch);
        
        const drawBox = new faceapi.draw.DrawBox(resized.detection.box, {
          label: bestMatch.label,
        });
        drawBox.draw(canvasRef.current ? canvasRef.current : {width: 1, height: 1});

        const filteredPegawai = allPegawai.filter((pegawai) => pegawai.nama.toLowerCase() == bestMatch.label.toLowerCase() )
        const filteredKehadiran = allKehadiran.filter((kehadiran) => kehadiran.tanggal == today && filteredPegawai[0].id == kehadiran.pegawaiId)
        
        console.log("filteredPegawai", filteredPegawai);
        console.log("filteredKehadiran", filteredKehadiran);
        
        if(filteredPegawai.length != 0) {
          continueDetecting = false
        }

        // Jika Pegawai Dikenali dan Belum Absen Pada Hari Ini
        if(filteredPegawai.length != 0 && filteredKehadiran.length == 0) {
          setTimeout(() => {
            Swal.fire({
              title: "Wajah Berhasil Dikenali",
              text: `Rekam Absen Masuk Untuk ${filteredPegawai[0]?.nama} ?`,
              icon: "success",
              showCancelButton: true,
              confirmButtonColor: "#3085d6",
              cancelButtonColor: "#d33",
              confirmButtonText: "Ya"
            }).then( async (result) => {
              if (result.isConfirmed) {
                try {
                  const response = await fetch(`/api/presensi`, {
                    method: 'POST', 
                    headers : {
                      'Content-Type': 'application/json'
                    }, 
                    body: JSON.stringify({
                      pegawaiId: filteredPegawai[0].id, 
                      jam_masuk: dayjs().format('HH:mm:ss'), 
                      tanggal: dayjs().format('DD/MM/YYYY'), 
                      kehadiran: 'Hadir', 
                      status: 'Masuk', 
                      keterangan: dayjs().format('HH:mm:ss') < '08:15:00' ? 'Hadir' : 'Terlambat'
                    })
                  })
                  if (response.ok) {
                    successAbsenMasuk()
                    setWebcamEnabled(false)
                    router.refresh();
                  } else {
                    error();
                  }
                } catch (error) {
                  console.log('Something Went Wrong')
                }
              }
            })
          }, 3000)
        } else if (filteredPegawai.length != 0 && filteredKehadiran.length != 0) {
          // Jika Pegawai Dikenali, Dan Sudah melakukan Absensi Pada Hari Ini
          if(filteredKehadiran[0]?.jam_keluar == null){
            setTimeout(() => {
              Swal.fire({
                title: "Wajah Berhasil Dikenali",
                text: `Rekam Absen Pulang Untuk ${filteredPegawai[0]?.nama} ?`,
                icon: "success",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Ya"
              }).then( async (result) => {
                if (result.isConfirmed) {
                  try {
                    const response = await fetch(`/api/presensi/${filteredKehadiran[0]?.id}`, {
                      method: 'PATCH', 
                      headers : {
                        'Content-Type': 'application/json'
                      }, 
                      body: JSON.stringify({
                        jam_keluar: dayjs().format('HH:mm:ss'), 
                        status: 'Pulang', 
                      })
                    })
                    if (response.ok) {
                      successAbsenPulang()
                      setWebcamEnabled(false)
                      router.refresh();
                    } else {
                      error()
                    }
                  } catch (error) {
                    console.log(error);
                  }
                }
              })
            }, 3000)
          } else {
            // Jika Pegawai Dikenali dan sudah Absen Pulang
            errorSudahAbsen();
          }
        }

        faceapi.draw.drawDetections(canvasRef.current, resized);
      } else {
        const canvas = canvasRef.current;
        canvas.getContext('2d').clearRect(0, 0, canvas.width, canvas.height);
      }
    }
    setTimeout(detectFace, 5000);
  };

  const loadLabeledImages = async () => {
    const labels = ['Ferri', 'Maya', 'Raynaldi', 'Riyandi Djohari'] ;
    return Promise.all(
      labels.map(async (label) => {
        const descriptions = [];
        for (let i = 1; i <= 5; i++) {
          const img = await faceapi.fetchImage(`/labeled_images/${label}/${i}.jpeg`);
          const detections = await faceapi
            .detectSingleFace(img)
            .withFaceLandmarks()
            .withFaceDescriptor();
          console.log("detections", detections);
          descriptions.push(detections.descriptor);
        }
        return new faceapi.LabeledFaceDescriptors(label, descriptions);
      })
    );
  };

  const successAbsenMasuk = () => {
    messageApi.open({
      type: 'success',
      content: 'Absen Masuk Berhasil',
    });
  };

  const successAbsenPulang = () => {
    messageApi.open({
      type: 'success',
      content: 'Absen Pulang Berhasil',
    });
  };

  const error = () => {
    messageApi.open({
      type: 'error',
      content: 'Terjadi Kesalahan',
    });
  };

  const errorSudahAbsen = () => {
    messageApi.open({
      type: 'error',
      content: 'Anda Sudah Absen Hari Ini',
    });
  };

  if(webcamEnabled) {
    continueDetecting = true
    detectFace();
  };
  return (
    <>
    {contextHolder}
    <h2 className='text-xl text-center mb-8 font-semibold'>Kotak Pratinjau Kamera</h2>
    {
      webcamEnabled ? (
        <>
        <div className="mb-8 border-2 border-primary relative rounded-md">
          <Webcam ref={webcamRef} mirrored={false}/>
          <canvas ref={canvasRef} width={432} height={324}/>
        </div>
        </>
      ) : (
        <div className='mb-8 border-2 h-72 border-primary rounded-md'>
          <canvas ref={canvasRef} width={432} height={324} className='hidden'/>
        </div>
      )
    }
    <div className='flex flex-row gap-2 justify-between'>
      {
        webcamEnabled ? (
          <Button type='primary' danger className='flex-1 text-white' onClick={() => setWebcamEnabled((prev) => !prev)}>Stop Camera</Button>
          ) : (
          <Button type='default' className='flex-1 text-white' style={{backgroundColor: "#7076FE", color: "#fff"}} onClick={() => setWebcamEnabled((prev) => !prev)}>Aktifkan Camera</Button>
        )
      }
    </div>
    </>
  )
}

export default CameraPresensi