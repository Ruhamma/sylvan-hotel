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
import { toast } from "sonner";
export default function Home() {
  const [width, setWidth] = useState(0);
  const [selectedQuestion, setSelectedQuestion] = useState("HA");
  console.log(selectedQuestion);
  const carousel = useRef<HTMLDivElement>(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [question, setQuestion] = useState("");
  useEffect(() => {
    if (carousel.current) {
      setWidth(
        (carousel.current.scrollWidth - carousel.current.offsetWidth) as number
      );
    }
  });
  const renderContent = () => {
    switch (selectedQuestion) {
      case "HA":
        return (
          <div>
            <Collapsible
              trigger={
                <div className="flex justify-between items-center">
                  <p> What time is check in/check out time?</p>
                  <BsChevronDown />
                </div>
              }
            >
              <p className="p-5 bg-secondary/20 sm:w-[500px]">
                **Check-in:** You're welcome to arrive any time after 3:00 PM to
                begin your desert oasis experience.
                <br /> **Check-out:** We kindly ask that you depart by 12:00 PM
                to allow our team to prepare the room for the next guests.
              </p>
            </Collapsible>
            <hr className="border-text2 border-[1px] my-4" />

            <Collapsible
              trigger={
                <div className="flex justify-between items-center">
                  <p> Do the rooms have a refrigerator?</p>
                  <BsChevronDown />
                </div>
              }
            >
              <p className="p-5 bg-secondary/20 sm:w-[500px]">
                **Absolutely!** All our rooms, from cozy lodges to spacious
                Suites, come equipped with a mini-fridge to keep your drinks and
                snacks chilled.
              </p>
            </Collapsible>
            <hr className="border-text2 border-[1px] my-4" />

            <Collapsible
              trigger={
                <div className="flex justify-between items-center">
                  <p> What are your pet policies?</p>
                  <BsChevronDown />
                </div>
              }
            >
              <p className="p-5 bg-secondary/20 sm:w-[500px]">
                We are happy to welcome well-behaved pets!
                <br /> Please see our full pet policy on our website for details
                on breed restrictions, fees, and amenities available for your
                furry friend.
              </p>
            </Collapsible>
            <hr className="border-text2 border-[1px] my-4" />

            <Collapsible
              trigger={
                <div className="flex justify-between items-center">
                  <p> Is breakfast included in the price of accommodation?</p>
                  <BsChevronDown />
                </div>
              }
            >
              <p className="p-5 bg-secondary/20 sm:w-[500px]">
                **You bet!** Breakfast is included complimentary with every room
                booking at The Sylvan sanctuary.
                <br /> Enjoy a delicious breakfast buffet served daily at our
                on-site restaurant, The Saguaro Sunrise. Fuel up for your desert
                adventures with a variety of fresh options to start your day
                right.
              </p>
            </Collapsible>
            <hr className="border-text2 border-[1px] my-4" />
          </div>
        );
      case "RC":
        return (
          <div>
            <Collapsible
              trigger={
                <div className="flex justify-between items-center">
                  <p>How can I make a reservation or cancel an existing one?</p>

                  <BsChevronDown />
                </div>
              }
            >
              <p className="p-5 bg-secondary/20 sm:w-[500px]">
                **Reservations:** You can easily make reservations online
                through our website or by contacting our friendly reservations
                team at [phone number] or [email address].
                <br /> **Cancellations:** We understand that plans can change.
                Please refer to our cancellation policy on our website for
                details, or contact our reservations team for assistance.
              </p>
            </Collapsible>
            <hr className="border-text2 border-[1px] my-4" />

            <Collapsible
              trigger={
                <div className="flex justify-between items-center">
                  <p> Do you have a modification policy?</p>

                  <BsChevronDown />
                </div>
              }
            >
              <p className="p-5 bg-secondary/20 sm:w-[500px]">
                **Modification Policy**
                <br /> We understand that sometimes your travel plans might need
                to be adjusted. Please see our modification policy on our
                website for details on how to change your existing reservation.
              </p>
            </Collapsible>
            <hr className="border-text2 border-[1px] my-4" />

            <Collapsible
              trigger={
                <div className="flex justify-between items-center">
                  <p> What forms of payment do you accept?</p>

                  <BsChevronDown />
                </div>
              }
            >
              <p className="p-5 bg-secondary/20 sm:w-[500px]">
                We accept all major credit cards, debit cards, and cash for your
                convenience.
              </p>
            </Collapsible>
            <hr className="border-text2 border-[1px] my-4" />

            <Collapsible
              trigger={
                <div className="flex justify-between items-center">
                  <p> Is there a minimum stay requirement?</p>

                  <BsChevronDown />
                </div>
              }
            >
              <p className="p-5 bg-secondary/20 sm:w-[500px]">
                There is no minimum stay requirement during certain times of the
                year. However, during peak season (typically [dates]), a minimum
                stay of [number] nights may be required. Please refer to our
                booking information for details.
              </p>
            </Collapsible>
            <hr className="border-text2 border-[1px] my-4" />
          </div>
        );
      case "AS":
        return (
          <div>
            <Collapsible
              trigger={
                <div className="flex justify-between items-center">
                  <p> What additional services do you offer?</p>
                  <BsChevronDown />
                </div>
              }
            >
              <p className="p-5 bg-secondary/20 sm:w-[500px]">
                We offer a variety of additional services to enhance your stay,
                including spa treatments, airport transportation, and in-room
                dining.
                <br /> Visit our website or contact our concierge team for more
                information and to book these services.
              </p>
            </Collapsible>
            <hr className="border-text2 border-[1px] my-4" />{" "}
            {/* HR after each collapsible */}
            <Collapsible
              trigger={
                <div className="flex justify-between items-center">
                  <p> Do you offer on-site dining options?</p>
                  <BsChevronDown />
                </div>
              }
            >
              <p className="p-5 bg-secondary/20 sm:w-[500px]">
                **Absolutely!** We have a variety of on-site dining options to
                suit your cravings.
                <br /> Enjoy a delicious breakfast buffet at The Saguaro
                Sunrise, unwind with handcrafted cocktails at The Sunset Lounge,
                or savor a poolside lunch at The Oasis Grill.
              </p>
            </Collapsible>
            <hr className="border-text2 border-[1px] my-4" />{" "}
            {/* HR after each collapsible */}
            <Collapsible
              trigger={
                <div className="flex justify-between items-center">
                  <p> Are there any spa packages available?</p>
                  <BsChevronDown />
                </div>
              }
            >
              <p className="p-5 bg-secondary/20 sm:w-[500px]">
                Yes, we offer a variety of spa packages to help you relax and
                rejuvenate during your stay. Visit our spa menu on our website
                or contact our spa concierge to learn more and book your
                appointment.
              </p>
            </Collapsible>
            <hr className="border-text2 border-[1px] my-4" />{" "}
            {/* HR after each collapsible */}
            <Collapsible
              trigger={
                <div className="flex justify-between items-center">
                  <p> What activities are available in the area?</p>
                  <BsChevronDown />
                </div>
              }
            >
              <p className="p-5 bg-secondary/20 sm:w-[500px]">
                The surrounding area offers a wide range of activities for all
                interests. Hike or bike through stunning desert landscapes,
                explore historical sites, or visit nearby art galleries and
                museums. Our concierge team can help you plan your itinerary and
                book any necessary tours or activities.
              </p>
            </Collapsible>
            <hr className="border-text2 border-[1px] my-4" />{" "}
            {/* HR after each collapsible */}
          </div>
        );
      default:
        return null;
    }
  };

  const handleQuestionSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    toast(
      `Question submitted successfully! \n We will get back to you soon ${name}.`
    );
    setEmail("");
    setName("");
    setQuestion("");
  };
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
          <Link
            href="/about"
            className="text-text2 mx-auto w-fit flex items-center gap-2"
          >
            <Image src="/branch1.png" width={40} height={40} alt="branch" />
            <p> READ MORE</p>
            <Image src="/branch2.png" width={40} height={40} alt="branch" />
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
                  <p>
                    45 m<sup>2</sup>
                  </p>
                </div>
              </div>
              <p className="font-semibold text-xl">
                100 $<span className="text-sm text-text2">/day</span>
              </p>
            </div>
            <div className="flex sm:flex-row flex-col gap-4 ">
              <Link
                href="/book"
                className="bg-secondary hover:bg-secondary/50  text-white px-12 py-2 self-end font-primary font-medium w-full text-center"
              >
                Book
              </Link>
              <Link
                href="/lodge"
                className="bg-white hover:bg-secondary/50 text-sm sm:text-base  text-black px-12 py-2 self-end font-primary font-medium w-full text-center"
              >
                Show Details
              </Link>
            </div>
          </div>
          <Image
            src="/lodge1.jpg"
            alt="lodge1"
            width={700}
            height={700}
            className="w-[20rem] h-[15rem] md:w-[30rem] md:h-[25rem] lg:w-[40rem] lg:h-[30rem] object-cover"
          />
        </div>
        <div className=" p-5 mt-10 flex sm:flex-row flex-col justify-center items-center md:items-end gap-10">
          <Image
            src="/lodge2.jpg"
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
                  <p>
                    65 m<sup>2</sup>
                  </p>
                </div>
              </div>
              <p className="font-semibold text-xl">
                150 $<span className="text-sm text-text2">/day</span>
              </p>
            </div>
            <div className="flex sm:flex-row flex-col gap-4 ">
              <Link
                href="/book"
                className="bg-secondary hover:bg-secondary/50  text-white px-12 py-2 self-end font-primary font-medium w-full text-center"
              >
                Book
              </Link>
              <Link
                href="/lodge"
                className="bg-white hover:bg-secondary/50 text-sm sm:text-base  text-black px-12 py-2 self-end font-primary font-medium w-full text-center "
              >
                Show Details
              </Link>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center my-10">
          <Link
            href="/lodge"
            className="text-text2 mx-auto w-fit flex items-center gap-2"
          >
            <Image src="/branch1.png" width={40} height={40} alt="branch" />
            <p>SHOW MORE LODGES</p>
            <Image src="/branch2.png" width={40} height={40} alt="branch" />
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
          <div className="flex flex-col  w-full sm:w-[25%]">
            <Image
              src="/cc.jpg"
              alt="lodge1"
              width={700}
              height={700}
              className="w-full h-[20rem] sm:h-[30rem] object-cover"
            />
            <div className="flex items-center gap-10 justify-between">
              <p className="font-semibold ">CAR CAMPING</p>
              <Link
                href="/car-camping"
                className="text-sm text-text2 hover:text-black"
              >
                Read More
              </Link>
            </div>
          </div>
          <div className="flex flex-col  sm:w-[25%]">
            <Image
              src="/yoga.jpg"
              alt="lodge1"
              width={700}
              height={700}
              className="w-full h-[20rem] sm:h-[25rem] object-cover"
            />
            <p className="font-semibold ">YOGA CENTER </p>
          </div>
          <div className="flex flex-col  sm:w-[25%]">
            <Image
              src="/cafe.jpg"
              alt="lodge1"
              width={700}
              height={700}
              className="w-full h-[20rem] sm:h-[20rem] object-cover"
            />
            <p className="font-semibold ">CAFE</p>
          </div>
        </div>
      </section>
      <section
        id="book"
        className=" text-WHITE bg-secondary leafContainer bg-cover bg-center"
      >
        <div className="leafContent">
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
                    I had an incredible time at this lodge. The staff was
                    friendly and accommodating, the rooms were clean and
                    comfortable, and the surrounding nature was breathtaking.
                  </p>
                  <div className="flex justify-between text-text2">
                    <p>Eugenia</p>
                    <p>1 Jan,2024</p>
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
                    My stay at this lodge was beyond my expectations. The
                    location was secluded and surrounded by stunning natural
                    beauty. The lodge's cozy cabins provided a comfortable and
                    rustic experience.
                  </p>
                  <div className="flex justify-between text-text2">
                    <p>John</p>
                    <p>5 Jun,2023</p>
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
                    I can't say enough good things about this lodge. The serene
                    atmosphere, coupled with the friendly and helpful staff,
                    made my stay truly memorable. The lodge's spa services were
                    a treat.
                  </p>
                  <div className="flex justify-between text-text2">
                    <p>Emily</p>
                    <p>17 Aug,2023</p>
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
                    If you love being surrounded by nature, this lodge is a
                    dream come true. The picturesque views, including a nearby
                    lake and lush forests, were awe-inspiring.
                  </p>
                  <div className="flex justify-between text-text2">
                    <p>Michael</p>
                    <p>28 Sep,2023</p>
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
                    I had a delightful stay at this lodge. The cozy and charming
                    cabins provided the perfect retreat from the city. The
                    fireplace added a warm touch, and a restful sleep
                  </p>
                  <div className="flex justify-between text-text2">
                    <p>Jennifer</p>
                    <p>12 Nov ,2023</p>
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
                    My family and I had an enchanting experience at this lodge
                    during the winter season. The snow-covered surroundings
                    transformed the lodge into a magical wonderland.
                  </p>
                  <div className="flex justify-between text-text2">
                    <p>David</p>
                    <p>20 Dec,2022</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

          <div className="dome mt-10 h-[40rem] flex items-center justify-center ">
            <div className="w-[50%] flex flex-col justify-center items-center gap-4">
              <p className="font-secondary text-3xl sm:text-4xl md:tex-5xl lg:text-6xl text-secondary font-semibold  text-center">
                Book YOUR ROOM NOW AND TAKE{" "}
                <span className="container2">
                  <span className="content2 pr-4">20%</span>
                </span>{" "}
                WEEKDAYS STAYS
              </p>
              <Link
                href="/book"
                className="hover:bg-primary sm:w-1/4 hover:text-black px-12 py-2 font-primary font-medium w-full bg-secondary/40 text-center"
              >
                Book
              </Link>
            </div>
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
        <div className="flex flex-col sm:flex-row justify-around px-4 gap-5 sm:gap-0 my-20">
          <div className="flex gap-4 text-xs text-center sm:text-left mb-5 mx-auto sm:mx-0 sm:text-base sm:flex-col md:text-xl text-text">
            <div
              className={`${
                selectedQuestion == "HA" ? "text-secondary" : ""
              }hover:text-tertiary cursor-pointer transition-color duration-300 flex items-center gap-1}`}
              onClick={() => setSelectedQuestion("HA")}
            >
              {selectedQuestion == "HA" && (
                <Image src="/branch1.png" width={40} height={40} alt="branch" />
              )}
              <p
                className={`${
                  selectedQuestion == "HA" ? "text-secondary" : ""
                }`}
              >
                HOTEL ACCOMMODATION
              </p>
            </div>
            <div
              className={`hover:text-tertiary cursor-pointer transition-color duration-300 flex items-center gap-1 ${
                selectedQuestion === "RC" ? "text-tertiary" : ""
              }}`}
              onClick={() => setSelectedQuestion("RC")}
            >
              {selectedQuestion == "RC" && (
                <Image src="/branch1.png" width={40} height={40} alt="branch" />
              )}
              <p
                className={`${
                  selectedQuestion == "RC" ? "text-secondary" : ""
                }`}
              >
                RESERVATIONS AND CANCELLATIONS
              </p>
            </div>
            <div
              className={`flex items-center gap-1 hover:text-tertiary cursor-pointer transition-color duration-300 ${
                selectedQuestion === "AS" ? "text-tertiary" : ""
              }}`}
              onClick={() => setSelectedQuestion("AS")}
            >
              {selectedQuestion == "AS" && (
                <Image src="/branch1.png" width={40} height={40} alt="branch" />
              )}
              <p
                className={`${
                  selectedQuestion == "AS" ? "text-secondary" : ""
                }`}
              >
                ADDITIONAL SERVICES
              </p>
            </div>
          </div>
          <div>{renderContent()}</div>
        </div>
      </section>

      <section id="contact" className="text-black">
        <div className="bg-[url('/book.jpg')] bg-cover sm:bg-none py-4 px-20 mt-10 flex sm:flex-row flex-col-reverse justify-center items-center gap-10">
          <div className="">
            <p className="text-4xl md:text-5xl lg:text-6xl font-secondary mb-5">
              LEFT WITH ANY QUESTION
            </p>
            <p className="sm:text-text">
              Write your questions here and we will send you an <br /> answer as
              soon as possible
            </p>
            <form
              onSubmit={handleQuestionSubmit}
              className="my-10 flex flex-col gap-6"
            >
              <div className="flex flex-col gap-1">
                <label htmlFor="name" className="text-text2">
                  Full Name*{" "}
                </label>
                <input
                  type="text"
                  className="px-4 py-2 border-text outline-2 border-2 bg-primary"
                  placeholder="Ivan Pavlov"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
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
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="question" className="text-text2">
                  Question*{" "}
                </label>
                <textarea
                  className="p-4 border-text outline-2 border-2 bg-primary"
                  placeholder="Enter your question here"
                  required
                  value={question}
                  onChange={(e) => setQuestion(e.target.value)}
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
            src="/book.jpg"
            alt="lodge1"
            width={700}
            height={700}
            className="hidden md:block w-[20rem] h-[15rem] md:w-[25rem] md:h-[25rem] lg:w-[40rem] lg:h-[30rem] object-cover"
          />
        </div>
      </section>
    </div>
  );
}
