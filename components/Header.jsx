import React from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

const Header = () => {
  function openNav() {
    document.getElementById("sideMenu").style.width = "250px";
  }

  function closeNav() {
    document.getElementById("sideMenu").style.width = "0";
  }

  return (
    <header>
      <div className="bg-neutral-800 w-full h-12 relative">
        <div className="max-w-7xl flex justify-between items-center h-full px-2 mx-auto">
          <div>
            <Link href="/">
              <img
                src="/logo/logo.png"
                className="transform scale-75 sm:scale-95"
              />
            </Link>
          </div>
          <div>
            <ul className="space-x-10 hidden md:flex text-neutral-200 font-thin uppercase tracking-widest">
              <Link
                href="/"
                className="block group transition duration-300 w-fit mx-auto"
              >
                <li>Home</li>
                <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-emerald-700"></span>
              </Link>
              <Link
                href="#category"
                className="block group transition duration-300 w-fit mx-auto"
              >
                <li>Category</li>
                <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-emerald-700"></span>
              </Link>
              <Link
                href="/about"
                className="block group transition duration-300 w-fit mx-auto"
              >
                <li>About Us</li>
                <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-emerald-700"></span>
              </Link>
              <Link
                href="/contact"
                className="block group transition duration-300 w-fit mx-auto"
              >
                <li>Contact</li>
                <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-emerald-700"></span>
              </Link>
            </ul>
          </div>
          <div className="md:hidden">
            <Bars3Icon
              className="h-9 w-9 text-white font-semibold cursor-pointer hover:scale-110 transition duration-300 ease-linear"
              onClick={openNav}
            />
          </div>
        </div>
        <div
          id="sideMenu"
          className="fixed h-screen w-0 bg-neutral-800 top-0 right-0 transition-all duration-300 ease-linear z-50"
        >
          <div>
            <ul className="text-neutral-200 font-light uppercase tracking-widest text-center space-y-7">
              <XMarkIcon
                className="h-9 font-semibold mt-16 w-fit mx-auto hover:scale-125 hover:text-white transition duration-300 ease-linear cursor-pointer"
                onClick={closeNav}
              />
              <Link
                href="/"
                className="block group transition duration-300 w-fit mx-auto"
              >
                <li>Home</li>
                <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-emerald-700"></span>
              </Link>
              <Link
                href="#category"
                className="block group transition duration-300 w-fit mx-auto"
              >
                <li>Category</li>
                <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-emerald-700"></span>
              </Link>
              <Link
                href="/about"
                className="block group transition duration-300 w-fit mx-auto"
              >
                <li>About Us</li>
                <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-emerald-700"></span>
              </Link>
              <Link
                href="/contact"
                className="block group transition duration-300 w-fit mx-auto"
              >
                <li>Contact</li>
                <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-emerald-700"></span>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
