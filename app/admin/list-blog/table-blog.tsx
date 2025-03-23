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
const TableBlog = ({ data }: { data: Blog[] }) => {
  return (
    <Table>
      <TableCaption>A list of your recent invoices.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">STT</TableHead>

          <TableHead>Title</TableHead>
          <TableHead>Review</TableHead>
          <TableHead>Author</TableHead>
          <TableHead>Date</TableHead>
          <TableHead>Tag</TableHead>
          <TableHead>Action</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.length > 0 ? (
          data.map((item: Blog, index: number) => (
            <TableRow key={item.id}>
              <TableCell className="font-medium">{index + 1}</TableCell>
              <TableCell>{item.title}</TableCell>
              <TableCell>{item.review}</TableCell>
              <TableCell>{item.author}</TableCell>
              <TableCell>{item.createdAt}</TableCell>
              <TableCell>{item.tag.join(", ")}</TableCell>
              <TableCell className="flex gap-3 items-center justify-center">
                {" "}
                <IoMdCloseCircle className="text-red-500 text-lg" />{" "}
                <FaPencilAlt className="text-blue-500 text-lg" />{" "}
              </TableCell>
            </TableRow>
          ))
        ) : (
          <TableRow>
            <TableCell colSpan={4} className="text-center font-medium text-lg">
              No data
            </TableCell>
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
};

export default TableBlog;
