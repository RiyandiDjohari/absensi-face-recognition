import { DownOutlined, LogoutOutlined, UserOutlined } from "@ant-design/icons";
import { Avatar, Dropdown, Space } from "antd";
import { signOut } from "next-auth/react";
// import Link from 'next/link';
import React from "react";
import Button from "./Button";
import { MdLogout } from "react-icons/md";
import { CgProfile } from "react-icons/cg";

const Profile = () => {
  const items = [
    {
      key: "1",
      label: "Menu",
    },
    {
      key: "2",
      label: (
        <Button
          onClick={() =>
            signOut({
              redirect: true,
              callbackUrl: `${window.location.origin}/login`,
            })
          }
          name="Profile"
          className="bg-teal-500 w-full"
          icon={CgProfile}
          iconStyle="20px"
        />
      ),
    },
    {
      key: "3",
      label: (
        <Button
          onClick={() =>
            signOut({
              redirect: true,
              callbackUrl: `${window.location.origin}/login`,
            })
          }
          name="Logout"
          className="bg-red-500 w-full"
          icon={MdLogout}
          iconStyle="20px"
        />
      ),
    },
  ];
  return (
    <div className="flex items-center gap-2  text-[#F9F9F9] text-sm sm:text-base">
      <Avatar size={40} icon={<UserOutlined />} style={{
        backgroundColor: '#87d068',
      }} />
      <Dropdown
        menu={{
          items,
        }}
        placement="bottomRight"
        arrow
      >
        <a onClick={(e) => e.preventDefault()}>
          <Space>
            Hai, Admin
            <DownOutlined />
          </Space>
        </a>
      </Dropdown>
    </div>
  );
};

export default Profile;
