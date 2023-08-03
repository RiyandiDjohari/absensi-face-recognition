'use client';
import { useState } from 'react'
import { Footer, Header, Sidebar } from './components'
import './globals.css'
import { usePathname } from 'next/navigation';
import StyledComponentsRegistry from './lib/antdRegistry';
import { ConfigProvider } from 'antd';

export const metadata = {
  title: 'Absensi QR Code',
  description: 'Sistem Absensi Pegawai Menggunakan QR Code',
}

export default function RootLayout({ children }) {
  const pathName = usePathname();
  const [sidebarMini, setSidebarMini] = useState(false);

  return (
    <html lang="en">
      <body>
        {
          pathName == "/login" || pathName == "/" ? (
            <div>
              <StyledComponentsRegistry>
                <ConfigProvider
                   theme={{
                    token: {
                      colorPrimary: '#7076FE',
                    },
                  }}
                >
                  {children}
                </ConfigProvider>
              </StyledComponentsRegistry>
            </div>
          ) : (
            <StyledComponentsRegistry>
              <ConfigProvider
                  theme={{
                  token: {
                    colorPrimary: '#7076FE',
                  },
                }}
              >
                <div className="flex flex-col min-h-screen">
                  <div className="flex flex-1">
                    <Sidebar sidebarMini={sidebarMini} setSidebarMini={setSidebarMini}/>
                    <div className="flex flex-col flex-1">
                      <Header setSidebarMini={setSidebarMini}/>
                      <main className="p-6 flex-1">{children}</main>
                      <Footer />
                    </div>
                  </div>
                </div>
              </ConfigProvider>
            </StyledComponentsRegistry>
          )
        }
      </body>
    </html>
  )
}