import { db } from "@/app/lib/db";
import { NextResponse } from "next/server";

export const DELETE = async (req, {params}) => {
  try {
    const user = await db.user.delete({
      where: {
        id: Number(params.id)
      }
    })
    return NextResponse.json(user, {status: 200});
  } catch (error) {
    return NextResponse.json({message: "Something Went Wrong"}, {status: 500});
  }
}

export const PATCH = async (req, {params}) => {
  try {
    const body = await req.json();
    const { name, username, email, status } = body
    const user = await db.user.update({
      where: {
        id: Number(params.id)
      }, 
      data: {
        name,
        username, 
        email, 
        status,
      }
    })
    return NextResponse.json(user, {status: 200});
  } catch (error) {
    return NextResponse.json({message: "Something Went Wrong"}, {status: 500});
  }
}