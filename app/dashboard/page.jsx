import React from 'react'
import Image from 'next/image'
import TitleBar from '../components/atoms/TitleBar'
import DashboardInfo from '../components/atoms/DashboardInfo'

const Dashboard = () => {
  return (
    <section id='dashboard'>
      <TitleBar title={"Dashboard"}/>
      <div className='flex items-center justify-between my-6 gap-4 flex-wrap w-full'>
        <DashboardInfo title={"Total Pegawai"} value={60}/>
        <DashboardInfo title={"Total Jabatan"} value={12}/>
        <DashboardInfo title={"Kehadiran Hari ini"} value={36}/>
      </div>
      <div className='bg-[#F9F9F9] p-8 text-center rounded-lg shadow-md shadow-gray-300'>
        <div className='my-10'>
          <h1 className='font-semibold text-xl md:text-2xl xl:text-3xl my-4'>SELAMAT DATANG</h1>
          <h2 className='text-lg md:text-xl xl:text-2xl leading-8'>SISTEM ABSENSI PEGAWAI</h2>
          <h2 className='text-lg md:text-xl xl:text-2xl leading-8'>DINAS KEBUDAYAAN DAN PARIWISATA KOTA PALU</h2>
          <Image src="/logo.png" width={250} height={250} className='object-contain mx-auto my-5'/>
        </div>
      </div>
    </section>
  )
}

export default Dashboard