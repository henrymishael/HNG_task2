import { ChevronDown, SearchIcon } from "lucide-react";
import Image from "next/image";
import cancelPop from "../public/images/assets/cancelPop2.svg";
import React, { useState } from "react";

const Search = () => {
  const [isOverlayVisible, setIsOverlayVisible] = useState(false);

  const toggleOverlay = () => {
    setIsOverlayVisible(!isOverlayVisible);
  };

  const closeOverlay = () => {
    setIsOverlayVisible(false);
  };

  const categories = ["Style", "Color", "Size", "Cup size", "Length", "Pocket"]; // Example categories
  return (
    <div className=' lg:flex hidden flex-row items-center xsm:gap-2 lg:gap-3 xsm:pb-8 xl:pb-0 relative'>
      {/* <div className='lg:w-[317px] xsm:w-[220px]  flex flex-row items-center gap-3 py-3 lg:px-6 xsm:px-2 bg-white border-none outline-none rounded-[100px]'>
        <SearchIcon color='gray ' className='text-gray-300' />
        <input
          className=' bg-white border-none outline-none text-sm'
          type='text'
          placeholder='Search...'
        />
      </div> */}
      <button
        onClick={toggleOverlay}
        className='flex flex-row items-center xsm:text-sm slg:text-lg lg:px-3 lg:py-2 xsm:px-1.5 xsm:py-2  bg-primary hover:bg-[#034488] text-white rounded-xl transition-all duration-200 ease-in-out gap-1.5 '
      >
        <p className='text-white'>Sort by</p>
        <ChevronDown className='hidden slg:block' color='white' />
      </button>

      {isOverlayVisible && (
        <div className='absolute inset-0  flex  z-50 overscroll-none'>
          <div
            className={`absolute items-left flex flex-col scrollbar-none  h-[380px] top-32  right-0  pt-4 pb-24  w-[243px] bg-[#FCFCFC] z-50 transform overflow-y-scroll ${
              isOverlayVisible ? "translate-x-0" : "translate-x-full"
            } transition-transform duration-300 ease-in-out`}
          >
            <div className='w-full text-xl h-[38px] text-primary mb-4 bg-[#f1f0f0] px-3 flex items-center  py-2'>
              <p>SHOP BY</p>
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
  );
};

export default Search;
