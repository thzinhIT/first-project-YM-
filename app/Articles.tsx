import React from "react";
import Link from "next/link";
import { useState, useEffect } from "react";
import dayjs from "dayjs";

const Articles = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const articles = async () => {
      const res = await fetch("http://localhost:3000/api/hello");
      const result = await res.json();
      console.log("<<<< check đây  nghệ sĩ", result.data);
      setData(result.data.slice(0, 4));
    };
    articles();
  }, []);
  console.log("<<<< check đây  nghệ sĩ lần cuối", data);
  const formatDate = (dateString: string) => {
    return dayjs(dateString).format("DD/MM/YYYY HH:mm");
  };

  return (
    <div>
      <div className="max-w-[1200px] mx-auto ">
        <h2 className="font-bold text-3xl py-4 mb-4">Recent articles</h2>
        <div className="flex flex-wrap gap-7 mb-6 p-4 ">
          {data &&
            data.length > 0 &&
            data.map((item: any, index) => {
              return (
                <div
                  className=" w-full  bg-[rgb(17,24,39)] p-4 rounded-[10px] lg:w-[48%] md:w-[48%]  cursor-pointer"
                  key={item.id}
                >
                  <div className="flex items-center gap-4 mb-2">
                    <div className="w-14 bg-sky-500 duration-700 h-0.5 cursor-pointer"></div>
                    <time
                      dateTime="2025-03-05"
                      className="text-sky-500 font-semibold cursor-pointer"
                    >
                      {formatDate(item.createdAt)}
                    </time>
                  </div>
                  <h2 className="text-white font-bold cursor-pointer text-2xl py-2  ">
                    <Link href={`/blog/${item.id}`}>{item.title}</Link>
                  </h2>
                  <div className="cursor-pointer text-white text-lg">
                    <p className="mb-8">
                      <Link href={`/blog/${item.id}`}>{item.review} </Link>
                    </p>
                  </div>

                  <button className="bottom-4  text-sky-500 font-semibold cursor-pointer rounded-2xl p-2 hover:bg-sky-200 hover:translate-x-2  transition duration-300 ease-linear mt-4">
                    <Link href={`/blog/${item.id}`}>Read More &gt;</Link>
                  </button>
                </div>
              );
            })}
        </div>

        <button className="bg-black dark:bg-gray-50   text-white dark:text-black px-4 py-3 rounded-xl mx-auto block  ">
          <Link href={`/blog`}> See More Blog</Link>
        </button>

        {/* item1 */}

        {/* item1 */}
      </div>
    </div>
  );
};

export default Articles;
