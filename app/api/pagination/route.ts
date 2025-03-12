import posts from "@/app/assets/mock-data/mock-post";
import { NextResponse } from "next/server";
import type { NextApiRequest, NextApiResponse } from "next";
export async function GET(req: Request) {
  try {
    // Mock data: Danh sách bài viết mẫu
    const data = posts;
    const { searchParams } = new URL(req.url);
    const page = Number(searchParams.get("page")) || 1;
    const size = Number(searchParams.get("size")) || 4;
    const tag = searchParams.get("tab") || "";
    const result = searchParams.get("search") || "";

    const startIndex = (page - 1) * size;
    const paginatedData = data.slice(startIndex, startIndex + size);
    const paginatedTag = data
      .filter((x) => x.tag.includes(tag))
      .slice(startIndex, startIndex + size);
    const paginatedSearch = data.filter((x) =>
      x.title.toLowerCase().includes(result.toLowerCase())
    );
    return NextResponse.json({
      data: paginatedData,
      totalPages: Math.ceil(data.length / size),
      tag: paginatedTag,
      search: paginatedSearch,
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: (error as Error).message },
      { status: 500 }
    );
  }
}
