import React from "react";
import TagBlog from "@/components/page/TagBlog";
const SearchTags = () => {
  return (
    <div className="py-4 mb-8">
      {" "}
      <div className="mx-auto">
        <h3 className="text-center text-3xl mb-6">Search blog by tags</h3>
        <div className="flex justify-center gap-3">
          <TagBlog />
        </div>
      </div>
    </div>
  );
};

export default SearchTags;
