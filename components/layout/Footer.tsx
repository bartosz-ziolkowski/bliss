"use client";

import React from "react";
import sendEmail from "@/utils/sendEmail";
import { useForm } from "react-hook-form";

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

export type FormData = {
  email: string;
};

const Footer = () => {
  const { register, handleSubmit, formState } = useForm<FormData>();

  async function onSubmit(data: FormData) {
    sendEmail(data);
  }

  return (
    <footer className="bg-remi-blue lg:grid lg:grid-cols-5 text-beige border-t-4 border-green">
      <div className="relative px-4 pt-16 lg:pb-16 sm:px-6 lg:col-span-3 lg:px-8">
        <div
          className="absolute bottom-4 right-4 sm:end-6 sm:top-6 lg:end-8 lg:top-8 cursor-pointer"
          onClick={scrollToTop}
        >
          <a className="inline-block rounded-full bg-green p-2 text-beige shadow transition hover:green sm:p-3 lg:p-4">
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
              <p className="text-3xl font-basker-ville">Join Our Invite List</p>
              <form className="mt-6 w-full" onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="email" className="sr-only">
                  {" "}
                  Email{" "}
                </label>

                <div className="rounded-md border border-white p-2 focus-within:ring flex flex-col sm:flex-row sm:items-center sm:gap-4">
                  <div className="flex-grow">
                    <input
                      type="email"
                      placeholder="hello@thisisremi.com"
                      className="w-full text-black border rounded-md p-2 sm:text-sm"
                      {...register("email", { required: true })}
                    />
                  </div>
                  <button
                    disabled={formState.isSubmitting || formState.isLoading}
                    className="mt-1 w-full rounded bg-green px-6 py-3 text-sm font-bold uppercase tracking-wide text-beige transition hover:text-black sm:mt-0 sm:w-auto sm:shrink-0"
                  >
                    {formState.isSubmitting ||
                      (formState.isLoading && (
                        <span className="spinner-border spinner-border-sm mr-1"></span>
                      ))}{" "}
                    Sign up
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div className="sm:mt-12 lg:pt-12">
          <div className="sm:flex sm:items-center sm:justify-between">
            <div className="flex">
              <a
                href="https://www.linkedin.com/company/thisisremi"
                target="_blank"
              >
                <p className="mt-8 text-lg sm:mt-0 me-4 transition hover:text-green">
                  LinkedIn
                </p>
              </a>
              <a href="mailto:fabian.chavez@gmx.de" target="_blank">
                <p className="mt-8 text-lg sm:mt-0 transition hover:text-green">
                  E-mail
                </p>
              </a>
            </div>
            <p className="mt-8 text-lg sm:mt-0">Coming soon...</p>
            <p className="mt-8 text-lg sm:mt-0">
              &copy; 2024. Remi. All rights reserved.
            </p>
          </div>
        </div>
      </div>
      <div className="relative block pb-16 lg:col-span-2 h-full w-full lg:border-l-2 border-beige font-museo-moderno text-center">
        <p className="text-12xl -mb-3">remi</p>
        <p className="text-3xl w-full">Making Chefs' Lives Easier</p>
      </div>
    </footer>
  );
};

export default Footer;
