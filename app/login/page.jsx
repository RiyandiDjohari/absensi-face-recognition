import React from "react";
import FormLogin from "../components/organisms/FormLogin";

export const metadata = {
  title: "Login Page",
  description: "Sistem Absensi Pegawai Menggunakan Face Recognition",
};

const Login = async () => {

  return (
    <div id="login" className="login">
      <div className="login-container">
        <div className="login-header">
          <h1 className="login-header_title">DINAS KEBUDAYAAN DAN PARIWISATA KOTA PALU</h1>
          <img src="/logo.png" alt="logo" className="login-header_img" />
        </div>
        <FormLogin />
      </div>
    </div>
  );
};

export default Login;
