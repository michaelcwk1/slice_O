"use client";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import Nav from "./Nav/Nav";

const Header = () => {
  const [navActive, setNavActive] = useState(false);

  const toggleNav = () => {
    setNavActive(!navActive);
  };

  return (
    <header className="absolute top-[40px] left-0 right-0 z-[60]">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          {/* logo */}
          <Link href="/" className="relative w-[100px] h-[40px] xl:w-[120px] xl:h-[40px] z-[60]">
            <Image src="/assets/logo.svg" fill alt="" className="object-contain" />
          </Link>
          {/* nav button */}
          <button
            onClick={toggleNav}
            className="w-8 h-6 text-accent relative flex items-center justify-center z-[60] outline-none"
          >
            <span
              className={`w-full h-[1.5px] bg-white absolute left-0 transition-all duration-300 ${
                navActive ? "top-1/2 rotate-45" : "top-0"
              }`}
            ></span>
            <span
              className={`w-full h-[1.5px] bg-white absolute left-0 transition-all duration-300 ${
                navActive ? "opacity-0" : "top-1/2"
              }`}
            ></span>
            <span
              className={`w-full h-[1.5px] bg-white absolute left-0 transition-all duration-300 ${
                navActive ? "-rotate-45 top-1/2" : "bottom-0"
              }`}
            ></span>
          </button>
        </div>
      </div>
      <AnimatePresence mode="wait">
        {navActive && <Nav setNavActive={setNavActive} />}
      </AnimatePresence>
    </header>
  );
};

export default Header;