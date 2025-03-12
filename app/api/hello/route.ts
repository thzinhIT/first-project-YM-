import posts from "@/app/assets/mock-data/mock-post";
import { NextResponse } from "next/server";
import type { NextApiRequest, NextApiResponse } from "next";
export async function GET(req: Request) {
  try {
    // Mock data: Danh sách bài viết mẫu
    const data = posts;

    return NextResponse.json({
      data: data,
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: (error as Error).message },
      { status: 500 }
    );
  }
}
