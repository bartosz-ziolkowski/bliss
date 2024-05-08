import Image from "next/image";
import React from "react";
import footerImg from "@/public/images/footerImg.png";

const Footer = () => {
  return (
    <footer className="bg-remi-blue lg:grid lg:grid-cols-5 text-beige border-t-2 border-beige">
      <div className="relative px-4 py-16 sm:px-6 lg:col-span-3 lg:px-8">
        <div className="absolute bottom-4 right-4 sm:end-6 sm:top-6 lg:end-8 lg:top-8">
          <a
            className="inline-block rounded-full bg-green p-2 text-beige shadow transition hover:green sm:p-3 lg:p-4"
            href="#MainContent"
          >
            <span className="sr-only">Back to top</span>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-1">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <p className="text-3xl">Follow Our Journey</p>
              <form className="mt-6 w-full">
                <label htmlFor="UserEmail" className="sr-only">
                  {" "}
                  Email{" "}
                </label>

                <div className="rounded-md border border-white p-2 focus-within:ring flex flex-col sm:flex-row sm:items-center sm:gap-4">
                  <div className="flex-grow">
                    <input
                      type="email"
                      id="UserEmail"
                      placeholder="john@rhcp.com"
                      className="w-full text-black border rounded-md p-2 sm:text-sm"
                    />
                  </div>
                  <button className="mt-1 w-full rounded bg-green px-6 py-3 text-sm font-bold uppercase tracking-wide text-beige transition-none hover:bg-green sm:mt-0 sm:w-auto sm:shrink-0">
                    Sign Up
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-12">
          <div className="sm:flex sm:items-center sm:justify-between">
            <p className="mt-8 text-lg sm:mt-0">LinkedIn</p>
            <p className="mt-8 text-xs  sm:mt-0">
              &copy; 2024. Remi. All rights reserved.
            </p>
          </div>
        </div>
      </div>
      <div className="relative block h-32 lg:col-span-2 lg:h-full border-l-2 border-beige">
        <Image
          src={footerImg}
          alt="remi logo"
          className="absolute inset-0 h-full w-full object-cover"
        />
      </div>
    </footer>
  );
};

export default Footer;
