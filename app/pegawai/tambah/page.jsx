'use client';
import React, { useEffect, useState } from 'react'
import TitleBar from '@/app/components/atoms/TitleBar'
import { Button, DatePicker, Form, Input, Radio, Select, Steps } from 'antd'
import { useRouter } from 'next/navigation';
const { TextArea } = Input;
import Swal from 'sweetalert2'
import Camera from '@/app/components/atoms/Camera';
import { dataPangkat } from '@/app/constant';

const TambahPegawai = () => {
  const [jenisKelamin, setJenisKelamin] = useState("");
  const [allJabatan, setAllJabatan] = useState([]);
  const [loading, setLoading] = useState(false);
  const [tanggalLahir, setTanggalLahir] = useState("");
  const [current, setCurrent] = useState(0);
  const router = useRouter()

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  const steps = [
    {
      title: 'First',
      content: 'First-content',
    },
    {
      title: 'Second',
      content: 'Second-content',
    },
  ];

  const items = steps.map((item) => ({
    key: item.title,
    title: item.title,
  }));

  const fetchAllJabatan = async () => {
    setLoading(true);
    const response = await fetch("/api/jabatan");
    const data = await response.json();
    setAllJabatan(data.allJabatan);
    setLoading(false);
  }

  useEffect(() => {
    fetchAllJabatan();
  }, [])

  const options = allJabatan.map((jabatan) => (
    { 
      value: jabatan.id, 
      label: jabatan.nama_jabatan 
    }
  ))

  const styles = {
    inputStyle: {
      fontWeight: "500", 
      color: "black", 
      fontFamily: "montserrat",
      width: "90%",
      border: "1px solid black",
      fontSize: "14px",
      borderRadius: "8px"
    },
    formItemStyle: {
      marginBottom: "2.5rem",
      fontWeight: "600",
      
    },
  }

  const onFinish = async (values) => {
    const {nama, nip, telepon, tempat_lahir, jenis_kelamin, jabatanId, pangkat, alamat} = values;
    
    try {
      const response = await fetch("/api/pegawai", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          nama, nip, telepon, tempat_lahir, tanggal_lahir: tanggalLahir, jenis_kelamin, jabatanId, pangkat, alamat
        }),
      });
      if (response.ok) {
        await Swal.fire("Success", "Data Pegawai Berhasil Ditambahkan!", "success");
        router.refresh();
        next();
      } else {
        console.log(response)
        await Swal.fire("Oops", "Something went wrong", "error");
      }
    } catch (error) {
      console.log(error);
    }
  }

  const onDateChange = (date, dateString) => {
    console.log(date, dateString);
    setTanggalLahir(dateString);
  };

  const handleJabatanChange = (value) => {
    console.log(`selected ${value}`);
  };

  const handlePangkatChange = (value) => {
    console.log(`selected ${value}`);
  };

  const handleJenisKelaminChange = (e) => {
    setJenisKelamin(e.target.value);
  };

  const filterOption = (input, option) =>
  (option?.label ?? '').toLowerCase().includes(input.toLowerCase());

  return (
    <div>
      <TitleBar title="Tambah Pegawai"/>
      <div className='tambah-pegawai'>
        <h1 className="section-title">Tambah Pegawai</h1>
        <p>Silahkan isi form dibawah ini untuk menambahkan data pegawai baru</p>
        <Steps current={current} items={items} style={{marginTop: "2rem", paddingRight: "4rem"}}/>
        {
          current == 0 && (
            <Form
              layout='horizontal'
              labelCol={{span: 6}}
              labelWrap
              labelAlign='left'
              size='large'
              style={{margin: '2rem 0'}}
              onFinish={onFinish}
            >
              <div className='flex w-full flex-col xl:flex-row'>
                <div className='flex-1'>
                  <Form.Item 
                    label="Nama Lengkap" 
                    name="nama" 
                    style={styles.formItemStyle} 
                    rules={[
                      {
                        required: true,
                        message: "Nama Lengkap tidak boleh kosong!"
                      }
                    ]}
                    >
                    <Input style={styles.inputStyle} placeholder='Muhammad Fajar'/>
                  </Form.Item>
                  <Form.Item 
                    label="NIP" 
                    name="nip" 
                    style={styles.formItemStyle} 
                    rules={[
                      {
                        required: true,
                        message: "NIP tidak boleh kosong!"
                      }
                    ]}
                    >
                    <Input style={styles.inputStyle} placeholder='1234567890'/>
                  </Form.Item>
                  <Form.Item 
                    label="No. HP" 
                    name="telepon" 
                    style={styles.formItemStyle} 
                    rules={[
                      {
                        required: true,
                        message: "No HP tidak boleh kosong!"
                      }
                    ]}
                    >
                    <Input style={styles.inputStyle} placeholder='081234567890'/>
                  </Form.Item>
                  <Form.Item 
                    label="Tempat Lahir" 
                    name="tempat_lahir" 
                    style={styles.formItemStyle} 
                    rules={[
                      {
                        required: true,
                        message: "Tempat Lahir tidak boleh kosong!"
                      }
                    ]}
                  >
                    <Input style={styles.inputStyle} placeholder='Palu'/>
                  </Form.Item>
                  <Form.Item 
                    label="Tanggal Lahir" 
                    name="tanggal_lahir" 
                    style={styles.formItemStyle} 
                    rules={[
                      {
                        required: true,
                        message: "Tanggal Lahir tidak boleh kosong!"
                      }
                    ]}
                  >
                    <DatePicker onChange={onDateChange} style={styles.inputStyle} format="DD/MM/YYYY"/>
                  </Form.Item>
                  <Form.Item 
                    label="Jenis Kelamin" 
                    name="jenis_kelamin" 
                    style={styles.formItemStyle}
                    rules={[
                      {
                        required: true,
                        message: "Jenis Kelamin tidak boleh kosong!"
                      }
                    ]} 
                  >
                    <Radio.Group onChange={handleJenisKelaminChange} value={jenisKelamin}>
                      <Radio value={"L"}>Laki-laki</Radio>
                      <Radio value={"P"}>Perempuan</Radio>
                    </Radio.Group>
                  </Form.Item>
                </div>
                <div className='flex-1'>
                  <Form.Item 
                    label="Jabatan" 
                    name="jabatanId" 
                    style={styles.formItemStyle} 
                  >
                    <Select
                      showSearch
                      placeholder="-- Pilih Jabatan --"
                      style={styles.inputStyle}
                      onChange={handleJabatanChange}
                      options={options}
                      filterOption={filterOption}
                    />
                  </Form.Item>

                  <Form.Item 
                    label="Pangkat / Gol" 
                    name="pangkat" 
                    style={styles.formItemStyle} 
                  >
                    <Select
                      placeholder="-- Pilih Pangkat --"
                      style={styles.inputStyle}
                      onChange={handlePangkatChange}
                      options={dataPangkat}
                    />
                  </Form.Item>
                  
                  <Form.Item 
                    label="Alamat" 
                    name="alamat" 
                    style={styles.formItemStyle} 
                  >
                    <TextArea
                      placeholder="Jl. Soekarno Hatta No. 1"
                      style={styles.inputStyle}
                      autoSize={{
                        minRows: 4,
                        maxRows: 6,
                      }}
                    />
                  </Form.Item>
                </div>
              </div>
              <div className="flex justify-end items-end gap-3 mr-0 xl:mr-8">
                <Button htmlType='submit' type='primary'>Simpan data</Button>
                <Button htmlType='reset' type='default' style={{background: "#F0F5FD", fontWeight: 500}}>Reset</Button>
              </div>
            </Form>
          )
        }
        {
          current == 1 && (
            <div className='max-w-[500px] m-auto p-8'>
              <h2 className='font-semibold text-xl text-center'>Pratinjau Kamera</h2>
              {/* <div className='max-w-[480px] h-[300px] border m-auto my-12'> */}
                <Camera />
              {/* </div> */}
              
            </div>
          )
        }
      </div>
    </div>
  )
}

export default TambahPegawai