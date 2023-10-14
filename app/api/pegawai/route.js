import { db } from "@/app/lib/db";
import { NextResponse } from "next/server";

// CREATE A NEW JABATAN
export async function POST(request) {
  try {
    const body = await request.json();
    const { nama, nip, telepon, tempat_lahir, tanggal_lahir, jenis_kelamin, jabatanId, pangkat, alamat } = body;

    const newPegawai = await db.pegawai.create({
      data: {
        nama, 
        nip, 
        telepon, 
        tempat_lahir, 
        tanggal_lahir, 
        jenis_kelamin, 
        jabatanId,
        pangkat, 
        alamat,
      },
    });

    return NextResponse.json({ newPegawai, message: "Pegawai baru berhasil ditambahkan" }, { status: 201 });
  } catch (error) {
    console.log(error)
    return NextResponse.json({ message: "Something went wrong" }, { status: 500 });
  }
}