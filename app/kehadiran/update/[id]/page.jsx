'use client';
import TitleBar from '@/app/components/atoms/TitleBar'
import { Button, Form, Input, TimePicker, Select, DatePicker } from 'antd'
import { useRouter, useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import Swal from 'sweetalert2';
import dayjs from 'dayjs';

const UpdateKehadiran = () => {
  const searchParams = useSearchParams();
  const [jamMasuk, setJamMasuk] = useState(searchParams.get("jam_masuk"))
  const [jamKeluar, setJamKeluar] = useState(searchParams.get("jam_keluar"))
  const [tanggal, setTanggal] = useState(searchParams.get("tanggal"))
  const [loading, setLoading] = useState(false);
  const [allPegawai, setAllPegawai] = useState([]);
  const router = useRouter()

  const fetchAllPegawai = async () => {
    setLoading(true);
    const response = await fetch("/api/pegawai");
    const data = await response.json();
    setAllPegawai(data);
    setLoading(false);
  }

  useEffect(() => {
    fetchAllPegawai();
  }, [])
  
  // const tanggal = new Date().toLocaleDateString("id-ID");
  const styles = {
    inputStyle: {
      fontWeight: "500", 
      color: "black", 
      fontFamily: "montserrat",
      width: "100%",
      border: "1px solid black",
      fontSize: "14px",
      borderRadius: "8px"
      // padding: "10px"
    },
    formItemStyle: {
      marginBottom: "2.5rem",
      fontWeight: "600",
    },
  }

  const options = allPegawai?.map((pegawai) => (
    { 
      value: pegawai.id, 
      label: `${pegawai.nama} - ${pegawai.jabatan.nama_jabatan}`
    }
  ))

  const onFinish = async (values) => {
    console.log(values)
    const { pegawaiId, status, kehadiran, keterangan } = values;

    try {
      const response = await fetch(`/api/presensi/${searchParams.get("id")}`, {
        method: "PATCH",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          pegawaiId, tanggal, jam_masuk: jamMasuk, jam_keluar: jamKeluar, status, kehadiran, keterangan, 
        }),
      });
      if (response.ok) {
        await Swal.fire("Success", "Data Kehadiran Berhasil Diedit!", "success");
        router.refresh();
        router.push("/kehadiran");
      } else {
        console.log(response)
        await Swal.fire("Oops", "Something went wrong", "error");
      }
    } catch (error) {
      console.log(error);
    }
  }


  const handleDateChange = (date, dateString) => {
    console.log(date, dateString);
    setTanggal(dateString);
  };

  const handleJamMasukChange = (time, timeString) => {
    console.log(time, timeString);
    setJamMasuk(timeString);
  };

  const handleJamKeluarChange = (time, timeString) => {
    console.log(time, timeString);
    setJamKeluar(timeString);
  };

  const handleStatusChange = (value) => {
    console.log(`selected ${value}`);
  };

  const handleKehadiranChange = (value) => {
    console.log(`selected ${value}`);
  };

  console.log(searchParams.get("tanggal"))
  return (
    <div>
      <TitleBar title="Data Kehadiran"/>
      <div className='tambah-kehadiran'>
        <h1 className="section-title">Edit Kehadiran</h1>
        <p>Silahkan isi form dibawah ini untuk mengedit data kehadiran pegawai</p>
        <Form
          layout='horizontal'
          labelCol={{span: 5}}
          labelWrap
          // wrapperCol={{span: 10}}
          labelAlign='left'
          size='large'
          style={{margin: '2rem 0'}}
          onFinish={onFinish}
          initialValues={{
            pegawaiId: Number(searchParams.get("pegawaiId")),
            tanggal: dayjs(searchParams.get("tanggal"), "DD/MM/YYYY"),
            jamMasuk: dayjs(searchParams.get("jam_masuk"), "HH:mm:ss"),
            jamKeluar: dayjs(searchParams.get("jam_keluar"), "HH:mm:ss"),
            status: searchParams.get("status"),
            kehadiran: searchParams.get("kehadiran"),
            keterangan: searchParams.get("keterangan"),
          }}
        >
          <Form.Item 
            label="Nama Pegawai" 
            name="pegawaiId" 
            style={styles.formItemStyle} 
            rules={[
              {
                required: true,
                message: "Nama Pegawai harus diisi!"
              }
            ]}
            >
            <Select
              defaultValue="-- Nama Pegawai --"
              style={styles.inputStyle}
              onChange={handleStatusChange}
              options={options}
            />
          </Form.Item>

          <Form.Item 
            label="Tanggal" 
            name="tanggal" 
            style={styles.formItemStyle} 
            rules={[
              {
                required: true,
                message: "Tanggal harus diisi!"
              }
            ]}
          >
            <DatePicker onChange={handleDateChange} style={styles.inputStyle} format="DD/MM/YYYY"/>
          </Form.Item>

          <Form.Item 
            label="Jam Masuk" 
            name="jamMasuk" 
            style={styles.formItemStyle} 
            rules={[
              {
                required: true,
                message: "Jam Masuk harus diisi!"
              }
            ]}
          >
             <TimePicker onChange={handleJamMasukChange} style={styles.inputStyle} format="HH:mm:ss"/>
          </Form.Item>

          <Form.Item 
            label="Jam Keluar" 
            name="jamKeluar" 
            style={styles.formItemStyle} 
          >
             <TimePicker onChange={handleJamKeluarChange} style={styles.inputStyle} format="HH:mm:ss"/>
          </Form.Item>

          <Form.Item 
            label="Status" 
            name="status" 
            style={styles.formItemStyle} 
            rules={[
              {
                required: true,
                message: "Status harus diisi!"
              }
            ]}
          >
            <Select
              defaultValue="-- Pilih Status --"
              style={styles.inputStyle}
              onChange={handleStatusChange}
              options={[
                {
                  value: '-- Pilih Status --"',
                  label: '-- Pilih Status --"',
                  disabled: true,
                },
                {
                  value: 'Masuk',
                  label: 'Masuk',
                },
                {
                  value: 'Pulang',
                  label: 'Pulang',
                },
                {
                  value: 'Tidak Hadir',
                  label: 'Tidak Hadir',
                },
              ]}
            />
          </Form.Item>

          <Form.Item 
            label="Kehadiran" 
            name="kehadiran" 
            style={styles.formItemStyle} 
            rules={[
              {
                required: true,
                message: "Kehadiran harus diisi!"
              }
            ]}
          >
            <Select
              defaultValue="-- Pilih Kehadiran --"
              style={styles.inputStyle}
              onChange={handleKehadiranChange}
              options={[
                {
                  value: '-- Pilih Kehadiran --"',
                  label: '-- Pilih Kehadiran --"',
                  disabled: true,
                },
                {
                  value: 'Hadir',
                  label: 'Hadir',
                },
                {
                  value: 'Sakit',
                  label: 'Sakit',
                },
                {
                  value: 'Izin',
                  label: 'Izin',
                },
                {
                  value: 'Alpa',
                  label: 'Alpa',
                },
                {
                  value: 'Lepas/Off',
                  label: 'Lepas/Off',
                },
              ]}
            />
          </Form.Item>

          <Form.Item 
            label="Keterangan" 
            name="keterangan" 
            style={styles.formItemStyle} >
            <Input style={styles.inputStyle}/>
          </Form.Item>

          <div className="flex justify-end items-end gap-3">
            <Button htmlType='submit' type='primary'>Simpan data</Button>
            <Button htmlType='reset' type='default' style={{background: "#F0F5FD", fontWeight: 500}}>Reset</Button>
          </div>
        </Form>
      </div>
    </div>
  )
}

export default UpdateKehadiran