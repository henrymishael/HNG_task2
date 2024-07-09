import Image from "next/image";
import React from "react";
import Logo from "@/public/images/logo/yindira(white).svg";
import linkedin from "@/public/images/assets/linkedin.svg";
import instagram from "@/public/images/assets/instagram.svg";
import youtube from "@/public/images/assets/youtube.svg";
import x from "@/public/images/assets/x.svg";
import facebook from "@/public/images/assets/facebook.svg";
import visa from "@/public/images/assets/visa.svg";
import { ArrowRight } from "lucide-react";

const Footer = () => {
  return (
    <footer className='bg-primary w-full flex flex-col  items-start px-[44px] py-[70px] justify-center gap-10 min-h-[50vh]'>
      <div className='flex items-start self-stretch gap-9  '>
        <div className='w-[32%] h-48 space-y-2.5'>
          <Image className='' src={Logo} alt='' />
          <p className=' leading-6 text-left'>
            &quot;To empower women through fashion by offering a seamless,
            stylish, and inspiring online shopping experience that celebrates
            individuality and confidence.&quot;
          </p>
        </div>
        <div className='flex flex-col gap-y-[15px] text-white w-[12%]'>
          <p className='text-[20px] font-semibold'>HELP</p>
          <div className='flex flex-col gap-y-2.5 text-white text-[16px]'>
            <p>FAQs</p>
            <p>Size Guide</p>
            <p>Shipping</p>
            <p>Return & Exchange</p>
            <p>Contact us</p>
          </div>
        </div>
        <div className='flex flex-col gap-y-[15px] text-white'>
          <p className='text-[20px] font-semibold'>COMPANY</p>
          <div className='flex flex-col gap-y-2.5 text-white text-[16px]'>
            <p>About us</p>
            <p>Careers</p>
            <p>Our stories</p>
            <p>Press</p>
            <p>Blog</p>
          </div>
        </div>
        <div className='flex flex-col gap-y-[15px] text-white w-[8%]'>
          <p className='text-[20px] font-semibold'>MORE</p>
          <div className='flex flex-col gap-y-2.5 text-white text-[16px]'>
            <p>Account</p>
            <p>Wishlist</p>
            <p>Track order</p>
          </div>
        </div>
        <div className='flex flex-col gap-y-[15px] text-white w-[12%]'>
          <p className='text-[20px] font-semibold'>LEGAL</p>
          <div className='flex flex-col gap-y-2.5 text-white text-[16px]'>
            <p className=''>Privacy policy</p>
            <p>Terms of service</p>
            <p>Refund policy</p>
          </div>
        </div>
        <div className='flex flex-col items-start  gap-y-[15px] text-white w-[25%] '>
          <p className='text-[20px] font-semibold'>NEW TO YINDIRA?</p>
          <div>
            <p className='text-[12px] text-white/90'>
              Sign up for exclusive offers, original stories, events and more
            </p>
            <div className='mt-[30px] flex items-center w-32 justify-center text-white border gap-2.5 px-[15px] py-[6.5px] rounded-lg border-white hover:border-accent '>
              <h3 className='text-white'>Sign Up</h3>
              <ArrowRight color='white' />
            </div>
          </div>
          <div className='flex gap-[13px] mt-[15px]'>
            <Image src={linkedin} alt='' />
            <Image src={instagram} alt='' />
            <Image src={youtube} alt='' />
            <Image src={x} alt='' />
            <Image src={facebook} alt='' />
          </div>
        </div>
      </div>
      <div className='flex flex-col gap-3'>
        <Image src={visa} alt='' />
        <p>&copy; 2024. yindira. All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
