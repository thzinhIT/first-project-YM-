"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";

const TagBlog = () => {
  const [tag, setTag] = useState([
    { id: "1", title: "#Technology" },
    { id: "2", title: "#CMS" },
    { id: "3", title: "#Life" },
    { id: "4", title: "#English" },
    { id: "5", title: "#Styling" },
    { id: "6", title: "#Algorithm" },
  ]);
  return (
    <>
      {tag &&
        tag.length !== 0 &&
        tag.map((item, index) => {
          return (
            <div key={item.id}>
              <Button
                variant="outline"
                className="bg-[rgb(204,204,204)] border-4  border-[rgb(99,102,241)] rounded-2xl hover:scale-105 transition-transform duration-[750ms]"
              >
                {item.title}
              </Button>
            </div>
          );
        })}
    </>
  );
};

export default TagBlog;
