'use client';

import { EditOutlined, SaveOutlined } from '@ant-design/icons';
import { Button, Form, Input, Checkbox, InputNumber } from 'antd'
import React, { useEffect, useState } from 'react'

const FormDataDinas = () => {
  const [form] = Form.useForm();
  const [isTablet, setIsTablet] = useState(false);
  const [componentDisabled, setComponentDisabled] = useState(true);

  form.getFieldValue();

  const onFinish = (values) => {
    console.log(values)
    alert('data berhasil tersimpan');
    setComponentDisabled(prev => !prev);
  }
  const handleEditButton = () => {
    setComponentDisabled(prev => !prev);
  }

  //choose the screen size 
  const handleResize = () => {
    if (window.innerWidth < 1024 ) {
      setIsTablet(true) 
    } else {
      setIsTablet(false)
    }
  }
  
  // create an event listener
  useEffect(() => {
    window.addEventListener("resize", handleResize)
  })

  const styles = {
    inputStyle: {
      fontWeight: "500", 
      color: "black", 
      fontFamily: "montserrat",
      width: "100%"
    },
    formItemStyle: {
      marginBottom: "2.5rem",
      fontWeight: "600",
    },
  }

  return (
    <>
    <Form
      labelCol={{span: 5}}
      labelAlign='left'
      // wrapperCol={{span: 18,}}
      layout={isTablet ? "vertical" : "horizontal"}
      style={{margin: "2rem 0"}}
      size='large'
      onFinish={onFinish}
      disabled={componentDisabled}  
      initialValues={
        { 
          namaDinas: "Dinas Kebudayaan dan Pariwisata",
          noTelepon: "0823",
          email: "johndoe@gmail.com",
          alamat: "Jalan Pipit, Kelurahan Tanamodindi, Kec. Palu Selatan, Kota Palu, Sulawesi Tengah 94111",
          latitude: "-0.9023585357091002",
          longitude: "119.89049421537652",
        }
      }
    >
      <Form.Item 
        label="Nama Dinas" 
        name="namaDinas" 
        style={styles.formItemStyle}
        rules={[
          {
            required: true,
            message: 'Nama Dinas tidak boleh kosong!',
          },
        ]}
      >
        <Input style={styles.inputStyle}/>
      </Form.Item>
      <Form.Item 
        label="No. Telepon" 
        name="noTelepon" 
        style={styles.formItemStyle}
        rules={[
          {
            required: true,
            message: 'No Telepon tidak boleh kosong!',
          },
          {
            pattern: /[0-9]+$/,
            message: "Please enter only numbers in phone!"
          },
        ]}
      >
        <Input style={styles.inputStyle}/>
      </Form.Item>
      <Form.Item 
        label="Email" 
        name="email"
        style={styles.formItemStyle}
        rules={[
          {
            type: 'email',
            message: 'The input is not valid E-mail!',
          },
          {
            required: true,
            message: 'Email tidak boleh kosong!',
          },
        ]}
      >
        <Input style={styles.inputStyle}/>
      </Form.Item>
      <Form.Item 
        label="Alamat" 
        name="alamat" 
        style={styles.formItemStyle}
        rules={[
          {
            required: true,
            message: 'Alamat tidak boleh kosong!',
          },
        ]}
      >
        <Input style={styles.inputStyle}/>
      </Form.Item>
      <Form.Item 
        label="Latitude" 
        name="latitude" 
        style={styles.formItemStyle}
        rules={[
          {
            required: true,
            message: 'Data Latitude Tidak Boleh Kosong!',
          },
        ]}
      >
        <Input style={styles.inputStyle}/>
      </Form.Item>
      <Form.Item 
        label="Longitude" 
        name="longitude" 
        style={styles.formItemStyle}
        rules={[
          {
            required: true,
            message: 'Data Longitude Tidak Boleh Kosong!',
          },
        ]}
      >
        <Input style={styles.inputStyle}/>
      </Form.Item>
      { !componentDisabled && 
        <div className='flex justify-end items-end'>
          <Button icon={<SaveOutlined />} size="middle" htmlType='submit' type='primary'>Simpan Data</Button>
        </div>
      }
    </Form>
    {
      componentDisabled &&
      <div className='flex justify-end items-end'>
        <Button 
          type="primary" 
          icon={<EditOutlined />} 
          size='middle'
          style={{marginBottom: '2rem'}}
          onClick={handleEditButton}
          >
          Edit Data
        </Button>
      </div>
    }
    </>
  )
}

export default FormDataDinas