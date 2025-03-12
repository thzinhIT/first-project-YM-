import React from "react";
import TagBlog from "@/components/page/TagBlog";
const SearchTags = ({
  tagList,
}: {
  tagList: { id: number; tag: string[] };
}) => {
  const tag = tagList;
  return (
    <div className="">
      {" "}
      <TagBlog tagCurrent={tag} />
    </div>
  );
};
export default SearchTags;
