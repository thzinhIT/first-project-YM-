"use client";
import React, { useState, useEffect } from "react";

import { DialogDelete } from "./modal-delete-user";
import TableUser from "./table-user";
import { IoAddCircleSharp } from "react-icons/io5";
import { DialogCreate } from "./modal-create-user";
import { DialogUpdate } from "./modal-update-user";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { useRouter } from "next/navigation";

const Page = () => {
  interface User {
    _id: string;
    email: string;
    password: string;
    role: string;
  }

  const [listUser, setListUser] = useState<User[]>([]);
  const [open, setOpen] = useState(false);
  const [openDialogDelete, setOpenDialogDelete] = useState(false);
  const [dataDelete, setDataDelete] = useState<User>();
  const [openDialogCreate, setOpenDialogCreate] = useState(false);
  const [openDialogUpdate, setOpenDialogUpdate] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPage, setTotalPage] = useState(1);
  const router = useRouter();
  useEffect(() => {
    console.log("check trang hiueenj tại ", currentPage);
  }, [currentPage]);
  useEffect(() => {
    fetchUser();
  }, [currentPage]);
  const fetchUser = async () => {
    const res = await fetch(
      `http://localhost:3000/api/getuser?page=${currentPage}`
    );
    const data = await res.json();
    console.log("<<< check data đây", data);
    setListUser(data.data);

    setTotalPage(data.totalPages);
  };
  useEffect(() => {
    // Cập nhật URL khi đổi trang mà không reload
    router.push(`?page=${currentPage}`, { scroll: false });
  }, [currentPage]);
  console.log("<<< check user", listUser);
  const handleDialogDelete = (item: User) => {
    setOpenDialogDelete(true);
    setDataDelete(item);
    console.log("123", dataDelete);
  };
  const handleDialogCreate = () => {
    setOpenDialogCreate(true);
  };
  const handleDialogUpdate = () => {
    setOpenDialogUpdate(true);
  };
  return (
    <>
      {" "}
      <div></div>
      <div>
        <h2 className="text-center mx-auto text-2xl mb-5">
          {" "}
          List User đây nè !!!
        </h2>

        <button
          onClick={() => handleDialogCreate()}
          className="bg-blue-400 rounded-md flex justify-center items-center px-2 py-1 gap-1 active:-scale-50 duration-1000 mb-2 ml-auto mr-5 "
        >
          <IoAddCircleSharp className="text-green-900 text-lg font-bold" />
          <p>Add user</p>
        </button>

        <div>
          <TableUser
            listUser={listUser}
            handleDialogDelete={handleDialogDelete}
            handleDialogUpdate={handleDialogUpdate}
          />
          <DialogDelete
            open={openDialogDelete}
            setOpen={setOpenDialogDelete}
            dataDelete={dataDelete}
            fetchUser={fetchUser}
          />
          <DialogCreate
            open={openDialogCreate}
            setOpen={setOpenDialogCreate}
            fetchUser={fetchUser}
          />
          <DialogUpdate
            open={openDialogUpdate}
            setOpen={setOpenDialogUpdate}
            dataDelete={dataDelete}
          />
        </div>
      </div>
      <Pagination className="mt-5 flex justify-center gap-2 ">
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              onClick={() => {
                setCurrentPage((prev) => {
                  const newPage = Math.max(prev - 1, 1);
                  return newPage;
                });
              }}
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
                  <PaginationLink onClick={() => setCurrentPage(index + 1)}>
                    {index + 1}
                  </PaginationLink>
                </PaginationItem>
              ))}
            </>
          )}
          <PaginationItem>
            <PaginationNext
              onClick={() => {
                setCurrentPage((prev) => {
                  const newPage = Math.min(prev + 1, totalPage || 1);

                  return newPage;
                });
              }}
              className={
                currentPage === totalPage
                  ? "disabled cursor-not-allowed"
                  : "cursor-pointer"
              }
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
      <div></div>
    </>
  );
};

export default Page;
