import { getDatabase } from "@/lib/mongodb";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  try {
    const url = new URL(req.url);
    const page = parseInt(url.searchParams.get("page") || "1");
    const limit = 5;
    const skip = (page - 1) * limit;

    const db = await getDatabase();
    const totalUsers = await db.collection("Blog").countDocuments();
    const listBlogs = await db
      .collection("Blog")
      .find()
      .skip(skip)
      .limit(limit)
      .toArray();

    return NextResponse.json(
      {
        data: listBlogs,

        currentPage: page,
        totalPages: Math.ceil(totalUsers / limit),
        totalUsers,
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ error: "Lỗi kết nối MongoDB" }, { status: 500 });
  }
}
