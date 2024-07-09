"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import { useRecoilState } from "recoil";
import cancel from "../public/images/assets/cancel.svg";

const cartPopup = () => {
  return (
    <aside>
      <div>
        <h2 className='capitalize'>My Shopping Cart</h2>
        <Image src={cancel} alt='Close icon' />
      </div>
      <div></div>
    </aside>
  );
};

export default cartPopup;
