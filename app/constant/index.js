import { BiSolidDashboard } from "react-icons/bi";
import { PiToolboxFill } from "react-icons/pi";
import { FaUser, FaUsers } from "react-icons/fa";
import { AiFillFolderOpen } from "react-icons/ai";
import { BsFillFileEarmarkTextFill } from "react-icons/bs";
import { HiBuildingOffice2 } from "react-icons/hi2";
import { DeleteFilled, EditOutlined } from "@ant-design/icons";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBin6Line, RiInformationFill } from "react-icons/ri";

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
];

export const showEntriesOption = [
  {
    value: "6",
    label: "6",
  },
  {
    value: "7",
    label: "7",
  },
  {
    value: "8",
    label: "8",
  },
  {
    value: "9",
    label: "9",
  },
  {
    value: "10",
    label: "10",
  },
];

export const dataJabatanSource = [
  {
    key: "1",
    no: "1",
    kode: "JAB-12345",
    nama: "Kepala Dinas",
    keterangan: "-",
  },
  {
    key: "2",
    no: "2",
    kode: "JAB-12345",
    nama: "Kepala Dinas",
    keterangan: "-",
  },
  {
    key: "3",
    no: "3",
    kode: "JAB-12345",
    nama: "Kepala Dinas",
    keterangan: "-",
  },
  {
    key: "4",
    no: "4",
    kode: "JAB-12345",
    nama: "Kepala Dinas",
    keterangan: "-",
  },
  {
    key: "5",
    no: "5",
    kode: "JAB-12345",
    nama: "Kepala Dinas",
    keterangan: "-",
  },
  {
    key: "6",
    no: "6",
    kode: "JAB-12345",
    nama: "Kepala Dinas",
    keterangan: "-",
  },
  {
    key: "7",
    no: "7",
    kode: "JAB-12345",
    nama: "Kepala Dinas",
    keterangan: "-",
  },
  {
    key: "8",
    no: "8",
    kode: "JAB-12345",
    nama: "Kepala Dinas",
    keterangan: "-",
  },
  {
    key: "9",
    no: "9",
    kode: "JAB-12345",
    nama: "Kepala Dinas",
    keterangan: "-",
  },
  {
    key: "10",
    no: "10",
    kode: "JAB-12345",
    nama: "Kepala Dinas",
    keterangan: "-",
  },
  {
    key: "11",
    no: "11",
    kode: "JAB-12345",
    nama: "Kepala Dinas",
    keterangan: "-",
  },
  {
    key: "12",
    no: "12",
    kode: "JAB-12345",
    nama: "Kepala Dinas",
    keterangan: "-",
  },
];

export const columnsDataJabatan = [
  {
    title: "No",
    dataIndex: "no",
    // width: 100,
    fixed: "left",
    key: "no",
    responsive: ["md"],
  },
  {
    title: "Kode Jabatan",
    dataIndex: "kode",
    // width: 200,
    fixed: "left",
    key: "kode",
  },
  {
    title: "Nama Jabatan",
    dataIndex: "nama",
    key: "nama",
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
    render: () => (
      <div className="flex justify-center items-center gap-2">
        <FiEdit color="#FFC107" size={25} style={{ cursor: "pointer" }} />
        <RiDeleteBin6Line color="#DC3545" size={25} style={{ cursor: "pointer" }} />
        {/* <EditOutlined style={{color: "yellow", fontSize: "25px"}}/>
        <DeleteFilled style={{color: "red", fontSize: "25px"}}/> */}
      </div>
    ),
  },
];

export const dataPegawaiSource = [
  {
    key: "1",
    no: "1",
    nama: "Dra. Diah Agustiningsih, M. Pd",
    nip: "196808251994122006",
    jabatan: "Kepala Dinas",
    pangkat: "Pembina Utama",
  },
  {
    key: "2",
    no: "2",
    nama: "Drs. Ambo Tuwo M, Apt.,MM",
    nip: "196808251994122006",
    jabatan: "Sekretaris Dinas",
    pangkat: "Pembina Tkt. 1",
  },
  {
    key: "3",
    no: "3",
    nama: "Widyawati, SS.,M.Sc",
    nip: "196808251994122006",
    jabatan: "Kepala Sub. Bagian Dalam",
    pangkat: "Penata Tkt. 1",
  },
  {
    key: "4",
    no: "4",
    nama: "Andry Chandra, ST",
    nip: "196808251994122006",
    jabatan: "Penyusun Program, Anggaran dan Pelaporan",
    pangkat: "Pembina Utama",
  },
  {
    key: "5",
    no: "5",
    nama: "Dra. Diah Agustiningsih, M. Pd",
    nip: "196808251994122006",
    jabatan: "Kepala Dinas",
    pangkat: "Pembina Utama",
  },
  {
    key: "6",
    no: "6",
    nama: "Dian Wulandari, SE",
    nip: "196808251994122006",
    jabatan: "Analisis Perancangan",
    pangkat: "Penata Muda Tkt. 1",
  },
  {
    key: "7",
    no: "7",
    nama: "Royke Davianto Adam",
    nip: "196808251994122006",
    jabatan: "Pengadministrasi Perencanaan dan Program",
    pangkat: "Penata",
  },
  {
    key: "8",
    no: "8",
    nama: "Hunaeni, S.Sos",
    nip: "196808251994122006",
    jabatan: "Kepala Sub. Bagian Kepegawaian dan Umum",
    pangkat: "Pengatur",
  },
  {
    key: "9",
    no: "9",
    nama: "Andi Zultin",
    nip: "196808251994122006",
    jabatan: "Pengadministrasi Kepegawaian",
    pangkat: "Pembina",
  },
  {
    key: "10",
    no: "10",
    nama: "Shearly Donso, S.Sos.,M.A.P",
    nip: "196808251994122006",
    jabatan: "Pemeriksa Pelaporan dan transaksi keuangan",
    pangkat: "Penata Muda",
  },
];

export const columnsDataPegawai = [
  {
    title: "No",
    dataIndex: "no",
    // width: 100,
    fixed: "left",
    key: "no",
    responsive: ["md"],
  },
  {
    title: "Nama",
    dataIndex: "nama",
    // width: 200,
    fixed: "left",
    key: "nama",
  },
  {
    title: "Nomor Induk Pegawai",
    dataIndex: "nip",
    key: "nip",
  },
  {
    title: "Jabatan",
    dataIndex: "jabatan",
    key: "jabatan",
    responsive: ["lg"],
  },
  {
    title: "Pangkat",
    dataIndex: "pangkat",
    key: "pangkat",
    responsive: ["lg"],
  },
  {
    title: "Aksi",
    fixed: "right",
    dataIndex: "aksi",
    key: "aksi",
    width: 100,
    render: () => (
      <div className="flex justify-center items-center gap-2">
        <RiInformationFill color="#1677ff" size={25} style={{ cursor: "pointer" }} />
        <FiEdit color="#FFC107" size={20} style={{ cursor: "pointer" }} />
        <RiDeleteBin6Line color="#DC3545" size={20} style={{ cursor: "pointer" }} />
        {/* <EditOutlined style={{color: "yellow", fontSize: "25px"}}/>
        <DeleteFilled style={{color: "red", fontSize: "25px"}}/> */}
      </div>
    ),
  },
];

export const dataKehadiranSource = [
  {
    key: "1",
    no: "1",
    nama: "Dra. Diah Agustiningsih, M. Pd",
    tanggal: "01-01-2023",
    jamMasuk: "08:20:21",
    jamKeluar: "16:00:00",
    status: "Hadir",
    keterangan: "",
  },
  {
    key: "2",
    no: "2",
    nama: "Dra. Diah Agustiningsih, M. Pd",
    tanggal: "01-01-2023",
    jamMasuk: "08:20:21",
    jamKeluar: "16:00:00",
    status: "Hadir",
    keterangan: "",
  },
  {
    key: "3",
    no: "3",
    nama: "Dra. Diah Agustiningsih, M. Pd",
    tanggal: "01-01-2023",
    jamMasuk: "08:20:21",
    jamKeluar: "16:00:00",
    status: "Hadir",
    keterangan: "",
  },
  {
    key: "4",
    no: "4",
    nama: "Dra. Diah Agustiningsih, M. Pd",
    tanggal: "01-01-2023",
    jamMasuk: "08:20:21",
    jamKeluar: "16:00:00",
    status: "Hadir",
    keterangan: "",
  },
  {
    key: "5",
    no: "5",
    nama: "Dra. Diah Agustiningsih, M. Pd",
    tanggal: "01-01-2023",
    jamMasuk: "08:20:21",
    jamKeluar: "16:00:00",
    status: "Hadir",
    keterangan: "",
  },
  {
    key: "6",
    no: "6",
    nama: "Dra. Diah Agustiningsih, M. Pd",
    tanggal: "01-01-2023",
    jamMasuk: "08:20:21",
    jamKeluar: "16:00:00",
    status: "Hadir",
    keterangan: "",
  },
  {
    key: "7",
    no: "7",
    nama: "Dra. Diah Agustiningsih, M. Pd",
    tanggal: "01-01-2023",
    jamMasuk: "08:20:21",
    jamKeluar: "16:00:00",
    status: "Hadir",
    keterangan: "",
  },
  {
    key: "8",
    no: "8",
    nama: "Dra. Diah Agustiningsih, M. Pd",
    tanggal: "01-01-2023",
    jamMasuk: "08:20:21",
    jamKeluar: "16:00:00",
    status: "Hadir",
    keterangan: "",
  },
];

export const columnsDataKehadiran = [
  {
    title: "No",
    dataIndex: "no",
    // width: 100,
    fixed: "left",
    key: "no",
    responsive: ["md"],
  },
  {
    title: "Nama",
    dataIndex: "nama",
    // width: 200,
    fixed: "left",
    key: "nama",
  },
  {
    title: "Tanggal",
    dataIndex: "tanggal",
    key: "tanggal",
  },
  {
    title: "Jam Masuk",
    dataIndex: "jamMasuk",
    key: "jamMasuk",
    responsive: ["lg"],
  },
  {
    title: "Jam Keluar",
    dataIndex: "jamKeluar",
    key: "jamKeluar",
    responsive: ["lg"],
  },
  {
    title: "Status",
    dataIndex: "status",
    key: "status",
  },
  {
    title: "Keterangan",
    dataIndex: "keterangan",
    key: "keterangan",
    responsive: ["xl"],
  },
  {
    title: "Aksi",
    fixed: "right",
    dataIndex: "aksi",
    key: "aksi",
    width: 100,
    render: () => (
      <div className="flex justify-center items-center gap-2">
        <FiEdit color="#FFC107" size={20} style={{ cursor: "pointer" }} />
        <RiDeleteBin6Line color="#DC3545" size={20} style={{ cursor: "pointer" }} />
        {/* <EditOutlined style={{color: "yellow", fontSize: "25px"}}/>
        <DeleteFilled style={{color: "red", fontSize: "25px"}}/> */}
      </div>
    ),
  },
];
