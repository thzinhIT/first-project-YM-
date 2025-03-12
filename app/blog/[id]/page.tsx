"use client";
import Header from "@/app/header";
import Image from "next/image";
import dog from "../../assets/img/Screenshot_2024-09-16_at_5.webp";
import avatar from "../../assets/img/280475888_577995827081674_8909883022329014652_n.webp";
import { Button } from "@/components/ui/button";
import Describe from "./describe";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import TagBlog from "@/components/page/TagBlog";

type BlogItem = {
  id: number;
  title: string;
  content: string;
  author: string;
  createdAt: string;
  theory: string;
  image: string;
  tag: string[];
};

export default function DetailBlog() {
  const params = useParams();
  const id = params.id;
  const [data, setData] = useState<BlogItem[]>([]); // Sửa lại kiểu dữ liệu
  const newArray = data.map(({ id, tag }) => ({ id, tag }));

  console.log("<<<<<check ID", id);

  useEffect(() => {
    const fetchGet = async () => {
      try {
        const res = await fetch(
          "https://first-project-ym-e9fm.vercel.app/api/hello"
        );
        const result = await res.json();

        if (!result.data) {
          alert("Không có dữ liệu");
        } else {
          setData(result.data);
          console.log("<<<< check đây ", result.data);
        }
      } catch (error) {
        console.error("Lỗi khi lấy dữ liệu", error);
      }
    };

    fetchGet();
  }, []);
  console.log("data laaf", data);
  const newData = data.filter((check) => check.id === Number(id));
  console.log("<<< check ddata theo id", newData);

  return (
    <>
      <div className="dark:bg-[rgb(31,41,55)]  bg-gray-700  min-h-[100vh] ">
        <div className="max-w-[1200px] mx-auto ">
          <Header />
        </div>
        <div className="max-w-[1200px] mx-auto py-12  flex gap-7 items-start">
          {newData.length > 0 && (
            <div className="w-[75.25%]">
              <h1 className="font-bold text-3xl text-white mb-4">
                {newData[0].author}
              </h1>
              <div className="flex gap-2 items-center mb-6">
                <div className="cursor-pointer">
                  <Image
                    src={newData[0].image}
                    alt="avatar"
                    className="w-9 h-9 rounded-full "
                    width={35}
                    height={35}
                  />
                </div>
                <div>
                  <div className="text-white font-semibold text-sm">
                    {newData[0].author}
                  </div>
                  <time
                    dateTime="2025-03-05"
                    className="text-left text-white text-xs"
                  >
                    {" "}
                    {newData[0].createdAt}
                  </time>
                </div>
              </div>
              <div dangerouslySetInnerHTML={{ __html: newData[0].content }} />
              <div>
                <div className="my-6 border-b-2 border-white  "></div>
                <div className="flex  my-6 gap-2">
                  <h3 className="text-white font-bold text-2xl">Tags:</h3>

                  {newData[0].tag.map((item, index) => {
                    return <TagBlog tagCurrent={newArray[index]} />;
                  })}
                </div>
              </div>
            </div>
          )}
          <Describe />
        </div>
      </div>
      <div></div>
    </>
  );
}
