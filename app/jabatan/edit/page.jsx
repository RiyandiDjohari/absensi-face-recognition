'use client';
import TitleBar from '@/app/components/atoms/TitleBar'
import { Button, Form, Input } from 'antd'
const { TextArea } = Input;
import { useRouter, useSearchParams } from 'next/navigation';
import React from 'react'
import Swal from 'sweetalert2';

const EditJabatan = () => {
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
    try {
      const response = await fetch(`/api/jabatan/${searchParams.get("id")}`, {
        method: "PATCH",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          nama_jabatan: values.nama_jabatan,
          keterangan: values.keterangan,
        }),
      });
      if (response.ok) {
        console.log(response);
        await Swal.fire("Success", "Data Jabatan Berhasil Diupdate!", "success");
        router.refresh();
        router.push("/jabatan");
      } else {
        await Swal.fire("Oops", "Something Went Wrong", "error");
      }
    } catch (error) {
      console.log(error);
    }

    console.log(values);
  };

  return (
    <div>
      <TitleBar title="Data Jabatan"/>
      <div className='tambah-jabatan'>
        <h1 className="section-title">Edit Data Jabatan</h1>
        <p>Silahkan isi form dibawah ini untuk mengedit data jabatan</p>
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
            kode_jabatan: searchParams.get("kode"),
            nama_jabatan: searchParams.get("nama"),
            keterangan: searchParams.get("keterangan"),
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

export default EditJabatan;