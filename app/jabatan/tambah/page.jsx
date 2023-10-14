'use client';
import TitleBar from '@/app/components/atoms/TitleBar'
import { Button, Form, Input } from 'antd'
const { TextArea } = Input;
import { useRouter, useSearchParams } from 'next/navigation';
import React from 'react'
import Swal from 'sweetalert2';

const TambahJabatan = () => {
  const searchParams = useSearchParams();
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
    const {kode_jabatan, nama_jabatan, keterangan} = values;
    try {
      const response = await fetch("/api/jabatan", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          kode_jabatan,
          nama_jabatan,
          keterangan
        }),
      });
      if (response.ok) {
        await Swal.fire("Success", "Data Jabatan Berhasil Ditambahkan!", "success");
        router.refresh();
        router.push("/jabatan");
      } else {
        await Swal.fire("Oops", "Data Jabatan Telah Ada", "error");
      }
    } catch (error) {
      console.log(error);
    }
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
          initialValues={{
            kode_jabatan: searchParams.get("kode")
          }}
        >
          <Form.Item 
            label="Kode Jabatan" 
            name="kode_jabatan" 
            style={styles.formItemStyle} 
            >
            <Input style={styles.inputStyle} disabled/>
          </Form.Item>
          <Form.Item 
            label="Nama Jabatan" 
            name="nama_jabatan" 
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