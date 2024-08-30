import Image from "next/image";
import Link from "next/link";

const Links = [
  { href: "/", name: "Home" },
  { href: "#explore", name: "Explore" },
  { href: "#about", name: "About" },
  { href: "#menu", name: "Menu" },
  { href: "#contact", name: "Contact" },
];

//icon
import { FaYoutube, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-footer bg-cover bg-no-repeat top-16 relative" id="contact">
      <div className="absolute w-full h-full bg-black/[0.90] z-10 top-0"></div>
      <div className="container mx-auto z-20 relative">
        <div className="flex flex-col items-center justify-center gap-14">
          {/* logo */}
          <Link href="/" className="relative w-[120px] h-[50px] mx-auto" >
            <Image 
              src="/assets/logo.svg"
              fill
              alt=""
              className="object-contain"
            
            />
          </Link>
          {/* lo */}
          <nav className="flex flex-col xl:flex-row gap-8 xl:gap-12 justify-center items-center">
            {Links.map((link, index) => {
              return(
                <Link 
                href={link.href} 
                key={index}
                className="uppercase text-white tracking-widest hover:text-accent transition-all"
                >
                  {link.name}
                </Link>
              );
            })}

          </nav>
          {/* social */}
          <ul className="flex text-white text-xl gap-4">
              <Link 
              href="/"
              className="w-[54px] h-[54px] border border-white/[0.15] rounded-full flex items-center justify-center hover:text-accent transition-all"
              >
              <FaYoutube />
              </Link>
              <Link 
              href="/"
              className="w-[54px] h-[54px] border border-white/[0.15] rounded-full flex items-center justify-center hover:text-accent transition-all"
              >
              <FaFacebook />
              </Link>
              <Link 
              href="/"
              className="w-[54px] h-[54px] border border-white/[0.15] rounded-full flex items-center justify-center hover:text-accent transition-all"
              >
              <FaTwitter />
              </Link>
              <Link 
              href="/"
              className="w-[54px] h-[54px] border border-white/[0.15] rounded-full flex items-center justify-center hover:text-accent transition-all"
              >
              <FaInstagram />
              </Link>
          </ul>
          {/* copyrigt */}
          <div className="border-t border-white/10 text-[15px] text-white/70 font-light w-full flex items-center justify-center py-6">
            <p>&copy; Copyright 2024 -michael. All rights reserverd</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
