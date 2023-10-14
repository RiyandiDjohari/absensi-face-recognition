'use client'
import React, { useState } from 'react'
import { Button, Input, Select, Table } from 'antd'
import { PlusOutlined } from '@ant-design/icons'
import { columnsDataJabatan, dataJabatanSource, showEntriesOption } from "../constant/index"
import Link from 'next/link'
import { FiEdit } from 'react-icons/fi'
import { RiDeleteBin6Line } from 'react-icons/ri'

const { Search } = Input;

const JabatanTable = ({ allJabatan, lastJabatan }) => {
  const [entryData, setEntryData] = useState("10");
  const [filteredUser, setFilteredUser] = useState("");
  const columnsDataJabatan = [
    {
      title: "No",
      dataIndex: "no",
      fixed: "left",
      key: "no",
      defaultSortOrder: 'ascend',
      sorter: (a, b) => a.no - b.no,
    },
    {
      title: "Kode Jabatan",
      dataIndex: "kode_jabatan",
      fixed: "left",
      key: "kode_jabatan",
    },
    {
      title: "Nama Jabatan",
      dataIndex: "nama_jabatan",
      key: "nama_jabatan",
    },
    {
      title: "Keterangan",
      dataIndex: "keterangan",
      key: "keterangan",
      responsive: ["lg"],
    },
    {
      title: "Aksi",
      fixed: "right",
      dataIndex: "aksi",
      key: "aksi",
      width: 100,
      render: (_, record) => (
        <div className="flex justify-center items-center gap-2">
          <Link href={{
            pathname: `/jabatan/edit`, 
            query: {
              id: record.id,
              kode: record.kode_jabatan,
              nama: record.nama_jabatan,
              keterangan: record.keterangan,
            }
            }}
          >
            <FiEdit color="#FFC107" size={25} style={{ cursor: "pointer" }} />
          </Link>
          <RiDeleteBin6Line color="#DC3545" size={25} style={{ cursor: "pointer" }} onClick={() => handleDeleteJabatan()}/>
        </div>
      ),
    },
  ];
  const dataSource = allJabatan.map((jabatan, i) => ({
    key: i,
    no: `${i + 1}`,
    id: jabatan.id,
    kode_jabatan: jabatan.kode_jabatan,
    nama_jabatan: jabatan.nama_jabatan,
    keterangan: jabatan.keterangan,
  }))

  const handleEntriesChange = (value) => {
    console.log(`selected ${value}`);
    setEntryData(value);
  };

  const onSearch = (value) => {
    const filterUser = allJabatan.filter(jabatan => jabatan.nama_jabatan.toLowerCase().includes(value.toLowerCase()) || jabatan.keterangan.toLowerCase().includes(value.toLowerCase()))
    setFilteredUser(filterUser.map((jabatan, i) => ({
      key: i,
      no: `${i + 1}`, 
      id: jabatan.id,
      kode_jabatan: jabatan.kode_jabatan,
      nama_jabatan: jabatan.nama_jabatan,
      keterangan: jabatan.keterangan,
   })))
  }

  const newKodeJabatan = `JAB-${String(lastJabatan.id).length > 1 || lastJabatan.id == 9 ? "00" : "000"}${Number(lastJabatan.id) + 1}`
  return (
    <div className="jabatan">
      <div className='flex justify-between items-center flex-wrap gap-4'>
        <h1 className="section-title">Daftar Jabatan</h1>
        <Link href={{pathname: `/jabatan/tambah`, query: {
          kode: newKodeJabatan,
        }}}>
          <Button icon={<PlusOutlined />} type='primary' size='large'>Tambah Jabatan</Button>
        </Link>
      </div>
      <div className='flex flex-wrap gap-4 justify-between items-center my-10'>
        <div>Show 
        <Select
          defaultValue={entryData}
          style={{  
            width: 60,
            margin: "0 10px"
          }}
          onChange={handleEntriesChange}
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
        dataSource={filteredUser ? filteredUser : dataSource}
        bordered
        pagination={{
          pageSize: entryData,
        }}
        // scroll={{
        //   x: 900,
        // }}
        // tableLayout='auto'
        // scroll={{x: "100vw"}}
        // style={{width: "100%  "}}
      />
    </div>
  )
}

export default JabatanTable