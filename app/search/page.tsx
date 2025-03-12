"use client";
import React, { Suspense } from "react";
import Header from "../header";
import ListSearch from "./[search]/list-search";
const pageSearch = () => {
  return (
    <>
      <div>
        <div className="dark:bg-[rgb(31,41,55)]  bg-gray-700 min-h-[100vh] ">
          <div className="max-w-[1200px] mx-auto ">
            <Header />
          </div>
          <Suspense>
            {" "}
            <ListSearch />
          </Suspense>
        </div>
      </div>
      <div></div>
    </>
  );
};

export default pageSearch;
