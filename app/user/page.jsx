// 'use client';
import React, { Suspense } from 'react'
import TitleBar from '../components/atoms/TitleBar'
import { db } from '../lib/db'
import UserTable from './UserTable'
import Loading from './Loading'

const getUsers = async () => {
  const res = await db.user.findMany({
   select: {
     id: true,
     name: true,
     username: true,
     email: true,
     status: true,
     password: true,
     createdAt: true,
   }
 })
 return res;
}

const User = async () => {
  const users =  await getUsers();
  return (
    <section id='user'>
      <TitleBar title={"Manajemen Pengguna"}/>
      
      <Suspense fallback={<Loading />}>
        <UserTable users={users}/>
      </Suspense>
    </section>
    // <h1>Test</h1>
  )
}

export default User