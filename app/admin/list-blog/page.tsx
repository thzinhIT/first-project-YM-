"use client";
import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

import { useEffect, useState } from "react";
import { set } from "react-hook-form";
import { useRouter, useSearchParams } from "next/navigation";
import TableBlog from "./table-blog";
import { IoAddCircleSharp } from "react-icons/io5";
import { DialogCreateBlog } from "./modal-create-blog";

interface Blog {
  id: number;
  title: string;
  review: string;
  content: string;
  author: string;
  createdAt: string; // Hoặc Date nếu bạn muốn parse thành Date object
  image: string;
  tag: string[];
}
const ListBlogs = () => {
  const [data, setData] = useState<Blog[]>([]);

  const [totalPage, setTotalPage] = useState(1);
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentPage = parseInt(searchParams.get("page") || "1"); // Lấy page từ URL
  const [openDialogCreateBlog, setOpenDialogCreateBlog] = useState(false);

  useEffect(() => {
    fecthGet();
  }, [currentPage]);
  const handlePageChange = (newPage: number) => {
    if (newPage < 1 || newPage > totalPage) return;
    router.push(`/admin/list-blog?page=${newPage}`); // Cập nhật URL
  };
  // useEffect(() => {
  // //   // Cập nhật URL khi đổi trang mà không reload
  // //   router.push(`?page=${currentPage}`, { scroll: false });
  // // }, [currentPage]);
  const fecthGet = async () => {
    const res = await fetch(
      `http://localhost:3000/api/getblogs?page=${currentPage}`
    );
    const req = await res.json();
    setData(req.data);
    setTotalPage(req.totalPages);
    console.log("check req", req);
  };

  return (
    <>
      <div>
        {" "}
        <div className="px-3">
          <h2 className="text-center mx-auto text-2xl mb-5 ">
            List blog xin chào mọi người !!!
          </h2>
          <div>
            <button
              className=" flex justify-end items-center gap-1 bg-blue-400 ml-auto rounded-sm px-2 py-2 mb-2 active:scale-90 active: duration-100"
              onClick={() => setOpenDialogCreateBlog(true)}
            >
              <IoAddCircleSharp className="text-green-700 text-lg " />
              <p> Add Blogs</p>
            </button>
            <TableBlog data={data} />
            <Pagination className="mt-5 flex justify-center gap-2 ">
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious
                    onClick={() => handlePageChange(currentPage - 1)}
                    className={
                      currentPage === 1
                        ? "disabled cursor-not-allowed"
                        : "cursor-pointer"
                    }
                  />
                </PaginationItem>
                {totalPage !== 0 && (
                  <>
                    {Array.from({ length: totalPage }, (_, index) => (
                      <PaginationItem key={index + 1}>
                        <PaginationLink
                          onClick={() => handlePageChange(index + 1)}
                        >
                          {index + 1}
                        </PaginationLink>
                      </PaginationItem>
                    ))}
                  </>
                )}
                <PaginationItem>
                  <PaginationNext
                    onClick={() => handlePageChange(currentPage + 1)}
                    className={
                      currentPage === totalPage
                        ? "disabled cursor-not-allowed"
                        : "cursor-pointer"
                    }
                  />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        </div>
      </div>
      <DialogCreateBlog
        open={openDialogCreateBlog}
        setOpen={setOpenDialogCreateBlog}
      />
      <div></div>
    </>
  );
};

export default ListBlogs;
