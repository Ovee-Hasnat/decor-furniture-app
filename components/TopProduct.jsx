import { motion } from "framer-motion";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";

const TopProduct = () => {
  const settings = {
    dots: true,
    centerMode: false,
    centerPadding: "30px",
    slidesToShow: 5,
    speed: 500,
    slidesToScroll: 3,
    arrows: false,
    mobileFirst: true,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="h-[calc(100vh-48px)]">
      <div className="flex flex-col justify-evenly h-full">
        <div className="w-fit text-center mx-auto pt-2">
          <motion.p
            initial={{ x: -200 }}
            whileInView={{ x: 0 }}
            transition={{ duration: 1.5 }}
            className="text-2xl md:text-3xl font-serif text-neutral-800"
          >
            Best Selling
          </motion.p>
          <motion.p
            initial={{ x: 200 }}
            whileInView={{ x: 0 }}
            transition={{ duration: 1.5 }}
            className="font-thin uppercase text-neutral-800 tracking-[5px]"
          >
            products
          </motion.p>
        </div>
        <div className="p-4">
          <Slider {...settings}>
            <div className="h-96 px-2 text-center">
              <img
                src="https://images.unsplash.com/photo-1592078615290-033ee584e267?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
                className="w-full h-96 object-contain"
              />
              <p className="uppercase tracking-wider pt-2 font-extralight">
                comfy chair
              </p>
            </div>

            <div className="h-96 px-2 text-center">
              <img
                src="https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                className="w-full h-96 object-contain"
              />
              <p className="uppercase tracking-wider pt-2 font-extralight">
                The chair for kids
              </p>
            </div>
            <div className="h-96 px-2 text-center">
              <img
                src="https://images.unsplash.com/photo-1601366533287-5ee4c763ae4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=776&q=80"
                className="w-full h-96 object-contain"
              />
              <p className="uppercase tracking-wider pt-2 font-extralight">
                The posh chair
              </p>
            </div>
            <div className="h-96 px-2 text-center">
              <img
                src="https://images.unsplash.com/photo-1601601992154-ed98854c2867?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=778&q=80"
                className="w-full h-96 object-contain"
              />
              <p className="uppercase tracking-wider pt-2 font-extralight">
                The posh chair 2
              </p>
            </div>
            <div className="h-96 px-2 text-center">
              <img
                src="https://images.unsplash.com/photo-1656597256570-ee98218c7175?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                className="w-full h-96 object-contain"
              />
              <p className="uppercase tracking-wider pt-2 font-extralight">
                cafe in Portland
              </p>
            </div>
            <div className="h-96 px-2 text-center">
              <img
                src="https://images.unsplash.com/photo-1644204010323-da12ff5f5199?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                className="w-full h-96 object-contain"
              />
              <p className="uppercase tracking-wider pt-2 font-extralight">
                Comfy sofa
              </p>
            </div>
            <div className="h-96 px-2 text-center">
              <img
                src="https://images.unsplash.com/photo-1607809714110-e34f71c7b2ed?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=768&q=80"
                className="w-full h-96 object-contain"
              />
              <p className="uppercase tracking-wider pt-2 font-extralight">
                Cozy Chair
              </p>
            </div>
            <div className="h-96 px-2 text-center">
              <img
                src="https://images.unsplash.com/photo-1581539250439-c96689b516dd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80"
                className="w-full h-96 object-contain"
              />
              <p className="uppercase tracking-wider pt-2 font-extralight">
                The chair on the white
              </p>
            </div>
          </Slider>
        </div>
        <div className="w-fit mx-auto">
          <Link href="/category">
            <p className="border w-fit py-2 px-6 rounded-lg uppercase font-thin mx-auto border-neutral-400 hover:bg-emerald-800 hover:text-neutral-200 transition-all duration-300 ease-linear hover:tracking-widest drop-shadow-lg shadow-lg ">
              Explore more
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TopProduct;
