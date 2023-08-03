'use client';
import React from 'react'
import TitleBar from '../components/atoms/TitleBar'
import { Form, Select, DatePicker, Button } from 'antd'
import { SaveOutlined } from '@ant-design/icons';

const { RangePicker } = DatePicker;
const Laporan = () => {
  const styles = {
    formItemStyle: {
      marginBottom: "2.5rem",
      fontWeight: "600",
    },
  }

  const onFinish = (values) => {
    console.log(values);
  };

  return (
    <section id='laporan'>
      <TitleBar title={"Rekap Absensi"}/>
      <div className="laporan">
        <h1 className='section-title'>Cetak Laporan Kehadiran</h1>
        <Form
          layout='horizontal'
          style={{margin: "2rem 0"}}
          size='large'
          labelCol={{span: 4}}
          wrapperCol={{span: 24}}
          labelAlign='left'
          onFinish={onFinish}
        >
          <Form.Item 
            label="Pegawai" 
            name="pegawai" 
            style={styles.formItemStyle}
            rules={[
              {
                required: true,
                message: 'Pegawai tidak boleh kosong!',
              },
            ]}
          >
            <Select>
              <Select.Option value="Semua Pegawai">Semua Pegawai</Select.Option>
              <Select.Option value="John Doe">John Doe</Select.Option>
              <Select.Option value="Jane Doe">Jane Doe</Select.Option>
            </Select>
          </Form.Item>  
          <Form.Item 
            label="Tanggal" 
            name="tanggal" 
            style={styles.formItemStyle}
            rules={[
              {
                required: true,
                message: 'Rentan Waktu tidak boleh kosong!',
              },
            ]}
          >
            <RangePicker style={{width: "100%"}}/>
          </Form.Item>
          <div className='flex justify-end items-end'>
            <Button icon={<SaveOutlined />} size="middle" htmlType='submit' type='primary'>Simpan Data</Button>
          </div>
        </Form>
      </div>
    </section>
  )
}

export default Laporan