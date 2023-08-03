import { BiSolidDashboard } from 'react-icons/bi';
import { PiToolboxFill } from 'react-icons/pi';
import { FaUser, FaUsers } from 'react-icons/fa';
import { AiFillFolderOpen } from "react-icons/ai";
import { BsQrCodeScan, BsFillFileEarmarkTextFill } from "react-icons/bs";
import { HiBuildingOffice2 } from "react-icons/hi2";
import { DeleteFilled, EditOutlined } from '@ant-design/icons';
import { FiEdit } from "react-icons/fi";
import { RiDeleteBin6Line } from "react-icons/ri";

export const sidebarMenus = [
  {
    name: "Dashboard", 
    link: "/dashboard",
    icon: BiSolidDashboard,
  },
  {
    name: "Data Jabatan", 
    link: "/jabatan",
    icon: PiToolboxFill,
  },
  {
    name: "Data Pegawai", 
    link: "/pegawai",
    icon: FaUser,
  },
  {
    name: "Data Kehadiran", 
    link: "/kehadiran",
    icon: BsFillFileEarmarkTextFill,
  },
  {
    name: "Scan QR Code", 
    link: "/absensi",
    icon: BsQrCodeScan,
  },
  {
    name: "Rekap Absensi", 
    link: "/laporan",
    icon: AiFillFolderOpen,
  },
  {
    name: "Manajemen Pengguna", 
    link: "/user",
    icon: FaUsers,
  },
  {
    name: "Profil Dinas", 
    link: "/profil-dinas",
    icon: HiBuildingOffice2,
  }, 
]

export const showEntriesOption = [
  {
    value: '6',
    label: '6',
  },
  {
    value: '7',
    label: '7',
  },
  {
    value: '8',
    label: '8',
  },
  {
    value: '9',
    label: '9',
  },
  {
    value: '10',
    label: '10',
  },
]

export const dataJabatanSource = [
  {
    key: '1',
    no: "1",
    kode: 'JAB-12345',
    nama: "Kepala Dinas",
    keterangan: '-',
  }, 
  {
    key: '2',
    no: "2",
    kode: 'JAB-12345',
    nama: "Kepala Dinas",
    keterangan: '-',
  }, 
  {
    key: '3',
    no: "3",
    kode: 'JAB-12345',
    nama: "Kepala Dinas",
    keterangan: '-',
  }, 
  {
    key: '4',
    no: "4",
    kode: 'JAB-12345',
    nama: "Kepala Dinas",
    keterangan: '-',
  }, 
  {
    key: '5',
    no: "5",
    kode: 'JAB-12345',
    nama: "Kepala Dinas",
    keterangan: '-',
  }, 
  {
    key: '6',
    no: "6",
    kode: 'JAB-12345',
    nama: "Kepala Dinas",
    keterangan: '-',
  }, 
  {
    key: '7',
    no: "7",
    kode: 'JAB-12345',
    nama: "Kepala Dinas",
    keterangan: '-',
  }, 
  {
    key: '8',
    no: "8",
    kode: 'JAB-12345',
    nama: "Kepala Dinas",
    keterangan: '-',
  }, 
  {
    key: '9',
    no: "9",
    kode: 'JAB-12345',
    nama: "Kepala Dinas",
    keterangan: '-',
  }, 
  {
    key: '10',
    no: "10",
    kode: 'JAB-12345',
    nama: "Kepala Dinas",
    keterangan: '-',
  }, 
  {
    key: '11',
    no: "11",
    kode: 'JAB-12345',
    nama: "Kepala Dinas",
    keterangan: '-',
  }, 
  {
    key: '12',
    no: "12",
    kode: 'JAB-12345',
    nama: "Kepala Dinas",
    keterangan: '-',
  }, 
];

export const columnsDataJabatan = [
  {
    title: 'No',
    dataIndex: 'no',
    // width: 100,  
    fixed: 'left',
    key: 'no',
    responsive: ["md"]
  },
  {
    title: 'Kode Jabatan',
    dataIndex: 'kode',
    // width: 200,
    fixed: 'left',
    key: 'kode',
  },
  {
    title: 'Nama Jabatan',
    dataIndex: 'nama',
    key: 'nama',
  },
  {
    title: 'Keterangan',
    dataIndex: 'keterangan',
    key: 'keterangan',
    responsive: ['lg'],
  },
  {
    title: 'Aksi',
    fixed: 'right',
    dataIndex: 'aksi',
    key: 'aksi',
    width: 100,
    render: () => (
      <div className='flex justify-center items-center gap-2'>
        <FiEdit color='#FFC107' size={25} style={{cursor: "pointer"}}/>
        <RiDeleteBin6Line color='#DC3545' size={25} style={{cursor: "pointer"}}/>
        {/* <EditOutlined style={{color: "yellow", fontSize: "25px"}}/>
        <DeleteFilled style={{color: "red", fontSize: "25px"}}/> */}
      </div>
    ),
  },
];