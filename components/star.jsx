import { StarHalf, StarHalfIcon, StarIcon, StarsIcon } from "lucide-react";
import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

function StarRating({ noOfStars }) {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  function handleClick(getCurrentIndex) {
    setRating(getCurrentIndex);
  }

  function handleMouseEnter(getCurrentIndex) {
    setHover(getCurrentIndex);
  }

  function handleMouseLeave(getCurrentIndex) {
    setHover(rating);
  }
  return (
    <div className=' flex gap-0.5 md:gap-1 '>
      {[...Array(noOfStars)].map((_, index) => {
        index += 1;
        return (
          <FaStar
            className='text-[10px] md:text-[14px]'
            key={index}
            onClick={() => handleClick(index)}
            onMouseMove={() => handleMouseEnter(index)}
            onMouseLeave={() => handleMouseLeave(index)}
            fill={"#F6CA07"}
          />
        );
      })}
    </div>
  );
}

export default StarRating;
