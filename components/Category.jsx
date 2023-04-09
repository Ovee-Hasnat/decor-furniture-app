import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/router";

const Category = () => {
  const Router = useRouter();
  return (
    <div className="h-[calc(100vh-48px)]">
      <div className="mt-16 flex flex-col h-full justify-between ">
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
        >
          <h3 className="sm:text-xl uppercase text-neutral-800 w-fit mx-auto tracking-[5px] pt-6">
            Complete
          </h3>
          <p className="text-2xl md:text-3xl font-serif w-fit mx-auto">
            Solutions
          </p>
        </motion.div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-1 gap-y-3 px-2 xl:px-44 ">
          <motion.div
            initial={{
              x: -100,
              scale: 0,
            }}
            whileInView={{
              x: 0,
              scale: 1,
            }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="categoryCard"
          >
            <div
              onClick={() => {
                Router.push(
                  {
                    pathname: `/projects/2001`,
                  },
                  `/projects/2001`
                );
              }}
            >
              <img
                className="w-56 h-52 object-cover rounded-md md:w-64 md:h-64 filter hover:brightness-75 transition-all duration-200 ease-linear"
                src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=958&q=80"
              />
              <p>Living</p>
            </div>
          </motion.div>
          <motion.div
            initial={{
              x: -100,
              scale: 0,
            }}
            whileInView={{
              x: 0,
              scale: 1,
            }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="categoryCard"
          >
            <div
              onClick={() => {
                Router.push(
                  {
                    pathname: `/projects/2002`,
                  },
                  `/projects/2002`
                );
              }}
            >
              <img
                className="w-56 h-52 object-cover rounded-md md:w-64 md:h-64 filter hover:brightness-75 transition-all duration-200 ease-linear"
                src="https://images.unsplash.com/photo-1617098591651-dd95032bc8bb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
              />
              <p>Dining</p>
            </div>
          </motion.div>
          <motion.div
            initial={{
              x: 100,
              scale: 0,
            }}
            whileInView={{
              x: 0,
              scale: 1,
            }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="categoryCard"
          >
            <div
              onClick={() => {
                Router.push(
                  {
                    pathname: `/projects/2003`,
                  },
                  `/projects/2003`
                );
              }}
            >
              <img
                className="w-56 h-52 object-cover rounded-md md:w-64 md:h-64 filter hover:brightness-75 transition-all duration-200 ease-linear"
                src="https://images.unsplash.com/photo-1600489000022-c2086d79f9d4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80"
              />
              <p>Kitchen</p>
            </div>
          </motion.div>
          <motion.div
            initial={{
              x: -100,
              scale: 0,
            }}
            whileInView={{
              x: 0,
              scale: 1,
            }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="categoryCard"
          >
            <div
              onClick={() => {
                Router.push(
                  {
                    pathname: `/projects/2004`,
                  },
                  `/projects/2004`
                );
              }}
            >
              <img
                className="w-56 h-52 object-cover rounded-md md:w-64 md:h-64 filter hover:brightness-75 transition-all duration-200 ease-linear"
                src="https://images.unsplash.com/photo-1595846519845-68e298c2edd8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
              />

              <p>office</p>
            </div>
          </motion.div>
        </div>
        <div className="w-full h-36 md:h-52 bg-[url('https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1700&q=80')] bg-fixed bg-cover  bg-right-top md:bg-center">
          <div className="w-full h-full bg-black/50 text-right">
            <div className="w-fit mx-auto flex flex-col justify-center h-full">
              <p className="text-white font-serif text-8xl mix-blend-overlay mt-3">
                décor
              </p>
              <p className="text-neutral-300 text-2xl tracking-[5px] font-thin lowercase">
                your dream
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
