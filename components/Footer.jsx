import React from "react";
import { motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";
import { DevicePhoneMobileIcon } from "@heroicons/react/24/solid";
import { SocialIcon } from "react-social-icons";

const Footer = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 600px)" });

  return (
    <div className="h-[calc(100vh-48px)]">
      <div className="flex flex-col h-full justify-between items-center">
        <div className="text-center mt-10">
          <h3 className="text-2xl md:text-3xl font-serif text-neutral-800 text-center">
            Get a Quote
          </h3>
          <p className="font-thin lowercase px-6 py-1 text-neutral-500 tracking-[1px]">
            Let us help you find the perfect solution for your home.
          </p>
        </div>

        <div>
          <DevicePhoneMobileIcon className="w-7 h-7 inline-block" />
          <p className="inline-block uppercase font-medium">
            {" "}
            Call us <span className="text-yellow-500">now</span>
          </p>
          <ul className="w-fit mx-auto my-2 text-lg">
            <li>012 3456 789</li>
            <li>012 3456 789</li>
            <li>012 3456 789</li>
          </ul>
        </div>

        <div className="w-fit mx-auto">
          <motion.img
            initial={
              isMobile ? { x: -50, opacity: 0 } : { x: -400, opacity: 0 }
            }
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.5 }}
            src="/img/bottom1.png"
            className="inline-block h-14 sm:h-24 xl:h-32"
          />
          <motion.img
            initial={isMobile ? { x: 50, opacity: 0 } : { x: 400, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.5 }}
            src="/img/bottom2.png"
            className="inline-block h-14 sm:h-24 xl:h-32"
          />
        </div>

        <div className="bg-neutral-800 h-96 w-full p-4 flex flex-col items-center justify-evenly md:h-72">
          <div className="flex flex-col lg:flex-row lg:space-x-6 w-fit items-center mx-auto">
            <h4 className="text-neutral-100 font-light tracking-widest">
              Subscribe to get our regular updates
            </h4>
            {/* <input
              type="email"
              className="my-2 rounded-md h-7 w-full lg:h-9 p-2"
              placeholder="Email adrress"
            />
            <button className="text-neutral-500 inline-block border rounded-md w-32 lg:w-44 lg:h-9">
              Submit
            </button> */}

            <form className="w-full max-w-sm">
              <div className="flex items-center border-b border-emerald-700 py-2">
                <input
                  className="appearance-none bg-transparent border-none w-full text-neutral-400 mr-3 px-2 leading-tight focus:outline-none focus:placeholder-transparent"
                  type="text"
                  placeholder="Email"
                />
                <button
                  className="flex-shrink-0 bg-emerald-700 hover:bg-emerald-800 border-emerald-700 hover:border-emerald-800 text-sm border-4 text-white py-1 px-2 rounded"
                  type="button"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>

          <div className="flex flex-col items-center space-y-2">
            <p className="uppercase font-thin text-neutral-300 inline-block">
              Find us on
            </p>
            <div>
              <SocialIcon
                className="mx-1 scale-75 "
                bgColor="#606060"
                url="https://facebook.com"
              />
              <SocialIcon
                className="mx-1 scale-75 "
                bgColor="#606060"
                url="https://instagram.com"
              />
              <SocialIcon
                className="mx-1 scale-75 "
                bgColor="#606060"
                url="https://whatsapp.com"
              />
              <SocialIcon
                className="mx-1 scale-75 "
                bgColor="#606060"
                url="https://pinterest.com"
              />
              <SocialIcon
                className="mx-1 scale-75"
                bgColor="#606060"
                url="https://tiktok.com"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
