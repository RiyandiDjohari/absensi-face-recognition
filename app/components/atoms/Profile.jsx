import { UserOutlined } from '@ant-design/icons'
import { Avatar } from 'antd'
import React from 'react'

const Profile = () => {

  return (
    <div className='flex items-center gap-2  text-[#F9F9F9] text-sm sm:text-base'>
      <Avatar size={40} icon={<UserOutlined />} style={{backgroundColor: "#D9D9D9", color: "#0F0F0F"}}/>
      <h2>Hai, Admin</h2>
    </div>
  )
}

export default Profile