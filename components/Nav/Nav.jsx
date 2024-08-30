  import React from "react";
  import { motion } from "framer-motion";
  import Link from "next/link";

  const heightAnimation = {
    initial: {
      height: 0,
      opacity: 0,
    },
    open: {
      height: "85vh",
      opacity: 1,
      transition: { duration: 0.5, ease: [0.75, 0, 0.23, 1] },
    },
    close: {
      height: 0,
      opacity: 0,
      transition: { duration: 0.5, ease: [0.75, 0, 0.23, 1] },
    },
  };

  const Nav = ({ setNavActive }) => {
    return (
      <motion.nav 
        variants={heightAnimation} 
        animate="open"
        exit="close"
        initial="initial" 
        className="bg-red-800 overflow-hidden fixed z-[50] top-0 left-0 w-full"
      >
        <div className="container mx-auto h-full flex items-center justify-center">
          <NavList closeNav={() => setNavActive(false)} />
        </div>
      </motion.nav>
    );
  };

  const Links = [
    { href: "/", name: "Home" },
    { href: "#explore", name: "Explore" },
    { href: "#about", name: "About" },
    { href: "#menu", name: "Menu" },
    { href: "#contact", name: "Contact" },
  ];

  const letterAnim = {
    initial: {
      y: "100%",
      opacity: 0
    },
    enter: (i) => ({
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: [0.60, 0, 0.20, 1], delay: i[0] },
    }),
    exit: (i) => ({
      y: "100%",
      opacity: 0,
      transition: { duration: 0.5, ease: [0.60, 0, 0.20, 1], delay: i[1] },
    }),
  };

  const getLetter = (name) => {
    return name.split("").map((letter, index) => (
      <motion.span 
        variants={letterAnim}
        initial="initial"
        animate="enter"
        exit="exit"
        custom={[index * 0.03, (name.length - index) * 0.01]}
        key={index}
      >
        {letter}
      </motion.span>
    ));
  };

  const NavList = ({ closeNav }) => {
    return (
      <ul className="flex flex-col gap-8 font-primary text-5xl font-bold text-white items-center uppercase">
        {Links.map((link, index) => (
          <Link 
            href={link.href} 
            key={index} 
            className="flex overflow-hidden hover:text-black transition-all"
            onClick={closeNav}
          >
            {getLetter(link.name)}
          </Link>
        ))}
      </ul>
    );
  };

  export default Nav;