import React from "react";
import Lottie from "react-lottie-player";
import { motion } from "framer-motion";

import lottieJson from "../public/animation/90901-furniture-animation.json";
import sofaJson from "../public/animation/138678-sofa.json";
import Link from "next/link";
import bg from "../public/img/heroBG.png";

const Hero = () => {
  return (
    <div className="w-screen p-4 sm:p-0 flex flex-col items-center justify-evenly h-[calc(100vh-48px)]">
      <div className="hidden sm:block border-t-4 border-neutral-900">
        <Lottie
          loop
          play
          speed={1}
          animationData={lottieJson}
          className="max-w-6xl mx-auto"
        />
      </div>
      <div className="sm:hidden">
        <Lottie
          loop
          play
          speed={1}
          animationData={sofaJson}
          className="max-w-6xl mx-auto"
        />
      </div>
      <div className="text-neutral-900 text-right sm:text-left w-fit mx-auto">
        <motion.p
          initial={{
            x: -200,
            opacity: 0,
          }}
          animate={{
            x: 0,
            opacity: 1,
          }}
          transition={{
            duration: 1,
          }}
          className="text-6xl sm:text-7xl font-serif"
        >
          Modern
        </motion.p>
        <motion.p
          initial={{
            x: 200,
            opacity: 0,
          }}
          animate={{
            x: 0,
            opacity: 1,
          }}
          transition={{
            duration: 1,
          }}
          className="text-6xl sm:text-7xl font-serif lowercase"
        >
          & Minimalist
        </motion.p>
      </div>
      <div>
        <Link href="#category">
          <p className="uppercase tracking-widest py-2 px-6 border border-neutral-800 rounded-md hover:bg-neutral-800 hover:text-neutral-100 transition duration-300 ease-linear">
            get started
          </p>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
