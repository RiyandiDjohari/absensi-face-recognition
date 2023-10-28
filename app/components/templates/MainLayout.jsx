'use client';
import React, { useState } from "react";
import StyledComponentsRegistry from "../../lib/AntdRegistry";
import { ConfigProvider } from "antd";
import AdminLayout from "./AdminLayout";
import { usePathname } from "next/navigation";

const MainLayout = ({ children }) => {
  const pathName = usePathname();

  return (
    <StyledComponentsRegistry>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: "#14a7a0",
          },
        }}
      >
        {pathName == "/login" || pathName == "/" || pathName == "/presensi" ? (
          <>
            {children}
          </>
        ) : (
          <AdminLayout children={children}/>
        )}
      </ConfigProvider>
    </StyledComponentsRegistry>
    
  );
};

export default MainLayout;
