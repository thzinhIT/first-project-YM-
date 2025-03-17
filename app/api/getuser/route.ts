import { getDatabase } from "@/lib/mongodb";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const db = await getDatabase();
    const listUsers = await db.collection("Login").find().toArray();
    return NextResponse.json(listUsers, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Lỗi kết nối MongoDB" }, { status: 500 });
  }
}
