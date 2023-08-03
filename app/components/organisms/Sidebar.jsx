'use client'
import React, { useState, useEffect, useRef } from 'react'
import SidebarList from '../molecules/SidebarList';
import { usePathname } from 'next/navigation';
import { useOutsideClick } from '@/app/hooks/useOutsideClick';
import Logo from '../atoms/Logo';

const Sidebar = ({ sidebarMini, setSidebarMini }) => {
  const [isMobile, setIsMobile] = useState(false)
  const pathName = usePathname();
  const boxRef = useRef(null);

  const handleCloseMenu = () => {
    setSidebarMini(false)
  }

  useOutsideClick(boxRef, handleCloseMenu);

  //choose the screen size 
  const handleResize = () => {
    if (window.innerWidth < 768) {
      setIsMobile(true)
    } else {
      setIsMobile(false)
    }
  }
  
  // create an event listener
  useEffect(() => {
    window.addEventListener("resize", handleResize)
  })

  return (
    <>
    <aside id='sidebar' className={`bg-[#F9F9F9] min-h-screen hidden shadow-md shadow-gray-400 transition-all duration-500 ${sidebarMini ? "md:w-20 lg:w-20 xl:w-20 p-2 md:block" : "w-0 lg:w-64 xl:w-72 lg:p-4 md:hidden lg:block xl:block"}`}>
      <Logo sidebarMini={sidebarMini} isMobile={isMobile}/>
      <SidebarList containerStyle={sidebarMini && "justify-center"} iconStyle={sidebarMini ? "24" : "22"} textStyle={sidebarMini && "hidden opacity-0 translate-x-28 overflow-hidden"} pathName={pathName} tooltip={sidebarMini && true}/>
    </aside>
    {
      isMobile && (
        <aside ref={boxRef} className={`bg-[#F9F9F9] ${sidebarMini ? "left-0 top-0" : "-left-full top-0"} absolute z-10 transition-all ease-in duration-600 shadow-md shadow-gray-400`}>
          <div className="w-64 min-h-screen p-4">
            <Logo sidebarMini={sidebarMini} isMobile={isMobile} />
            <SidebarList iconStyle={"20"} pathName={pathName} tooltip={false}/>
          </div>
        </aside>
      )
    }
    </>
  )
}

export default Sidebar