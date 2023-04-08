import About_ImgDescription from "@/components/About_ImgDescription";
import About_footer from "@/components/About_footer";
import About_stats from "@/components/About_stats";
import React from "react";

const about = () => {
  return (
    <div className=" h-[calc(100vh-48px)] overflow-y-scroll overflow-x-hidden z-0  scrollbar-thin scrollbar-track-neutral-300 scrollbar-thumb-neutral-800 scrollbar-thumb-rounded-md">
      {/* headline */}
      <p className="font-thin uppercase text-neutral-800 tracking-[5px] text-center mt-4">
        about
      </p>
      <h2 className="text-2xl md:text-3xl font-serif text-neutral-800 text-center">
        Décor
      </h2>

      {/* image & description */}
      <About_ImgDescription />

      {/* stats */}
      <About_stats />

      {/* footer */}
      <About_footer />
    </div>
  );
};

export default about;
