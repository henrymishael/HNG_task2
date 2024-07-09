"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import one from "../../public/images/productImages/first1.svg";
import { useDispatch, useSelector } from "react-redux";

const CartPage = () => {
  const [totalCart, setTotalCart] = useState(0);
  const { cart } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    let price = Math.ceil(cart.reduce((acc, curr) => acc + curr.price, 0));
    setTotalCart(price);
    // setTotalCart(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart]);
  return (
    <div className='bg-[#f1f0f0] px-8 py-10 '>
      <h2 className='text-[32px] font-semibold'>My Cart</h2>
      <div className='bg-white py-8  px-7 rounded-xl gap-8 flex flex-col'>
        <div className='uppercase flex flex-row items-center justify-between text-lg'>
          <h2>product</h2>
          <div className='flex flex-row gap-32 '>
            <p>Size</p>
            <p>quantity</p>
            <p>price</p>
            <p>total</p>
          </div>
        </div>
        {cart.map((cartItem) => (
          <div
            key={cartItem.id}
            className='p-6 dow transition-all duration-200 ease-in-out flex flex-row items-center justify-between'
          >
            <div className='flex flex-row items-center gap-6'>
              <div className='w-[180px] h-[220px]'>
                <Image src={cartItem.image1} alt='' />
              </div>
              <div className=''>
                <p className='text-[30px] font-bold '>{cart.name}</p>
                <p className='text-[28px] '>{cartItem.type}</p>
                <div className='flex items-center gap-2 mt-10'>
                  <div className='bg-red-900 w-[22px] h-[22px] rounded-full'></div>
                  <p>Wine</p>
                </div>
              </div>
            </div>
            <div className='flex flex-row items-center justify-between w-[52%]'>
              <p>M</p>
              <div className='flex flex-row items-center px-2.5 gap-4 bg-[#f4f4f4] w-20 rounded-[4px]'>
                <p>-</p>
                <p className='font-medium'>1</p>
                <p>+</p>
              </div>
              <p>{cartItem.price}</p>
              <p>100,000</p>
            </div>
          </div>
        ))}
        <div className='flex flex-col  gap-4 '>
          <p className='text-xl'>CART TOTAL</p>
          <div className='flex items-center justify-between py-2 border-b'>
            <p>sub-total</p>
            <p>{totalCart}</p>
          </div>
          <div className='flex items-center justify-between py-3 border-b'>
            <p>Shipping</p>
            <p className='text-sm'>
              Enter your address to view shipping options continue shopping
            </p>
          </div>
          <div className='flex items-center pb-4 border-b'>
            <div className='flex p-2 w-[400px] justify-between items-center border rounded-lg'>
              <p>Coupon Code</p>
              <button className='bg-primary text-white px-3 py-1 rounded-lg'>
                Apply
              </button>
            </div>
          </div>
          <div className='flex items-center justify-between'>
            <p>Total:</p>
            <p>{totalCart}</p>
          </div>
          <button className='bg-primary text-white uppercase px-5 py-2.5 '>
            Proceed to checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
