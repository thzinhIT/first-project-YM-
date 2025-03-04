import React from "react";
import Image from "next/image";
import dog from "../assets/img/Screenshot_2024-09-16_at_5.webp";
import avatar from "../assets/img/280475888_577995827081674_8909883022329014652_n.webp";
import { Button } from "@/components/ui/button";
const ListBlog = () => {
  return (
    <div>
      {" "}
      <div className="max-w-[1200px] mx-auto ">
        <div className="flex gap-6 border-b-2 border-white py-4">
          <div className="w-[32.5%] flex-shrink-0 cursor-pointer">
            <Image src={dog} alt="chó" className="!cursor-pointer" />
          </div>
          <div>
            <div className="flex items-center">
              <div className="flex items-center gap-2">
                <div className="cursor-pointer">
                  <Image
                    src={avatar}
                    alt="avatar"
                    className="w-9 h-9 rounded-full "
                  />
                </div>

                <div className="text-white font-semibold text-sm">
                  THÀNH VINH
                </div>
              </div>
              <div className="w-1 h-6 bg-white mx-4"></div>
              <time dateTime="2025-03-05" className="text-left text-white ">
                {" "}
                March 05, 2025
              </time>
            </div>
            <h2 className="my-3 font-bold text-2xl text-white cursor-pointer">
              A Black Cat always is being near my car
            </h2>
            <p className="text-white text-lg mb-4 ">
              Black cats are the subject of myth, legend, and superstition. They
              are often associated with witches and good or bad luck in European
              folklore. A black cat resting on a fence.
            </p>
            <Button
              variant="outline"
              className="bg-[rgb(204,204,204)] border-4  border-[rgb(99,102,241)] rounded-2xl hover:scale-105 transition-transform duration-[750ms]"
            >
              #Life
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListBlog;
