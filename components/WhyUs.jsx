import React, { useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Lottie from "react-lottie-player";
import { motion, useMotionValue, useTransform, animate, } from "framer-motion";

import payment from "../public/animation/33810-payments.json";
import delivery from "../public/animation/113226-delivery-man-with-truck-lottie-animation.json";
import service from "../public/animation/103748-customer-service-man-waving-mobile-phone-repair.json";

const WhyUs = () => {
  const settings2 = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    rtl: true,
  };

  const count = useMotionValue(60);
  const rounded = useTransform(count, Math.round);

  const animation = () => animate(count, 100, { duration: 7 });

  return (
    <div className="h-[calc(100vh-48px)]">
      <div className="flex flex-col h-full justify-around">
        <h3 className="text-2xl md:text-3xl font-serif text-neutral-800 text-center pt-4">
          Why Décor
        </h3>
        <div className="md:flex md:justify-evenly">
          <div className="flex items-center md:flex-col md:text-center">
            <Lottie
              loop
              play
              speed={1}
              animationData={payment}
              className="w-40 h-40 md:w-52 md:h-52 flex-1"
            />
            <div className="flex-1">
              <h4 className="font-serif text-xl">Easy Payment</h4>
              <p className="text-neutral-600 text-sm">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </p>
            </div>
          </div>
          <div className="flex flex-row-reverse text-right md:text-center items-center md:flex-col">
            <Lottie
              loop
              play
              speed={1}
              animationData={delivery}
              className="w-40 h-40 md:w-52 md:h-52 flex-1"
            />
            <div className="flex-1">
              <h4 className="font-serif text-xl">Home Delivery</h4>
              <p className="text-neutral-600 text-sm">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </p>
            </div>
          </div>
          <div className=" flex items-center md:flex-col md:text-center">
            <Lottie
              loop
              play
              speed={1}
              animationData={service}
              className="w-40 h-40 md:w-52 md:h-52 flex-1"
            />
            <div className="flex-1">
              <h4 className="font-serif text-xl">Excellent Service</h4>
              <p className="text-neutral-600 text-sm">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </p>
            </div>
          </div>
        </div>
        <div className="bg-neutral-800 w-full h-12 mx-auto md:w-44 md:h-44 md:border-2 border-neutral-500 md:rounded-full flex md:flex-col justify-center items-center">
          <motion.h1
          initial={false}
          whileInView={animation}
          className="text-4xl text-yellow-400 font-semibold after:content-['+'] md:text-6xl"
          >
            {rounded}
          </motion.h1>
          <p className="text-neutral-400 text-sm uppercase tracking-widest ml-4 w-14 md:w-auto">satisfied clients</p>
        </div>

        <div className="bg-neutral-100 py-2">
          <h3 className="w-fit mx-auto text-lg underline pb-9">Testimonials</h3>
          <Slider {...settings2}>
            <div className="px-4">
              <div className="flex items-center h-full justify-center md:w-[600px] mx-auto">
                <img
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
                  className="w-24 h-24 md:w-32 md:h-32 object-cover rounded-full"
                />

                <p className="text-sm text-neutral-800 pl-6 first-letter:text-2xl w-72 md:w-auto">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum
                  veritatis iste inventore corrupti, voluptate numquam, dolor
                  deleniti, odio maiores iure officia?
                </p>
              </div>
            </div>
            <div className="px-4">
              <div className="flex items-center h-full justify-center md:w-[600px] mx-auto">
                <img
                  src="https://images.unsplash.com/photo-1521119989659-a83eee488004?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=846&q=80"
                  className="w-24 h-24 md:w-32 md:h-32 object-cover rounded-full"
                />

                <p className="text-sm text-neutral-800 pl-6 first-letter:text-2xl w-72 md:w-auto">
                  Dorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Necessitatibus, vitae non est excepturi eligendi saepe sed
                  deleniti.
                </p>
              </div>
            </div>
            <div className="px-4">
              <div className="flex items-center h-full justify-center md:w-[600px] mx-auto">
                <img
                  src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                  className="w-24 h-24 md:w-32 md:h-32 object-cover rounded-full"
                />

                <p className="text-sm text-neutral-800 pl-6 first-letter:text-2xl w-72 md:w-auto">
                  Eos blanditiis vero nemo voluptas laboriosam, porro. Odio a
                  cupiditate veritatis! Nobis voluptatem, adipisci ea eius
                  minima sit magnam odit.
                </p>
              </div>
            </div>
          </Slider>
        </div>
        
      </div>
    </div>
  );
};

export default WhyUs;
