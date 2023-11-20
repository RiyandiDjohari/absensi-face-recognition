'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { BiMenu } from 'react-icons/bi';
import { useRouter } from 'next/navigation';
import { Button } from 'antd';
import { LoginOutlined } from '@ant-design/icons';

const NavbarPresensi = () => {
  const [toggleMenu, setToggleMenu] = useState(true);
  const router = useRouter();

  const handleRoutingLogin = () => {
    router.push('/login');
  }

  return (
    <nav className="bg-primary w-full flex flex-wrap items-center justify-between px-4 py-4 text-white text-sm sm:px-8 sm:text-base lg:px-36">
      <div className='flex items-center gap-2'>
        <Image src="/logo.png" width={45} height={50} alt='logo' className={`object-contain`}/>
        <h2 className='tracking-wider'>Dinas Pariwisata Kota Palu</h2>
      </div>

      <BiMenu size={24} color='#F9F9F9' onClick={ () => setToggleMenu(prev => !prev)} className='cursor-pointer md:hidden block'/>
      <div className={`${toggleMenu ? "hidden" : "block"} w-full md:flex md:items-center md:w-auto`} id="menu">
        <ul
          className="
            pt-4
            text-white
            md:flex
            md:justify-between 
            md:items-center
            md:pt-0"
        >
          <li onClick={handleRoutingLogin}>
            <Button icon={<LoginOutlined />} size='large'>Login Administrator</Button>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default NavbarPresensi