"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import StarRating from "./star";

import { ToastContainer, toast } from "react-toastify";
import { useRecoilState } from "recoil";
import { cartState } from "@/atoms/cartState";
import { useParams } from "next/navigation";
import productList from "@/productList";
import { X } from "lucide-react";

const ProductCard = ({ product }) => {
  const [cartItem, setCartItem] = useRecoilState(cartState);
  const [buttonText, setButtonText] = useState("Add to Cart");

  product = productList.products.find((x) => x.slug === product.slug);

  useEffect(() => {
    const savedCartItems = localStorage.getItem("cartItem");
    if (savedCartItems) {
      setCartItem(JSON.parse(savedCartItems));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("cartItem", JSON.stringify(cartItem));
  }, [cartItem]);

  useEffect(() => {
    const isInCart = cartItem.find((pro) => pro.id === product.id);
    if (isInCart) {
      setButtonText("Added!");
    } else {
      setButtonText("Add to Cart");
    }
  }, [cartItem, product.id]);

  if (!product) {
    return <p>Product not found</p>;
  }

  const addItemToCart = () => {
    if (cartItem.findIndex((pro) => pro.id === product.id) === -1) {
      setCartItem((prevState) => [...prevState, { ...product, quantity: 1 }]);
      toast(`${product.name} has been added to cart`);
      setButtonText("Added!");
    } else {
      setCartItem((prevState) => {
        return prevState.map((item) => {
          return item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item;
        });
      });
      toast(`Increased quantity of ${product.name}`);
    }
  };

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
          <p>-</p>
          <p className='font-medium'>{product.quantity}</p>
          <p>+</p>
        </div>

        <button
          className='uppercase text-[8px] xl:text-[16px] md:px-5 md:py-2.5 p-2.5 gap-2.5 bg-primary hover:bg-[#034488] text-white xl:rounded-xl rounded-sm transition-all duration-200 ease-in-out'
          onClick={addItemToCart}
        >
          {buttonText}
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
