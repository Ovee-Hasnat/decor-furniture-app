import Link from "next/link";
import React from "react";

const Featured = () => {
  return (
    <div className="h-[calc(100vh-48px)]">
      <div className="h-full flex flex-col justify-evenly">
        <h3 className="text-lg sm:text-xl uppercase text-neutral-800 w-fit mx-auto tracking-[5px] pt-12">
          Featured
        </h3>
        <div className="p-4 flex flex-col h-full justify-evenly md:flex-row md:px-20 lg:px-44 md:space-x-2 md:h-[730px]">
          <div className="w-full h-52 md:h-[720px] md:w-2/4 md:hover:w-full md:hover:h-[720px] hover:h-72 transition-all duration-300 ease-linear">
            <Link href="#">
              <img
                src="https://images.unsplash.com/photo-1618220179428-22790b461013?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80"
                className="w-full h-full object-cover rounded-xl"
              />
            </Link>
          </div>

          <div className="w-full h-52 md:h-[720px]  md:hover:h-[720px] hover:h-72 transition-all duration-300 ease-linear">
            <Link href="#">
              <img
                src="https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                className="w-full h-full object-cover rounded-xl"
              />
            </Link>
          </div>
          <div className="w-full h-52 md:h-[720px] md:w-2/4 md:hover:w-full md:hover:h-[720px] hover:h-72 transition-all duration-300 ease-linear">
            <Link href="#">
              <img
                src="https://images.unsplash.com/photo-1609103110787-d4ad0e40687f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80"
                className="w-full h-full object-cover rounded-xl"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
