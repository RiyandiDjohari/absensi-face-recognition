import React from 'react'
import TitleBar from '../components/atoms/TitleBar'
import PegawaiTable from './PegawaiTable';
import { db } from '../lib/db';

const getPegawai = async () => {
  const res = await db.pegawai.findMany({
    include: {
      jabatan: {
        select: {
          id: true,
          nama_jabatan: true,
        }
      }
    }
  })
 return res;
}

const Pegawai = async () => {
  const allPegawai = await getPegawai();
  return (
    <section id='pegawai'>
      <TitleBar title={"Data Pegawai"}/>
      <PegawaiTable 
        allPegawai={allPegawai}
      />
    </section>
  )
}

export default Pegawai