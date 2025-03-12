import Header from "../header";
import ListBlog from "./list-blog";
export default function Blog() {
  return (
    <>
      <div className="dark:bg-[rgb(31,41,55)]  bg-gray-700 min-h-[100vh] ">
        <div className="max-w-[1200px] mx-auto ">
          <Header />
        </div>
        <ListBlog />
      </div>
      <div></div>
    </>
  );
}
