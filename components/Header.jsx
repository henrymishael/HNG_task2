"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import logo from "../public/images/logo/yindira.svg";
import cancel from "../public/images/assets/cancel.svg";
import cancelPop from "../public/images/assets/cancelPop.svg";
// import one from "@/public/images/productImages/first1.svg";
import { SearchIcon, ShoppingCartIcon, UserCircle } from "lucide-react";
import { RxHamburgerMenu } from "react-icons/rx";
import Link from "next/link";
import { RecoilRoot, useRecoilState } from "recoil";
import { cartState } from "../atoms/cartState";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "@/store/slices/cart-slice";

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isCartPopupOpen, setCartPopupOpen] = useState(false);
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  const toggleCartPopup = () => {
    setCartPopupOpen(!isCartPopupOpen);
  };

  function handleRemoveFromCart() {
    console.log("removed");
    dispatch(removeFromCart(cart?.id));
  }

  return (
    <>
      <header
        className={`flex flex-row xsm:px-5 slg:px-8 py-3 space-x-5 items-center sticky left-0 top-0 z-50 justify-between bg-header `}
      >
        <div className='slg:hidden slg:p-3 xsm:p-2 rounded-full hover:bg-accent'>
          <RxHamburgerMenu size={28} onClick={toggleSidebar} />
        </div>
        <Link href='/'>
          <div>
            <Image src={logo} alt='Logo'></Image>
          </div>
        </Link>

        <div className='flex slg:hidden space-x-4 xsm:space-x-3 slg:pl-0 md:pl-0'>
          <SearchIcon size={20} className='' />
          <UserCircle size={20} />
          <Link href={"/"}></Link>
          <div className='relative' onClick={toggleCartPopup}>
            <ShoppingCartIcon size={20} />
            <span className='absolute w-4 bg-red-500 bottom-3 left-3 text-[10px] flex items-center justify-center font-semibold font-titleFont text-white rounded-full'>
              0
            </span>
          </div>
        </div>
        <div className='slg:flex hidden space-x-4 slg:pl-0 md:pl-0'>
          <SearchIcon className='cursor-pointer' />
          <UserCircle className='cursor-pointer' />

          <div className='relative cursor-pointer' onClick={toggleCartPopup}>
            <ShoppingCartIcon />
            {cart.length >= 1 ? (
              <span className='absolute w-4 bg-red-500 bottom-3 left-3 text-[12px] flex items-center justify-center font-semibold font-titleFont text-white rounded-full'>
                {cart.length}
              </span>
            ) : (
              []
            )}
          </div>
        </div>
      </header>
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-40 ${
          isSidebarOpen ? "block" : "hidden"
        }`}
        onClick={toggleSidebar}
      ></div>
      <aside
        className={`slg:hidden overflow-hidden flex flex-row fixed top-0 right-0 h-full w-full bg-white z-50 transform scrollbar-none ${
          isSidebarOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        <div className='w-[25%] bg-primary h-full'></div>
        <div className='w-[75%] flex flex-col pt-8 px-4'>
          <div className='flex items-center justify-between pb-2 border-b border-black/50'>
            <div className='flex space-x-4 items-center'>
              <SearchIcon className='cursor-pointer' />
              <UserCircle className='cursor-pointer' />
              <div className='relative cursor-pointer'>
                <ShoppingCartIcon />
                <span className='absolute w-5 bg-red-500 bottom-3 left-3 text-[12px] flex items-center justify-center font-semibold font-titleFont text-white rounded-full'>
                  {cart.length}
                </span>
              </div>
            </div>
            <button
              onClick={toggleSidebar}
              className='p-3 flex items-center bg-accent rounded-full'
            >
              <Image src={cancel} alt='Close icon' />
            </button>
          </div>
          <nav className='p-4 pt-24 w-24 flex flex-col space-y-8'>
            <span className='flex items-center space-x-4'>
              <p className='text-accent'>01</p>
              <p className='effect sideText'>Dresses</p>
            </span>
            <span className='flex items-center space-x-4'>
              <p className='text-accent'>02</p>
              <p className='effect sideText'>Tops</p>
            </span>
            <span className='flex items-center space-x-4'>
              <p className='text-accent'>03</p>
              <p className='effect sideText'>Buttons</p>
            </span>
            <span className='flex items-center space-x-4'>
              <p className='text-accent'>04</p>
              <p className='effect sideText'>Outwear</p>
            </span>
            <span className='flex items-center space-x-4'>
              <p className='text-accent'>05</p>
              <p className='effect sideText'>Activewear</p>
            </span>
          </nav>
        </div>
      </aside>
      <aside
        className={`fixed flex flex-col top-[72px] min-h-[100vh] right-0 px-6 pt-4  xl:w-[409px] bg-[#FCFCFC] z-50 transform overflow-y-scroll ${
          isCartPopupOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out j`}
      >
        <div className='flex items-center justify-between p-4'>
          <h2 className='uppercase text-xl font-medium'>My Shopping Cart</h2>
          <button onClick={toggleCartPopup} className=''>
            <Image src={cancelPop} alt='Close icon' />
          </button>
        </div>
        {cart.map((product) => (
          <div
            key={product.id}
            className='p-5 bg-white flex flex-row w-full items-center gap-[22px]'
          >
            <div className='w-[150px] h-[200px]'>
              <Image src={product?.image1} alt='' />
            </div>
            <div className='flex flex-col justify-center items-start gap-6'>
              <div>
                <p className='text-[16px] font-bold '>Lilly</p>
                <p className='text-sm text-[#686868]'>Mini gown</p>
                <p className='text-lg font-medium'>₦50,000</p>
              </div>
              <div className='flex flex-col items-left gap-4'>
                <div className='flex flex-row items-center px-2.5 gap-4 bg-[#f4f4f4] w-20 rounded-[4px]'>
                  <p>-</p>
                  <p className='font-medium'>1</p>
                  <p>+</p>
                </div>
                <button
                  onClick={() => handleRemoveFromCart()}
                  className='uppercase 
            text-[10px]  md:px-5 md:py-2.5 p-2.5 gap-2.5  bg-primary hover:bg-[#034488] text-white xl:rounded-xl rounded-sm transition-all duration-200 ease-in-out'
                >
                  Remove from cart
                </button>
              </div>
            </div>
          </div>
        ))}

        <div className=' bg-white px-5 pb-2.5 mt-[15px] w-full space-y-6'>
          <div className='flex justify-between items-center'>
            <h2>Sub - Total</h2>
            <p>₦117,000</p>
          </div>
          <div className='space-y-3'>
            <Link href={"/Cart"}>
              <button className='w-full flex items-center justify-center self-stretch px-5 py-2.5 bg-primary/30 text-white text-[12px]'>
                View Cart
              </button>
            </Link>
            <button className='w-full flex items-center justify-center self-stretch px-5 py-2.5 bg-primary text-white text-[12px]'>
              Checkout
            </button>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Header;
