"use client";
import Hero from "@/components/Hero";
import Image from "next/image";
import Link from "next/link";
import { BsArrowsAngleExpand, BsChevronDown } from "react-icons/bs";
import { IoPersonOutline } from "react-icons/io5";
import { MdStarRate } from "react-icons/md";
import { useRef, useEffect, useState } from "react";
import Collapsible from "react-collapsible";

import { motion } from "framer-motion";

export default function Home() {
  const [width, setWidth] = useState(0);
  const [selectedQuestion, setSelectedQuestion] = useState("HA");
  const carousel = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (carousel.current) {
      setWidth(
        (carousel.current.scrollWidth - carousel.current.offsetWidth) as number
      );
    }
  });
  return (
    <div className="relative min-h-screen ">
      <Hero />
      <section id="about" className="py-10">
        <div className=" mx-auto text-tertiary ">
          <h2 className="sm:text-6xl text-4xl text-center font-secondary ">
            OUR ECO HOTEL IS A{" "}
            <span className="container1">
              <span className="content">PLACE</span>{" "}
            </span>
            TO
          </h2>
          <div className="flex mx-auto items-center justify-center sm:mt-5 mt-2 gap-[-9px] sm:flex-row flex-col ">
            <div className="flex flex-col p-20 justify-center items-center md:h-90 md:w-90 lg:h-96 lg:w-96 h-64 w-64 border-text rounded-full border-2 translate-y-[25%] sm:translate-y-0 sm:translate-x-[10%]">
              <h3 className="text-xl sm:text-2xl    text-center text-secondary">
                CONTEMPLATE SUNSETS
              </h3>
            </div>
            <div className="flex flex-col justify-center items-center md:h-90 md:w-90 lg:h-96 lg:w-96 h-64 w-64 border-text rounded-full border-2">
              <h3 className="text-xl sm:text-2xl  text-secondary ">
                DE-STRESS
              </h3>
            </div>
            <div className="flex flex-col justify-center items-center md:h-90 md:w-90 lg:h-96 lg:w-96 h-64 w-64 border-text rounded-full border-2 translate-y-[-25%] sm:translate-y-0 sm:translate-x-[-10%]">
              <h3 className="text-xl sm:text-2xl  text-secondary ">
                REPLENISH <br /> RESOURCE
              </h3>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center w-full gap-4">
          <p className="text-text2 mx-auto w-[85%] sm:w-[50%] md:w-[35%] leading-6 sm:my-10 my-5 text-center">
            Nestled amidst a vibrant mountain forest within the Reserve, Sylvan
            invites you to experience a haven of sustainable living. Choose from
            cozy bungalows or comfortable rooms, all nestled within the natural
            beauty. Sylvan offers dedicated areas for relaxation and connecting
            with nature, ensuring a revitalizing experience.Immerse yourself in
            the fresh mountain air and indulge in the pure spring water.
          </p>
          <Link href="/about" className="text-text2 mx-auto w-fit ">
            Read more
          </Link>
        </div>
      </section>
      <section id="lodges" className="py-10 text-black ">
        <div className="title p-5 sm:p-10">
          <p className="text-text">LODGES</p>
          <p className="font-secondary text-3xl sm:pt-0 pt-10 font-semibold sm:font-normal sm:text-5xl lg:text-7xl sm:text-right sm:pr-20 ">
            ALL THE{" "}
            <span className="container1">
              <span className="content">LODGES</span>
            </span>
            <br /> ARE CAREFULLY <span className="md:pr-4">INCORPORATED </span>{" "}
            <br /> INTO{" "}
            <span className="container1">
              <span className="content pr-2">NATURE</span>
            </span>
            RESERVE AREA
          </p>
        </div>

        <div className=" p-5 mt-10 flex sm:flex-row flex-col-reverse justify-center items-center md:items-end gap-10">
          <div className="">
            <p className="text-text text-sm">LODGE #1</p>
            <p className="text-2xl sm:text-3xl font-[500] mb-5">
              Cozy small romantic house with <br />
              panoramic view
            </p>
            <div className="flex flex-row-reverse sm:flex-col sm:gap-16 mb-5 justify-between">
              <div className="flex gap-4 text-text2 text-sm">
                <div className="flex gap-2 items-center">
                  <IoPersonOutline />
                  <p>2</p>
                </div>
                <div className="flex gap-2">
                  <BsArrowsAngleExpand />
                  <p>45 m2</p>
                </div>
              </div>
              <p className="font-semibold text-xl">
                100$<span className="text-sm text-text2">/day</span>
              </p>
            </div>
            <div className="flex sm:flex-row flex-col gap-4 ">
              <button
                type="submit"
                className="bg-secondary hover:bg-secondary/50  text-white px-12 py-2 self-end font-primary font-medium w-full "
              >
                Book
              </button>
              <button
                type="submit"
                className="bg-white hover:bg-secondary/50 text-sm sm:text-base  text-black px-12 py-2 self-end font-primary font-medium w-full "
              >
                Show Details
              </button>
            </div>
          </div>
          <Image
            src="/heroimage1.jpg"
            alt="lodge1"
            width={700}
            height={700}
            className="w-[20rem] h-[15rem] md:w-[30rem] md:h-[25rem] lg:w-[40rem] lg:h-[30rem] object-cover"
          />
        </div>
        <div className=" p-5 mt-10 flex sm:flex-row flex-col justify-center items-center md:items-end gap-10">
          <Image
            src="/heroimage1.jpg"
            alt="lodge1"
            width={700}
            height={700}
            className="w-[20rem] h-[15rem] md:w-[30rem] md:h-[25rem] lg:w-[40rem] lg:h-[30rem] object-cover"
          />
          <div className="">
            <p className="text-text text-sm">LODGE #2</p>
            <p className="text-2xl sm:text-3xl font-[500] mb-5">
              Wooden house on the lake shore with <br />
              open terrace
            </p>
            <div className="flex flex-row-reverse sm:flex-col sm:gap-16 mb-5 justify-between">
              <div className="flex gap-4 text-text2 text-sm">
                <div className="flex gap-2 items-center">
                  <IoPersonOutline />
                  <p>4</p>
                </div>
                <div className="flex gap-2">
                  <BsArrowsAngleExpand />
                  <p>65 m2</p>
                </div>
              </div>
              <p className="font-semibold text-xl">
                150$<span className="text-sm text-text2">/day</span>
              </p>
            </div>
            <div className="flex sm:flex-row flex-col gap-4 ">
              <button
                type="submit"
                className="bg-secondary hover:bg-secondary/50  text-white px-12 py-2 self-end font-primary font-medium w-full "
              >
                Book
              </button>
              <button
                type="submit"
                className="bg-white hover:bg-secondary/50 text-sm sm:text-base  text-black px-12 py-2 self-end font-primary font-medium w-full "
              >
                Show Details
              </button>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center my-10">
          <Link href="/lodges" className="text-text2 mx-auto w-fit ">
            SHOW MORE LODGES
          </Link>
        </div>
      </section>
      <section id="testimonial" className="pb-10 text-black  ">
        <div className="title p-5 sm:p-10">
          <p className="text-text">SERVICES</p>
          <p className="font-secondary text-3xl sm:pt-0 pt-10 font-semibold sm:font-normal sm:text-5xl lg:text-7xl sm:text-right sm:pr-20 ">
            IT IS A{" "}
            <span className="container1">
              <span className="content pr-4">PERFECT</span>
            </span>
            PLACE FOR &nbsp; &nbsp; &nbsp; &nbsp; NATURE LOVERS
          </p>
          <p className="text-sm text-text2 sm:text-right mt-5">
            Enjoy endless views and sunsets over dinner
            <br /> at the cafe and immerse yourself in yoga practices
          </p>
        </div>
        <div className="flex sm:flex-row flex-col text-tertiary gap-10 justify-center items-end p-10 w-full">
          <div className="flex flex-col sm:w-[25%]">
            <Image
              src="/heroimage1.jpg"
              alt="lodge1"
              width={700}
              height={700}
              className="w-full sm:h-[30rem] object-cover"
            />
            <div className="flex items-center gap-10 justify-between">
              <p className="font-semibold ">CAR CAMPING</p>
              <Link href="/car-camping" className="text-sm text-text2">
                Read More
              </Link>
            </div>
          </div>
          <div className="flex flex-col sm:w-[25%]">
            <Image
              src="/heroimage1.jpg"
              alt="lodge1"
              width={700}
              height={700}
              className="w-full sm:h-[25rem] object-cover"
            />
            <p className="font-semibold ">YOGA CENTER </p>
          </div>
          <div className="flex flex-col sm:w-[25%]">
            <Image
              src="/heroimage1.jpg"
              alt="lodge1"
              width={700}
              height={700}
              className="w-full sm:h-[20rem] object-cover"
            />
            <p className="font-semibold ">CAFE</p>
          </div>
        </div>
      </section>
      <section id="book" className=" text-WHITE bg-secondary ">
        <div className="title p-5 sm:p-10">
          <p className="text-text">TESTIMONIALS</p>
          <p className="font-secondary text-3xl sm:pt-0 pt-10 font-semibold sm:font-normal sm:text-5xl lg:text-7xl sm:text-right sm:pr-20 ">
            OUR VISITORS RATE <br />
            <span className="container2">
              <span className="content2 pr-4">SERVICE</span>
            </span>
            AND COMFORT OF THE &nbsp; &nbsp; HOTEL{" "}
            <span className="container2">
              <span className="content2 pr-4">HIGHLY</span>
            </span>
          </p>
          <p className="text-sm text-text sm:text-right mt-5">
            OUR RATING
            <br /> ON TRIP ADVISOR-5.0
          </p>
        </div>

        <motion.div
          ref={carousel}
          className="carousel cursor-grab overflow-hidden pl-5 sm:pl-20"
        >
          <motion.div
            drag="x"
            dragConstraints={{ right: 0, left: -width }}
            className="inner-carousel flex gap-4 h-fit"
          >
            <motion.div className="item min-w-[20rem] sm:min-w-[40rem]">
              <div className="pointer-events-none  bg-text w-full h-full text-black p-5 space-y-5">
                <div className="flex items-center text-tertiary">
                  <MdStarRate />
                  <MdStarRate />
                  <MdStarRate />
                  <MdStarRate />
                  <MdStarRate />
                </div>
                <p>
                  {" "}
                  Nestled amidst a vibrant mountain forest within the Reserve,
                  Sylvan invites you to experience a haven of sustainable
                  living. Choose from cozy bungalows or comfortable rooms
                </p>
                <div className="flex justify-between text-text2">
                  <p>Eugenia</p>
                  <p>1 Jun,2024</p>
                </div>
              </div>
            </motion.div>
            <motion.div className="min-w-[20rem] sm:min-w-[40rem]">
              <div className=" pointer-events-none bg-text w-full h-full text-black p-5 space-y-5">
                <div className="flex items-center text-tertiary">
                  <MdStarRate />
                  <MdStarRate />
                  <MdStarRate />
                  <MdStarRate />
                  <MdStarRate />
                </div>
                <p>
                  {" "}
                  Nestled amidst a vibrant mountain forest within the Reserve,
                  Sylvan invites you to experience a haven of sustainable
                  living. Choose from cozy bungalows or comfortable rooms
                </p>
                <div className="flex justify-between text-text2">
                  <p>Eugenia</p>
                  <p>1 Jun,2024</p>
                </div>
              </div>
            </motion.div>
            <motion.div className="min-w-[20rem] sm:min-w-[40rem]">
              <div className=" pointer-events-none bg-text w-full h-full text-black p-5 space-y-5">
                <div className="flex items-center text-tertiary">
                  <MdStarRate />
                  <MdStarRate />
                  <MdStarRate />
                  <MdStarRate />
                  <MdStarRate />
                </div>
                <p>
                  {" "}
                  Nestled amidst a vibrant mountain forest within the Reserve,
                  Sylvan invites you to experience a haven of sustainable
                  living. Choose from cozy bungalows or comfortable rooms
                </p>
                <div className="flex justify-between text-text2">
                  <p>Eugenia</p>
                  <p>1 Jun,2024</p>
                </div>
              </div>
            </motion.div>
            <motion.div className="min-w-[20rem] sm:min-w-[40rem]">
              <div className=" pointer-events-none bg-text w-full h-full text-black p-5 space-y-5">
                <div className="flex items-center text-tertiary">
                  <MdStarRate />
                  <MdStarRate />
                  <MdStarRate />
                  <MdStarRate />
                  <MdStarRate />
                </div>
                <p>
                  {" "}
                  Nestled amidst a vibrant mountain forest within the Reserve,
                  Sylvan invites you to experience a haven of sustainable
                  living. Choose from cozy bungalows or comfortable rooms
                </p>
                <div className="flex justify-between text-text2">
                  <p>Eugenia</p>
                  <p>1 Jun,2024</p>
                </div>
              </div>
            </motion.div>
            <motion.div className="min-w-[20rem] sm:min-w-[40rem]">
              <div className=" pointer-events-none bg-text w-full h-full text-black p-5 space-y-5">
                <div className="flex items-center text-tertiary">
                  <MdStarRate />
                  <MdStarRate />
                  <MdStarRate />
                  <MdStarRate />
                  <MdStarRate />
                </div>
                <p>
                  {" "}
                  Nestled amidst a vibrant mountain forest within the Reserve,
                  Sylvan invites you to experience a haven of sustainable
                  living. Choose from cozy bungalows or comfortable rooms
                </p>
                <div className="flex justify-between text-text2">
                  <p>Eugenia</p>
                  <p>1 Jun,2024</p>
                </div>
              </div>
            </motion.div>
            <motion.div className="min-w-[20rem] sm:min-w-[40rem]">
              <div className=" pointer-events-none bg-text w-full h-full text-black p-5 space-y-5">
                <div className="flex items-center text-tertiary">
                  <MdStarRate />
                  <MdStarRate />
                  <MdStarRate />
                  <MdStarRate />
                  <MdStarRate />
                </div>
                <p>
                  {" "}
                  Nestled amidst a vibrant mountain forest within the Reserve,
                  Sylvan invites you to experience a haven of sustainable
                  living. Choose from cozy bungalows or comfortable rooms
                </p>
                <div className="flex justify-between text-text2">
                  <p>Eugenia</p>
                  <p>1 Jun,2024</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        <div className="dome mt-10 h-[40rem] flex items-center justify-center ">
          <div className="w-[50%] flex flex-col justify-center items-center gap-4">
            <p className="font-secondary text-3xl sm:text-4xl md:tex-5xl lg:text-6xl text-white  text-center">
              Book YOUR ROOM NOW AND TAKE{" "}
              <span className="container2">
                <span className="content2 pr-4">20%</span>
              </span>{" "}
              WEEKDAYS STAYS
            </p>
            <button
              type="submit"
              className="bg-primary sm:w-1/4 text-black px-12 py-2 font-primary font-medium w-full "
            >
              Book
            </button>
          </div>
        </div>
      </section>
      <section className="pb-10 text-black  ">
        <div className="title p-5 sm:p-10">
          <p className="text-text">FAQs</p>
          <p className="font-secondary text-3xl sm:pt-0 pt-10 font-semibold sm:font-normal sm:text-5xl lg:text-7xl sm:text-right sm:pr-20 ">
            WE'VE COLLECTED <br /> THE MOST FREQUENTLY ASKED QUESTIONS ABOUT THE
            HOTEL
          </p>
        </div>
        <div className="flex flex-col sm:flex-row my-10 justify-around px-4">
          <div className="flex gap-4 text-xs text-center sm:text-left mb-5 mx-auto sm:mx-0 sm:text-base sm:flex-col md:text-xl text-text">
            <p
              className={`hover:text-tertiary cursor-pointer transition-color duration-300 ${
                selectedQuestion == "HA" ? "text-tertiary" : ""
              }}`}
              onClick={() => setSelectedQuestion("HA")}
            >
              HOTEL ACCOMMODATION
            </p>
            <p
              className={`hover:text-tertiary cursor-pointer transition-color duration-300 ${
                selectedQuestion === "RC" ? "text-tertiary" : ""
              }}`}
              onClick={() => setSelectedQuestion("RC")}
            >
              RESERVATIONS AND CANCELLATIONS
            </p>
            <p
              className={`hover:text-tertiary cursor-pointer transition-color duration-300 ${
                selectedQuestion === "AS" ? "text-tertiary" : ""
              }}`}
              onClick={() => setSelectedQuestion("AS")}
            >
              ADDITIONAL SERVICES
            </p>
          </div>
          <div>
            <Collapsible
              trigger={
                <div className="flex justify-between items-center">
                  <p> What time is check in/check out time?</p>{" "}
                  <BsChevronDown />
                </div>
              }
            >
              <p>
                This is the collapsible content. It can be any element or React
                component you like.
              </p>
              <p>
                It can even be another Collapsible component. Check out the next
                section!
              </p>
            </Collapsible>
            <hr className="border-text2 border-[1px] my-4" />
            <Collapsible
              trigger={
                <div className="flex justify-between items-center">
                  <p> Do the rooms have a refrigerator?</p> <BsChevronDown />
                </div>
              }
            >
              <p>
                This is the collapsible content. It can be any element or React
                component you like.
              </p>
              <p>
                It can even be another Collapsible component. Check out the next
                section!
              </p>
            </Collapsible>
            <hr className="border-tertiary border-[1px] my-4" />

            <Collapsible
              trigger={
                <div className="flex justify-between items-center">
                  <p>
                    {" "}
                    Is it possible to put a single bed for a child in a double
                    room?
                  </p>{" "}
                  <BsChevronDown />
                </div>
              }
            >
              <p>
                This is the collapsible content. It can be any element or React
                component you like.
              </p>
              <p>
                It can even be another Collapsible component. Check out the next
                section!
              </p>
            </Collapsible>
            <hr className="border-tertiary border-[1px] my-4" />

            <Collapsible
              trigger={
                <div className="flex justify-between items-center">
                  <p> Is breakfast included in the price of accommodation?</p>{" "}
                  <BsChevronDown />
                </div>
              }
            >
              <p>
                This is the collapsible content. It can be any element or React
                component you like.
              </p>
              <p>
                It can even be another Collapsible component. Check out the next
                section!
              </p>
            </Collapsible>
            <hr className="border-tertiary border-[1px] my-4" />
          </div>
        </div>
      </section>

      <section id="contact" className="text-black">
        <div className="bg-[url('/heroimage1.jpg')] bg-cover sm:bg-[url('')] py-4 px-20 mt-10 flex sm:flex-row flex-col-reverse justify-center items-center gap-10">
          <div className="">
            <p className="text-4xl sm:text-6xl font-secondary mb-5">
              LEFT WITH ANY QUESTION
            </p>
            <p className="text-text">
              Write your questions here and we will send you an <br /> answer as
              soon as possible
            </p>
            <form action="" className="my-10 flex flex-col gap-6">
              <div className="flex flex-col gap-1">
                <label htmlFor="name" className="text-text2">
                  Full Name*{" "}
                </label>
                <input
                  type="text"
                  className="px-4 py-2 border-text outline-2 border-2 bg-primary"
                  placeholder="Ivan Pavlov"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="email" className="text-text2">
                  Your Email*{" "}
                </label>
                <input
                  type="email"
                  className="px-4 py-2 border-text outline-2 border-2 bg-primary"
                  placeholder="Ivan@gmail.com"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="question" className="text-text2">
                  Question*{" "}
                </label>
                <textarea
                  className="p-4 border-text outline-2 border-2 bg-primary"
                  placeholder="Enter your question here"
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-secondary hover:bg-secondary/50  text-white px-12 py-2 self-start font-primary font-medium  "
              >
                Send
              </button>
            </form>
          </div>
          <Image
            src="/heroimage1.jpg"
            alt="lodge1"
            width={700}
            height={700}
            className="hidden md:block w-[20rem] h-[15rem] md:w-[30rem] md:h-[25rem] lg:w-[40rem] lg:h-[30rem] object-cover"
          />
        </div>
      </section>
    </div>
  );
}
