"use client";

import { faArrowDown } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import wireframes from "@/public/images/wireframes.png";

const features = [
  { name: "Origin", description: "Designed by Good Goods, Inc." },
  {
    name: "Material",
    description:
      "Solid walnut base with rare earth magnets and powder coated steel card cover",
  },
  { name: "Dimensions", description: '6.25" x 3.55" x 1.15"' },
  { name: "Finish", description: "Hand sanded and finished with natural oil" },
  { name: "Includes", description: "Wood card tray and 3 refill packs" },
  {
    name: "Considerations",
    description:
      "Made from natural materials. Grain and color vary with each item.",
  },
];

const solutions = [
  {
    name: "Simplified Task Management and Efficient Communication",
    description:
      "Improved communication that ensures that all team members are on the same page and reduces the risk of misunderstandings",
    imageUrl: "/images/board.png",
  },
  {
    name: "Cost and Time Savings",
    description:
      "Efficient task management minimizes time wastage and accurate ingredient documentation optimizes orders",
    imageUrl: "/images/wastage.png",
  },
  {
    name: "Enhanced Team Collaboration and Reduced Stress Levels",
    description:
      "Centralized platform for knowledge sharing and organization fosters teamwork and reduces stress levels",
    imageUrl: "/images/argument.png",
  },
];

const ProductFeature = ({
  name,
  description,
  imageUrl,
}: {
  name: string;
  description: string;
  imageUrl: string;
}) => {
  return (
    <div className="p-8 py-12 sm:p-12 rounded-3xl bg-beige border-4 border-green shadow-2xl shadow-gray-600/10 text-center">
      <div className="space-y-12 flex items-center flex-col">
        <Image
          src={imageUrl}
          alt="solution image"
          priority
          width={150}
          height={150}
        />
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold text-gray-800 transition">
            {name}
          </h3>
          <p className="text-gray-600">{description}</p>
        </div>
      </div>
    </div>
  );
};

const Main = () => {
  return (
    <main className="flex flex-col items-center pb-8 border-y-4 border-green">
      <h1 className="text-4xl pt-16 font-basker-ville">Why to use Remi?</h1>
      <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 p-4 md:p-8 text-center">
        {solutions.map((solution, idx: number) => (
          <ProductFeature
            key={idx}
            name={solution.name}
            description={solution.description}
            imageUrl={solution.imageUrl}
          />
        ))}
      </div>
      <div className="bg-beige rounded-3xl">
        <div className="mx-auto max-w-2xl py-8 sm:px-6 sm:py-8 lg:max-w-7xl lg:px-8 text-center">
          <h2 className="text-3xl font-bold font-basker-ville tracking-tight text-gray-900 sm:text-4xl mb-8">
            Product Features
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 h-full text-center text-black">
            <div className="rounded-lg p-6 bg-gray-100 flex justify-center items-center flex-col border-2 border-remi-blue">
              <p className="text-2xl">Time Savings</p>
              <span className="text-4xl font-bold text-remi-blue">
                2 hours per day
              </span>
            </div>
            <div className="rounded-lg p-6 bg-gray-100 flex justify-center items-center flex-col border-2 border-remi-blue">
              <p className="text-2xl">Reduced Food Waste</p>
              <span className="text-4xl font-bold text-remi-blue">
                1 kilo per day
              </span>
            </div>
            <div className="rounded-lg p-6 bg-gray-100 flex justify-center items-center flex-col border-2 border-remi-blue">
              <p className="text-2xl">Lower Staff Turnover Rate</p>
              <span className="text-4xl font-bold text-remi-blue">
                <FontAwesomeIcon icon={faArrowDown} /> 60-80%
              </span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Main;
