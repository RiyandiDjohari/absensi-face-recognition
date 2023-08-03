'use client';
import TitleBar from '@/app/components/atoms/TitleBar'
import { PlusOutlined } from '@ant-design/icons';
import { Button, Form, Input } from 'antd'
import { useRouter } from 'next/navigation';
import React from 'react'

const TambahJabatan = () => {
  const styles = {
    inputStyle: {
      fontWeight: "500", 
      color: "black", 
      fontFamily: "montserrat",
      width: "100%",
      border: "1px solid black",
      fontSize: "14px",
      // padding: "10px"
    },
    formItemStyle: {
      marginBottom: "2.5rem",
      fontWeight: "600",
      
    },
  }
  const router = useRouter()
  const onFinish = (values) => {
    console.log(values);
    alert("Data Berhasil Ditambahkan")
    router.push("/jabatan")
  }

  return (
    <div>
      <TitleBar title="Data Jabatan"/>
      <div className='tambah-jabatan'>
        <h1 className="section-title">Tambah Jabatan</h1>
        <p>Silahkan isi form dibawah ini untuk menambahkan data jabatan baru</p>
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
            label="Kode Jabatan" 
            name="kodeJabatan" 
            style={styles.formItemStyle} 
            rules={[
              {
                required: true,
                message: "Kode Jabatan tidak boleh kosong!"
              }
            ]}
            >
            <Input style={styles.inputStyle} placeholder='JAB-12345'/>
          </Form.Item>
          <Form.Item 
            label="Nama Jabatan" 
            name="namaJabatan" 
            style={styles.formItemStyle} 
            rules={[
              {
                required: true,
                message: "Nama Jabatan tidak boleh kosong!"
              }
            ]}
          >
            <Input style={styles.inputStyle} placeholder='Sekretaris Dinas'/>
          </Form.Item>
          <Form.Item 
            label="Keterangan" 
            name="keterangan" 
            style={styles.formItemStyle} >
            <Input style={styles.inputStyle}/>
          </Form.Item>
          <div className="flex justify-end items-end">
            <Button icon={<PlusOutlined />} htmlType='submit' type='primary'>Tambah Jabatan</Button>
          </div>
        </Form>
      </div>
    </div>
  )
}

export default TambahJabatan