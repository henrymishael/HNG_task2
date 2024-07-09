"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import StarRating from "./star";

import productList from "../productList";
import { X } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "@/store/slices/cart-slice";

const ProductCard = ({ product }) => {
  // const [cartItem, setCartItem] = useRecoilState(cartState);
  const [buttonText, setButtonText] = useState("Add to Cart");
  const [quantity, setQuantity] = useState(1);

  const incrementQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state);

  function handleAddToCart() {
    dispatch(addToCart(product));
  }

  function handleRemoveFromCart() {
    console.log("removed");
    dispatch(removeFromCart(product.id));
  }

  return (
    <div className='max-w-[320px] flex flex-col gap-1  md:gap-2'>
      <div className='relative group'>
        <Image
          className='group-hover:opacity-0 transition-opacity duration-500'
          src={product.image1}
          alt={product.name}
        />
        <Image
          className='group-hover:opacity-100 opacity-0 absolute top-0 transition-opacity duration-500'
          src={product.image2}
          alt={product.name}
        />
      </div>
      <div className='flex justify-between pt-2'>
        <div className='space-y-1 md:space-y-2'>
          <p className='font-bold text-[12px] md:text-[16px] leading-[10px]'>
            {product.name}
          </p>
          <p className='font-medium text-xs text-[#686868]'>{product.type}</p>
          <p className='font-semibold text-[15px] md:text-lg'>
            ₦{product.price}
          </p>
        </div>
        <div className=''>
          <StarRating noOfStars={product.ratings} />
        </div>
      </div>
      <div className='flex items-center justify-between py-2'>
        <div className='xl:rounded-sm rounded-[3px] md:px-1.5 md:gap-4 gap-2.5  text-[12px]  flex flex-row items-center bg-white xl:py-4  md:p-2 xsm:px-[8px]  lg:px-2.5 h-6 '>
          <p className='cursor-pointer' onClick={decrementQuantity}>
            -
          </p>
          <p className='font-medium'>{quantity}</p>
          <p className='cursor-pointer' onClick={incrementQuantity}>
            +
          </p>
        </div>

        <button
          className={`uppercase text-[8px] xl:text-[16px] w-[170px] px-5 py-2.5 bg-primary hover:bg-[#034488] text-white xl:rounded-xl rounded-sm transition-all duration-200 ease-in-out`}
          onClick={
            cart.some((item) => item.id === product.id)
              ? handleRemoveFromCart
              : handleAddToCart
          }
        >
          {cart.some((item) => item.id === product.id)
            ? "Added! "
            : "Add to Cart"}
        </button>
      </div>
      {/* <ToastContainer
        position='top-left'
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='dark'
      /> */}
    </div>
  );
};

export default ProductCard;
