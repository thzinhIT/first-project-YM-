import Header from "./header";
import MainHeader from "./MainHeader";
import SearchTags from "./SearchTags";
import { Button } from "@/components/ui/button";
import Articles from "./Articles";

export default function Home() {
  return (
    <>
      <div className="h-[10000px]">
        <div className="bg-[rgb(31,41,55)]">
          <div className="max-w-[1200px] mx-auto ">
            <Header />
          </div>
          <MainHeader />
        </div>
        <div>
          <SearchTags />
          <Articles />
        </div>
      </div>

      <div></div>
    </>
  );
}
