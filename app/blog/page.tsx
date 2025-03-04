import Header from "../header";
import ListBlog from "./ListBlog";
export default function Blog() {
  return (
    <>
      <div className="bg-[rgb(31,41,55)] h-[1000px]">
        <div className="max-w-[1200px] mx-auto ">
          <Header />
        </div>
        <ListBlog />
      </div>
      <div></div>
    </>
  );
}
