import React from 'react';
import TitleBar from '../components/atoms/TitleBar'
import { db } from '../lib/db'
import TabelKehadiran from './TabelKehadiran'

const getKehadiran = async () => {
  const res = await db.presensi.findMany({
    include: {
      pegawai: {
        select: {
          id: true,
          nama: true,
          jabatan: {
            select: {
              nama_jabatan: true,
            }
          }
        }
      }
    }
  });

  return res;
}

const Kehadiran = async () => {
  const allKehadiran = await getKehadiran();
  return (
    <section id='kehadiran'>
      <TitleBar title={"Data Kehadiran"}/>
      <TabelKehadiran allKehadiran={allKehadiran}/>
    </section>
  )
}

export default Kehadiran