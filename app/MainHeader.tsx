import React from "react";
import Image from "next/image";
import man from "../app/assets/img/___Pngtree___young_man_wears_vr_glasses_7262814.png";
import { IoIosSearch } from "react-icons/io";
import { Input } from "@/components/ui/input";
const MainHeader = () => {
  return (
    <div>
      <div className="max-w-[1200px] mx-auto flex items-center justify-between ">
        <div>
          <p className="text-2xl text-white mb-6">
            If you just work on stuff that you like and you're passionate about,
            you don't have to have a master plan with how things will play out.
          </p>
          <div className="flex items-center  ">
            <div className="rounded-tl-[10px] rounded-bl-[10px] h-10 bg-[rgb(55,65,81)] flex items-center justify-center pl-2">
              <IoIosSearch className=" text-[rgb(38,45,56)] w-6 h-6 " />
            </div>

            <Input
              className="w-2/3 h-10 bg-[rgb(55,65,81)] border-none rounded-tl-[0px] rounded-bl-[0px] rounded-tr-[10px] rounded-br-[10px] placeholder:text-white"
              placeholder="Search..."
            />
          </div>
        </div>
        <div className="w-[36.75%] flex-shrink-0">
          <Image src={man} alt="man" className="w-full animate-fly" />
        </div>
      </div>
    </div>
  );
};

export default MainHeader;
