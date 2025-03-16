"use client";
import React from "react";
import { motion } from "framer-motion";
import { CTAContainer } from "../../components/ui/Cta";



export function CTA() {
  return (
    <CTAContainer className="">
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className=" bg-black py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl text-white"
      >
        Build Websites <br /> the right way
      </motion.h1>
    </CTAContainer>
  );
}
