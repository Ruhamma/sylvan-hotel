import { BannerProps } from "@/types";
import React from "react";
import { motion } from "framer-motion";
const Banner = ({ bgUrl, title }: BannerProps) => {
  return (
    <div className="relative min-h-[90vh] font-secondary h-fit ">
      <div className="w-full object-cover object-center h-[90vh] absolute top-[-50px] left-0  bg-tertiary/70 z-20"></div>
      <div
        style={{ backgroundImage: `url(${bgUrl})` }}
        className=" absolute top-[-50px] left-0  bg-cover w-full h-[90vh] object-contain object-center  z-0"
      ></div>
      <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-90%] sm:translate-y-[-50%] font-secondary z-20 flex  flex-col w-[90%] sm:w-[70%] ">
        <motion.p
          initial={{ opacity: 0.5, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "anticipate" }}
          className="text-4xl lg:text-7xl sm:text-5xl leading-10 text-center px-2 "
        >
          {title}
        </motion.p>
      </div>
    </div>
  );
};

export default Banner;
