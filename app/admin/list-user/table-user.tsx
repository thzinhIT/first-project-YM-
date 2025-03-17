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
import { IoMdCloseCircle } from "react-icons/io";
import { FaPencilAlt } from "react-icons/fa";
import { DialogDelete } from "./modal-delete-user";
import { useState } from "react";
interface User {
  _id: string;
  email: string;
  password: string;
}
interface TableUserProps {
  listUser: User[];
  handleDialogDelete: (item: User) => void;
}
const TableUser: React.FC<TableUserProps> = ({
  listUser,
  handleDialogDelete,
}) => {
  const user = listUser;
  console.log("<<<<< check user", user);
  return (
    <div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Numerical Order</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>PassWord</TableHead>
            <TableHead>Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {user.length !== 0 ? (
            user.map((item: User, index: number) => {
              return (
                <TableRow key={item._id} className="py-2">
                  <TableCell className="font-medium">{index + 1}</TableCell>
                  <TableCell>{item.email}</TableCell>
                  <TableCell>{item.password} </TableCell>
                  <TableCell className="flex gap-5">
                    {/* <DialogDemo open={open} setOpen={setOpen} /> */}
                    <IoMdCloseCircle
                      className="text-red-600 text-xl cursor-pointer"
                      onClick={() => handleDialogDelete(item)}
                    />
                    <FaPencilAlt className="text-blue-600 text-xl cursor-pointer" />
                  </TableCell>
                </TableRow>
              );
            })
          ) : (
            <TableRow>
              <TableCell
                colSpan={4}
                className="text-center font-medium text-lg"
              >
                No data
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
};

export default TableUser;
