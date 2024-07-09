import { ChevronDown, SearchIcon } from "lucide-react";
import React from "react";

const Search = () => {
  return (
    <div className=' lg:flex hidden flex-row items-center xsm:gap-2 lg:gap-3 xsm:pb-8 xl:pb-0'>
      <div className='lg:w-[317px] xsm:w-[220px]  flex flex-row items-center gap-3 py-3 lg:px-6 xsm:px-2 bg-white border-none outline-none rounded-[100px]'>
        <SearchIcon color='gray ' className='text-gray-300' />
        <input
          className=' bg-white border-none outline-none text-sm'
          type='text'
          placeholder='Search...'
        />
      </div>
      <button className='flex flex-row xsm:text-sm slg:text-lg lg:px-5 lg:py-2.5 xsm:px-1.5 xsm:py-2  bg-primary hover:bg-[#034488] text-white rounded-xl transition-all duration-200 ease-in-out '>
        <p className='text-white'>Sort by</p>
        <ChevronDown className='hidden slg:block' color='white' />
      </button>
    </div>
  );
};

export default Search;
