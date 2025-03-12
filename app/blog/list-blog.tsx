"use client";
import React from "react";
import Image from "next/image";
import { useState, useEffect } from "react";
import TagBlog from "@/components/page/TagBlog";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";
type BlogItem = {
  id: number;
  title: string;
  content: string;
  author: string;
  createdAt: string;
  image: string;
  tag: string[];
  review: string;
};
const ListBlog = () => {
  const [data, setData] = useState<BlogItem[]>([]);
  const newArray = data.map(({ id, tag }) => ({ id, tag }));
  const router = useRouter();
  const handleOnClickBlog = (id: number) => {
    router.push(`/blog/${id}`);
  };

  //  bài toán phân trang

  const searchParams = useSearchParams();

  // Lấy giá trị `page` từ URL, mặc định là 1 nếu không có
  const pageFromUrl = parseInt(searchParams.get("page") || "1");
  const [currentPage, setCurrentPage] = useState(pageFromUrl);

  const productsPerPage = 4;
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const listBlog = async () => {
      const res = await fetch(
        `https://first-project-ym-e9fm.vercel.app/api/pagination?page=${currentPage}&size=${productsPerPage}`
      );
      const result = await res.json();
      console.log("<<<< check đây  nghệ sĩ", result.data);
      setData(result.data);
      setTotalPages(result.totalPages);
    };
    listBlog();
    console.log("Current Page Updated11:", currentPage);
  }, [currentPage]);
  useEffect(() => {
    // Cập nhật URL khi đổi trang mà không reload
    router.push(`?page=${currentPage}`, { scroll: false });
  }, [currentPage]);

  // cập nhật lại trang khi thay đổi pageFromUrl
  useEffect(() => {
    if (currentPage !== pageFromUrl) {
      setCurrentPage(pageFromUrl);
    }
  }, [pageFromUrl]);

  return (
    <>
      <div>
        {data &&
          data.length !== 0 &&
          data.map((item: any, index) => {
            return (
              <div key={item.id}>
                <div className="max-w-[1200px] mx-auto p-4 ">
                  <div className="flex flex-col lg:flex-row md:flex-row  gap-6 border-b-2 border-white py-4   ">
                    <div className="lg:w-[32.5%] md:w-[32.5%] sm:[32.5%]  w-full h-64 flex-shrink-0 cursor-pointer relative   ">
                      <Image
                        src={item.image}
                        alt="chó"
                        fill
                        className="!cursor-pointer object-cover object-[center_top] "
                      />
                    </div>
                    <div className="min-h-[200px]">
                      <div className="flex items-center">
                        <div className="flex items-center gap-2">
                          <div className="cursor-pointer">
                            <Image
                              src={item.image}
                              width={36}
                              height={36}
                              alt="avatar"
                              className="w-9 h-9 rounded-full "
                              onClick={() => handleOnClickBlog(item.id)}
                            />
                          </div>

                          <div className="text-white font-semibold text-sm">
                            {item.author}
                          </div>
                        </div>
                        <div className="w-1 h-6 bg-white mx-4"></div>
                        <time
                          dateTime="2025-03-05"
                          className="text-left text-white "
                        >
                          {" "}
                          {item.createdAt}
                        </time>
                      </div>
                      <h2
                        className="my-3 font-bold text-2xl text-white cursor-pointer "
                        onClick={() => handleOnClickBlog(item.id)}
                      >
                        {item.title}
                      </h2>
                      <p className="text-white text-lg mb-4 ">{item.review}</p>
                      <div className="flex gap-2">
                        {" "}
                        {<TagBlog tagCurrent={newArray[index]} />}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
      {data.length > 0 && (
        <div className="flex gap-4 mt-5 justify-around p-4">
          <button
            onClick={() => {
              setCurrentPage((prev) => {
                const newPage = Math.max(prev - 1, 1);
                return newPage;
              });
            }}
            disabled={currentPage === 1}
            className={`px-4 py-2 border rounded bg-red-700 cursor-pointer ${
              currentPage === 1
                ? "opacity-50 cursor-not-allowed"
                : "cursor-pointer"
            }`}
          >
            Previous
          </button>

          {/* Hiển thị số trang hiện tại / tổng số trang */}
          <span className="px-4 py-2 text-white">
            Page {currentPage} of {totalPages}
          </span>

          <button
            onClick={() => {
              setCurrentPage((prev) => {
                const newPage = Math.min(prev + 1, totalPages);

                return newPage;
              });
            }}
            disabled={currentPage === totalPages}
            className={`px-4 py-2 border rounded bg-red-700 cursor-pointer ${
              currentPage === totalPages
                ? "opacity-50 cursor-not-allowed"
                : "cursor-pointer"
            }`}
          >
            Next
          </button>
        </div>
      )}
    </>
  );
};

export default ListBlog;
