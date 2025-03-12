"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const TagBlog = ({
  tagCurrent,
}: {
  tagCurrent: { id: number; tag: string[] };
}) => {
  const current = tagCurrent;
  const router = useRouter();

  const handleOnClickTag = (e: string) => {
    router.push(`/tab/${e}`);
  };

  return (
    <>
      {current?.tag?.map((item: string, index: number) => (
        <div key={index}>
          <Button
            variant="outline"
            className=" font-normal text-xs md:text-sm lg:text-lg  bg-[rgb(204,204,204)] border-4 border-[rgb(99,102,241)] rounded-2xl hover:scale-105 transition-transform duration-[750ms] dark:text-black  dark:hover:bg-gray-200"
            onClick={() => handleOnClickTag(item)}
          >
            #{item}
          </Button>
        </div>
      ))}
    </>
  );
};

export default TagBlog;
