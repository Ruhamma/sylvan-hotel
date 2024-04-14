import Banner from "@/components/Banner";
import Hero from "@/components/Hero";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const About = () => {
  return (
    <div className="min-h-screen ">
      <Banner title="A place to contemplate sunset, de-stress and replenish resources" bgUrl="/aboutHero.jpg"/>
      <section className="text-black">
        <div className="title p-5 sm:p-10 ">
          <p className="text-text">ABOUT US</p>
          <div className="font-secondary text-3xl sm:pt-0 pt-10 font-semibold sm:font-normal sm:text-5xl lg:text-7xl sm:text-right sm:pr-20 ">
            IT'S AN{" "}
            <span className="container1">
              <span className="content">EXPERIENCE</span>
            </span>
            <p className="mr-10">YOU'LL TAKE AWAY WITH YOU</p>
          </div>
        </div>
        <div className="flex sm:flex-row flex-col gap-5 sm:gap-16 px-10 items-center justify-center mx-auto w-full">
          <div className="lg:w-[25%] sm:h-[200vh] 2xl:h-full flex flex-col  sm:gap-40 items-center justify-center">
            <div className="w-full">
              <Image
                src="/sunset.jpg"
                alt="lodge1"
                width={700}
                height={700}
                className="w-full sm:w-[20rem] h-[15rem] md:w-[30rem] md:h-[25rem] lg:w-[40rem] lg:h-[30rem] object-cover"
              />
              <p className="pt-2 font-[500] ">Enjoy sunsets over dinner at a</p>
            </div>
            <div className="w-full">
              <Image
                src="/yoga2.jpg"
                alt="lodge1"
                width={700}
                height={700}
                className="w-full sm:w-[20rem] h-[15rem] md:w-[30rem] md:h-[25rem] lg:w-[40rem] lg:h-[30rem] object-cover"
              />
              <p className="pt-2 font-[500] ">
                Yoga practices in the silence of the retreat <br /> areas
              </p>
            </div>
          </div>
          <div className="sm:h-[200vh] flex flex-col sm:gap-52 w-fit ">
            <div className="w-full">
              <Image
                src="/view.jpg"
                alt="lodge1"
                width={700}
                height={700}
                className="w-full sm:w-[20rem] h-[15rem] md:w-[30rem] md:h-[25rem] lg:w-[40rem] lg:h-[30rem] object-cover"
              />
              <p className="pt-2 font-[500] ">
                Be inspired by the mesmerizing views <br /> while staying in
                rooms or car camping
              </p>
            </div>
            <div className="w-full">
              <Image
                src="/forest.jpg"
                alt="lodge1"
                width={700}
                height={700}
                className="w-full sm:w-[20rem] h-[15rem] md:w-[30rem] md:h-[25rem] lg:w-[40rem] lg:h-[30rem] object-cover"
              />
              <p className="pt-2 font-[500] ">
                Filling with tranquility and freedom while <br />
                walking in the forest
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className=" font-[500] mt-20 sm:mt-0 flex flex-col gap-4 items-center justify-center text-black">
        <p className="text-4xl lg:text-5xl sm:text-3xl  text-center px-2 font-light font-secondary z-20 flex  flex-col w-[90%] sm:w-[70%]  ">
          COMFORTABLE RECREATION IN NATURE, AWAY FROM THE BUSTLE OF THE CITY,
          BUT WITH ALL THE BENEFITS OF CIVILIZATION-DREAM OF MANY RESIDENTS OF
          MEGA CITIES
        </p>
        <p className="font-primary text-text2 text-center sm:w-[40%] mt-2">
          The view from the car park will leave an unforgettable impression in
          your memory and your photos.
        </p>
      </section>
      <section id="testimonial" className="pb-10 text-black  mt-40">
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
              src="/carCamp.jpg"
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
              src="/yoga3.jpg"
              alt="lodge1"
              width={700}
              height={700}
              className="w-full sm:h-[25rem] object-cover"
            />
            <p className="font-semibold ">YOGA CENTER </p>
          </div>
          <div className="flex flex-col sm:w-[25%]">
            <Image
              src="/cafe2.jpg"
              alt="lodge1"
              width={700}
              height={700}
              className="w-full sm:h-[20rem] object-cover"
            />
            <p className="font-semibold ">CAFE</p>
          </div>
        </div>
      </section>
      <section id="book" className=" bg-secondary pt-10">
        <div className="title p-5 sm:p-10 mt-20">
          <p className="font-secondary text-3xl sm:text-4xl md:tex-5xl lg:text-6xl text-white  text-center">
            <span className="container2">
              <span className="content2 pr-4">EXPLORE</span>
            </span>{" "}
            THE ECO HOTEL AREA BY
          </p>
          <div className="gap-4 flex md:flex-row flex-col items-center justify-center mt-10 text-tertiary ">
            <button
              type="submit"
              className="bg-primary hover:border-2 hover:border-white  sm:w-1/4 md:w-1/6 hover:bg-secondary hover:text-white transition-colors duration-300 px-12 py-2 font-primary font-medium w-full "
            >
              SEE SCHEME
            </button>
            <button
              type="submit"
              className="bg-transparent border-white border-2 sm:w-1/4 md:w-1/6 hover:bg-white hover:text-tertiary text-white transition-colors duration-300 px-12 py-2 font-primary font-medium w-full "
            >
              3D TOUR
            </button>
          </div>
        </div>

        <div className="dome2 mt-10 h-[40rem] flex items-center justify-center ">
          <div className="w-[50%] flex flex-col justify-center items-center gap-4"></div>
        </div>
      </section>
    </div>
  );
};

export default About;
