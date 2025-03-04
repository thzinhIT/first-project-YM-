import posts from "@/app/assets/mock-data/mock-post";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    // Mock data: Danh sách bài viết mẫu
    const data = posts;
    return NextResponse.json({ success: true, data });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: (error as Error).message },
      { status: 500 }
    );
  }
}
