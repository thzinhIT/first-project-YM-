"use client";
import React, { useState, useEffect } from "react";

import { DialogDelete } from "./modal-delete-user";
import TableUser from "./table-user";
const Page = () => {
  interface User {
    _id: string;
    email: string;
    password: string;
  }

  const [listUser, setListUser] = useState<User[]>([]);
  const [open, setOpen] = useState(false);
  const [openDialoDelete, setOpenDialoDelete] = useState(false);
  const [dataDelete, setDataDelete] = useState<User>();
  useEffect(() => {
    const fetchUser = async () => {
      const res = await fetch("http://localhost:3000/api/getuser");
      const data = await res.json();
      console.log("<<< check data đây", data);
      setListUser(data);
    };
    fetchUser();
  }, []);
  console.log("<<< check user", listUser);
  const handleDialoDelete = (item: User) => {
    setOpenDialoDelete(true);
    setDataDelete(item);
    console.log("123", dataDelete);
  };
  return (
    <>
      {" "}
      <div>
        <h2 className="text-center mx-auto text-2xl mb-5">
          {" "}
          List User đây nè !!!
        </h2>
        <div>
          <TableUser
            listUser={listUser}
            handleDialoDelete={handleDialoDelete}
          />
          <DialogDelete
            open={openDialoDelete}
            setOpen={setOpenDialoDelete}
            dataDelete={dataDelete}
          />
        </div>
      </div>
      <div></div>
    </>
  );
};

export default Page;
