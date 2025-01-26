import React from "react";
import Image from "next/image";
const Nav1 = () => {
  return (
    <>
      <nav className="bg-white lg:flex px-2 lg:px-28 py-1 justify-between items-center top-0 text-[14px]">
        <div className="flex items-center gap-10 lg:gap-5 text-black">
          <a href="mailto:ft@umt.ac.id">&#9993;ft@umt.ac.id</a>
        </div>
        <div>
          <ul className="flex">
            <li className="opacity-50">Accreditation |</li>

            <li>
              <select aria-label="Select Language">
                <option value="">Select Language</option>
                <option value="id|ar" data-gt-href="#">
                  Arabic
                </option>
                <option value="id|en" data-gt-href="#">
                  English
                </option>
                <option value="id|id" data-gt-href="#" selected="">
                  Indonesian
                </option>
              </select>
            </li>
          </ul>
        </div>
      </nav>
      <nav className="bg-white flex px-2 lg:px-28 pt-10 pb-10 justify-between items-center top-0">
        <div className="flex items-center">
          <a href="#" className="sm:hidden">
            <Image
              src="/logo-mobile.png"
              alt="Mobile Logo"
              width={100}
              height={100}
            />
          </a>

          <a href="#" className="hidden sm:block">
            <Image
              className="h-30 w-auto"
              src="/logoft.png"
              alt="Desktop Logo"
              width={200}
              height={100}
            />
          </a>
        </div>

        <div className="flex items-center gap-5 text-black">
          <a
            href="#"
            className="hidden lg:block hover:underline hover:text-gray-600"
          >
            Faculty Profile
          </a>
          <a
            href="#"
            className="hidden lg:block hover:underline hover:text-gray-600"
          >
            Study program
          </a>
          <a
            href="#"
            className="hidden lg:block hover:underline hover:text-gray-600"
          >
            Study
          </a>
          <a
            href="#"
            className="hidden lg:block hover:underline hover:text-gray-600"
          >
            Unit Services
          </a>
          <a
            href="#"
            className="hidden lg:block hover:underline hover:text-gray-600"
          >
            PMB Information
          </a>
          <a
            href="#"
            className="hidden lg:block hover:underline hover:text-gray-600"
          >
            FT News
          </a>
          <a href="#" className="hover:underline hover:text-gray-600">
            &#128269;
          </a>
          <a href="#" className="hover:underline hover:text-gray-600">
            &#9776;
          </a>
        </div>
      </nav>
    </>
  );
};

export default Nav1;
