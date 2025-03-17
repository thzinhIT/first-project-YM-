import { getDatabase } from "@/lib/mongodb";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const db = await getDatabase();

    // Lấy dữ liệu từ request body
    const body = await req.json();
    console.log("Dữ liệu nhận được:", body);

    const { email, password } = body;
    const existingUser = await db.collection("Login").findOne({ email });
    if (existingUser) {
      return NextResponse.json(
        { error: "Email đã tồn tại. Vui lòng dùng email khác." },
        { status: 401 }
      );
    }

    // Kiểm tra xem có user này không trước khi xóa
    const user = await db.collection("Login").insertOne({ email, password });
    console.log("User tìm thấy:", user);

    if (user.insertedId) {
      return NextResponse.json(
        { message: "Đã tạo tài khoản thành công" },
        { status: 200 }
      );
    } else {
      return NextResponse.json(
        { error: "Không thể tạo tài khoản" },
        { status: 401 }
      );
    }
  } catch (error) {
    console.error("Lỗi:", error);
    return NextResponse.json({ error: "Lỗi kết nối MongoDB" }, { status: 500 });
  }
}
