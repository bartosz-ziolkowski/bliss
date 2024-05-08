"use client";
import Image from "next/image";

import React from "react";
import wireframes from "@/public/images/wireframes.png";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="text-orange bg-beige flex flex-col items-center pb-4">
      <div className="mt-12 text-6xl font-extrabold [text-wrap:balance] bg-clip-text bg-gradient-to-r from-slate-200/60 to-50% to-slate-200">
        Making Chefs' Lives Easier with{" "}
        <span className="text-remi-blue inline-flex text-6xl flex-col h-[calc(theme(fontSize.6xl)*theme(lineHeight.tight))] md:h-[calc(theme(fontSize.6xl)*theme(lineHeight.tight))] overflow-hidden">
          <ul className="block animate-text-slide-5 text-left leading-tight [&_li]:block">
            <li>Planning</li>
            <li>Mise en Place</li>
            <li>Inventory</li>
            <li>Communication</li>
            <li>Mental Health</li>
            <li aria-hidden="true">Planning</li>
          </ul>
        </span>
      </div>
      <motion.div
        animate={{ opacity: 1, y: 0, transition: { duration: 0.7 } }} // Adjust duration as needed
        initial={{ opacity: 0, y: "100vh" }} // Start from the bottom of the page
      >
        <Image src={wireframes} alt="wireframes" width={1250} height={663} />
      </motion.div>
    </section>
  );
};

export default Hero;
