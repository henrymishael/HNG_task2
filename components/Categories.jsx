"use client";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import cancelPop from "../public/images/assets/cancelPop2.svg";

const Categories = ({ view, setView }) => {
  const [isOverlayVisible, setIsOverlayVisible] = useState(false);

  const toggleOverlay = () => {
    setIsOverlayVisible(!isOverlayVisible);
  };

  const closeOverlay = () => {
    setIsOverlayVisible(false);
  };

  const categories = ["Dresses", "Tops", "Buttons", "Outwears", "Activewears"]; // Example categories
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
        <div onClick={toggleOverlay} className='flex items-center relative'>
          <p>Filters</p> <ChevronDown />
          {isOverlayVisible && (
            <div className='absolute inset-0  flex  z-50 overscroll-none'>
              <div
                className={`absolute items-left flex flex-col scrollbar-none  h-[380px] top-12  right-0  w-[243px] bg-[#FCFCFC] z-50 transform overflow-y-scroll ${
                  isOverlayVisible ? "translate-x-0" : "translate-x-full"
                } transition-transform duration-300 ease-in-out`}
              >
                <div className='w-full text-xl h-[38px] text-primary mb-4 bg-[#f1f0f0] px-3 flex items-center  py-2'>
                  <p>CATEGORIES</p>
                  <button className='absolute  right-4' onClick={closeOverlay}>
                    {/* <img src='path-to-close-icon' alt='Close' />{" "} */}
                    <Image src={cancelPop} alt='Close icon' />
                    {/* Replace with your close icon */}
                  </button>
                </div>

                <ul className='flex flex-col gap-[22px] px-5'>
                  {categories.map((category, index) => (
                    <li key={index} className='mb-2 uppercase font-medium '>
                      {category}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Categories;
