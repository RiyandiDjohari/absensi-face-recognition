import React from 'react'
import { sidebarMenus } from '@/app/constant'
import Link from 'next/link'
import { Tooltip } from 'antd'

const SidebarList = ({ containerStyle, iconStyle, textStyle, pathName, tooltip }) => {
  return (
    <div className='mt-10 flex flex-col gap-4'>
      {sidebarMenus?.map((menu, i) => (
        <>
        {
          tooltip ? (
            <Tooltip title={menu.name} placement='right' color='#7076FE'>
              <Link 
              href={menu.link}
              key={menu.name}
              className={`${containerStyle} ${pathName.includes(menu.link) && "active"} group flex items-center text-sm gap-3.5 font-medium p-3 rounded-md hover:bg-[#7076FE] hover:text-[#F9F9F9]`}
              >
                <div>{React.createElement(menu?.icon, {size: `${iconStyle}` , className: "duration-500"})}</div>
                <h2 className={`whitespace-pre duration-500 ${textStyle}`}>{menu.name}</h2>
              </Link>
            </Tooltip>
            ) : (
            <Link 
              href={menu.link}
              key={menu.name}
              className={`${containerStyle} ${pathName.includes(menu.link) && "active"} group flex items-center text-sm gap-3.5 font-medium p-3 rounded-md hover:bg-[#7076FE] hover:text-[#F9F9F9]`}
            >
              <div>{React.createElement(menu?.icon, {size: `${iconStyle}` , className: "duration-500"})}</div>
              <h2 className={`whitespace-pre duration-500 ${textStyle}`}>{menu.name}</h2>
            </Link>
          )
        }
        </>
      ))}
    </div>
  )
}

export default SidebarList