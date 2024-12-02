"use client";

import Grad1 from "../../../public/grad.jpg";
import Grad2 from "../../../public/gradient.jpg";
import React from "react";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const router = useRouter();

  const navBarOptions = [
    {
      id: 0,
      title: "Find Jobs",
      route: "jobListing",
      options: {
        color: "red",
        img: Grad1,
        search: true,
      },
    },
    {
      id: 1,
      title: "Employer",
      route: "employer",
      options: {
        color: "red",
        img: Grad1,
      },
    },
    {
      id: 2,
      title: "Upload Job",
      route: "uploadJob",
    },
    {
      id: 3,
      title: "About Us",
      route: "aboutUs",
    },
  ];

  return (
    <nav className="px-6 bg-gray-100 border-b border-gray-300 h-[200px] bg-gradient-to-b from-[#e3f2fd] to-white  ">
      {/* Logo */}
      <div className="flex items-center justify-between">
        <div className="text-2xl font-bold text-gray-800">Voo</div>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-6">
          {navBarOptions?.map((navItem) => {
            return (
              <a
                href={navItem?.route}
                className="text-gray-600 hover:text-gray-800"
                key={navItem.title}
                onClick={() => {
                  router.push(`/${navItem.route}`);
                }}
              >
                {navItem.title}
              </a>
            );
          })}
        </div>

        {/* Profile and Search */}
        <div className="flex items-center space-x-6">
          {/* Profile */}
          <div className="flex items-center space-x-3">
            <img
              src="https://via.placeholder.com/40"
              alt="User"
              className="w-10 h-10 rounded-full object-cover"
            />
          </div>
        </div>
      </div>

      <div>
        <div className="mt-9 flex items-center justify-center">
          <label
            htmlFor="search"
            className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
          >
            Search
          </label>
          <div className="relative w-full max-w-[700px] px-4 sm:px-0">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                />
              </svg>
            </div>
            <input
              type="search"
              id="search"
              className="block w-full p-4 pl-10 text-sm border rounded-full bg-gray-50 "
              placeholder="Search"
              required
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
