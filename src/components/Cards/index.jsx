import React from "react";
import Rating from "../Rating";
const Cards = ({ name, image, bgColor, bgImage, totalItems, type, category, rating }) => {
  if (type === "simple") {
    return (
      <div
        className="w-full h-[172px] rounded-lg  overflow-hidden flex flex-col items-center justify-center  relative"
        style={{
          backgroundImage: bgImage ? `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${bgImage})` : "none",
          backgroundColor: bgImage ? "transparent" : bgColor,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}>
        {bgImage && bgColor && <div className="absolute inset-0" style={{ backgroundColor: bgColor, opacity: 0.5 }}></div>}

        <img src={image} alt={name} className="w-[47px] h-[47px] relative z-10" />

        <p className="text-base leading-[22px] font-medium text-[#333333] relative z-10 pt-5">{name}</p>
        <p className="text-sm leading-[22px] font-normal text-[#333333] relative z-10">{totalItems}</p>
      </div>
    );
  }

  if (type === "primary") {
    return (
      <div
        className="w-full h-[306px] rounded-[17px] px-4 py-8 overflow-hidden flex flex-col relative"
        style={{
          backgroundImage: bgImage ? `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${bgImage})` : "none",
          backgroundColor: bgImage ? "transparent" : bgColor,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}>
        {bgImage && bgColor && <div className="absolute inset-0" style={{ backgroundColor: bgColor, opacity: 0.5 }}></div>}

        <img src={image} alt={name} className="w-[118.15px] h-[144.31px] lg:h-[120px] relative z-10 rounded-md" />

        <p className="text-[26px] font-medium leading-[50px] text-black relative z-10 pt-4">{name}</p>
        <p className="text-lg leading-[21.33px] font-medium text-[#8BAC3E] relative z-10 pb-3">{category}</p>
        <Rating rating={rating} />
      </div>
    );
  }
};

export default Cards;
