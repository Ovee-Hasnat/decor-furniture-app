import React from "react";
import { motion } from "framer-motion";
import Contact_Info from "@/components/Contact_Info";

const contact = () => {
  return (
    <div className="h-[calc(100vh-48px)] overflow-y-scroll overflow-x-hidden z-0  scrollbar-thin scrollbar-track-neutral-300 scrollbar-thumb-neutral-800 scrollbar-thumb-rounded-md">
      <div>
        {/* headline */}
        <div
          className=" bg-[url('https://images.unsplash.com/photo-1602364557801-8908351b0c7e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80')] md:bg-[url('https://images.unsplash.com/photo-1606744824163-985d376605aa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80')]
        
        h-[500px] md:h-[700px] bg-fixed bg-contain sm:bg-cover md:bg-bottom"
        >
          <div className="w-full h-full bg-black/50 flex items-center justify-center bg-fixed">
            <motion.h2
              initial={{ scale: 2 }}
              whileInView={{ scale: 1.2 }}
              transition={{ duration: 1 }}
              className="text-4xl font-serif text-white text-center"
            >
              Reach Out
            </motion.h2>
          </div>
        </div>

        {/* Contact Info */}
        <Contact_Info />
      </div>
    </div>
  );
};

export default contact;
