import { getDatabase } from "@/lib/mongodb";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

export async function POST(req: Request) {
  try {
    const { email, password, role } = await req.json();
    const db = await getDatabase();

    // Kiểm tra xem email đã tồn tại chưa
    const existingUser = await db.collection("Login").findOne({ email });
    if (existingUser) {
      return NextResponse.json({ error: "Email đã tồn tại" }, { status: 400 });
    }

    // Hash mật khẩu trước khi lưu
    const hashedPassword = await bcrypt.hash(password, 10);

    // Lưu vào MongoDB
    await db.collection("Login").insertOne({
      email,
      password: hashedPassword,
      role: role || "user",
    });

    return NextResponse.json(
      { message: "Đăng ký thành công" },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json({ error: "Lỗi khi đăng ký" }, { status: 500 });
  }
}
