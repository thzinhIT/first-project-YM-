import posts from "@/app/assets/mock-data/mock-post";
import { NextResponse } from "next/server";
import type { NextApiRequest, NextApiResponse } from "next";
export async function GET(req: Request) {
  try {
    // Mock data: Danh sách bài viết mẫu
    // res.setHeader("Access-Control-Allow-Origin", "*"); // Cho phép tất cả các nguồn
    // res.setHeader(
    //   "Access-Control-Allow-Methods",
    //   "GET, POST, PUT, DELETE, OPTIONS"
    // );
    // res.setHeader(
    //   "Access-Control-Allow-Headers",
    //   "Content-Type, Authorization"
    // );
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

    const headers = new Headers();
    headers.set("Access-Control-Allow-Origin", "*");
    headers.set("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
    headers.set("Access-Control-Allow-Headers", "Content-Type, Authorization");
    return new NextResponse(
      JSON.stringify({
        data: paginatedData,
        totalPages: Math.ceil(posts.length / size),
        tag: paginatedTag,
        search: paginatedSearch,
      }),
      { status: 200, headers }
    );
  } catch (error) {
    return NextResponse.json(
      { success: false, error: (error as Error).message },
      { status: 500 }
    );
  }
}
export async function OPTIONS() {
  return new NextResponse(null, {
    status: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type, Authorization",
    },
  });
}
