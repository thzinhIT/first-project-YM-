"use client";
import Header from "./header";
import MainHeader from "./MainHeader";
import SearchTags from "./search-tag";
import Articles from "./Articles";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import LoginModal from "./modal-login";
export default function Home() {
  interface Tag {
    id: number;
    tag: string[];
  }
  const [tag, setTag] = useState<Tag[]>([
    { id: 1, tag: ["Technology"] },
    { id: 2, tag: ["CMS"] },
    { id: 3, tag: ["Life"] },
    { id: 4, tag: ["English"] },
    { id: 5, tag: ["Styling"] },
    { id: 6, tag: ["Algorithm"] },
  ]);
  return (
    <>
      <div className="pb-5">
        <div className="dark:bg-[rgb(31,41,55)] bg-gray-700">
          <div className="max-w-[1200px] mx-auto ">
            <Header />
          </div>
          <MainHeader />
        </div>
        <div>
          <div className="py-4 mb-8">
            {" "}
            <div className="mx-auto">
              <h3 className="text-center text-3xl mb-6">Search blog by tags</h3>
              <div className="flex justify-center gap-3 mx-auto flex-wrap">
                {tag.map((item, index) => {
                  return (
                    <div key={item.id}>
                      <SearchTags tagList={tag[index]} />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <Articles />
          <LoginModal />
        </div>
      </div>

      <div></div>
    </>
  );
}
