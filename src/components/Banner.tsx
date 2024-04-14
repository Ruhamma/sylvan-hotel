import { BannerProps } from "@/types";
import React from "react";

const Banner = ({ bgUrl, title }: BannerProps) => {
  return (
    <div className="relative min-h-screen font-secondary h-fit ">
      <div className="w-full object-cover object-center h-[90vh] absolute top-[-50px] left-0  bg-tertiary/70 z-20"></div>
      <div
        style={{ backgroundImage: `url(${bgUrl})` }}
        className=" absolute top-[-50px] left-0  bg-cover w-full h-[90vh] object-contain object-center  z-0"
      ></div>
      <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-90%] sm:translate-y-[-50%] font-secondary z-20 flex  flex-col w-[90%] sm:w-[70%] ">
        <p className="text-4xl lg:text-7xl sm:text-5xl leading-10 text-center px-2 ">
          {title}
        </p>
      </div>
    </div>
  );
};

export default Banner;
