"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import wireframes from "@/public/images/wireframes.png";

const Hero = () => {
  return (
    <section className="bg-beige flex flex-col items-center pb-4 bg-gradient-400 animate-gradient bg-gradient-to-br from-green via-beige to-bliss-blue">
      <div className="mt-12 text-3xl lg:text-4xl font-extrabold font-basker-ville relative [text-wrap:balance] bg-clip-text bg-gradient-to-r from-slate-200/60 to-50% to-slate-200 text-center">
        Time to Join Banking With{" "}
        <span className="text-orange inline-flex text-3xl lg:text-4xl flex-col h-[calc(theme(fontSize.2xl)*theme(lineHeight.tight))] md:h-[calc(theme(fontSize.4xl)*theme(lineHeight.tight))] overflow-hidden">
          <ul className="block animate-text-slide-3 text-left leading-tight [&_li]:block">
            <li>Collaboration</li>
            <li>Planning</li>
            <li>Communication</li>
            <li aria-hidden="true">Collaboration</li>
          </ul>
        </span>
      </div>
      <motion.div
        animate={{ opacity: 1, y: 0, transition: { duration: 0.7 } }}
        initial={{ opacity: 0, y: "100vh" }}
      >
        <Image
          src={wireframes}
          alt="wireframes"
          priority
          width={1250}
          height={663}
        />
      </motion.div>
    </section>
  );
};

export default Hero;
