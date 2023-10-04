import React from 'react';
import Image from 'next/image';

const Logo = ({ sidebarMini, isMobile, color }) => {
  return (
    <header className={`py-2 flex ${sidebarMini ? "justify-center" : "justify-start items-center gap-3"} border-b-2 border-[#7076FE]`}>
      <Image src="/logo.png" width={40} height={45} alt='logo' className={`object-contain ${sidebarMini && "flex justify-center items-center text-center"}`}/>
      {!sidebarMini && <h1 className={`font-semibold ${color}`}>Dinas Kebudayaan dan Pariwisata</h1>}
      {isMobile && <h1 className={`font-semibold ${color}`}>Dinas Kebudayaan dan Pariwisata</h1>}
    </header>
  )
}

export default Logo