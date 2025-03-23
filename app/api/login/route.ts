import { getDatabase } from "@/lib/mongodb";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export async function POST(req: Request) {
  try {
    const { email, password } = await req.json();
    const db = await getDatabase();

    // Tìm user theo email
    const user = await db.collection("Login").findOne({ email });
    if (!user) {
      return NextResponse.json(
        { error: "Tài khoản không tồn tại" },
        { status: 401 }
      );
    }

    // Kiểm tra mật khẩu
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return NextResponse.json(
        { error: "Mật khẩu không đúng" },
        { status: 401 }
      );
    }

    // Tạo token JWT
    const token = jwt.sign(
      { userId: user._id, role: user.role, email: user.email }, // Dữ liệu bên trong token
      process.env.JWT_SECRET as string, // Secret key
      { expiresIn: "7d" } // Hết hạn sau 7 ngày
    );

    // Trả về token
    return NextResponse.json(
      { token, user: { email: user.email, role: user.role } },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ error: "Lỗi kết nối MongoDB" }, { status: 500 });
  }
}
