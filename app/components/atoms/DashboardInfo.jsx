import React from 'react'

const DashboardInfo = ({ title, value }) => {
  return (
    <div className='p-8 bg-[#F9F9F9] flex-1 rounded-lg shadow-md shadow-gray-300 min-w-[18rem]'>
      <h2 className='font-semibold'>{title}</h2>
      <span className='text-3xl font-bold text-primary'>{value}</span>
    </div>
  )
}

export default DashboardInfo