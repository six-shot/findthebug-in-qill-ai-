import React from "react";
import { HeroSpotlight, Spotlight } from "../../components/ui/HeroSpotlight";
import Navbar from "../../components/global/navbar";
import { FaChevronRight } from "react-icons/fa6";
import { fadeIn, staggerContainer } from "../../../utils/motion";
import { motion } from "framer-motion";
import SubHero from "../subhero";
import Spline from "@splinetool/react-spline";

export function Hero() {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className="relative "
    >
      <Navbar />
      <div className=" w-full rounded-md flex flex-col md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
        <iframe
          src="https://my.spline.design/prismcoin-da75ffc5b85d8e7bca65b97b6166718f/"
          frameBorder="0"
          width="100%"
          height="100%"
          className="absolute md:top-[-20%] top-[-30%] w-full h-full z-0 "
        ></iframe>
        <div className="md:pt-[12.5rem] pt-[10rem] md:px-0 px-[1rem] max-w-[1440px]  mx-auto relative z-[100]  w-full  flex flex-col justify-center items-center">
          <motion.div
            variants={fadeIn("down", "tween", 0.6, 1)}
            className="flex gap-3 items-center text-[white] h-[41px] px-[1.25rem]  border border-[#ffffff1f] bg-[#0f0f0f] rounded-[6rem] text-sm"
          >
            <div className="w-[15px] h-[1px] bg-[#90f]" />
            <h4>Unlock Your Creative Potentials</h4>
            <div className="w-[15px] h-[1px] bg-[#90f]" />
          </motion.div>
          <motion.h1
            variants={fadeIn("down", "tween", 0.8, 1)}
            className="mt-10 md:text-[5rem] text-[3rem] font-medium leading-[1] text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50"
          >
            The Ultimate AI Toolkit for <br className="md:flex hidden " />{" "}
            Innovation and Creation
          </motion.h1>
          <motion.p
            variants={fadeIn("down", "tween", 1, 1)}
            className="mt-4 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto"
          >
            Get Your Projects Online Fast with the #1 AI Toolkit—No Coding or
            Design Skills Needed
          </motion.p>
          <motion.div
            variants={fadeIn("down", "tween", 1.2, 1)}
            className="mt-10"
          >
            <a
              href="https://quill-ai-dapp.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 h-[47px] text-xs font-medium tracking-[2.4px] uppercase text-white bg-custom-gradient hover:bg-custom-gradientt shadow-[0_-1px_10px_0px_rgba(153,0,255,0.15)] rounded-[6rem] transition-all ease-linear duration-[250ms] hover:shadow-[0_0_20px_0px_rgba(153,0,255,0.3)] hover:scale-105"
            >
              Enter Dapp
              <span>
                <FaChevronRight />
              </span>
            </a>
          </motion.div>
        </div>
        <div className="relative z-[100] ">
          <SubHero />
        </div>
      </div>
    </motion.div>
  );
}
