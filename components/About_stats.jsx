import React from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";

const About_stats = () => {
  const count = useMotionValue(90);
  const rounded = useTransform(count, Math.round);
  const count2 = useMotionValue(60);
  const rounded2 = useTransform(count2, Math.round);
  const count3 = useMotionValue(7);
  const rounded3 = useTransform(count3, Math.round);

  const animation = () => animate(count, 120, { duration: 7 });
  const animation2 = () => animate(count2, 100, { duration: 7 });
  const animation3 = () => animate(count3, 25, { duration: 7 });

  return (
    <div className="bg-neutral-100 mt-16">
      <div className="flex flex-wrap justify-evenly max-w-5xl mx-auto p-6">
        <div>
          <div className="w-40 h-40 flex flex-col justify-center items-center">
            <motion.h1
              initial={false}
              whileInView={animation}
              className=" text-emerald-700 font-semibold after:content-['+'] text-5xl"
            >
              {rounded}
            </motion.h1>
            <p className="text-neutral-600 text-sm uppercase tracking-widest w-auto text-center">
              Custom projects
            </p>
          </div>
        </div>
        <div>
          <div className="h-40 flex flex-col justify-center items-center">
            <motion.h1
              initial={false}
              whileInView={animation2}
              className="text-emerald-700 font-semibold after:content-['%'] text-5xl"
            >
              {rounded2}
            </motion.h1>
            <p className="text-neutral-600 text-sm uppercase tracking-widest w-auto text-center">
              Client satisfaction
            </p>
          </div>
        </div>
        <div>
          <div className="w-40 h-40 flex flex-col justify-center items-center">
            <motion.h1
              initial={false}
              whileInView={animation3}
              className="text-emerald-700 font-semibold text-5xl"
            >
              {rounded3}
            </motion.h1>
            <p className="text-neutral-600 text-sm uppercase tracking-widest w-auto text-center">
              industry awards
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About_stats;
