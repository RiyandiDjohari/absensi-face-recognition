'use client';

import React from 'react'
import TitleBar from '../components/atoms/TitleBar'
import Link from 'next/link'
import { Button, Input, Select, Table } from 'antd'
import { PlusOutlined } from '@ant-design/icons'
import { columnsDataKehadiran, dataKehadiranSource, showEntriesOption } from "../constant/index"

const { Search } = Input;

const Kehadiran = () => {

  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };
  const onSearch = (value) => console.log(value);
  
  return (
    <section id='kehadiran'>
      <TitleBar title={"Data Kehadiran"}/>
      <div className="kehadiran">
        <div className='flex justify-between items-center flex-wrap gap-4'>
          <h1 className="section-title">Daftar Presensi Pegawai</h1>
          <Link href="/kehadiran/tambah"><Button icon={<PlusOutlined />} type='primary' size='large'>Tambah Kehadiran</Button></Link>
        </div>
        <div className='flex flex-wrap gap-4 justify-between items-center my-10'>
          <div>Show 
          <Select
            defaultValue="10"
            style={{
              width: 60,
              margin: "0 10px"
            }}
            onChange={handleChange}
            options={showEntriesOption}
          />
           Entries  
          </div>
          <Search
            placeholder="Cari Pegawai"
            allowClear
            enterButton
            size="large"
            onSearch={onSearch}
            style={{width: "280px"}}
          />
        </div>
        <Table
          columns={columnsDataKehadiran}
          dataSource={dataKehadiranSource}
          bordered
          // scroll={{
          //   x: 900,
          // }}
          // tableLayout='auto'
          // scroll={{x: "100vw"}}
          // style={{width: "100%  "}}
        />
      </div>
    </section>
  )
}

export default Kehadiran