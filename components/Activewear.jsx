"use client";
import React, { useState } from "react";
import ProductCard from "./ProductCard";
import productList from "@/productList";

const Activewear = () => {
  const [itemsToShow, setItemsToShow] = useState(16);
  const [buttonText, setButtonText] = useState("Load More");

  const handleLoadMore = () => {
    if (itemsToShow === 16) {
      setItemsToShow(20);
      setButtonText("Load Less");
    } else {
      setItemsToShow(16);
      setButtonText("Load More");
    }
  };
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 slg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-20'>
      {productList?.products.slice(0, itemsToShow).map((product) => (
        <div className='' key={product?.id}>
          <ProductCard product={product} />
        </div>
      ))}
      <div className='col-span-full flex justify-center'>
        <button
          className='mb-16 uppercase w-[121px] py-1.5 border-2 border-primary rounded-[5px] flex items-center justify-center'
          onClick={handleLoadMore}
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default Activewear;
