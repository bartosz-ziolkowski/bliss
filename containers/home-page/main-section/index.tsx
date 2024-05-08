import Image from "next/image";
import React from "react";
import wireframes from "@/public/images/wireframes.png";

const Main = () => {
  return (
    <main className="flex flex-col items-center">
      <div className="w-full bg-green sm:py-12 lg:py-16">
        <div className="flex items-center justify-around">
          <div className="mx-auto max-w-lg text-center lg:mx-0 ltr:lg:text-left rtl:lg:text-right">
            <h2 className="text-3xl font-bold sm:text-4xl">
              Find your career path
            </h2>

            <p className="mt-4 ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut vero
              aliquid sint distinctio iure ipsum cupiditate? Quis, odit
              assumenda? Deleniti quasi inventore, libero reiciendis minima
              aliquid tempora. Obcaecati, autem.
            </p>

            <a
              href="#"
              className="mt-8 inline-block rounded bg-indigo-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400"
            >
              Get Started Today
            </a>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
            <a
              className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
              href="#"
            >
              <span className="inline-block rounded-lg bg-remi-blue p-3">
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                  <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                  ></path>
                </svg>
              </span>

              <h2 className="mt-2 font-bold">Accountant</h2>

              <p className="hidden sm:mt-1 sm:block sm:text-sm ">
                Lorem ipsum dolor sit amet consectetur.
              </p>
            </a>

            <a
              className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
              href="#"
            >
              <span className="inline-block rounded-lg bg-remi-blue p-3">
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                  <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                  ></path>
                </svg>
              </span>

              <h2 className="mt-2 font-bold">Accountant</h2>

              <p className="hidden sm:mt-1 sm:block sm:text-sm ">
                Lorem ipsum dolor sit amet consectetur.
              </p>
            </a>

            <a
              className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
              href="#"
            >
              <span className="inline-block rounded-lg bg-remi-blue p-3">
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                  <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                  ></path>
                </svg>
              </span>

              <h2 className="mt-2 font-bold">Accountant</h2>

              <p className="hidden sm:mt-1 sm:block sm:text-sm ">
                Lorem ipsum dolor sit amet consectetur.
              </p>
            </a>

            <a
              className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
              href="#"
            >
              <span className="inline-block rounded-lg bg-remi-blue p-3">
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                  <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                  ></path>
                </svg>
              </span>

              <h2 className="mt-2 font-bold">Accountant</h2>

              <p className="hidden sm:mt-1 sm:block sm:text-sm ">
                Lorem ipsum dolor sit amet consectetur.
              </p>
            </a>

            <a
              className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
              href="#"
            >
              <span className="inline-block rounded-lg bg-remi-blue p-3">
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                  <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                  ></path>
                </svg>
              </span>

              <h2 className="mt-2 font-bold">Accountant</h2>

              <p className="hidden sm:mt-1 sm:block sm:text-sm ">
                Lorem ipsum dolor sit amet consectetur.
              </p>
            </a>

            <a
              className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
              href="#"
            >
              <span className="inline-block rounded-lg bg-remi-blue p-3">
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                  <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                  ></path>
                </svg>
              </span>

              <h2 className="mt-2 font-bold">Accountant</h2>

              <p className="hidden sm:mt-1 sm:block sm:text-sm ">
                Lorem ipsum dolor sit amet consectetur.
              </p>
            </a>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-bold sm:text-4xl">
            Inefficient communication and task management
          </h2>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
          <div className="relative h-64 overflow-hidden sm:h-80 lg:h-full">
            <img
              alt=""
              src="https://images.unsplash.com/photo-1496843916299-590492c751f4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1771&q=80"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>

          <div className="lg:py-16">
            <article className="space-y-4 ">
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut
                qui hic atque tenetur quis eius quos ea neque sunt, accusantium
                soluta minus veniam tempora deserunt? Molestiae eius quidem quam
                repellat.
              </p>

              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Dolorum explicabo quidem voluptatum voluptas illo accusantium
                ipsam quis, vel mollitia? Vel provident culpa dignissimos
                possimus, perferendis consectetur odit accusantium dolorem amet
                voluptates aliquid, ducimus tempore incidunt quas. Veritatis
                molestias tempora distinctio voluptates sint! Itaque quasi
                corrupti, sequi quo odit illum impedit!
              </p>
            </article>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-bold sm:text-4xl">
            Increased operational costs and food wastage
          </h2>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
          <div className="lg:py-16">
            <article className="space-y-4 ">
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut
                qui hic atque tenetur quis eius quos ea neque sunt, accusantium
                soluta minus veniam tempora deserunt? Molestiae eius quidem quam
                repellat.
              </p>

              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Dolorum explicabo quidem voluptatum voluptas illo accusantium
                ipsam quis, vel mollitia? Vel provident culpa dignissimos
                possimus, perferendis consectetur odit accusantium dolorem amet
                voluptates aliquid, ducimus tempore incidunt quas. Veritatis
                molestias tempora distinctio voluptates sint! Itaque quasi
                corrupti, sequi quo odit illum impedit!
              </p>
            </article>
          </div>

          <div className="relative h-64 overflow-hidden sm:h-80 lg:h-full">
            <img
              alt=""
              src="https://images.unsplash.com/photo-1496843916299-590492c751f4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1771&q=80"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-bold sm:text-4xl">
            Elevated stress levels and reduced team performance
          </h2>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
          <div className="relative h-64 overflow-hidden sm:h-80 lg:h-full">
            <img
              alt=""
              src="https://images.unsplash.com/photo-1496843916299-590492c751f4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1771&q=80"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>

          <div className="lg:py-16">
            <article className="space-y-4 ">
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut
                qui hic atque tenetur quis eius quos ea neque sunt, accusantium
                soluta minus veniam tempora deserunt? Molestiae eius quidem quam
                repellat.
              </p>

              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Dolorum explicabo quidem voluptatum voluptas illo accusantium
                ipsam quis, vel mollitia? Vel provident culpa dignissimos
                possimus, perferendis consectetur odit accusantium dolorem amet
                voluptates aliquid, ducimus tempore incidunt quas. Veritatis
                molestias tempora distinctio voluptates sint! Itaque quasi
                corrupti, sequi quo odit illum impedit!
              </p>
            </article>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Main;
