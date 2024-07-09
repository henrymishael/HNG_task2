"use client";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";

const Categories = ({ view, setView }) => {
  //   const [view, setView] = useState("Dresses");
  return (
    <div className='flex py-6  md:py-16 xsm:justify-center xl:justify-between '>
      <div>
        <nav className='lg:flex flex-row xsm:space-x-2.5 md:space-x-12 xl:space-x-8 lg:text-lg xsm:text-sm hidden   '>
          <p
            className={`${
              view == "Dresses" ? "text-primary " : "text-[#3232328b]"
            } cursor-pointer`}
            onClick={() => setView("Dresses")}
          >
            Dresses
          </p>

          <p
            className={`${
              view == "Top" ? "text-primary" : "text-[#3232328b]"
            } cursor-pointer`}
            onClick={() => setView("Top")}
          >
            Tops
          </p>
          <p
            className={`${
              view == "Button" ? "text-primary" : "text-[#3232328b]"
            } cursor-pointer`}
            onClick={() => setView("Button")}
          >
            Buttons
          </p>
          <p
            className={`${
              view == "Outwear" ? "text-primary" : "text-[#3232328b]"
            } cursor-pointer`}
            onClick={() => setView("Outwear")}
          >
            Outwears
          </p>
          <p
            className={`${
              view == "Activewear" ? "text-primary" : "text-[#3232328b]"
            } cursor-pointer`}
            onClick={() => setView("Activewear")}
          >
            Activewears
          </p>
        </nav>
      </div>
      <div className='lg:hidden flex justify-between w-full'>
        <h2 className='text-lg font-bold text-primary'>{view}</h2>
        <div className='flex items-center'>
          <p>Filters</p> <ChevronDown />
        </div>
      </div>
    </div>
  );
};

export default Categories;
