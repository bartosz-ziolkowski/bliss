"use client";

import "keen-slider/keen-slider.min.css";

import React from "react";
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
      perView: "auto",
      spacing: 16,
    },
    breakpoints: {
      "(min-width: 1024px)": {
        slides: {
          origin: "auto",
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
          <h2 className=" text-4xl font-bold font-basker-ville tracking-tight text-orange text-center sm:text-5xl">
            Read trusted reviews from our customers
          </h2>

          <div className="-mx-6 mt-8 lg:col-span-2 lg:mx-0">
            <div ref={ref} className="keen-slider">
              <div className="keen-slider__slide number-slide1">
                <blockquote className="flex h-full flex-col justify-between bg-green p-6 shadow-sm sm:p-8 lg:p-12">
                  <div>
                    <div className="mt-4">
                      <p className="text-2xl font-bold text-remi-blue sm:text-3xl">
                        Stayin' Alive
                      </p>

                      <p className="mt-4 leading-relaxed text-beige">
                        No, Rose, they are not breathing. And they have no arms
                        or legs … Where are they? You know what? If we come
                        across somebody with no arms or legs, do we bother
                        resuscitating them? I mean, what quality of life do we
                        have there?
                      </p>
                    </div>
                  </div>

                  <footer className="mt-4 text-sm font-medium text-beige sm:mt-6">
                    &mdash; Michael Scott
                  </footer>
                </blockquote>
              </div>

              <div className="keen-slider__slide number-slide2">
                <blockquote className="flex h-full flex-col justify-between bg-green p-6 shadow-sm sm:p-8 lg:p-12">
                  <div>
                    <div className="mt-4">
                      <p className="text-2xl font-bold text-remi-blue sm:text-3xl">
                        Stayin' Alive
                      </p>

                      <p className="mt-4 leading-relaxed">
                        No, Rose, they are not breathing. And they have no arms
                        or legs … Where are they? You know what? If we come
                        across somebody with no arms or legs, do we bother
                        resuscitating them? I mean, what quality of life do we
                        have there?
                      </p>
                    </div>
                  </div>

                  <footer className="mt-4 text-sm font-medium  sm:mt-6">
                    &mdash; Michael Scott
                  </footer>
                </blockquote>
              </div>

              <div className="keen-slider__slide number-slide3">
                <blockquote className="flex h-full flex-col justify-between bg-green p-6 shadow-sm sm:p-8 lg:p-12">
                  <div>
                    <div className="mt-4">
                      <p className="text-2xl font-bold text-remi-blue sm:text-3xl">
                        Stayin' Alive
                      </p>

                      <p className="mt-4 leading-relaxed text-beige">
                        No, Rose, they are not breathing. And they have no arms
                        or legs … Where are they? You know what? If we come
                        across somebody with no arms or legs, do we bother
                        resuscitating them? I mean, what quality of life do we
                        have there?
                      </p>
                    </div>
                  </div>

                  <footer className="mt-4 text-sm font-medium text-beige sm:mt-6">
                    &mdash; Michael Scott
                  </footer>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Bottom;
