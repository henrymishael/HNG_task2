import { Bookmark } from "lucide-react";
import React from "react";

const page = () => {
  return (
    <div className='px-6 gap-6 pb-12'>
      <h2 className='text-[32px] font-semibold'>Checkout</h2>
      <div className='bg-[#f8f8f8] py-6 px-2 rounded-lg mt-3 '>
        <p>
          Returning customer?{" "}
          <span className='text-[#0634ca]'>Click here to Login</span>
        </p>
        <div className='flex gap-4 '>
          <Bookmark />
          <p>Have a coupon? Click here to enter</p>
        </div>
      </div>
      <div className='flex flex-col gap-3 pt-6'>
        <h3 className='text-lg font-semibold'>Billing Details</h3>
        <div className='flex flex-row'>
          <form className='flex flex-col gap-10'>
            <div className='flex flex-row gap-10'>
              <div className='flex flex-col px-1'>
                <label htmlFor='email'>
                  Email <span className='text-red-500'>*</span>
                </label>
                <input
                  className='w-[340px] h-[48px] text-[14px] border border-[#d8d8d8] rounded-[7px] px-3'
                  placeholder='Enter your email address'
                  type='email'
                />
              </div>
              <div className='flex flex-col px-1'>
                <label htmlFor='phone'>
                  Phone<span className='text-red-500'>*</span>
                </label>
                <input
                  className='w-[340px] h-[48px] text-[14px] border border-[#d8d8d8] rounded-[7px] px-3'
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
                  className='w-[340px] h-[48px] text-[14px] border border-[#d8d8d8] rounded-[7px] px-3'
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
                  className='w-[340px] h-[48px] text-[14px] border border-[#d8d8d8] rounded-[7px] px-3'
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
                  className='w-full h-[48px] text-[14px] border border-[#d8d8d8] rounded-[7px] px-3'
                  placeholder='House number and street address'
                  type='text'
                />
              </div>
              <div>
                <label htmlFor='lName' name='lName'>
                  State<span className='text-red-500'>*</span>
                </label>
                <select
                  for='lName'
                  className='w-full h-[48px] text-[14px] border border-[#d8d8d8] rounded-[7px] px-3 '
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
              <div>
                <label htmlFor='lName' name='lName'>
                  City<span className='text-red-500'>*</span>
                </label>
                <select
                  for='lName'
                  className='w-full h-[48px] text-[14px] border border-[#d8d8d8]  rounded-[7px] px-3'
                  placeholder='Select an option'
                >
                  <option className='text-[#d8d8d8]' value='' disabled selected>
                    Select an option
                  </option>

                  <option value=''>Oshodi, Lagos</option>
                  <option value='option2'>Surulere, Lagos</option>
                  <option value='option3'>Ikotun, Lagos</option>
                </select>
              </div>
              <div>
                <label htmlFor='lName' name='lName'>
                  Country<span className='text-red-500'>*</span>
                </label>
                <select
                  for='lName'
                  className='w-full h-[48px] text-[14px] border border-[#d8d8d8]  rounded-[7px] px-3'
                  placeholder='Select an option'
                >
                  <option className='text-[#d8d8d8]' value='' disabled selected>
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
                  className='w-full h-[165px] text-[14px] border border-[#d8d8d8] rounded-[7px] px-3 pt-2'
                  id='notes'
                  placeholder='Notes about your order, e.g. special notes for delivery...'
                ></textarea>
              </div>
            </div>
          </form>
          <div>YOUR ORDER</div>
        </div>
      </div>
    </div>
  );
};

export default page;
