"use client";
import { Bookmark } from "lucide-react";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import arrow from "../../public/images/assets/arrowLeft.svg";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";

const Checkoutpage = () => {
  const [totalCart, setTotalCart] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const router = useRouter();
  const { cart } = useSelector((state) => state);
  const dispatch = useDispatch();

  const [button, setButton] = useState({
    text: "Place Order",
    clicked: false,
  });

  const [quantities, setQuantities] = useState(
    cart.reduce((acc, item) => {
      acc[item.id] = 1; // Initialize each item quantity to 1
      return acc;
    }, {})
  );

  const handleClick = (buttonState, setButtonState) => {
    setButtonState({
      clicked: !buttonState.clicked,
      text: buttonState.clicked ? `Place Order` : `Placed`,
    });
  };

  const calculateTotalAmount = () => {
    return cart.reduce((total, item) => {
      return total + item.price * quantities[item.id];
    }, 0);
  };

  const totalAmount = calculateTotalAmount();

  useEffect(() => {
    let price = Math.ceil(cart.reduce((acc, curr) => acc + curr.price, 0));
    setTotalCart(price);
    setTotalCart(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart]);
  return (
    <>
      <div className='px-6 gap-6 pb-12 hidden xl:block'>
        <Image
          className='cursor-pointer'
          onClick={() => router.back()}
          src={arrow}
          alt=''
        />{" "}
        <h2 className='text-[32px] font-semibold'>Checkout</h2>
        <div className='bg-[#f8f8f8] py-6 px-2 rounded-lg mt-3 space-y-3 '>
          <p>
            Returning customer?{" "}
            <span className='text-[#0634ca]'>Click here to Login</span>
          </p>
          <div className='flex gap-2 '>
            <Bookmark />
            <p>Have a coupon? Click here to enter</p>
          </div>
        </div>
        <div className='flex flex-col gap-3 pt-6'>
          <h3 className='text-lg font-semibold'>Billing Details</h3>
          <div className='flex flex-row justify-between items-start'>
            <form className='flex flex-col gap-10'>
              <div className='flex flex-row gap-10'>
                <div className='flex flex-col px-1'>
                  <label htmlFor='email'>
                    Email <span className='text-red-500'>*</span>
                  </label>
                  <input
                    className='w-[340px] h-[48px] text-[14px] border border-[#d8d8d8] rounded-[7px] px-3 outline-primary'
                    placeholder='Enter your email address'
                    type='email'
                  />
                </div>
                <div className='flex flex-col px-1'>
                  <label htmlFor='phone'>
                    Phone<span className='text-red-500'>*</span>
                  </label>
                  <input
                    className='w-[340px] h-[48px] text-[14px] border border-[#d8d8d8] rounded-[7px] px-3 outline-primary'
                    placeholder='Enter your phone number'
                    type='text'
                  />
                </div>
                <div></div>
              </div>
              <div className='flex flex-row gap-10'>
                <div className='flex flex-col px-1'>
                  <label htmlFor='fName'>
                    First Name<span className='text-red-500'>*</span>
                  </label>
                  <input
                    name='fName'
                    className='w-[340px] h-[48px] text-[14px] border border-[#d8d8d8] rounded-[7px] px-3 outline-primary'
                    placeholder='Enter your first name'
                    type='email'
                  />
                </div>
                <div className='flex flex-col px-1'>
                  <label htmlFor='lName' name='lName'>
                    Last Name<span className='text-red-500'>*</span>
                  </label>
                  <input
                    for='lName'
                    className='w-[340px] h-[48px] text-[14px] border border-[#d8d8d8] rounded-[7px] px-3 outline-primary'
                    placeholder='Enter your last name'
                    type='text'
                  />
                </div>
              </div>
              <div className='flex flex-col gap-10'>
                <div>
                  <label htmlFor='lName' name='lName'>
                    Street Address<span className='text-red-500'>*</span>
                  </label>
                  <input
                    for='lName'
                    className='w-[94.4%] h-[48px] text-[14px] border border-[#d8d8d8] rounded-[7px] px-3 outline-primary'
                    placeholder='House number and street address'
                    type='text'
                  />
                </div>
                <div className='flex flex-col'>
                  <label htmlFor='lName' name='lName'>
                    State<span className='text-red-500'>*</span>
                  </label>
                  <select
                    for='lName'
                    className='w-[94.4%] h-[48px] text-[14px] border border-[#d8d8d8] rounded-[7px] px-3 pr-4 outline-primary'
                    placeholder='Select an option'
                  >
                    <option className='' value='' disabled selected>
                      Select an option
                    </option>

                    <option value=''>Abuja</option>
                    <option value='option2'>Lagos</option>
                    <option value='option3'>Port Harcourt</option>
                  </select>
                </div>
                <div className='flex flex-col'>
                  <label htmlFor='lName' name='lName'>
                    City<span className='text-red-500'>*</span>
                  </label>
                  <select
                    for='lName'
                    className='w-[94.4%] h-[48px] text-[14px] border border-[#d8d8d8]  rounded-[7px] px-3 pr-4 outline-primary'
                    placeholder='Select an option'
                  >
                    <option
                      className='text-[#d8d8d8]'
                      value=''
                      disabled
                      selected
                    >
                      Select an option
                    </option>

                    <option value=''>Oshodi, Lagos</option>
                    <option value='option2'>Surulere, Lagos</option>
                    <option value='option3'>Ikotun, Lagos</option>
                  </select>
                </div>
                <div className='flex flex-col'>
                  <label htmlFor='lName' name='lName'>
                    Country<span className='text-red-500'>*</span>
                  </label>
                  <select
                    for='lName'
                    className='w-[94.4%] h-[48px] text-[14px] border border-[#d8d8d8]  rounded-[7px] px-3 pr-4 outline-primary'
                    placeholder='Select an option'
                  >
                    <option
                      className='text-[#d8d8d8]'
                      value=''
                      disabled
                      selected
                    >
                      Select an option
                    </option>

                    <option value=''>France</option>
                    <option value='option2'>USA</option>
                    <option value='option3'>Nigeria</option>
                  </select>
                  <div className='pt-2 flex  items-center gap-2  '>
                    <input type='checkbox' name='' id='' />
                    <p>Create account?</p>
                  </div>
                </div>
                <div className='w-full space-y-2'>
                  <label htmlFor='notes'>Order notes(optional)</label>
                  <textarea
                    className='w-full h-[165px] text-[14px] border border-[#d8d8d8] outline-primary rounded-[7px] px-3 pt-2'
                    id='notes'
                    placeholder='Notes about your order, e.g. special notes for delivery...'
                  ></textarea>
                </div>
              </div>
            </form>
            <div className='bg-[#f4f4f4] flex flex-col rounded-[20px] w-[400px] min-h-screen px-7 py-10 '>
              <h2 className='text-lg font-bold text-left'>YOUR ORDER</h2>
              <div className='pt-2.5 flex flex-row justify-between items-center py-4 border-t border-b'>
                <p>Product</p>
                <p>sub-total</p>
              </div>
              {cart.map((cartItem) => (
                <div
                  key={cartItem.id}
                  className="flex flex-row justify-between items-center py-4 border-t border-b'"
                >
                  <p className='text-[#323232] text-[14px]'>{cartItem.name}</p>
                  <p>
                    <span className='font-extrabold'>₦ </span>
                    {cartItem.price}
                  </p>
                </div>
              ))}
              {/* <div className="flex flex-row justify-between items-center py-4 border-t border-b'">
                <p className='text-[#323232] text-[14px]'></p>
                <p>
                  <span className='font-extrabold'>₦ </span>100,000
                </p>
              </div>
              <div className="flex flex-row justify-between items-center py-4 border-t border-b'">
                <p className='text-[#323232] text-[14px]'>
                  Sculpter silk shaper x 1
                </p>
                <p>
                  <span className='font-extrabold'>₦ </span>22,000
                </p>
              </div>
              <div className="flex flex-row justify-between items-center py-4 border-t border-b'">
                <p className='text-[#323232] text-[14px]'>
                  Candy signature pose x 1
                </p>
                <p>
                  <span className='font-extrabold'>₦ </span>22,000
                </p>
              </div>
              <div className='flex flex-row justify-between items-center py-4 border-t border-b '>
                <p className='text-[#323232] text-[14px]'>
                  Crochetelo knitted piece x 1
                </p>
                <p className='flex'>
                  <span className='font-extrabold flex '>₦ </span>25,000
                </p>
              </div> */}

              <div className='flex flex-row justify-between items-center py-4 border-t border-b font-semibold'>
                <p>Sub-total</p>
                <p>
                  <span className='font-extrabold'>₦</span>
                  {totalAmount}
                </p>
              </div>
              <div className='flex flex-row justify-between items-center py-4 border-t border-b '>
                <p className='font-semibold'>Shipping</p>
                <p className='w-[50%]'>
                  Enter your address to view shipping options
                </p>
              </div>
              <div className='flex flex-row justify-between items-center py-4 border-t border-b'>
                <p className='font-semibold'>Paystack fees</p>
                <p>
                  <span className=' font-extrabold'>₦</span>0
                </p>
              </div>
              <div className='flex flex-row justify-between items-center py-4 border-t'>
                <p className='font-semibold'>Total</p>
                <p className='font-extrabold text-[26px]'>₦{totalAmount}</p>
              </div>
              <div className='space-y-2 text-[12px]'>
                <p className=''>
                  Your personal data will be used to process your order, support
                  your experience throughout this website, and for other
                  purposes decided in our privacy policy.
                </p>
                <span className='flex gap-2 items-start'>
                  <input className='mt-1' type='checkbox' name='' id='' />
                  <p className='text-[#323232]/70'>
                    I have read and agreed to the website Terms & conditions
                  </p>
                </span>
              </div>
              <br />
              <button
                onClick={() => handleClick(button, setButton)}
                style={{
                  opacity: button.clicked ? "0.5" : "1",
                  transition: "opacity 0.3s ease",
                }}
                className='bg-primary w-full py-3 rounded-lg text-white'
              >
                {button.text}
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className='px-6 gap-6 pb-12 block xl:hidden'>
        <Image
          className='cursor-pointer'
          onClick={() => router.back()}
          src={arrow}
          alt=''
        />{" "}
        <h2 className='text-[32px] font-semibold'>Checkout</h2>
        <div className='bg-[#f8f8f8] py-6 px-2 rounded-lg mt-3 space-y-3 '>
          <p>
            Returning customer?{" "}
            <span className='text-[#0634ca]'>Click here to Login</span>
          </p>
          <div className='flex gap-2 '>
            <Bookmark />
            <p>Have a coupon? Click here to enter</p>
          </div>
        </div>
        <div className='flex flex-col gap-3 pt-6'>
          <h3 className='text-lg font-semibold'>Billing Details</h3>
          <div className='flex flex-col  items-start'>
            <form className='flex flex-col gap-10 w-full'>
              <div className='flex flex-col gap-6 '>
                <div className='flex flex-col px-1'>
                  <label htmlFor='email'>
                    Email<span className='text-red-500'>*</span>
                  </label>
                  <input
                    className='w-full h-[48px] text-[14px] border border-[#d8d8d8] rounded-[7px] px-3 outline-primary'
                    placeholder='Enter your email address'
                    type='email'
                  />
                </div>
                <div className='flex flex-col px-1'>
                  <label htmlFor='phone'>
                    Phone<span className='text-red-500'>*</span>
                  </label>
                  <input
                    className='w-full h-[48px] text-[14px] border border-[#d8d8d8] rounded-[7px] px-3 outline-primary'
                    placeholder='Enter your phone number'
                    type='text'
                  />
                </div>
              </div>
              <div className='flex flex-col gap-6'>
                <div className='flex flex-col  px-1'>
                  <label htmlFor='fName'>
                    First Name<span className='text-red-500'>*</span>
                  </label>
                  <input
                    name='fName'
                    className='w-full h-[48px] text-[14px] border border-[#d8d8d8] rounded-[7px] px-3 outline-primary'
                    placeholder='Enter your first name'
                    type='email'
                  />
                </div>
                <div className='flex flex-col px-1'>
                  <label htmlFor='lName' name='lName'>
                    Last Name<span className='text-red-500'>*</span>
                  </label>
                  <input
                    for='lName'
                    className='w-full h-[48px] text-[14px] border border-[#d8d8d8] rounded-[7px] px-3 outline-primary'
                    placeholder='Enter your last name'
                    type='text'
                  />
                </div>
              </div>
              <div className='flex flex-col gap-10'>
                <div>
                  <label htmlFor='lName' name='lName'>
                    Street Address<span className='text-red-500'>*</span>
                  </label>
                  <input
                    for='lName'
                    className='w-full h-[48px] text-[14px] border border-[#d8d8d8] rounded-[7px] px-3 outline-primary'
                    placeholder='House number and street address'
                    type='text'
                  />
                </div>
                <div className='flex flex-col'>
                  <label htmlFor='lName' name='lName'>
                    State<span className='text-red-500'>*</span>
                  </label>
                  <select
                    for='lName'
                    className='w-full h-[48px] text-[14px] border border-[#d8d8d8] rounded-[7px] px-3 pr-4 outline-primary'
                    placeholder='Select an option'
                  >
                    <option className='' value='' disabled selected>
                      Select an option
                    </option>

                    <option value=''>Abuja</option>
                    <option value='option2'>Lagos</option>
                    <option value='option3'>Port Harcourt</option>
                  </select>
                </div>
                <div className='flex flex-col'>
                  <label htmlFor='lName' name='lName'>
                    City<span className='text-red-500'>*</span>
                  </label>
                  <select
                    for='lName'
                    className='w-full h-[48px] text-[14px] border border-[#d8d8d8]  rounded-[7px] px-3 pr-4 outline-primary'
                    placeholder='Select an option'
                  >
                    <option
                      className='text-[#d8d8d8]'
                      value=''
                      disabled
                      selected
                    >
                      Select an option
                    </option>

                    <option value=''>Oshodi, Lagos</option>
                    <option value='option2'>Surulere, Lagos</option>
                    <option value='option3'>Ikotun, Lagos</option>
                  </select>
                </div>
                <div className='flex flex-col'>
                  <label htmlFor='lName' name='lName'>
                    Country<span className='text-red-500'>*</span>
                  </label>
                  <select
                    for='lName'
                    className='w-full h-[48px] text-[14px] border border-[#d8d8d8]  rounded-[7px] px-3 pr-4 outline-primary'
                    placeholder='Select an option'
                  >
                    <option
                      className='text-[#d8d8d8]'
                      value=''
                      disabled
                      selected
                    >
                      Select an option
                    </option>

                    <option value=''>France</option>
                    <option value='option2'>USA</option>
                    <option value='option3'>Nigeria</option>
                  </select>
                  <div className='pt-2 flex  items-center gap-2  '>
                    <input type='checkbox' name='' id='' />
                    <p>Create account?</p>
                  </div>
                </div>
                <div className='w-full space-y-2'>
                  <label htmlFor='notes'>Order notes(optional)</label>
                  <textarea
                    className='w-full h-[165px] text-[14px] border border-[#d8d8d8] outline-primary rounded-[7px] px-3 pt-2'
                    id='notes'
                    placeholder='Notes about your order, e.g. special notes for delivery...'
                  ></textarea>
                </div>
              </div>
            </form>
            <div className='bg-[#f4f4f4] mt-8 flex flex-col rounded-[20px] w-full  slg:max-h-screen   px-4 py-10 '>
              <h2 className='text-lg font-bold text-left'>YOUR ORDER</h2>
              <div className='pt-2.5 flex flex-row justify-between items-center py-4 border-t border-b'>
                <p>Product</p>
                <p>sub-total</p>
              </div>
              {cart.map((cartItem) => (
                <div
                  key={cartItem.id}
                  className="flex flex-row justify-between items-center py-4 border-t border-b'"
                >
                  <p className='text-[#323232] text-[14px]'>{cartItem.name}</p>
                  <p>
                    <span className='font-extrabold'>₦ </span>
                    {cartItem.price}
                  </p>
                </div>
              ))}
              {/* <div className="flex flex-row justify-between items-center py-4 border-t border-b'">
                <p className='text-[#323232] text-[14px]'>
                  Sculpter silk shaper x 1
                </p>
                <p>
                  <span className='font-extrabold'>₦ </span>22,000
                </p>
              </div>
              <div className="flex flex-row justify-between items-center py-4 border-t border-b'">
                <p className='text-[#323232] text-[14px]'>
                  Candy signature pose x 1
                </p>
                <p>
                  <span className='font-extrabold'>₦ </span>22,000
                </p>
              </div>
              <div className='flex flex-row justify-between items-center py-4 border-t border-b '>
                <p className='text-[#323232] text-[14px]'>
                  Crochetelo knitted piece x 1
                </p>
                <p className='flex'>
                  <span className='font-extrabold flex '>₦ </span>25,000
                </p>
              </div> */}

              <div className='flex flex-row justify-between items-center py-4 border-t border-b font-semibold'>
                <p>Sub-total</p>
                <p>
                  <span className='font-extrabold'>₦</span>
                  {totalAmount}
                </p>
              </div>
              <div className='flex flex-row justify-between items-center py-4 border-t border-b '>
                <p className='font-semibold'>Shipping</p>
                <p className='w-[50%]'>
                  Enter your address to view shipping options
                </p>
              </div>
              <div className='flex flex-row justify-between items-center py-4 border-t border-b'>
                <p className='font-semibold'>Paystack fees</p>
                <p>
                  <span className=' font-extrabold'>₦</span>0
                </p>
              </div>
              <div className='flex flex-row justify-between items-center py-4 border-t'>
                <p className='font-semibold'>Total</p>
                <p className='font-extrabold text-[26px]'>₦{totalAmount}</p>
              </div>
              <div className='space-y-2 text-[12px]'>
                <p className=''>
                  Your personal data will be used to process your order, support
                  your experience throughout this website, and for other
                  purposes decided in our privacy policy.
                </p>
                <span className='flex gap-2 items-start  '>
                  <div className='flex items-center mt-1'>
                    <input className='' type='checkbox' name='' id='' />
                  </div>
                  <p className='text-[#323232]/70 '>
                    I have read and agreed to the website Terms & conditions
                  </p>
                </span>
              </div>
              <br />
              <button
                onClick={() => handleClick(button, setButton)}
                style={{
                  opacity: button.clicked ? "0.5" : "1",
                  transition: "opacity 0.3s ease",
                }}
                className='bg-primary w-full py-3 rounded-lg text-white'
              >
                {button.text}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkoutpage;
