import { Button, Checkbox, Form, Input } from 'antd'
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import React from 'react'

const FormLogin = ({ onFinish }) => {
  
  return (
    <Form
      name="normal_login"
      className="login-form"
      layout='vertical'
      initialValues={{
        remember: false,
      }}
      onFinish={onFinish}
      style={{padding: "1.3rem"}}
      size='large'
    >
      <h1 className='mb-4 text-lg font-semibold'>Login</h1>
      <Form.Item
        label="Username"
        style={{fontWeight: "500"}}
        name="username"
        rules={[
          {
            required: true,
            message: 'Please input your Username!',
          },
        ]}
        >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
      </Form.Item>
      <Form.Item
        label="Password"
        name="password"
        style={{fontWeight: "500"}}
        rules={[
          {
            required: true,
            message: 'Please input your Password!',
          },
        ]}
      >
        <Input.Password
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>
      <Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        {/* <a className="login-form-forgot" href="">
          Forgot password
        </a> */}
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button w-full">
          Log in
        </Button>
      </Form.Item>
    </Form>
  )
}

export default FormLogin