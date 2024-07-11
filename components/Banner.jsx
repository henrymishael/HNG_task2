"use client";
import Image from "next/image";
import React from "react";
import hero from "../public/images/banner/new.svg";
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
    <div className='flex flex-row  xsm:min-h-[90vh] xl:h-[100vh]  slg:items-center   slg:pt-0 slg:justify-between bg-herostyle slg:pl-10 overflow-hidden  lg:space-y-0 relative '>
      <div className='slg:w-[55%] slg:pb-8 w-full flex flex-col  text-left  xsm:space-y-6  slg:space-y-6 xsm:z-10  xl:z-0 xsm:relative  slg:translate-y-0 translate-y-[45%] sm:pt-0 xsm:pt-8 z-20'>
        <p className='lg:text-[4rem] slg:text-[3rem] slg:leading-[3.5rem] xsm:text-4xl font-semibold text-primary lg:leading-[4.5rem] xsm:leading-[2.5rem] pl-2  '>
          The perfect blend of dress are available at our stores.
        </p>
        <p className='text-primary xsm:text-lg slg:text-xl pl-4 text-[12px]'>
          &quot;Elegance in every stitch: Transform your wardrobe with our
          handpicked selection of chic and timeless pieces&quot;
        </p>

        <button
          className='px-5 py-2.5 place-self-start bg-primary hover:bg-[#034488] text-white rounded-xl transition-all duration-200 ease-in-out ml-2'
          onClick={() => handleScroll()}
        >
          Shop Now
        </button>
      </div>
      <Image
        className='absolute -Z:20 -top-20 md:pl-12 w-fit     slg:hidden '
        src={mobile}
        alt=''
      />
      <Image
        className='top-0 absolute -z-5  slg:-right-28 xl:-right-8 xsm:hidden  slg:block  '
        src={hero}
        alt=''
      />
    </div>
  );
};

export default Banner;
