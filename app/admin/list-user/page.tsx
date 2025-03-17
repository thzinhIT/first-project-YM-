"use client";
import React, { useState, useEffect } from "react";

import { DialogDelete } from "./modal-delete-user";
import TableUser from "./table-user";
import { IoAddCircleSharp } from "react-icons/io5";
import { DialogCreate } from "./modal-create-user";

const Page = () => {
  interface User {
    _id: string;
    email: string;
    password: string;
  }

  const [listUser, setListUser] = useState<User[]>([]);
  const [open, setOpen] = useState(false);
  const [openDialogDelete, setOpenDialogDelete] = useState(false);
  const [dataDelete, setDataDelete] = useState<User>();
  const [openDialogCreate, setOpenDialogCreate] = useState(false);
  useEffect(() => {
    fetchUser();
  }, []);
  const fetchUser = async () => {
    const res = await fetch("http://localhost:3000/api/getuser");
    const data = await res.json();
    console.log("<<< check data đây", data);
    setListUser(data);
  };
  console.log("<<< check user", listUser);
  const handleDialogDelete = (item: User) => {
    setOpenDialogDelete(true);
    setDataDelete(item);
    console.log("123", dataDelete);
  };
  const handleDialogCreate = () => {
    setOpenDialogCreate(true);
  };
  return (
    <>
      {" "}
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
        </div>
      </div>
      <div></div>
    </>
  );
};

export default Page;
