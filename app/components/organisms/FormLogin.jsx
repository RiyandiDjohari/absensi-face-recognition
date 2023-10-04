"use client";
import React from "react";
import { Button, Checkbox, Form, Input } from "antd";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import Link from "next/link";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";

const FormLogin = () => {
  const router = useRouter();

  const onFinish = async (values) => {
    const signInData = await signIn("credentials", {
      username: values.username,
      password: values.password,
      redirect: false,
    });
    console.log(signInData)
    if (signInData.error) {
      await Swal.fire("Oops", "Username atau password salah!", "error");
    } else {
      await Swal.fire("Success", "Login Berhasil!", "success");
      router.push("/dashboard");
    }
  };

  return (
    <Form
      name="normal_login"
      className="login-form"
      layout="vertical"
      initialValues={{
        remember: false,
      }}
      onFinish={onFinish}
      style={{ padding: "1.3rem" }}
      size="large"
    >
      <h1 className="mb-4 text-lg font-semibold">Login</h1>
      <Form.Item
        label="Username"
        style={{ fontWeight: "500" }}
        name="username"
        rules={[
          {
            required: true,
            message: "Please input your Username!",
          },
        ]}
      >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
      </Form.Item>
      <Form.Item
        label="Password"
        name="password"
        style={{ fontWeight: "500" }}
        rules={[
          {
            required: true,
            message: "Please input your Password!",
          },
        ]}
      >
        <Input.Password prefix={<LockOutlined className="site-form-item-icon" />} type="password" placeholder="Password" />
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

      <Form.Item>
        <Link href={"/presensi"}>
          <Button htmlType="submit" className="w-full" type="primary" style={{ color: "#FFF", background: "#faad14", borderColor: "#faad14" }}>
            Presensi Pegawai
          </Button>
        </Link>
      </Form.Item>
    </Form>
  );
};

export default FormLogin;
