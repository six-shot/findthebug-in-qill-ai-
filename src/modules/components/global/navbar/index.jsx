import React, { useState } from "react";
import {
  FaAngleRight,
  FaChevronRight,
  FaMedium,
  FaTwitter,
} from "react-icons/fa6";
import quill from "../../../../assets/Logo1.png";
import { TbMenu } from "react-icons/tb";
import { motion } from "framer-motion";
import { navVariants } from "../../../../utils/motion";
import { AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { cn } from "../../../../utils/utils";
import { FaTelegramPlane } from "react-icons/fa";
import { toast } from "sonner";

const menuItems = [
  { id: "home", name: "Home" },
  { id: "#products", name: "Products" },
  { id: "#templates", name: "Templates" },
];

export default function Navbar() {
  const { scrollY } = useScroll();
  const [navbar, setNavbar] = useState(false);
  const showSidebar = () => setNavbar(!navbar);
  const closeSidebar = () => setNavbar(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [visible, setVisible] = useState(true);

  useMotionValueEvent(scrollY, "change", (current) => {
    if (typeof current === "number") {
      let direction = current - (scrollY.getPrevious() || 0);

      if (scrollY.get() < 90) {
        // also set true for the initial state
        setVisible(true);
        setIsScrolled(false);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
        setIsScrolled(true);
      }
    }
  });

  return (
    <motion.div
      variants={navVariants}
      initial="hidden"
      whileInView="show"
      className={cn(
        "   bg-black fixed w-full z-[10000] top-0",
        isScrolled ? "bg-black" : "bg-black "
      )}
    >
      <div className="max-w-[1440px] mx-auto  ">
        <div className="flex justify-between items-center md:px-[2rem] px-[1rem] h-[86px] relative ">
          <div className="flex gap-[1.5rem] items-center  pl-1 pr-2 py-1 rounded-full">
            <div className="flex items-center gap-2">
              <img
                className="w-[48px] h-[48px]  rounded-full"
                src={quill}
                alt="quill"
              />
              <h4 className="uppercase text-[20px] text-white">QUill Ai</h4>
            </div>
            <nav className="md:flex hidden">
              <ul className="flex items-center gap-3 text-white text-sm">
                {menuItems.map((item) => (
                  <a id={item.id} href={item.id}>
                    <li className="py-2.5 px-4 transition-all duration-300 hover:text-purple-500 hover:scale-105 cursor-pointer">
                      {item.name}
                    </li>
                  </a>
                ))}
              </ul>
            </nav>
          </div>

          <div className="md:hidden block fixed z-[999] right-6">
            <div onClick={showSidebar} className="cursor-pointer group ">
              <div className="space-y-[4px]">
                <span
                  className={`block h-[3px] w-[25px] origin-center rounded-full bg-[white] transition-transform ease-in-out ${
                    navbar ? "translate-y-1.5 rotate-45" : ""
                  }`}
                ></span>
                <span
                  className={`block h-[3px] w-[25px] origin-center rounded-full bg-[white] transition-all duration-500 ease-in-out ${
                    navbar ? "-translate-x-6 opacity-0" : ""
                  }`}
                ></span>
                <span
                  className={`block h-[3px] w-[25px] origin-center rounded-full bg-[white] transition-transform ease-in-out ${
                    navbar ? "-translate-y-2 -rotate-45" : ""
                  }`}
                ></span>
              </div>
            </div>
          </div>
          <div className="sm:flex">
            <nav
              className={`fixed top-0 right-0 w-full h-screen bg-black z-[99] transition-[right] duration-[250ms] ease-in ${
                navbar ? "right-0 duration-[200ms]" : "right-[-120%]"
              }`}
            >
              <div className="h-[86px] px-[1rem] flex items-center">
                <div className="flex items-center gap-2 ">
                  <img
                    className="w-[48px] h-[48px]  rounded-full"
                    src={quill}
                    alt="quill"
                  />
                  <h4 className="uppercase text-[20px] text-white">QUill Ai</h4>
                </div>
              </div>
              <div className="h-full mt-[15%]">
                <nav className="flex justify-center items-center flex-col gap-[15px] pt-[50px] px-6">
                  <ul className="flex flex-col items-center gap-3 text-white text-sm">
                    <li className="py-2.5 px-4  ">Home</li>
                    <li className="py-2.5 px-4  ">Product</li>
                    <li className="py-2.5 px-4  ">Features</li>
                    <li className="py-2.5 px-4   ">Buy</li>
                  </ul>
                  <a
                    href="https://quill-ai.gitbook.io/quill-ai"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="mt-2.5 flex items-center gap-2 px-5 h-[47px] text-xs font-medium tracking-[2.4px] uppercase text-white  bg-custom-gradient hover:bg-custom-gradientt shadow-[0_-1px_10px_0px_rgba(153,0,255,0.15)] rounded-[6rem] transition-all ease-linear duration-[250ms]">
                      Whitepaper
                      <span>
                        <FaChevronRight />
                      </span>
                    </button>
                  </a>
                  <div className="flex gap-4 items-center md:pb-0 pb-5 text-white">
                    <FaTwitter
                      className="hover:text-purple-500 transition-colors duration-300 transform hover:scale-110 cursor-pointer"
                      onClick={() => {
                        toast.success("Coming Soon !!!");
                      }}
                      size={24}
                    />

                    <FaTelegramPlane
                      className="hover:text-purple-500 transition-colors duration-300 transform hover:scale-110 cursor-pointer"
                      onClick={() => {
                        toast.success("Coming Soon !!!");
                      }}
                      size={24}
                    />
                  </div>
                </nav>
              </div>
            </nav>
          </div>
          <div className="md:flex gap-4 items-center hidden ">
            <div className="flex gap-4 items-center md:pb-0 pb-5 text-white">
              <FaTwitter
                className="hover:text-purple-500 transition-colors duration-300 transform hover:scale-110 cursor-pointer"
                onClick={() => {
                  toast.success("Coming Soon !!!");
                }}
                size={24}
              />

              <FaTelegramPlane
                className="hover:text-purple-500 transition-colors duration-300 transform hover:scale-110 cursor-pointer"
                onClick={() => {
                  toast.success("Coming Soon !!!");
                }}
                size={24}
              />

              <a
                href="https://quill-ai.gitbook.io/quill-ai"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="flex items-center gap-2 px-5 h-[47px] text-xs font-medium tracking-[2.4px] uppercase text-white bg-custom-gradient hover:bg-custom-gradientt shadow-[0_-1px_10px_0px_rgba(153,0,255,0.15)] rounded-[6rem] transition-all ease-linear duration-[250ms] hover:shadow-[0_0_20px_0px_rgba(153,0,255,0.3)] hover:scale-105">
                  Whitepaper
                  <span>
                    <FaChevronRight />
                  </span>
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
