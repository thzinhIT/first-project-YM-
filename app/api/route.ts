import { NextResponse } from "next/server";
import { getDatabase } from "@/lib/mongodb";

export async function PATCH(req: Request) {
  try {
    console.log("📌 API updateuser được gọi");

    // Đọc JSON từ request
    const body = await req.json();
    console.log("📦 Dữ liệu nhận được:", body);

    const { oldEmail, newEmail, newPassword } = body;

    if (!oldEmail || (!newEmail && !newPassword)) {
      return NextResponse.json(
        { error: "Thiếu thông tin cần cập nhật!" },
        { status: 400 }
      );
    }

    const db = await getDatabase();
    const updateData: { email?: string; password?: string } = {};
    if (newEmail) updateData.email = newEmail;
    if (newPassword) updateData.password = newPassword;

    const user = await db
      .collection("Login")
      .findOneAndUpdate(
        { email: oldEmail },
        { $set: updateData },
        { returnDocument: "after" }
      );

    if (!user) {
      return NextResponse.json(
        { error: "Không tìm thấy người dùng!" },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { message: "Cập nhật thành công!", user },
      { status: 200 }
    );
  } catch (error) {
    console.error("❌ Lỗi server:", error);
    return NextResponse.json(
      { error: "Lỗi server!", details: (error as Error).message },
      { status: 500 }
    );
  }
}
