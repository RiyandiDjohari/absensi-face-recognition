import "./globals.css";
import MainLayout from "./components/templates/MainLayout";
import { getServerSession } from "next-auth";
import { authOptions } from "./lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

export const metadata = {
  title: "Absensi Face Recognition",
  description: "Sistem Absensi Pegawai Menggunakan QR Code",
};

export default async function RootLayout({ children }) {
  const session = await getServerSession(authOptions);
  const headersList = headers();
  const activePath = headersList.get("x-invoke-path");

  if(!session && activePath != "/login") {
    redirect("/login");
  } else if (session && activePath == "/login") {
    redirect("/dashboard");
  }

  return (
    <html lang="en">
      <body>
        <MainLayout children={children}/>
      </body>
    </html>
  );
}
