import React from "react";

const Articles = () => {
  return (
    <div>
      <div className="max-w-[1200px] mx-auto ">
        <h2 className="font-bold text-3xl py-4 mb-4">Recent articles</h2>
        <div className="flex flex-wrap gap-7 mb-6">
          {/* item1 */}
          <div className="bg-[rgb(17,24,39)] p-4 rounded-[10px] w-[48%] ">
            <div className="flex items-center gap-4 mb-2">
              <div className="w-14 bg-sky-500 duration-700 h-0.5 cursor-pointer"></div>
              <time
                dateTime="2025-03-05"
                className="text-sky-500 font-semibold cursor-pointer"
              >
                March 05, 2025
              </time>
            </div>
            <h2 className="text-white font-bold cursor-pointer text-2xl py-2  ">
              A Black Cat always is being near my car
            </h2>
            <div className="cursor-pointer text-white text-lg">
              <p className="mb-8">
                Black cats are the subject of myth, legend, and superstition.
                They are often associated with witches and good or bad luck in
                European folklore. A black cat resting on a fence.
              </p>
            </div>

            <button className="text-sky-500 font-semibold cursor-pointer rounded-2xl p-2 hover:bg-sky-200 hover:translate-x-2  transition duration-300 ease-linear  ">
              Read More &gt;
            </button>
          </div>
          {/* item1 */}
          <div className="bg-[rgb(17,24,39)] p-4 rounded-[10px] w-[48%] ">
            <div className="flex items-center gap-4 mb-2">
              <div className="w-14 bg-sky-500 duration-700 h-0.5 cursor-pointer"></div>
              <time
                dateTime="2025-03-05"
                className="text-sky-500 font-semibold cursor-pointer"
              >
                March 05, 2025
              </time>
            </div>
            <h2 className="text-white font-bold cursor-pointer text-2xl py-2  ">
              A Black Cat always is being near my car
            </h2>
            <div className="cursor-pointer text-white text-lg">
              <p className="mb-8">
                Black cats are the subject of myth, legend, and superstition.
                They are often associated with witches and good or bad luck in
                European folklore. A black cat resting on a fence.
              </p>
            </div>

            <button className="text-sky-500 font-semibold cursor-pointer rounded-2xl p-2 hover:bg-sky-200 hover:translate-x-2  transition duration-300 ease-linear  ">
              Read More &gt;
            </button>
          </div>
          {/* item1 */}
          <div className="bg-[rgb(17,24,39)] p-4 rounded-[10px] w-[48%] ">
            <div className="flex items-center gap-4 mb-2">
              <div className="w-14 bg-sky-500 duration-700 h-0.5 cursor-pointer"></div>
              <time
                dateTime="2025-03-05"
                className="text-sky-500 font-semibold cursor-pointer"
              >
                March 05, 2025
              </time>
            </div>
            <h2 className="text-white font-bold cursor-pointer text-2xl py-2  ">
              A Black Cat always is being near my car
            </h2>
            <div className="cursor-pointer text-white text-lg">
              <p className="mb-8">
                Black cats are the subject of myth, legend, and superstition.
                They are often associated with witches and good or bad luck in
                European folklore. A black cat resting on a fence.
              </p>
            </div>

            <button className="text-sky-500 font-semibold cursor-pointer rounded-2xl p-2 hover:bg-sky-200 hover:translate-x-2  transition duration-300 ease-linear  ">
              Read More &gt;
            </button>
          </div>
          {/* item1 */}
          <div className="bg-[rgb(17,24,39)] p-4 rounded-[10px] w-[48%] ">
            <div className="flex items-center gap-4 mb-2">
              <div className="w-14 bg-sky-500 duration-700 h-0.5 cursor-pointer"></div>
              <time
                dateTime="2025-03-05"
                className="text-sky-500 font-semibold cursor-pointer"
              >
                March 05, 2025
              </time>
            </div>
            <h2 className="text-white font-bold cursor-pointer text-2xl py-2  ">
              A Black Cat always is being near my car
            </h2>
            <div className="cursor-pointer text-white text-lg">
              <p className="mb-8">
                Black cats are the subject of myth, legend, and superstition.
                They are often associated with witches and good or bad luck in
                European folklore. A black cat resting on a fence.
              </p>
            </div>

            <button className="text-sky-500 font-semibold cursor-pointer rounded-2xl p-2 hover:bg-sky-200 hover:translate-x-2  transition duration-300 ease-linear  ">
              Read More &gt;
            </button>
          </div>
        </div>
        <div className="flex justify-center items-center">
          {" "}
          <button className="bg-black text-white p-3 rounded-xl mx-auto inline-block">
            See more articles
          </button>
        </div>
      </div>
    </div>
  );
};

export default Articles;
