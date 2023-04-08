import React from "react";

const About_footer = () => {
  return (
    <div>
      <div className="max-w-5xl mx-auto mt-20">
        <div className="text-center">
          <h3 className="font-thin uppercase text-neutral-800 tracking-[5px]">
            Trusted by
          </h3>
          <h3 className="text-2xl md:text-3xl font-semibold">Top Companies</h3>
        </div>
        <div className="flex flex-wrap justify-evenly mt-10">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Meta-Logo.png/2560px-Meta-Logo.png"
            className="w-36 h-20 m-6"
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Meta-Logo.png/2560px-Meta-Logo.png"
            className="w-36 h-20 m-6"
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Meta-Logo.png/2560px-Meta-Logo.png"
            className="w-36 h-20 m-6"
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Meta-Logo.png/2560px-Meta-Logo.png"
            className="w-36 h-20 m-6"
          />
        </div>
      </div>
    </div>
  );
};

export default About_footer;
