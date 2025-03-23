"use client";
import React, { useState } from "react";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";

import logo from "../app/assets/img/download.png";
import Link from "next/link";
import ModeToggle from "../app/test/page";
import { useRouter } from "next/navigation";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { set } from "zod";
const Header = () => {
  const [position, setPosition] = React.useState("bottom");
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const checkToken = () => {
    if (
      localStorage.getItem("token") === null &&
      localStorage.getItem("role") === null
    ) {
      alert(" chưa đăng nhập kìa a 2");
    } else {
      setOpen(true);
    }
  };
  const handleOnClickLogOut = () => {
    localStorage.removeItem("token"); // Xóa token
    localStorage.removeItem("role"); // Xóa role
    router.push("/login");
  };
  return (
    <div className="max-w-[1200px] mx-auto ">
      <header className="flex justify-between items-center py-4 px-4  lg:px-4 md:px-4">
        <div>
          <Link href={"https://github.com/thzinhIT"} target="_blank">
            <FaGithub className="w-5 h-5 text-white cursor-pointer" />
          </Link>
        </div>
        <div className="flex gap-6 items-center">
          <span className="font-bold cursor-pointer text-white">
            <Link href="/">Home</Link>
          </span>
          <span>
            <Image
              src={logo}
              alt="logo"
              className="w-10 h-10 filter invert cursor-pointer"
            />
          </span>
          <span className="font-bold cursor-pointer text-white">
            <Link href="/blog"> Blog</Link>
          </span>
        </div>
        <div>
          <button
            className="dark:bg-[rgb(31,41,55)] bg-gray-700 mr-4 font-bold "
            onClick={() => {
              checkToken();
            }}
          >
            Log out
          </button>
          {/* <CgDarkMode className="w-6 h-6 text-white cursor-pointer" /> */}
          <ModeToggle />
        </div>
      </header>
      <AlertDialog open={open}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>
              Are you sure you want to log out?
            </AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. Logging out will end your session
              and remove your access until you sign in again.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel onClick={() => setOpen(false)}>
              Cancel
            </AlertDialogCancel>
            <AlertDialogAction onClick={() => handleOnClickLogOut()}>
              Log Out
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default Header;
