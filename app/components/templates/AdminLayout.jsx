'use client';
import React, { useEffect, useState } from "react";
import { Footer, Header, Sidebar } from "..";

const AdminLayout = ({children}) => {
  const [isMobile, setIsMobile] = useState(false)
  const [sidebarMini, setSidebarMini] = useState(false);

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
    <div className="flex flex-col min-h-screen">
      <div className="flex flex-1">
        <Sidebar sidebarMini={sidebarMini} setSidebarMini={setSidebarMini} isMobile={isMobile} setIsMobile={setIsMobile}/>
        <div className={`flex flex-col flex-1 ${sidebarMini ? "ml-20" : "min-[1100px]:ml-64 xl:ml-72"} ${isMobile && "ml-0"}`}>
          <Header setSidebarMini={setSidebarMini} />
          <main className="p-6 flex-1">{children}</main>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
