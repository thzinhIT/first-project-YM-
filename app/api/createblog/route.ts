import { getDatabase } from "@/lib/mongodb";
import { NextResponse } from "next/server";
import { z } from "zod";

// Xác thực dữ liệu blog
const blogSchema = z.object({
  title: z.string().min(5, "Tiêu đề phải có ít nhất 5 ký tự"),
  review: z.string().min(10, "Tóm tắt phải có ít nhất 10 ký tự"),
  content: z.string().min(20, "Nội dung bài viết quá ngắn"),
  author: z.string().min(3, "Tên tác giả phải có ít nhất 3 ký tự"),
  image: z.string().url("Link ảnh không hợp lệ"),
  tag: z.array(z.string()).min(1, "Ít nhất một thẻ tag"),
});

export async function POST(req: Request) {
  try {
    const db = await getDatabase();
    const body = await req.json();

    // Kiểm tra dữ liệu nhập vào
    const validatedBlog = blogSchema.safeParse(body);
    if (!validatedBlog.success) {
      return NextResponse.json(
        { error: validatedBlog.error.errors },
        { status: 400 }
      );
    }

    // Tạo bài blog mới (MongoDB sẽ tự tạo _id)
    const newBlog = {
      ...validatedBlog.data,
      createdAt: new Date().toISOString(), // Tạo thời gian hiện tại
    };

    // Thêm vào MongoDB
    const result = await db.collection("Blog").insertOne(newBlog);

    return NextResponse.json(
      {
        message: "Bài viết đã được đăng!",
        blog: { ...newBlog, _id: result.insertedId },
      },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json({ error: "Lỗi server" }, { status: 500 });
  }
}
