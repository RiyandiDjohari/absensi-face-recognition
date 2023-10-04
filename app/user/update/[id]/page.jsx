"use client";
import TitleBar from "@/app/components/atoms/TitleBar";
import { Button, Form, Input, Radio } from "antd";
import React, { useState } from "react";
import Swal from "sweetalert2";
import { useRouter, useSearchParams } from "next/navigation";

const UpdatePengguna = () => {
  const searchParams = useSearchParams();
  const [status, setStatus] = useState(searchParams.get("status"))
  console.log(searchParams.get("name"));
  const router = useRouter();
  console.log(status)
  const styles = {
    inputStyle: {
      fontWeight: "500",
      color: "black",
      fontFamily: "montserrat",
      width: "100%",
      border: "1px solid black",
      fontSize: "14px",
      // padding: "10px"
    },
    formItemStyle: {
      marginBottom: "2.5rem",
      fontWeight: "600",
    },
  };
  const onFinish = async (values) => {
    try {
      const response = await fetch(`/api/user/${searchParams.get("id")}`, {
        method: "PATCH",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          name: values.name,
          username: values.username,
          email: values.email,
          status: values.status,
        }),
      });
      if (response.ok) {
        console.log(response);
        await Swal.fire("Success", "Data Pengguna Berhasil Diupdate!", "success");
        router.refresh();
        router.push("/user");
      } else {
        await Swal.fire("Oops", "Something Went Wrong", "error");
      }
    } catch (error) {
      console.log(error);
    }

    console.log(values);
  };

  const handleStatusChange = (e) => {
    console.log('radio checked', e.target.value);
    setStatus(e.target.value);
  };
  return (
    <div>
      <TitleBar title="Manajemen Pengguna" />
      <div className="tambah-user">
        <h1 className="section-title">Edit Pengguna</h1>
        <p>Silahkan isi form dibawah ini untuk mengedit data pengguna</p>
        <Form
          layout="horizontal"
          labelCol={{ span: 6 }}
          labelWrap
          initialValues={
            {
              name: searchParams.get("name"),
              username: searchParams.get("username"),
              email: searchParams.get("email"),
              status: status
            }
          }
          // wrapperCol={{span: 10}}
          labelAlign="left"
          size="large"
          style={{ margin: "2rem 0" }}
          onFinish={onFinish}
        >
          <Form.Item
            label="Nama Lengkap"
            name="name"
            style={styles.formItemStyle}
            rules={[
              {
                required: true,
                message: "Nama tidak boleh kosong!",
              },
            ]}
          >
            <Input style={styles.inputStyle} placeholder="Riyandi Djohari" defaultValue={searchParams.get("name")}/>
          </Form.Item>
          <Form.Item
            label="Username"
            name="username"
            style={styles.formItemStyle}
            rules={[
              {
                required: true,
                message: "Username tidak boleh kosong!",
              },
            ]}
          >
            <Input style={styles.inputStyle} placeholder="username" defaultValue={searchParams.get("username")} />
          </Form.Item>
          <Form.Item
            label="E-mail"
            name="email"
            style={styles.formItemStyle}
            rules={[
              {
                type: "email",
                message: "Format Email tidak valid!",
              },
              {
                required: true,
                message: "E-mail tidak boleh kosong!",
              },
            ]}
          >
            <Input style={styles.inputStyle} placeholder="E-mail"  defaultValue={searchParams.get("email")}/>
          </Form.Item>
          <Form.Item 
            label="Status" 
            name="status" 
            style={styles.formItemStyle}
          >
            <Radio.Group onChange={handleStatusChange} value={status} defaultValue={status}>
              <Radio value={"Aktif"}>Aktif</Radio>
              <Radio value={"Nonaktif"}>Nonaktif</Radio>
            </Radio.Group>
          </Form.Item>
          <div className="flex justify-end items-end gap-3">
            <Button htmlType="submit" type="primary">
              Simpan data
            </Button>
            <Button htmlType="reset" type="default" style={{ background: "#F0F5FD", fontWeight: 500 }}>
              Reset
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default UpdatePengguna;
