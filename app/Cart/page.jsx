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

  const [quantities, setQuantities] = useState(
    cart.reduce((acc, item) => {
      acc[item.id] = 1; // Initialize each item quantity to 1
      return acc;
    }, {})
  );

  const incrementQuantity = (id) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [id]: prevQuantities[id] + 1,
    }));
  };

  const decrementQuantity = (id) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [id]: prevQuantities[id] > 1 ? prevQuantities[id] - 1 : 1, // Ensure quantity doesn't go below 1
    }));
  };

  const handleClick = (buttonState, setButtonState) => {
    setButtonState({
      clicked: !buttonState.clicked,
      text: buttonState.clicked ? `Apply` : `Applied`,
    });
  };

  useEffect(() => {
    let price = Math.ceil(cart.reduce((acc, curr) => acc + curr.price, 0));
    setTotalCart(price);
    setTotalCart(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart]);

  const calculateTotalAmount = () => {
    return cart.reduce((total, item) => {
      return total + item.price * quantities[item.id];
    }, 0);
  };

  const totalAmount = calculateTotalAmount();
  return (
    <>
      <div className='bg-[#f1f0f0] md:px-8 px-3 py-10 hidden xl:block '>
        <Image
          className='cursor-pointer'
          onClick={() => router.back()}
          src={arrow}
          alt=''
        />{" "}
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

          <div>
            {cart.length < 1 ? (
              <div className='h-[40vh] flex flex-col items-center justify-center text-center text-[28px] gap-5'>
                <h2>No Items in your Cart</h2>

                <Link href={"/"}>
                  <button className='bg-primary px-5 py-3 text-white rounded-lg'>
                    Shop Now
                  </button>
                </Link>
              </div>
            ) : (
              <div>
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
                        <p className='text-[30px] font-bold '>
                          {cartItem.name}
                        </p>
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
                        <p
                          className='cursor-pointer'
                          onClick={() => decrementQuantity(cartItem.id)}
                        >
                          -
                        </p>
                        <p className='font-medium'>{quantities[cartItem.id]}</p>
                        <p
                          className='cursor-pointer'
                          onClick={() => incrementQuantity(cartItem.id)}
                        >
                          +
                        </p>
                      </div>
                      <p>{cartItem.price * quantities[cartItem.id]}</p>
                      <p>{quantities[cartItem.id] * cartItem.price}</p>
                    </div>
                  </div>
                ))}
                <div className='text-right p-6'>
                  <p className='text-[20px] font-bold'>
                    Total Amount: ₦{totalAmount}
                  </p>
                </div>
              </div>
            )}
          </div>

          <div className='flex flex-col  gap-4 '>
            <p className='text-xl'>CART TOTAL</p>
            <div className='flex items-center justify-between py-2 border-b'>
              <p>sub-total</p>
              <p>₦{totalAmount}</p>
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
              <p className='font-bold text-[24px]'>₦ {totalAmount}</p>
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
          {cart.map((cartItem) => (
            <div
              key={cartItem.id}
              className='p-3 transition-all duration-200 ease-in-out flex flex-row items-center justify-between'
            >
              <div className='flex flex-row  items-center gap-3 justify-between w-full md:w-[80%] pr-8'>
                <div className='w-[180px] h-[220px]'>
                  <Image src={cartItem.image1} alt='' />
                </div>
                <div className='flex flex-col slg:flex-row slg:items-center justify-between slg:w-[70%]'>
                  <p className='text-[16px] font-bold '>{cartItem.name}</p>
                  <p className='text-[14px] '>{cartItem.type}</p>
                  <p className='text-sm mt-4 slg:mt-0 font-semibold'>
                    ₦{cartItem.price * quantities[cartItem.id]}
                  </p>
                  <div className='flex items-center gap-2 mt-10 slg:mt-0'>
                    <div className='bg-red-900 w-[22px] h-[22px] rounded-full'></div>
                    <p className='text-[14px]'>Wine</p>
                    <p className='text-sm'>M</p>
                  </div>
                  <div className='flex flex-row items-center px-2.5 gap-4 bg-[#f4f4f4] w-20 rounded-[4px] mt-8 slg:mt-0'>
                    <p
                      className='cursor-pointer'
                      onClick={() => decrementQuantity(cartItem.id)}
                    >
                      -
                    </p>
                    <p className='font-medium'>{quantities[cartItem.id]}</p>
                    <p
                      className='cursor-pointer'
                      onClick={() => incrementQuantity(cartItem.id)}
                    >
                      +
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className='flex flex-col  gap-4 '>
          <p className='text-xl'>CART TOTAL</p>
          <div className='flex items-center justify-between py-2 border-b'>
            <p>sub-total</p>
            <p>₦{totalAmount}</p>
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
            <p className='text-bold'>₦{totalAmount}</p>
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
