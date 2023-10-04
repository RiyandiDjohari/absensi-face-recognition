'use client'
import React from 'react'
import TitleBar from '../components/atoms/TitleBar'
import { Button, Input, Select, Table } from 'antd'
import { PlusOutlined } from '@ant-design/icons'
import { columnsDataJabatan, dataJabatanSource, showEntriesOption } from "../constant/index"
import Link from 'next/link'

const { Search } = Input;

const Jabatan = () => {

  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };
  const onSearch = (value) => console.log(value);
  
  return (
    <section id='jabatan'>
      <TitleBar title={"Data Jabatan"}/>
      <div className="jabatan">
        <div className='flex justify-between items-center flex-wrap gap-4'>
          <h1 className="section-title">Daftar Jabatan</h1>
          <Link href="/jabatan/tambah"><Button icon={<PlusOutlined />} type='primary' size='large'>Tambah Jabatan</Button></Link>
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
            placeholder="Cari Jabatan"
            allowClear
            enterButton
            size="large"
            onSearch={onSearch}
            style={{width: "280px"}}
          />
        </div>
        <Table
          columns={columnsDataJabatan}
          dataSource={dataJabatanSource}
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

export default Jabatan