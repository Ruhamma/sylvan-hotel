"use client";
import Banner from "@/components/Banner";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { BsArrowsAngleExpand } from "react-icons/bs";
import { FaUmbrellaBeach } from "react-icons/fa";
import { FaDoorOpen } from "react-icons/fa6";
import { IoBed, IoPersonOutline } from "react-icons/io5";
import { LuShowerHead } from "react-icons/lu";
import { toast } from "sonner";

const lodge = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    comment: "",
  });
  const handleChange = (e: { target: { name: any; value: any } }) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    toast(`Thanks for the comment!.`);
    setFormData({
      name: "",
      email: "",
      comment: "",
    });
  };
  return (
    <div className="min-h-screen ">
      <Banner
        title="ALL THE LODGES ARE CAREFULLY INTEGRATED INTO NATURE RESERVE"
        bgUrl="/lodgeHero.jpg"
      />
      <div className="title p-5 sm:p-10 ">
        <p className="text-text">LODGES</p>
        <div className="font-secondary space-y-3 text-3xl sm:pt-0 pt-10 font-semibold sm:font-light sm:text-5xl lg:text-6xl sm:text-right sm:pr-20 text-black ">
          <p className="leading-snug">
            <span className="container1">
              <span className="content">RELOADING</span>
            </span>{" "}
            IN AN ECO HOTEL <br />
            <span className="text-left">
              BY ENJOYING THE VIEWS,
              <br />
            </span>{" "}
            SUNSETS OVER THE SEA <br />
            AND THE RESERVE
          </p>
        </div>
      </div>
      <section className="text-text space-y-10 sm:space-y-20">
        <div className="flex sm:flex-row flex-col justify-start item-center w-full gap-10 lg:gap-40 px-6 sm:px-10">
          <div className="pt-2 sm:p-5 lg:w-[30%] space-y-2">
            <p>COMFORTABLE LIVING</p>
            <p className="text-sm">
              Inspiration by the mesmerizing views while staying in rooms or car
              camping.The sylvan hotel is a living forest with wooden huts and
              ares for relaxing and practicing in nature
            </p>
          </div>
          <div className="pt-2 sm:p-5  lg:w-[30%] space-y-2">
            <p>YOGA AREA</p>
            <p className="text-sm  lowercase">
              Breathtaking views from the covered area with a natural wood
              floor, perfect for yoga and meditation. It's 65 square meters and
              soars among the foliage, high above the ground.
            </p>
          </div>
        </div>
        <div className="flex sm:flex-row flex-col justify-end item-center w-full gap-10 lg:gap-40 px-5 sm:px-10">
          <div className="pt-2 sm:p-5 lg:w-[30%] space-y-2">
            <p>VIEW CAFE</p>
            <p className="text-sm">
              It's place where stunning views greet you at breakfast and sunset
              at dinner.This is where guests meet and socialize.Unlimited,free
              Wi-Fi available.On chilly evenings,we stoke the furnace
            </p>
          </div>
          <div className="pt-2 sm:p-5  lg:w-[30%] space-y-2">
            <p>RECREATION AREA</p>
            <p className="text-sm">
              Our mandarin orchard and forest is filled with secluded nooks with
              hammocks,places to read and relax under shady crowns.If you visit
              in the fall,taste the harvest straight from the branches.
            </p>
          </div>
        </div>
      </section>
      <section id="lodges" className="py-10 text-black ">
        <div className="p-5 w-full mt-10 flex sm:flex-row flex-col-reverse justify-center items-center  gap-10">
          <div className=" sm:w-[40%] ">
            <p className="text-text text-sm">LODGE #1</p>
            <p className=" sm:block hidden text-2xl md:text-3xl font-[500] mb-5">
              Cozy small romantic house with <br />
              panoramic view
            </p>
            <p className="text-2xl sm:hidden sm:text-3xl font-[500] mb-5">
              Cozy small romantic house with panoramic view
            </p>
            <p className="text-text text-sm md:text-base mb-4 ">
              Electric kettle, miniFridge, air conditioning, towels bathrobes
              toiletries, set of dishes, coffee tables, tea, coffee, drinking
              water, sweets, dried fruits
            </p>
            <div className="flex flex-col gap-10 sm:gap-16 mb-5 justify-between ">
              <div className="flex flex-wrap items-center gap-4 text-text2 text-xs md:text-sm">
                <div className="flex gap-2 items-center bg-text/20 p-2">
                  <IoPersonOutline />
                  <p>2 guests</p>
                </div>
                <div className="flex gap-2 items-center bg-text/20 p-2">
                  <BsArrowsAngleExpand />
                  <p>
                    45 m<sup>2</sup>
                  </p>
                </div>
                <div className="flex gap-2 items-center bg-text/20 p-2">
                  <FaDoorOpen />
                  <p>2 rooms</p>
                </div>
                <div className="flex gap-2 items-center bg-text/20 p-2">
                  <IoBed />
                  <p>1 double bed</p>
                </div>
                <div className="flex gap-2 items-center bg-text/20 p-2">
                  <LuShowerHead />
                  <p>Hot shower</p>
                </div>
                <div className="flex gap-2 items-center bg-text/20 p-2">
                  <FaUmbrellaBeach />
                  <p>Terrace</p>
                </div>
              </div>
              <p className="font-semibold text-xl">
                100$<span className="text-sm text-text2">/day</span>
              </p>
            </div>
            <div className="flex sm:flex-row flex-col gap-4 ">
              <Link
                href={`/book?lodgeId=1`}
                className="bg-secondary hover:bg-secondary/50  text-white px-20 py-2  font-primary font-medium  "
              >
                Book
              </Link>
            </div>
          </div>
          <Image
            src="/lodge1.jpg"
            alt="lodge1"
            width={700}
            height={700}
            className="w-[20rem] h-[25rem] md:w-[25rem] md:h-[25rem] lg:w-[40rem] lg:h-[30rem] object-cover"
          />
        </div>
        <div className=" p-5 mt-10 flex sm:flex-row flex-col justify-center items-center md:items-end gap-10">
          <Image
            src="/lodge2.jpg"
            alt="lodge1"
            width={700}
            height={700}
            className="w-[20rem] h-[25rem] md:w-[25rem] md:h-[25rem] lg:w-[40rem] lg:h-[30rem] object-cover"
          />
          <div className=" sm:w-[40%] ">
            <p className="text-text text-sm">LODGE #2</p>
            <p className=" sm:block hidden text-2xl md:text-3xl font-[500] mb-5">
              Wooden house on the lake shore with <br /> open terrace
            </p>
            <p className="text-2xl sm:hidden sm:text-3xl font-[500] mb-5">
              Wooden house on the lake shore with open terrace
            </p>
            <p className="text-text text-sm md:text-base mb-4 ">
              Electric kettle, miniFridge, air conditioning, towels bathrobes
              toiletries, set of dishes, coffee tables, tea, coffee, drinking
              water, sweets, dried fruits
            </p>
            <div className="flex flex-col gap-10 sm:gap-16 mb-5 justify-between ">
              <div className="flex flex-wrap items-center gap-4 text-text2 text-xs md:text-sm">
                <div className="flex gap-2 items-center bg-text/20 p-2">
                  <IoPersonOutline />
                  <p>4 guests</p>
                </div>
                <div className="flex gap-2 items-center bg-text/20 p-2">
                  <BsArrowsAngleExpand />
                  <p>
                    65 m<sup>2</sup>
                  </p>
                </div>
                <div className="flex gap-2 items-center bg-text/20 p-2">
                  <FaDoorOpen />
                  <p>3 rooms</p>
                </div>
                <div className="flex gap-2 items-center bg-text/20 p-2">
                  <IoBed />
                  <p>2 double bed</p>
                </div>
                <div className="flex gap-2 items-center bg-text/20 p-2">
                  <LuShowerHead />
                  <p>Hot shower</p>
                </div>
                <div className="flex gap-2 items-center bg-text/20 p-2">
                  <FaUmbrellaBeach />
                  <p>Terrace</p>
                </div>
              </div>
              <p className="font-semibold text-xl">
                150$<span className="text-sm text-text2">/day</span>
              </p>
            </div>
            <div className="flex sm:flex-row flex-col gap-4 ">
              <Link
                href={`/book?lodgeId=2`}
                className="bg-secondary hover:bg-secondary/50  text-white px-20 py-2  font-primary font-medium  "
              >
                Book
              </Link>
            </div>
          </div>
        </div>
        <div className="p-5 w-full mt-10 flex sm:flex-row flex-col-reverse justify-center items-center  gap-10">
          <div className=" sm:w-[40%] ">
            <p className="text-text text-sm">LODGE #3</p>
            <p className=" sm:block hidden text-2xl md:text-3xl font-[500] mb-5">
              Cozy wooden atmospheric lodge with <br />
              mountain view
            </p>
            <p className="text-2xl sm:hidden sm:text-3xl font-[500] mb-5">
              Cozy wooden atmospheric lodge with mountain view
            </p>
            <p className="text-text text-sm md:text-base mb-4 ">
              Electric kettle, miniFridge, air conditioning, towels bathrobes
              toiletries, set of dishes, coffee tables, tea, coffee, drinking
              water, sweets, dried fruits
            </p>
            <div className="flex flex-col gap-10 sm:gap-16 mb-5 justify-between ">
              <div className="flex flex-wrap items-center gap-4 text-text2 text-xs md:text-sm">
                <div className="flex gap-2 items-center bg-text/20 p-2">
                  <IoPersonOutline />
                  <p>6 guests</p>
                </div>
                <div className="flex gap-2 items-center bg-text/20 p-2">
                  <BsArrowsAngleExpand />
                  <p>
                    80 m <sup>2</sup>
                  </p>
                </div>
                <div className="flex gap-2 items-center bg-text/20 p-2">
                  <FaDoorOpen />
                  <p>4 rooms</p>
                </div>
                <div className="flex gap-2 items-center bg-text/20 p-2">
                  <IoBed />
                  <p>3 double bed</p>
                </div>
                <div className="flex gap-2 items-center bg-text/20 p-2">
                  <LuShowerHead />
                  <p>Hot shower</p>
                </div>
                <div className="flex gap-2 items-center bg-text/20 p-2">
                  <FaUmbrellaBeach />
                  <p>Terrace</p>
                </div>
              </div>
              <p className="font-semibold text-xl">
                200$<span className="text-sm text-text2">/day</span>
              </p>
            </div>
            <div className="flex sm:flex-row flex-col gap-4 ">
              <Link
                href={`/book?lodgeId=3`}
                className="bg-secondary hover:bg-secondary/50  text-white px-20 py-2  font-primary font-medium  "
              >
                Book
              </Link>
            </div>
          </div>
          <Image
            src="/lodge3.jpg"
            alt="lodge1"
            width={700}
            height={700}
            className="w-[20rem] h-[25rem] md:w-[25rem] md:h-[25rem] lg:w-[40rem] lg:h-[30rem] object-cover"
          />
        </div>
        <div className=" p-5 mt-10 flex sm:flex-row flex-col justify-center items-center md:items-end gap-10">
          <Image
            src="/lodge4.jpg"
            alt="lodge1"
            width={700}
            height={700}
            className="w-[20rem] h-[25rem] md:w-[25rem] md:h-[25rem] lg:w-[40rem] lg:h-[30rem] object-cover"
          />
          <div className=" sm:w-[40%] ">
            <p className="text-text text-sm">LODGE #4</p>
            <p className=" sm:block hidden text-2xl md:text-3xl font-[500] mb-5">
              Wooden house for a large company with an open veranda in the
              forest
            </p>
            <p className="text-2xl sm:hidden sm:text-3xl font-[500] mb-5">
              Wooden house for a large company with an open veranda in the
              forest
            </p>
            <p className="text-text text-sm md:text-base mb-4 ">
              Electric kettle, miniFridge, air conditioning, towels bathrobes
              toiletries, set of dishes, coffee tables, tea, coffee, drinking
              water, sweets, dried fruits
            </p>
            <div className="flex flex-col gap-10 sm:gap-16 mb-5 justify-between ">
              <div className="flex flex-wrap items-center gap-4 text-text2 text-xs md:text-sm">
                <div className="flex gap-2 items-center bg-text/20 p-2">
                  <IoPersonOutline />
                  <p>10 guests</p>
                </div>
                <div className="flex gap-2 items-center bg-text/20 p-2">
                  <BsArrowsAngleExpand />
                  <p>
                    125 m<sup>2</sup>
                  </p>
                </div>
                <div className="flex gap-2 items-center bg-text/20 p-2">
                  <FaDoorOpen />
                  <p>6 rooms</p>
                </div>
                <div className="flex gap-2 items-center bg-text/20 p-2">
                  <IoBed />
                  <p>5 double bed</p>
                </div>
                <div className="flex gap-2 items-center bg-text/20 p-2">
                  <LuShowerHead />
                  <p>Hot shower</p>
                </div>
                <div className="flex gap-2 items-center bg-text/20 p-2">
                  <FaUmbrellaBeach />
                  <p>Terrace</p>
                </div>
              </div>
              <p className="font-semibold text-xl">
                270$<span className="text-sm text-text2">/day</span>
              </p>
            </div>
            <div className="flex sm:flex-row flex-col gap-4 ">
              <Link
                href={`/book?lodgeId=4`}
                className="bg-secondary hover:bg-secondary/50  text-white px-20 py-2  font-primary font-medium  "
              >
                Book
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="text-black flex sm:flex-row flex-col justify-evenly items-center my-20 sm:my-40 px-10">
        <div>
          <p className="font-secondary text-5xl sm:pt-0 pt-5 font-[500] sm:font-normal sm:text-5xl lg:text-7xl  sm:pr-20 ">
            DIDN'T FIND
            <br />
            <p className="container1 bg-cover xl:mr-28">
              <span className="content">YOURSELF A</span>{" "}
            </p>
            SUITABLE LODGE?
          </p>
          <p className="text-text2 text-sm my-5">
            Please leave your contact and we will connect with you as soon as
            possible
          </p>
        </div>
        <div className="">
          <form onSubmit={handleSubmit} className="my-10 flex flex-col gap-6 ">
            <div className="flex gap-2 flex-wrap ">
              <div className="flex flex-col gap-1 w-full sm:w-fit">
                <label htmlFor="name" className="text-text2">
                  Full Name*{" "}
                </label>
                <input
                  type="text"
                  className="px-4 py-2 border-text outline-2 border-2 bg-primary w-full"
                  placeholder="Ivan Pavlov"
                  required
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              <div className="flex flex-col gap-1 w-full sm:w-fit">
                <label htmlFor="email" className="text-text2">
                  Your Email*{" "}
                </label>
                <input
                  type="email"
                  className="px-4 py-2 border-text outline-2 border-2 bg-primary"
                  placeholder="Ivan@gmail.com"
                  required
                  name="email"
                  onChange={handleChange}
                  value={formData.email}
                />
              </div>
            </div>
            <div className="space-y-4 ">
              <div className="flex flex-col gap-1">
                <label htmlFor="question" className="text-text2">
                  Comments*{" "}
                </label>
                <textarea
                  className="p-4 border-text outline-2 border-2 bg-primary"
                  placeholder="Enter your comment here"
                  required
                  rows={6}
                  name="comment"
                  value={formData.comment}
                  onChange={handleChange}
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-secondary hover:bg-secondary/50 self-center  text-white px-12 py-2 sm:self-start font-primary font-medium  "
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default lodge;
