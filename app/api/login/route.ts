import { getDatabase } from "@/lib/mongodb";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { email, password } = await req.json();
    const db = await getDatabase();
    const listUsers = await db.collection("Login").findOne({ email, password });
    if (!listUsers) {
      return NextResponse.json(
        { error: "Tài khoản hoặc mật khẩu không đúng" },
        { status: 401 }
      );
    }
    return NextResponse.json(listUsers, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Lỗi kết nối MongoDB" }, { status: 500 });
  }
}
