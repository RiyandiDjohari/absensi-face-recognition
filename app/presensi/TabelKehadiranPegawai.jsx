'use client';
import React, { useState } from 'react'
import { Badge, Button, Select, Table, message, Input } from 'antd'
import { DownloadOutlined } from '@ant-design/icons';
import * as XLSX from 'xlsx';
import { showEntriesOption } from '../constant';
const { Search } = Input;

const TabelKehadiranPegawai = ({allKehadiran}) => {
  const [messageApi, contextHolder] = message.useMessage();
  const [filteredUser, setFilteredUser] = useState("");
  const [entryData, setEntryData] = useState("10");

  const handleChange = (value) => setEntryData(value);

  const onSearch = (value) => {
    const filterUser = allKehadiran.filter(kehadiran => kehadiran.pegawai.nama.toLowerCase().includes(value.toLowerCase()) || kehadiran.status.toLowerCase().includes(value.toLowerCase()))
    setFilteredUser(filterUser.map((kehadiran, i) => ({
      key: i,
      no: `${i + 1}`,
      id: kehadiran.id,
      tanggal: kehadiran.tanggal,
      jam_keluar: kehadiran.jam_keluar,
      jam_masuk: kehadiran.jam_masuk,
      kehadiran: kehadiran.kehadiran,
      keterangan: kehadiran.keterangan,
      status: kehadiran.status,
      pegawai: kehadiran.pegawai.nama,
      jabatan: kehadiran.pegawai.jabatan.nama_jabatan,
      pegawaiId: kehadiran.pegawai.id,
   })))
  };

  const dataSource = allKehadiran.map((kehadiran, i) => ({
    key: i,
    no: `${i + 1}`,
    id: kehadiran.id,
    tanggal: kehadiran.tanggal,
    jam_keluar: kehadiran.jam_keluar,
    jam_masuk: kehadiran.jam_masuk,
    kehadiran: kehadiran.kehadiran,
    keterangan: kehadiran.keterangan,
    status: kehadiran.status,
    pegawai: kehadiran.pegawai.nama,
    jabatan: kehadiran.pegawai.jabatan.nama_jabatan,
    pegawaiId: kehadiran.pegawai.id,
  }))

  const columnsDataKehadiran = [
    {
      title: "No",
      dataIndex: "no",
      fixed: "left",
      key: "no",
    },
    {
      title: "Nama",
      dataIndex: "pegawai",
      fixed: "left",
      key: "pegawai",
    },
    {
      title: "Tanggal",
      dataIndex: "tanggal",
      key: "tanggal",
    },
    {
      title: "Jam Masuk",
      dataIndex: "jam_masuk",
      key: "jam_masuk",
      responsive: ["md"],
    },
    {
      title: "Jam Keluar",
      dataIndex: "jam_keluar",
      key: "jam_keluar",
      render: (_, record) => (
        <span>{record.jam_keluar ? record.jam_keluar : "--  "}</span>
      ),
      responsive: ["md"],
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (_, record) => (
        record.status == "Masuk" ? (
          <Badge status="success" text={record.status} />
          ) : (
          <Badge status="error" text={record.status} />
        )
      ),
      responsive: ["md"],
    },
    {
      title: "Kehadiran",
      dataIndex: "kehadiran",
      key: "kehadiran",
    },
    {
      title: "Keterangan",
      dataIndex: "keterangan",
      key: "keterangan",
      render: (_, record) => (
        <span>{record.keterangan ? record.keterangan : "--  "}</span>
      ),
      responsive: ["xl"],
    },
  ];

  const handleOnExport = () => {
    if(dataSource.length == 0 || filteredUser.length == 0) {
      error();
    } else {
      let wb = XLSX.utils.book_new();
      let ws = XLSX.utils.json_to_sheet(filteredUser ? filteredUser : dataSource);
      XLSX.utils.book_append_sheet(wb, ws, 'MySheet1')
      XLSX.writeFile(wb, 'RekapKehadiran.xlsx')
      success();
    }
  };

  const success = () => {
    messageApi.open({
      type: 'success',
      content: 'Rekap Kehadiran Berhasil Didownload',
    });
  };

  const error = () => {
    messageApi.open({
      type: 'error',
      content: 'Data masih kosong',
    });
  };

  return (
    <>
      {contextHolder}
      <div className='py-10 px-8'>
        <div className='flex justify-between items-center flex-wrap gap-4 mb-8'>
          <h1 className="section-title">Daftar Presensi Pegawai</h1>
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
          dataSource={filteredUser ? filteredUser : dataSource}
          bordered
          pagination={{
            pageSize: entryData
          }}
          footer={() => <Button icon={<DownloadOutlined />} type='primary' size='large' onClick={() => handleOnExport()}>Ekspor xls</Button>}
        />
      </div>
    </>
  )
}

export default TabelKehadiranPegawai