'use client';
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { BiMenu } from 'react-icons/bi'

const NavbarPresensi = () => {
  const [toggleMenu, setToggleMenu] = useState(true);
  return (
    <nav className="bg-primary w-full flex flex-wrap items-center justify-between px-4 py-4 text-white text-sm sm:px-8 sm:text-base lg:px-36">
      <div className='flex items-center gap-2'>
        <Image src="/logo.png" width={45} height={50} alt='logo' className={`object-contain`}/>
        <h2 className='tracking-wider'>Dinas Kebudayaan & Pariwisata</h2>
      </div>

      <BiMenu size={24} color='#F9F9F9' onClick={ () => setToggleMenu(prev => !prev)} className='cursor-pointer md:hidden block'/>
      <div class={`${toggleMenu ? "hidden" : "block"} w-full md:flex md:items-center md:w-auto`} id="menu">
        <ul
          class="
            pt-4
            text-white
            md:flex
            md:justify-between 
            md:items-center
            md:pt-0"
        >
          <li>
            <Link class="md:p-4 py-2 block hover:text-black" href="/login">Login Administrator</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default NavbarPresensi