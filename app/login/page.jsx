'use client';
import React, { useState } from 'react'
import InputLabel from '../components/atoms/InputLabel';
import Input from '../components/atoms/Input';
import Button from '../components/atoms/Button';
import { useRouter } from 'next/navigation';
import FormLogin from '../components/organisms/FormLogin';

const Login = () => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("");
  const router = useRouter();

  const onFinish = (values) => {
    console.log('Received values of form: ', values);
    
    router.push("/dashboard");
  };
  return (
    <div id="login" className='login'>
      <div className='login-container'>
        <div className='login-header'>
          <h1 className='login-header_title'>DINAS KEBUDAYAAN DAN PARIWISATA KOTA PALU</h1>
          <img src="/logo.png" alt='logo' className='login-header_img'/>
        </div>
        
        {/* <form action="" className='login-form'>
          <h2 className='login-form_title'>Login</h2>
          <InputLabel htmlFor={"username"} name={"Username"} className={"mb-2"}/>
          <Input 
            name="username"
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className={"focus:outline-primary text-sm mb-4"}
          />
          <InputLabel htmlFor={"password"} name={"Password"} className={"mb-2"}/>
          <Input
            name='password'
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={"focus:outline-primary text-sm mb-4"}
          />
          <Button onClick={() => {}} className={"mt-4 bg-primary text-white"} name={"Login"}/>
        </form> */}
        <FormLogin onFinish={onFinish}/>
      </div>
    </div>
  )
}

export default Login