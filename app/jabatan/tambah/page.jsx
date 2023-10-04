'use client';
import TitleBar from '@/app/components/atoms/TitleBar'
import { PlusOutlined } from '@ant-design/icons';
import { Button, Form, Input } from 'antd'
const { TextArea } = Input;
import { useRouter } from 'next/navigation';
import React from 'react'
import Swal from 'sweetalert2';

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
  const onFinish = async (values) => {
    console.log(values);
    await Swal.fire(
      'Success',
      'Data Jabatan Berhasil Ditambahkan!',
      'success'
    )
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
          labelCol={{span: 7}}
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
            label="Keterangan (Opsional)" 
            name="keterangan" 
            style={styles.formItemStyle} >
            <TextArea
              placeholder="Keterangan"
              style={styles.inputStyle}
              autoSize={{
                minRows: 3,
                maxRows: 4,
              }}
            />
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

export default TambahJabatan