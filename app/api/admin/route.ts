import { getDatabase } from "@/lib/mongodb";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

export async function POST(req: Request) {
  try {
    const db = await getDatabase();

    // Kiểm tra xem admin đã tồn tại chưa
    const existingAdmin = await db
      .collection("Login")
      .findOne({ email: "admin@yourdomain.com" });
    if (existingAdmin) {
      return NextResponse.json({ error: "Admin đã tồn tại" }, { status: 400 });
    }

    // Hash mật khẩu
    const hashedPassword = await bcrypt.hash("admin123", 10);

    // Thêm admin vào database
    await db.collection("Login").insertOne({
      email: "admin@yourdomain.com",
      password: hashedPassword,
      role: "admin",
    });

    return NextResponse.json(
      { message: "Admin đã được thêm thành công" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ error: "Lỗi khi thêm admin" }, { status: 500 });
  }
}
