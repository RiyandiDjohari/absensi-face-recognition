'use client';
import React from 'react'
import Link from 'next/link'
import { Badge, Button, Input, Select, Table } from 'antd'
import { PlusOutlined } from '@ant-design/icons'
import { showEntriesOption } from "../constant/index"
import { FiEdit } from 'react-icons/fi';
import { RiDeleteBin6Line } from 'react-icons/ri';
import Swal from 'sweetalert2';
import { useRouter } from 'next/navigation';

const { Search } = Input;

const TabelKehadiran = ({allKehadiran}) => {
  const router = useRouter();
  console.log(allKehadiran);
  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };
  const onSearch = (value) => console.log(value);

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
      // width: 200,
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
    {
      title: "Aksi",
      fixed: "right",
      dataIndex: "aksi",
      key: "aksi",
      width: 100,
      render: (_, record) => (
        <div className="flex justify-center items-center gap-2">
          <Link href={{pathname: `/kehadiran/update/${record.id}`, query: {
            id: record.id,
            pegawaiId: record.pegawaiId,
            pegawai: record.pegawai,
            jabatan: record.jabatan,
            tanggal: record.tanggal,
            jam_masuk: record.jam_masuk,
            jam_keluar: record.jam_keluar,
            status: record.status,
            kehadiran: record.kehadiran,
            keterangan: record.keterangan,
          }}}>
            <FiEdit color="#FFC107" size={25} style={{ cursor: "pointer" }}/>
          </Link>
          <RiDeleteBin6Line color="#DC3545" size={20} style={{ cursor: "pointer" }} onClick={() => handleDeletePresensi(record.id)}/>
        </div>
      ),
    },
  ];

  const handleDeletePresensi = async (idPresensi) => {
    await Swal.fire({
      title: 'Are you sure want to delete?',
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: 'Delete',
    }).then(async (result) => {
      if (result.isConfirmed) {
        await fetch(`/api/presensi/${idPresensi}`, {
          method: "DELETE",
          cache: 'no-store',
          next: {
            revalidate: 10
          }
        })
        await Swal.fire('Data Kehadiran berhasil dihapus!', '', 'success')
        router.refresh();
      }
    })
  }

  return (
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
        dataSource={dataSource}
        bordered
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

export default TabelKehadiran