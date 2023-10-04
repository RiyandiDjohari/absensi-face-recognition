'use client';
import TitleBar from '@/app/components/atoms/TitleBar'
import { PlusOutlined } from '@ant-design/icons';
import { Button, Form, Input, TimePicker, Select, DatePicker } from 'antd'
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import Swal from 'sweetalert2';

const TambahKehadiran = () => {
  const [jamMasuk, setJamMasuk] = useState("")
  const [jamKeluar, setJamKeluar] = useState("")
  const [tanggal, setTanggal] = useState("")

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
  const router = useRouter()
  const onFinish = async (values) => {
    values.jamMasuk = jamMasuk;
    values.jamKeluar = jamKeluar;
    values.tanggal = tanggal;

    await Swal.fire(
      'Success',
      'Data Kehadiran Berhasil Ditambahkan!',
      'success'
    )
    console.log(values);
    router.push("/kehadiran")
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

  const listEmployees = [
    {
      nama: 'John Doe',
      nip: "192113121283",
      jabatan: 'Kepala Dinas',
      pangkat: "Pembina Utama",
    },
    {
      nama: 'Donovan Mitchell',
      nip: "192113121283",
      jabatan: 'Sekretaris Dinas',
      pangkat: "Pembina Tkt.1",
    },
    {
      nama: 'Jane Doe',
      nip: "192113121283",
      jabatan: 'Bendahara Dinas',
      pangkat: "Penata Utama",
    },
  ];

  return (
    <div>
      <TitleBar title="Data Jabatan"/>
      <div className='tambah-jabatan'>
        <h1 className="section-title">Tambah Kehadiran</h1>
        <p>Silahkan isi form dibawah ini untuk menambahkan data kehadiran pegawai</p>
        <Form
          layout='horizontal'
          labelCol={{span: 5}}
          labelWrap
          // wrapperCol={{span: 10}}
          labelAlign='left'
          size='large'
          style={{margin: '2rem 0'}}
          onFinish={onFinish}
        >
          <Form.Item 
            label="Nama Pegawai" 
            name="namaPegawai" 
            style={styles.formItemStyle} 
            rules={[
              {
                required: true,
                message: "Nama Pegawai tidak boleh kosong!"
              }
            ]}
            >
            <Select
              defaultValue="-- Nama Pegawai --"
              style={styles.inputStyle}
              onChange={handleStatusChange}
              options={listEmployees.map(employee => (
                {
                  value: employee.nama,
                  label: `${employee.nama} - ${employee.jabatan}` 
                }
              ))}
            />
          </Form.Item>
          <Form.Item 
            label="Tanggal" 
            name="tanggal" 
            style={styles.formItemStyle} 
          >
            <DatePicker onChange={handleDateChange} style={styles.inputStyle} format="DD/MM/YYYY"/>
          </Form.Item>
          <Form.Item 
            label="Jam Masuk" 
            name="jamMasuk" 
            style={styles.formItemStyle} 
          >
             <TimePicker onChange={handleJamMasukChange} style={styles.inputStyle} />
          </Form.Item>
          <Form.Item 
            label="Jam Keluar" 
            name="jamKeluar" 
            style={styles.formItemStyle} 
          >
             <TimePicker onChange={handleJamKeluarChange} style={styles.inputStyle} />
          </Form.Item>
          <Form.Item 
            label="Status" 
            name="status" 
            style={styles.formItemStyle} 
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
                  value: 'hadir',
                  label: 'Hadir',
                },
                {
                  value: 'sakit',
                  label: 'Sakit',
                },
                {
                  value: 'izin',
                  label: 'Izin',
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

export default TambahKehadiran