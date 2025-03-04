import Header from "@/app/header";
import Image from "next/image";
import dog from "../../assets/img/Screenshot_2024-09-16_at_5.webp";
import avatar from "../../assets/img/280475888_577995827081674_8909883022329014652_n.webp";
import { Button } from "@/components/ui/button";
import Describe from "./describe";
export default function DetailBlog() {
  return (
    <>
      <div className="bg-[rgb(31,41,55)] ">
        <div className="max-w-[1200px] mx-auto ">
          <Header />
        </div>
        <div className="max-w-[1200px] mx-auto py-12  flex gap-7 items-start">
          <div className="w-[75.25%]">
            <h1 className="font-bold text-3xl text-white mb-4">
              A Black Cat always is being near my car
            </h1>
            <div className="flex gap-2 items-center mb-6">
              <div className="cursor-pointer">
                <Image
                  src={avatar}
                  alt="avatar"
                  className="w-9 h-9 rounded-full "
                />
              </div>
              <div>
                <div className="text-white font-semibold text-sm">
                  THÀNH VINH
                </div>
                <time
                  dateTime="2025-03-05"
                  className="text-left text-white text-xs"
                >
                  {" "}
                  March 05, 2025
                </time>
              </div>
            </div>
            <p className="text-white text-xl">
              Black cats are the subject of myth, legend, and superstition. They
              are often associated with witches and good or bad luck in European
              folklore. A black cat resting on a fence.
            </p>
            <Image src={dog} alt="chó" className="" />
            <div>
              <p className="text-white text-lg my-4">
                The Cat Fanciers' Association (CFA) recognizes 22 cat breeds
                that can come with solid black coats. Black cats are often
                associated with mystery, superstition, and folklore across
                various cultures. In some places, they are considered symbols of
                bad luck, particularly in Western traditions, where they were
                historically linked to witches and the supernatural. However, in
                other cultures, like in Japan and the United Kingdom, black cats
                are seen as symbols of good fortune and protection.
              </p>
              <p className="text-white text-lg my-4">
                Black cats are also adored for their sleek appearance and
                distinct personalities. Their jet-black fur can look almost
                velvet-like, especially when hit by sunlight, creating a
                beautiful contrast with their usually golden or green eyes.
                Despite any myths surrounding them, many people treasure black
                cats for their elegance and playfulness.
              </p>
              <p className="text-white text-lg my-4">
                Do you have a black cat or have a specific story in mind about
                one?
              </p>
              <div className="my-6 border-b-2 border-white  "></div>
              <div className="flex  my-6 gap-2">
                <h3 className="text-white font-bold text-2xl">Tags:</h3>
                <Button
                  variant="outline"
                  className="bg-[rgb(204,204,204)] border-4  border-[rgb(99,102,241)] rounded-2xl hover:scale-105 transition-transform duration-[750ms]"
                >
                  #Life
                </Button>
              </div>
            </div>
          </div>
          <Describe />
        </div>
      </div>
      <div></div>
    </>
  );
}
