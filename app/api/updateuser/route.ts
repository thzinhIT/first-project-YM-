import { getDatabase } from "@/lib/mongodb";
import { NextResponse } from "next/server";
import { FaNetworkWired } from "react-icons/fa";

export async function PATCH(req: Request) {
  try {
    const db = await getDatabase();

    // Lấy dữ liệu từ request body
    const body = await req.json();
    console.log("Dữ liệu nhận được:", body);

    const { _id, email, password } = body;
    const oldUser = await db.collection("Login").findOne({ _id });
    if (!oldUser) {
      return NextResponse.json(
        { error: "Update không thành công." },
        { status: 401 }
      );
    }

    // Kiểm tra xem có user này không trước khi xóa
    const newUser = await db
      .collection("Login")
      .updateOne({ _id }, { $set: { email: email, password: password } });
    console.log("User tìm thấy:", newUser);

    if (newUser.matchedCount === 0) {
      return NextResponse.json(
        { error: "Không tìm thấy user để cập nhật" },
        { status: 401 }
      );
    }
    if (newUser.modifiedCount === 0) {
      return NextResponse.json(
        { message: "Không có thay đổi nào được thực hiện" },
        { status: 404 }
      );
    }
    return NextResponse.json(
      { message: "Cập nhật thành công" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Lỗi:", error);
    return NextResponse.json({ error: "Lỗi kết nối MongoDB" }, { status: 500 });
  }
}
