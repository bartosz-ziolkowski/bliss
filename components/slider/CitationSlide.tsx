import React from "react";

const CitationSlide = ({
  name,
  description,
  company,
  slideNr,
}: {
  name: string;
  description: string;
  company: string;
  slideNr: number;
}) => {
  return (
    <div className={`keen-slider__slide number-slide${slideNr}`}>
      <blockquote className="flex h-full flex-col justify-between bg-green p-6 shadow-sm sm:p-8 lg:p-12">
        <div>
          <div className="mt-4">
            <p className="text-2xl font-bold text-remi-blue sm:text-3xl">
              {company}
            </p>

            <p className="mt-4 leading-relaxed text-beige">{description}</p>
          </div>
        </div>

        <footer className="mt-4 text-sm font-medium text-beige sm:mt-6">
          &mdash; {name}
        </footer>
      </blockquote>
    </div>
  );
};

export default CitationSlide;
