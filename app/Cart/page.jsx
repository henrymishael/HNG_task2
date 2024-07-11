"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import one from "../../public/images/productImages/second1.svg";
import { useDispatch, useSelector } from "react-redux";
// import one from "@/public/images/productImages/second1.svg";
import two from "../../public/images/productImages/cart.svg";
import three from "../../public/images/productImages/shoe.svg";
import four from "../../public/images/productImages/four.svg";
import Link from "next/link";
import arrow from "../../public/images/assets/arrowLeft.svg";
import { useNavigate } from "react-router-dom";
import { ArrowBigLeftIcon, ArrowLeftIcon } from "lucide-react";
import { useRouter } from "next/navigation";

const CartPage = () => {
  const [totalCart, setTotalCart] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const { cart } = useSelector((state) => state);
  const dispatch = useDispatch();
  const router = useRouter();
  const [button, setButton] = useState({
    text: "Apply",
    clicked: false,
  });

  const handleClick = (buttonState, setButtonState) => {
    setButtonState({
      clicked: !buttonState.clicked,
      text: buttonState.clicked ? `Apply` : `Applied`,
    });
  };

  const incrementQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  useEffect(() => {
    let price = Math.ceil(cart.reduce((acc, curr) => acc + curr.price, 0));
    setTotalCart(price);
    // setTotalCart(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart]);
  return (
    <>
      <div className='bg-[#f1f0f0] md:px-8 px-3 py-10 hidden xl:block '>
        <Image
          className='cursor-pointer'
          onClick={() => router.back()}
          src={arrow}
          alt=''
        />{" "}
        <p>Back to Home</p>
        <h2 className='text-[32px] font-semibold pb-4'>My Cart</h2>
        <div className='bg-white py-8  px-7 rounded-xl gap-8 flex flex-col'>
          <div className='uppercase md:flex hidden flex-row items-center justify-between text-lg'>
            <h2>product</h2>
            <div className='md:flex flex-row gap-32 hidden '>
              <p>Size</p>
              <p>quantity</p>
              <p>price</p>
              <p>total</p>
            </div>
          </div>
          {/* {cart.map((cartItem) => ( */}
          <div className='p-6 dow transition-all duration-200 ease-in-out flex flex-row items-center justify-between'>
            <div className='flex flex-row items-center gap-6'>
              <div className='w-[180px] h-[220px]'>
                <Image src={one} alt='' />
              </div>
              <div className=''>
                <p className='text-[30px] font-bold '>Lilly</p>
                <p className='text-[28px] '>Mini bodycon</p>
                <div className='flex items-center gap-2 mt-10'>
                  <div className='bg-red-900 w-[22px] h-[22px] rounded-full'></div>
                  <p>Wine</p>
                </div>
              </div>
            </div>
            <div className='flex flex-row items-center justify-between w-[52%]'>
              <p>M</p>
              <div className='flex flex-row items-center px-2.5 gap-4 bg-[#f4f4f4] w-20 rounded-[4px]'>
                <p className='cursor-pointer' onClick={decrementQuantity}>
                  -
                </p>
                <p className='font-medium'>{quantity}</p>
                <p className='cursor-pointer' onClick={incrementQuantity}>
                  +
                </p>
              </div>
              <p>50,000</p>
              <p>100,000</p>
            </div>
          </div>
          <div className='p-6 dow transition-all duration-200 ease-in-out flex flex-row items-center justify-between'>
            <div className='flex flex-row items-center gap-6'>
              <div className='w-[180px] h-[220px]'>
                <Image src={two} alt='' />
              </div>
              <div className=''>
                <p className='text-[30px] font-bold '>Sculpter</p>
                <p className='text-[28px] '>Silk shaper</p>
                <div className='flex items-center gap-2 mt-10'>
                  <div className='bg-black w-[22px] h-[22px] rounded-full'></div>
                  <p>Black</p>
                </div>
              </div>
            </div>
            <div className='flex flex-row items-center justify-between w-[52%]'>
              <p>M</p>
              <div className='flex flex-row items-center px-2.5 gap-4 bg-[#f4f4f4] w-20 rounded-[4px]'>
                <p className='cursor-pointer' onClick={decrementQuantity}>
                  -
                </p>
                <p className='font-medium'>{quantity}</p>
                <p className='cursor-pointer' onClick={incrementQuantity}>
                  +
                </p>
              </div>
              <p>22,000</p>
              <p>22,000</p>
            </div>
          </div>
          <div className='p-6 dow transition-all duration-200 ease-in-out flex flex-row items-center justify-between'>
            <div className='flex flex-row items-center gap-6'>
              <div className='w-[180px] h-[220px]'>
                <Image src={three} alt='' />
              </div>
              <div className=''>
                <p className='text-[30px] font-bold '>Candy</p>
                <p className='text-[28px] '>Signature pose</p>
                <div className='flex items-center gap-2 mt-10'>
                  <div className=' bg-pink-300 w-[22px] h-[22px] rounded-full'></div>
                  <p>Pink</p>
                </div>
              </div>
            </div>
            <div className='flex flex-row items-center justify-between w-[52%]'>
              <p>M</p>
              <div className='flex flex-row items-center px-2.5 gap-4 bg-[#f4f4f4] w-20 rounded-[4px]'>
                <p className='cursor-pointer' onClick={decrementQuantity}>
                  -
                </p>
                <p className='font-medium'>{quantity}</p>
                <p className='cursor-pointer' onClick={incrementQuantity}>
                  +
                </p>
              </div>
              <p>50,000</p>
              <p>100,000</p>
            </div>
          </div>
          <div className='p-6 dow transition-all duration-200 ease-in-out flex flex-row items-center justify-between'>
            <div className='flex flex-row items-center gap-6'>
              <div className='w-[180px] h-[220px]'>
                <Image src={four} alt='' />
              </div>
              <div className=''>
                <p className='text-[30px] font-bold '>Crochetelo</p>
                <p className='text-[28px] '>Knotted piece</p>
                <div className='flex items-center gap-2 mt-10'>
                  <div className='bg-[#d2ccc2] w-[22px] h-[22px] rounded-full'></div>
                  <p>Wine</p>
                </div>
              </div>
            </div>
            <div className='flex flex-row items-center justify-between w-[52%]'>
              <p>M</p>
              <div className='flex flex-row items-center px-2.5 gap-4 bg-[#f4f4f4] w-20 rounded-[4px]'>
                <p className='cursor-pointer' onClick={decrementQuantity}>
                  -
                </p>
                <p className='font-medium'>{quantity}</p>
                <p className='cursor-pointer' onClick={incrementQuantity}>
                  +
                </p>
              </div>
              <p>50,000</p>
              <p>100,000</p>
            </div>
          </div>
          {/* ))} */}
          <div className='flex flex-col  gap-4 '>
            <p className='text-xl'>CART TOTAL</p>
            <div className='flex items-center justify-between py-2 border-b'>
              <p>sub-total</p>
              <p>{totalCart}</p>
            </div>
            <div className='flex items-center justify-between py-3 border-b'>
              <p>Shipping</p>
              <p className='text-sm w-44'>
                Enter your address to view shipping options{" "}
                <span className='underline-offset-1 text-primary underline'>
                  Calculate shopping
                </span>
              </p>
            </div>
            <div className='flex items-center pb-4 border-b'>
              <div className='flex p-2 w-[400px] justify-between items-center border rounded-lg'>
                <input
                  className='border-none outline-none'
                  placeholder='Coupon code'
                  type='text'
                  name=''
                  id=''
                />
                <button
                  onClick={() => handleClick(button, setButton)}
                  style={{
                    opacity: button.clicked ? "0.5" : "1",
                    transition: "opacity 0.3s ease",
                  }}
                  className='bg-primary text-white px-3 py-1 rounded-lg'
                >
                  {button.text}
                </button>
              </div>
            </div>
            <div className='flex items-center justify-between'>
              <p>Total:</p>
              <p>{totalCart}</p>
            </div>
            <Link className='w-full' href={"/Checkout"}>
              <button className='bg-primary w-full text-white uppercase px-5 py-2.5 '>
                Proceed to checkout
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className='bg-white md:px-8 px-4 py-10 xl:hidden block'>
        <Image
          className='cursor-pointer'
          onClick={() => router.back()}
          src={arrow}
          alt=''
        />{" "}
        <h2 className='text-[32px] font-semibold pb-4'>My Cart</h2>
        <div className=' py-6   rounded-xl gap-8 flex flex-col'>
          <div className='p-3 transition-all duration-200 ease-in-out flex flex-row items-center justify-between'>
            <div className='flex flex-row  items-center gap-3 justify-between w-full md:w-[80%] pr-8'>
              <div className='w-[180px] h-[220px]'>
                <Image src={one} alt='' />
              </div>
              <div className='flex flex-col slg:flex-row slg:items-center justify-between slg:w-[70%]'>
                <p className='text-[16px] font-bold '>Lilly</p>
                <p className='text-[14px] '>Mini bodycon</p>
                <p className='text-sm mt-4 slg:mt-0 font-semibold'>₦50,000</p>
                <div className='flex items-center gap-2 mt-10 slg:mt-0'>
                  <div className='bg-red-900 w-[22px] h-[22px] rounded-full'></div>
                  <p className='text-[14px]'>Wine</p>
                  <p className='text-sm'>M</p>
                </div>
                <div className='flex flex-row items-center px-2.5 gap-4 bg-[#f4f4f4] w-20 rounded-[4px] mt-8 slg:mt-0'>
                  <p className='cursor-pointer' onClick={decrementQuantity}>
                    -
                  </p>
                  <p className='font-medium'>{quantity}</p>
                  <p className='cursor-pointer' onClick={incrementQuantity}>
                    +
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className='p-3 transition-all duration-200 ease-in-out flex flex-row items-center justify-between'>
            <div className='flex flex-row items-center gap-3 justify-between w-full md:w-[80%] pr-8'>
              <div className='w-[180px] h-[220px]'>
                <Image src={two} alt='' />
              </div>
              <div className='flex flex-col slg:flex-row slg:items-center justify-between slg:w-[70%]'>
                <p className='text-[16px] font-bold '>Sculpter</p>
                <p className='text-[14px] '>Silk shaper</p>
                <p className='text-sm slg:mt-0 mt-4 font-semibold'>₦22,000</p>
                <div className='flex items-center gap-2 slg:mt-0 mt-10'>
                  <div className='bg-black w-[22px] h-[22px] rounded-full'></div>
                  <p className='text-[14px]'>Black</p>
                  <p className='text-sm'>M</p>
                </div>
                <div className='flex flex-row items-center px-2.5 gap-4 bg-[#f4f4f4] w-20 rounded-[4px] slg:mt-0 mt-8'>
                  <p className='cursor-pointer' onClick={decrementQuantity}>
                    -
                  </p>
                  <p className='font-medium'>{quantity}</p>
                  <p className='cursor-pointer' onClick={incrementQuantity}>
                    +
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className='p-3 transition-all duration-200 ease-in-out flex flex-row items-center justify-between'>
            <div className='flex flex-row items-center gap-3 justify-between w-full md:w-[80%] pr-8'>
              <div className='w-[180px] h-[220px]'>
                <Image src={three} alt='' />
              </div>
              <div className='flex flex-col slg:flex-row slg:items-center justify-between slg:w-[70%]'>
                <p className='text-[16px] font-bold '>Candy</p>
                <p className='text-[14px] '>Signature pose</p>
                <p className='text-sm slg:mt-0 mt-4 font-semibold'>₦20,000</p>
                <div className='flex items-center gap-2 slg:mt-0 mt-10'>
                  <div className='bg-pink-300 w-[22px] h-[22px] rounded-full'></div>
                  <p className='text-[14px]'>Pink</p>
                  <p className='text-sm'>M</p>
                </div>
                <div className='flex flex-row items-center px-2.5 gap-4 bg-[#f4f4f4] w-20 rounded-[4px] slg:mt-0 mt-8'>
                  <p className='cursor-pointer' onClick={decrementQuantity}>
                    -
                  </p>
                  <p className='font-medium'>{quantity}</p>
                  <p className='cursor-pointer' onClick={incrementQuantity}>
                    +
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className='p-3 transition-all duration-200 ease-in-out flex flex-row items-center justify-between '>
            <div className='flex flex-row items-center gap-3 justify-between w-full md:w-[80%] pr-8'>
              <div className='w-[180px] h-[220px]'>
                <Image src={four} alt='' />
              </div>
              <div className='flex flex-col slg:flex-row slg:items-center justify-between slg:w-[70%]'>
                <p className='text-[16px] font-bold '>Crochetelo</p>
                <p className='text-[14px] '>Knitted piece</p>
                <p className='text-sm slg:mt-0 mt-4 font-semibold'>₦25,000</p>
                <div className='flex items-center gap-2 slg:mt-0 mt-10'>
                  <div className='bg-[#d2ccc2] w-[22px] h-[22px] rounded-full'></div>
                  <p className='text-[14px]'>Cream</p>
                  <p className='text-sm'>M</p>
                </div>
                <div className='flex flex-row items-center px-2.5 gap-4 bg-[#f4f4f4] w-20 rounded-[4px] slg:mt-0 mt-8'>
                  <p className='cursor-pointer' onClick={decrementQuantity}>
                    -
                  </p>
                  <p className='font-medium'>{quantity}</p>
                  <p className='cursor-pointer' onClick={incrementQuantity}>
                    +
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='flex flex-col  gap-4 '>
          <p className='text-xl'>CART TOTAL</p>
          <div className='flex items-center justify-between py-2 border-b'>
            <p>sub-total</p>
            <p>{totalCart}</p>
          </div>
          <div className='flex items-center justify-between py-3 border-b'>
            <p>Shipping</p>
            <p className='text-sm w-44'>
              Enter your address to view shipping options{" "}
              <span className='underline-offset-1 text-primary underline'>
                Calculate shopping
              </span>
            </p>
          </div>
          <div className='flex items-center pb-4 border-b'>
            <div className='flex p-2 w-[400px] justify-between items-center border rounded-lg'>
              <input
                className='border-none outline-none'
                placeholder='Coupon code'
                type='text'
                name=''
                id=''
              />
              <button
                onClick={() => handleClick(button, setButton)}
                style={{
                  opacity: button.clicked ? "0.5" : "1",
                  transition: "opacity 0.3s ease",
                }}
                className='bg-primary text-white px-3 py-1 rounded-lg'
              >
                {button.text}
              </button>
            </div>
          </div>
          <div className='flex items-center justify-between'>
            <p>Total:</p>
            <p>{totalCart}</p>
          </div>
          <Link href={"/Checkout"}>
            <button className='bg-primary w-full text-white uppercase px-5 py-2.5 '>
              Proceed to checkout
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default CartPage;
