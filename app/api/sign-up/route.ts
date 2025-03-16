import { getDatabase } from "@/lib/mongodb";
import { NextResponse } from "next/server";
export async function POST(req: Request) {
  try {
    const { email, password } = await req.json();
    const db = await getDatabase();
    const data = { email, password };
    const checkUser = await db.collection("Login").findOne({ email });
    if (checkUser) {
      return NextResponse.json({ error: "Email đã tồn tại" }, { status: 401 });
    }
    db.collection("Login").insertOne(data);

    return NextResponse.json({ status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Lỗi kết nối MongoDB" }, { status: 500 });
  }
}
