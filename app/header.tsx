import React from "react";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import { CgDarkMode } from "react-icons/cg";
import logo from "../app/assets/img/download.png";
import Link from "next/link";
import ModeToggle from "../app/test/page";

const Header = () => {
  const [position, setPosition] = React.useState("bottom");
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
          <button className="dark:bg-[rgb(31,41,55)] bg-gray-700 mr-4 font-semibold text-sm">
            Log out
          </button>
          {/* <CgDarkMode className="w-6 h-6 text-white cursor-pointer" /> */}
          <ModeToggle />
        </div>
      </header>
    </div>
  );
};

export default Header;
