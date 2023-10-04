'use client';
import React from "react";
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
            colorPrimary: "#7076FE",
          },
        }}
      >
        {pathName == "/login" || pathName == "/" || pathName == "/presensi" ? (
          <>
            {children}
          </>
        ) : (
          <AdminLayout children={children} />
        )}
      </ConfigProvider>
    </StyledComponentsRegistry>
    
  );
};

export default MainLayout;
