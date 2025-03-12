import React from "react";
import Image from "next/image";
import avatar from "../../assets/img/280475888_577995827081674_8909883022329014652_n.webp";

const Describe = () => {
  return (
    <div className="p-4 bg-white rounded-xl w-[24.25%] sticky top-[50px] ">
      <div className="py-4">
        <div className="flex items-center gap-2 ">
          <div>
            <Image
              src={avatar}
              alt="avatar"
              className="w-16 h-16 rounded-full"
            />
          </div>
          <div className="uppercase font-semibold text-black ">Thành vinh</div>
        </div>
        <div>
          <p className="text-black">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. Hihi haha hehe
          </p>
        </div>
      </div>
    </div>
  );
};

export default Describe;
