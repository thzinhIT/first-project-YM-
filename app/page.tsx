import Header from "./header";
import MainHeader from "./Mainheader";

export default function Home() {
  return (
    <>
      <div className="bg-[rgb(31,41,55)]">
        <div className="max-w-[1200px] mx-auto ">
          <Header />
        </div>
        <MainHeader />
      </div>
      <div></div>
    </>
  );
}
