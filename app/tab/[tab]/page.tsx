"use client";
import Header from "@/app/header";
import { useState, useEffect } from "react";
import Image from "next/image";
import TagBlog from "@/components/page/TagBlog";
import { useRouter, useSearchParams } from "next/navigation";
export default function TagPage(params: any) {
  type Post = {
    id: number;
    title: string;
    content: string;
    author: string;
    createdAt: string;
    image: string;
    tag: string[];
    review: string;
  };
  const [data, setData] = useState<Post[]>([]);
  const filter = data.filter((post) => {
    return post.tag.includes(params.params.tab);
  });
  const newArray = filter.map(({ id, tag }) => ({ id, tag }));
  console.log("<<<< check arr", newArray);

  useEffect(() => {
    const fecthGet = async () => {
      const res = await fetch(
        `https://first-project-ym-e9fm.vercel.app/api/pagination?tab=${params.params.tab}`
      );
      const result = await res.json();

      if (!result.data) {
        alert("ko có dữ liệu ");
      } else {
        setData(result.tag);
        console.log("<<<< check đây ", result.tag);
      }
    };

    fecthGet();
  }, []);
  console.log("<<< check tag,", params.params.tab);
  console.log(filter);
  const router = useRouter();
  const handleOnClickBlog = (id: number) => {
    router.push(`/blog/${id}`);
  };

  return (
    <>
      <div className="dark:bg-[rgb(31,41,55)] bg-gray-700 overflow-hidden ">
        <div className="max-w-[1200px] mx-auto ">
          <Header />
        </div>
      </div>
      <div className="dark:bg-[rgb(31,41,55)] bg-gray-700  h-[100vh] ">
        <div>
          {filter &&
            filter.length !== 0 &&
            filter.map((item: any, index) => {
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
                          className="my-3 font-bold text-2xl text-white cursor-pointer"
                          onClick={() => handleOnClickBlog(item.id)}
                        >
                          {item.title}
                        </h2>
                        <p className="text-white text-lg mb-4 ">
                          {/* Black cats are the subject of myth, legend, and
                      superstition. They are often associated with witches and
                      good or bad luck in European folklore. A black cat resting
                      on a fence. */}
                          {item.review}
                        </p>
                        <div className="flex gap-2">
                          {" "}
                          <TagBlog tagCurrent={newArray[index]} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
}
