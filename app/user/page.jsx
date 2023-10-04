import React from 'react'
import TitleBar from '../components/atoms/TitleBar'
import { db } from '../lib/db'
import UserTable from './UserTable'

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
      
      <UserTable users={users}/>
    </section>
  )
}

export default User