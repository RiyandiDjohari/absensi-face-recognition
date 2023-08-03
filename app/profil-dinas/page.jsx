'use client';

import React from 'react'
import TitleBar from '../components/atoms/TitleBar'
import FormDataDinas from '../components/organisms/FormDataDinas';
import { Button } from 'antd';
import { EditOutlined } from '@ant-design/icons';

const ProfilDinas = () => {
  // const onFinish = (values) => {
  //   console.log('Received values of form: ', values);
  // };
  return (
    <section id='profil-dinas'>
      <TitleBar title={"Profil Dinas"}/>
      <div className='profil-dinas'>
        <div className="data-dinas">
          <h1 className='section-title'>Data Dinas</h1>
          <FormDataDinas />
        </div>

        <div className="logo-dinas">
          <h1 className='section-title'>Logo Dinas</h1>
          <img src="/logo.png" width={250} height={250} alt="logo"/>
          <Button type="primary" icon={<EditOutlined />}>Ubah Logo</Button>
        </div>
      </div>
      
    </section>  
  )
}

export default ProfilDinas