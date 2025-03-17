import { getDatabase } from "@/lib/mongodb";
import { NextResponse } from "next/server";

export async function DELETE(req: Request) {
  try {
    const db = await getDatabase();

    // Lấy dữ liệu từ request body
    const body = await req.json();
    console.log("Dữ liệu nhận được:", body);

    const { email, password } = body;

    // Kiểm tra xem có user này không trước khi xóa
    const user = await db.collection("Login").findOne({ email, password });
    console.log("User tìm thấy:", user);

    if (!user) {
      return NextResponse.json(
        { message: "Không tìm thấy user" },
        { status: 404 }
      );
    }

    // Xóa user
    const deleteUser = await db
      .collection("Login")
      .deleteOne({ email, password });

    if (deleteUser.deletedCount === 0) {
      return NextResponse.json({ message: "Xóa thất bại" }, { status: 400 });
    }

    return NextResponse.json({ message: "Đã xóa thành công" }, { status: 200 });
  } catch (error) {
    console.error("Lỗi:", error);
    return NextResponse.json({ error: "Lỗi kết nối MongoDB" }, { status: 500 });
  }
}
