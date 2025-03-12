"use client";
import { Divide } from "lucide-react";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import TagBlog from "@/components/page/TagBlog";
import Image from "next/image";
import { useRouter } from "next/navigation";
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
const ListSearch = () => {
  const [data, setData] = useState<BlogItem[]>([]);
  const searchParams = useSearchParams();
  console.log("<<<< check searchParams", searchParams.toString());
  const pageFromUrl: string = searchParams.get("search") || "";

  useEffect(() => {
    const fecthGet = async () => {
      const res = await fetch(
        `https://first-project-ym-e9fm.vercel.app/api/pagination?search${searchParams.toString()}`
      );

      const result = await res.json();
      setData(result.search);
    };
    fecthGet();
  }, [pageFromUrl]);
  useEffect(() => {
    console.log("Search Param Changed:", pageFromUrl);
  }, [searchParams]);
  console.log("data laaf", data);
  console.log("<<<< check res", pageFromUrl);
  const router = useRouter();
  const newArray = data.map(({ id, tag }) => ({ id, tag }));
  const handleOnClickBlog = (id: number) => {
    router.push(`/blog/${id}`);
  };

  return (
    <>
      {data.length === 0 ? (
        <div className="flex justify-center items-center text-white font-semibold text-lg mt-40">
          {" "}
          No result {searchParams.toString()}
        </div>
      ) : (
        data.map((item: any, index: number) => {
          return (
            <div key={item.id}>
              <div className="max-w-[1200px] mx-auto ">
                <div className="flex gap-6 border-b-2 border-white py-4 ">
                  <div className="w-[32.5%] flex-shrink-0 cursor-pointer relative">
                    <Image
                      src={item.image}
                      alt="chó"
                      fill
                      className="!cursor-pointer object-cover object-[center_top]"
                    />
                  </div>
                  <div className="min-h-[200px]">
                    <div className="flex items-center">
                      <div className="flex items-center gap-2">
                        <div className="cursor-pointer">
                          <Image
                            src={item.image}
                            width={36}
                            height={36}
                            alt="avatar"
                            className="w-9 h-9 rounded-full "
                            onClick={() => handleOnClickBlog(item.id)}
                          />
                        </div>

                        <div className="text-white font-semibold text-sm">
                          {item.author}
                        </div>
                      </div>
                      <div className="w-1 h-6 bg-white mx-4"></div>
                      <time
                        dateTime="2025-03-05"
                        className="text-left text-white "
                      >
                        {" "}
                        {item.createdAt}
                      </time>
                    </div>
                    <h2
                      className="my-3 font-bold text-2xl text-white cursor-pointer "
                      onClick={() => handleOnClickBlog(item.id)}
                    >
                      {item.title}
                    </h2>
                    <p className="text-white text-lg mb-4 ">{item.review}</p>
                    <div className="flex gap-2">
                      {" "}
                      {<TagBlog tagCurrent={newArray[index]} />}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })
      )}
    </>
  );
};

export default ListSearch;
