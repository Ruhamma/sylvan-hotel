"use client";
import { useState } from "react";

const Hero = () => {
  const [checkIn, setCheckIn] = useState(new Date());
  const [checkOut, setCheckOut] = useState(new Date());
  const [amount, setAmount] = useState(1);
  const handleSubmit = () => {
    // e.preventDefault();
    console.log(checkIn, checkOut, amount);
  };
  return (
    <div className="relative min-h-screen font-secondary ">
      <div className="w-full object-cover object-center h-full absolute top-[-50px] left-0  bg-tertiary/70 z-20"></div>
      <div className=" absolute top-[-50px] left-0 hero w-full object-contain object-center h-full z-0"></div>
      <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] font-secondary z-20 flex  flex-col w-[90%] sm:w-[70%]">
        <p className="text-4xl md:text-7xl sm:text-5xl leading-10 text-center px-2 mt-10 sm:mt-0">
          YOUR BEST PLACE TO RELAX ALONE
          <br /> WITH NATURE
        </p>
        <form
          onSubmit={handleSubmit}
          className="font-primary  flex sm:flex-row flex-col flex-wrap lg:flex-nowrap items-center justify-center gap-6 mt-10 w-[90%] mx-auto sm:mx-0 sm:w-full"
        >
          <div className="flex flex-col gap-1 w-full sm:w-1/4">
            <label htmlFor="checkIn" className="text-text ">
              Check In
            </label>
            <input
              type="date"
              name="checkIn"
              id="checkIn"
              className="input p-2"
            />
          </div>
          <div className="flex flex-col gap-1 w-full sm:w-1/4">
            <label htmlFor="checkOut" className="text-text ">
              Check Out
            </label>
            <input
              type="date"
              name="checkOut"
              id="checkOut"
              className="input p-2"
            />
          </div>
          <div className="flex flex-col gap-1 w-full sm:w-1/4">
            <label htmlFor="amount" className="text-text ">
              Persons amount
            </label>
            <input
              type="number"
              name="amount"
              id="amount"
              className="input p-2"
            />
          </div>
          <button
            type="submit"
            className="bg-primary sm:w-1/4 text-black px-12 py-2 self-end font-primary font-medium w-full "
          >
            Book
          </button>
        </form>
      </div>
    </div>
  );
};

export default Hero;
