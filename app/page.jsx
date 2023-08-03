'use client';
import { Spin, Table } from 'antd';
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
// import { columnsDataJabatan, dataJabatanSource } from './constant';

const App = () => {
  const [isLogin, setIsLogin] = useState(true)
  const router = useRouter();

  useEffect(() => {
    isLogin ? router.push("/dashboard") : router.push("/login")
  })
  return (
    <div className='min-h-screen flex justify-center items-center'>
      <Spin tip="Loading..." size="large">
        <div className="content"></div>
      </Spin>
    </div>
    // <Table
    //   columns={columnsDataJabatan}
    //   dataSource={dataJabatanSource}
    //   scroll={{
    //     x: 1000,
    //   }}
    // />
  )
}

export default App