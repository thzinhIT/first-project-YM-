import React from "react";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import { CgDarkMode } from "react-icons/cg";
import logo from "../app/assets/img/download.png";
import Link from "next/link";

const Header = () => {
  return (
    <div className="max-w-[1200px] mx-auto ">
      <header className="flex justify-between items-center py-4">
        <div>
          <FaGithub className="w-5 h-5 text-white cursor-pointer" />
        </div>
        <div className="flex gap-6 items-center">
          <span className="font-bold cursor-pointer text-white">
            <Link href="/">Home</Link>
          </span>
          <span>
            <Image src={logo} alt="logo" className="w-10 h-10 filter invert" />
          </span>
          <span className="font-bold cursor-pointer text-white">
            <Link href="/blog"> BLOG</Link>
          </span>
        </div>
        <div>
          <CgDarkMode className="w-6 h-6 text-white cursor-pointer" />
        </div>
      </header>
    </div>
  );
};

export default Header;
