import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="relative min-h-[90vh] font-secondary h-fit ">
      <div className="w-full object-cover object-center h-[97vh] absolute top-[-50px] left-0  bg-tertiary/60 z-20"></div>
      <div className=" absolute top-[-50px] left-0 bg-[url('/thanks.jpg')]  bg-cover w-full h-[100vh] object-contain object-center  z-0"></div>
      <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-90%] sm:translate-y-[-50%] font-secondary z-20 flex  flex-col w-[90%] sm:w-[70%] ">
        <p className="text-4xl lg:text-7xl sm:text-5xl leading-10 text-center px-2 ">
          THANK YOU FOR BOOKING WITH US
        </p>
        <div className="gap-4 flex md:flex-row flex-col items-center justify-center mt-10 text-tertiary ">
          <Link
            href="/"
            className="bg-primary hover:border-2 hover:border-white  hover:bg-secondary hover:text-white transition-colors duration-300 px-12 py-2 font-primary font-medium w-fit "
          >
            GO TO HOME
          </Link>
        </div>
      </div>
    </div>
  );
};

export default page;
