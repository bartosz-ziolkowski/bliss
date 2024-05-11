"use client";

import "keen-slider/keen-slider.min.css";

import CitationSlide from "../../../components/slider/CitationSlide";
import React from "react";
import citations from "@/data/citations";
import { useKeenSlider } from "keen-slider/react";

const animation = { duration: 25000, easing: (t: number) => t };

const Bottom = () => {
  const [ref] = useKeenSlider<HTMLDivElement>({
    loop: true,
    renderMode: "performance",
    created(s) {
      s.moveToIdx(5, true, animation);
    },
    updated(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation);
    },
    animationEnded(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation);
    },
    slides: {
      origin: "center",
      perView: 1,
      spacing: 16,
    },
    breakpoints: {
      "(min-width: 450px)": {
        slides: {
          perView: 1.5,
          spacing: 32,
        },
      },
      "(min-width: 768px)": {
        slides: {
          perView: 2,
          spacing: 32,
        },
      },
      "(min-width: 1024px)": {
        slides: {
          perView: 3,
          spacing: 32,
        },
      },
    },
  });

  return (
    <section className="bg-gray-50 overflow-x-hidden">
      <div className="mx-auto px-4 py-12 lg:me-0 lg:pe-0 xl:py-24">
        <div className="flex-col items-center justify-between sm:flex sm:pe-6 lg:pe-8">
          <h2 className="text-3xl font-bold font-basker-ville tracking-tight lg:text-4xl text-center">
            Backed by Like-minded People from the Industry
          </h2>
          <div className="-mx-6 mt-8 lg:col-span-2 lg:mx-0">
            <div ref={ref} className="keen-slider">
              {citations.map((citation, idx: number) => (
                <CitationSlide key={idx} {...citation} slideNr={++idx} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Bottom;
