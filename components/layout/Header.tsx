import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <header className="bg-remi-blue text-beige">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-10 lg:py-7">
        <div className="flex h-16 items-center justify-between">
          <div className="flex-1 md:flex md:items-center md:gap-12">
            <a className="block text-teal-600" href="#">
              <Image
                src={"/images/logo.png"}
                alt={"remi logo"}
                height={56}
                width={150}
              />
            </a>
          </div>

          <div className="md:flex md:items-center md:gap-12">
            <nav aria-label="Global" className="hidden md:block">
              <ul className="flex items-center gap-6 text-lg">
                <li>
                  <a className="transition hover:text-orange" href="#">
                    {" "}
                    About{" "}
                  </a>
                </li>

                <li>
                  <a className="transition hover:text-orange" href="#">
                    {" "}
                    Careers{" "}
                  </a>
                </li>

                <li>
                  <a className="transition hover:text-orange" href="#">
                    {" "}
                    History{" "}
                  </a>
                </li>

                <li>
                  <a className="transition hover:text-orange" href="#">
                    {" "}
                    Services{" "}
                  </a>
                </li>

                <li>
                  <a className="transition hover:text-orange" href="#">
                    {" "}
                    Projects{" "}
                  </a>
                </li>

                <li>
                  <a className=" transition hover:text-orange" href="#">
                    {" "}
                    Blog{" "}
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
