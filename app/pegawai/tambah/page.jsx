'use client';
import React, { useState } from 'react'
import TitleBar from '@/app/components/atoms/TitleBar'
import { PlusOutlined } from '@ant-design/icons';
import { Button, DatePicker, Form, Input, Radio, Select } from 'antd'
import { useRouter } from 'next/navigation';
const { TextArea } = Input;
import Swal from 'sweetalert2'

const TambahPegawai = () => {
  const [tanggalLahir, setTanggalLahir] = useState("");
  const [jenisKelamin, setJenisKelamin] = useState("");

  const styles = {
    inputStyle: {
      fontWeight: "500", 
      color: "black", 
      fontFamily: "montserrat",
      width: "90%",
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

  const router = useRouter()
  const onFinish = async (values) => {
    values.tanggalLahir = tanggalLahir;
    console.log(values);
    await Swal.fire(
      'Success',
      'Data Pegawai Berhasil Ditambahkan!',
      'success'
    )
    router.push("/pegawai")
  }

  const onDateChange = (date, dateString) => {
    console.log(date, dateString);
    setTanggalLahir(dateString);
  };
  console.log(tanggalLahir);

  const handleJabatanChange = (value) => {
    console.log(`selected ${value}`);
  };

  const handlePangkatChange = (value) => {
    console.log(`selected ${value}`);
  };

  const handleGolonganChange = (value) => {
    console.log(`selected ${value}`);
  };
  const handleJenisKelaminChange = (e) => {
    console.log('radio checked', e.target.value);
    setJenisKelamin(e.target.value);
  };

  return (
    <div>
      <TitleBar title="Tambah Pegawai"/>
      <div className='tambah-pegawai'>
        <h1 className="section-title">Tambah Pegawai</h1>
        <p>Silahkan isi form dibawah ini untuk menambahkan data pegawai baru</p>
        <Form
          layout='horizontal'
          labelCol={{span: 6}}
          labelWrap
          // wrapperCol={{span: 10}}
          labelAlign='left'
          size='large'
          style={{margin: '2rem 0'}}
          onFinish={onFinish}
        >
          <div className='flex w-full flex-col xl:flex-row'>
            <div className='flex-1'>
              <Form.Item 
                label="Nama Lengkap" 
                name="namaLengkap" 
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
                name="nomorHP" 
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
                name="tempatLahir" 
                style={styles.formItemStyle} 
                rules={[
                  {
                    required: true,
                    message: "Data Tempat Lahir tidak boleh kosong!"
                  }
                ]}
              >
                <Input style={styles.inputStyle} placeholder='Palu'/>
              </Form.Item>
              <Form.Item 
                label="Tanggal Lahir" 
                name="tanggalLahir" 
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
                name="jenisKelamin" 
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
                name="jabatan" 
                style={styles.formItemStyle} 
              >
                <Select
                  defaultValue="-- Pilih Jabatan --"
                  style={styles.inputStyle}
                  onChange={handleJabatanChange}
                  options={[
                    {
                      value: '-- Pilih Jabatan --"',
                      label: '-- Pilih Jabatan --"',
                      disabled: true,
                    },
                    {
                      value: 'lucy',
                      label: 'Lucy',
                    },
                    {
                      value: 'Yiminghe',
                      label: 'yiminghe',
                    },
                  ]}
                />
              </Form.Item>
              <Form.Item 
                label="Pangkat" 
                name="pangkat" 
                style={styles.formItemStyle} 
              >
                <Select
                  defaultValue="-- Pilih Pangkat --"
                  style={styles.inputStyle}
                  onChange={handlePangkatChange}
                  options={[
                    {
                      value: '-- Pilih Pangkat --"',
                      label: '-- Pilih Pangkat --"',
                      disabled: true,
                    },
                    {
                      value: 'lucy',
                      label: 'Lucy',
                    },
                    {
                      value: 'Yiminghe',
                      label: 'yiminghe',
                    },
                  ]}
                />
              </Form.Item>
              <Form.Item 
                label="Golongan" 
                name="golongan" 
                style={styles.formItemStyle} 
              >
                <Select
                  defaultValue="-- Pilih Golongan --"
                  style={styles.inputStyle}
                  onChange={handleGolonganChange}
                  options={[
                    {
                      value: '-- Pilih Golongan --"',
                      label: '-- Pilih Golongan --"',
                      disabled: true,
                    },
                    {
                      value: 'lucy',
                      label: 'Lucy',
                    },
                    {
                      value: 'Yiminghe',
                      label: 'yiminghe',
                    },
                  ]}
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
      </div>
    </div>
  )
}

export default TambahPegawai