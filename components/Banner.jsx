"use client";
import Image from "next/image";
import React from "react";
import hero from "../public/images/banner/file.png";
import hero2 from "../public/images/banner/heroProduct.png";
import mobile from "../public/images/banner/mobile_hero.svg";
import { Button } from "./ui/button";

const Banner = ({ text, image }) => {
  const handleScroll = () => {
    window.scrollTo({
      top: window.innerHeight, // Scrolls down by the viewport height
      behavior: "smooth",
    });
  };
  return (
    <div className='flex slg:flex-row xsm:flex-col xsm:min-h-[100vh] xl:h-[100vh]  items-center   slg:pt-0 slg:justify-between md:bg-herostyle slg:pl-10 overflow-hidden  lg:space-y-0 '>
      <div className='xl:min-w-[55%] slg:pb-8 w-full flex flex-col  text-left  xsm:space-y-6  slg:space-y-6 xsm:z-10 slg:z-0 xsm:relative  sm:translate-y-[50%] slg:translate-y-0 sm:pt-0 xsm:pt-8'>
        <p className='lg:text-[4rem] slg:text-[3rem] slg:leading-[3.5rem] xsm:text-2xl font-semibold text-primary lg:leading-[4.5rem] xsm:leading-[2rem] pl-2 -mt-24 '>
          The perfect blend of dress are available at our stores.
        </p>
        <p className='text-primary xsm:text-lg slg:text-xl pl-4 text-[12px]'>
          &quot;Elegance in every stitch: Transform your wardrobe with our
          handpicked selection of chic and timeless pieces&quot;
        </p>
        <Image className='absolute  -z-20 xl:hidden ' src={mobile} alt='' />

        <button
          className='px-5 py-2.5 place-self-start bg-primary hover:bg-[#034488] text-white rounded-xl transition-all duration-200 ease-in-out ml-2'
          onClick={() => handleScroll()}
        >
          Shop Now
        </button>
      </div>
      <Image className='pt-40 xsm:hidden xl:block' src={hero} alt='' />
    </div>
  );
};

export default Banner;
