import React, { useState } from "react";
import { VscDebug } from "react-icons/vsc";
import { MdFiberSmartRecord } from "react-icons/md";
import { SiBuildkite, SiDatabricks, SiSololearn } from "react-icons/si";
import { GrHost } from "react-icons/gr";
import { IoCodeSlash } from "react-icons/io5";
import sound from "../../../assets/sound.png";
import { Textarea } from "@headlessui/react";
import { fadeIn, staggerContainer } from "../../../utils/motion";
import { motion } from "framer-motion";
export default function SubHero() {
  const [activeName, setActiveName] = useState("Debug AI");
  const items = [
    { id: 1, icon: <VscDebug className="text-[20px]" />, label: "Debug AI" },
    {
      id: 2,
      icon: <MdFiberSmartRecord className="text-[20px]" />,
      label: "Coder AI",
    },
    {
      id: 3,
      icon: <SiBuildkite className="text-[20px]" />,
      label: "Website AI",
    },
    {
      id: 4,
      icon: <SiDatabricks className="text-[20px]" />,
      label: "Validate AI",
    },
    { id: 5, icon: <GrHost className="text-[20px]" />, label: "Deployer AI" },
    {
      id: 6,
      icon: <IoCodeSlash className="text-[20px]" />,
      label: "Image Generator AI",
    },
    { id: 7, icon: <SiSololearn className="text-[20px]" />, label: "Mentor AI" },
  ];

  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
    >
      <motion.div
        variants={fadeIn("up", "tween", 0.8, 1)}
        className="my-20 overflow-x-hidden "
      >
        
        <div className=" max-w-[1440px] mx-auto md:px-[2rem] px-[1rem] text-white">
          <div className="flex  md:gap-6 gap-4">
            <div className="grid lg:grid-cols-6  grid-cols-1 lg:gap-5 w-full">
              <div className="lg:col-span-2 flex flex-col justify-between bg-white/5 h-[500px] w-full rounded-[1.5rem] border border-[#ffffff14] py-5 px-5">
                <div>
                  <h4 className="md:text-[1.7rem] text-[1.2rem]">
                    {activeName}
                  </h4>
                  <div className="flex flex-col  gap-1">
                    <div className="mt-2">
                      <p className="text-xs mb-2">Enter Challenges</p>
                      <div className="w-full md:h-[50px] h-[43px] border border-[#ffffffb6] rounded-[0.5rem]">
                        <input
                          type="text"
                          className="w-full h-full bg-transparent outline-none px-3 placeholder:text-sm"
                          placeholder="Enter your code"
                        />
                      </div>
                    </div>
                    <div className="mt-2">
                      <p className="text-xs mb-2">Enter Language</p>
                      <div className="w-full md:h-[50px] h-[43px] border border-[#ffffffb6] rounded-[0.5rem]">
                        <input
                          type="text"
                          className="w-full h-full bg-transparent outline-none px-3 placeholder:text-sm"
                          placeholder="Enter your code"
                        />
                      </div>
                    </div>
                    <div className="mt-2">
                      <p className="text-xs mb-2">Enter your purpose prompt </p>
                      <div className="w-full h-[120px] border border-[#ffffffb6] rounded-[0.5rem]">
                        <Textarea
                          type="text"
                          className="w-full h-full bg-transparent outline-none p-3  placeholder:text-sm"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <a
            href="https://quill-ai-dapp.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex justify-center items-center px-5 h-[47px] text-xs font-medium tracking-[2.4px] uppercase text-white  bg-custom-gradient shadow-[0_-1px_10px_0px_rgba(153,0,255,0.15)] rounded-[6rem]"
                >
                  Generate
                </a>
              </div>
              <div className="lg:flex hidden md:col-span-4  h-[500px] w-full ">
                <div className="flex flex-col gap-5 h-full">
                  <div className="bg-white/5 h-[60%] rounded-[1.5rem] border border-[#ffffff14] py-5 px-5">
                    <h4 className="text-[1.7rem] mb-5"> Output Code</h4>
                    <h5>
                      Hey, welcome to Quill AI! Quill is an AI toolkit that
                      revolutionizes innovation with its no-code products. With
                      Quill, you can write code without any development
                      knowledge, validate and debug your existing code, and
                      create no-code, drag-and-drop websites effortlessly.
                      Hosting? We've got you covered—all through our
                      comprehensive set of toolkits. Whether you're a beginner
                      or a seasoned developer, Quill empowers you to bring your
                      ideas to life faster than ever. Say goodbye to complexity
                      and hello to seamless creativity with Quill AI, where
                      innovation meets simplicity. Let's build the future
                      together!
                    </h5>
                  </div>

                  <div className="bg-white/5 h-[40%] rounded-[1.5rem] border border-[#ffffff14] flex items-center justify-center">
                    <img src={sound} className="w-full h-full" alt="sound" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:hidden flex md:col-span-4   w-full px-[1rem] mt-5 text-white ">
          <div className="flex flex-col gap-5 h-full">
            <div className="bg-white/5 h-[60%] rounded-[1.5rem] border border-[#ffffff14] py-5 px-5">
              <h4 className="text-[1.7rem] mb-5"> Output Code</h4>
              <h5>
                Hey, welcome to Quill AI! Quill is an AI toolkit that
                revolutionizes innovation with its no-code products. With Quill,
                you can write code without any development knowledge, validate
                and debug your existing code, and create no-code, drag-and-drop
                websites effortlessly. Hosting? We've got you covered—all
                through our comprehensive set of toolkits. Whether you're a
                beginner or a seasoned developer, Quill empowers you to bring
                your ideas to life faster than ever. Say goodbye to complexity
                and hello to seamless creativity with Quill AI, where innovation
                meets simplicity. Let's build the future together!
              </h5>
            </div>

            <div className="bg-white/5 h-[40%] rounded-[1.5rem] border border-[#ffffff14] flex items-center justify-center">
              <img src={sound} className="w-full h-full" alt="sound" />
            </div>
          </div>
        </div>
        <div className="flex justify-center my-10 md:px-0 px-[2rem]">
          <div className="lg:border border-[#ffffff1f] lg:bg-[#0f0f0f] rounded-full ">
            <div className="flex flex-wrap justify-center gap-10 items-center  w-auto lg:h-[41px] h-full px-[1.25rem] text-white    ">
              <div className="flex items-center gap-2">
                <VscDebug className="text-[20px]" />
                <h4>Debug AI</h4>
              </div>
              <div className="flex items-center gap-2">
                <MdFiberSmartRecord className="text-[20px]" />
                <h4>Coder AI</h4>
              </div>
              <div className="flex items-center gap-2">
                <SiBuildkite className="text-[20px]" />
                <h4>Website AI</h4>
              </div>
              <div className="flex items-center gap-2">
                <SiDatabricks className="text-[20px]" />
                <h4>Validate AI</h4>
              </div>
              <div className="flex items-center gap-2">
                <GrHost className="text-[20px]" />
                <h4>Deployer AI</h4>
              </div>
              <div className="flex items-center gap-2">
                <GrHost className="text-[20px]" />
                <h4>Image Generator AI</h4>
              </div>
              <div className="flex items-center gap-2">
                <IoCodeSlash className="text-[20px]" />
                <h4>Code Translator AI</h4>
              </div>
              <div className="flex items-center gap-2">
                <SiSololearn className="text-[20px]" />
                <h4>Mentor AI</h4>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="prime-line-divider relative z-[1]"></div>
        </div>
      </motion.div>
    </motion.div>
  );
}
