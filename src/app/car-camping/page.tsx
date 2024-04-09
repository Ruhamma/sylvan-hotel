import Image from "next/image";
import React from "react";

const CarCamping = () => {
  return (
    <div className="min-h-screen">
      <div className="title px-5 pt-5 sm:px-10 sm:pt-10 mt-20 text-black ">
        <p className="text-text">CONTACTS</p>
        <div className="sm:hidden block font-secondary font-semibold text-3xl sm:pt-0 pt-5  sm:font-normal sm:text-5xl lg:text-7xl sm:text-right sm:pr-20">
          ON YOUR MOTORHOME A MEMORABLE TIME WILL BE CAR CAMPING OF OUR HOTEL
        </div>
        <div className=" sm:block hidden space-y-2 font-secondary text-5xl sm:pt-0 pt-5 font-[500] sm:font-normal sm:text-5xl lg:text-7xl sm:text-right sm:pr-20 ">
          <p className="sm:text-right">
            {" "}
            ON YOUR
            <span className="container1 bg-cover ">
              <span className="content"> MOTORHOME </span>
            </span>
          </p>
          <p className="sm:text-left">A MEMORABLE TIME</p>

          <p className="sm:text-center">
            WILL BE{" "}
            <span className="container1 bg-cover ">
              <span className="content"> CAR CAMPING </span>
            </span>{" "}
          </p>
          <p className="sm:text-right">OF OUR HOTEL</p>
        </div>
      </div>
      <section className=" text-black px-5">
        <div className="flex sm:flex-row flex-col gap-5 sm:gap-16  sm:items-center justify-center mx-auto w-full">
          <div className="lg:w-[35%] sm:h-fit 2xl:h-full flex flex-col sm:gap-10  md:gap-40 justify-start">
            <div>
              <p className="text-sm sm:text-base  text-text2 mt-5">
                The campsite blends seamlessly into the wildlife <br />
                around it and there is a parking lot in the shade of
                <br />
                trees in a photogenic location with
                <> free services</>
              </p>
              <div className="my-5 sm:mt-20 space-y-4">
                <p className="font-semibold text-xl">
                  30$<span className="text-sm text-text2">/day</span>
                </p>
                <button
                  type="submit"
                  className="bg-secondary hover:bg-secondary/50  text-white px-12 py-2 self-end font-primary font-medium  "
                >
                  Book
                </button>
              </div>
            </div>
            <div className="w-full">
              <Image
                src="/heroimage1.jpg"
                alt="lodge1"
                width={700}
                height={700}
                className="w-full sm:w-[20rem]  h-[15rem] sm:h-[25rem] md:w-[30rem] md:h-[35rem] lg:w-[40rem] lg:h-[40rem] object-cover"
              />
              <p className="pt-2 font-[500] ">WIFI in cafes,rest areas</p>
            </div>
          </div>
          <div className="sm:h-fit flex flex-col sm:gap-52 sm:w-fit ">
            <div className="w-full">
              <Image
                src="/heroimage1.jpg"
                alt="lodge1"
                width={700}
                height={700}
                className="w-full sm:w-[20rem]  h-[15rem] sm:h-[25rem] md:w-[30rem] md:h-[35rem] lg:w-[40rem] lg:h-[40rem] object-cover"
              />
              <p className="pt-2 font-[500] ">
                Shared facilities (toilets, showers, kitchen)
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className=" text-black px-5">
        <div className="title pt-5 sm:px-10 sm:pt-10 mt-20 text-black ">
          <div className="sm:hidden block font-secondary font-semibold text-3xl sm:pt-0 pt-5  sm:font-normal sm:text-5xl lg:text-7xl sm:text-right ">
            THE VIEW FROM THE CAR PARK WILL LEAVE MEMORABLE EFFECT IN YOUR
            MEMORY
          </div>
          <div className=" sm:block hidden space-y-2 font-secondary text-5xl sm:pt-0 pt-5 font-[500] sm:font-normal sm:text-5xl lg:text-7xl sm:text-right  ">
            <p className="sm:text-right"> THE VIEW FROM THE CAR PARK</p>
            <p className="sm:text-center">
              WILL LEAVE{" "}
              <span className="container1 bg-cover ">
                <span className="content"> MEMORABLE </span>
              </span>{" "}
              EFFECT
            </p>
            <p className="sm:text-right">IN YOUR MEMORY</p>
          </div>
        </div>
        <div className="flex sm:flex-row flex-col gap-5 sm:gap-16  sm:items-center justify-center mx-auto w-full">
          <div className="lg:w-[35%] sm:h-fit 2xl:h-full flex flex-col sm:gap-10  md:gap-40 justify-start">
            <div>
              <p className="text-sm sm:text-base  text-text2 mt-5">
                The campsite blends seamlessly into the wildlife <br />
                around it and there is a parking lot in the shade of
                <br />
                trees in a photogenic location with
                <> free services</>
              </p>
              <p className="text-sm sm:text-base  text-text2 mt-10 mb-5">
                On the territory of the hotel is the reserve with <br /> 18 km
                of traits. Jogging in the morning and <br />
                hiking all day is how you spend your time here
              </p>
            </div>
            <div className="w-full">
              <Image
                src="/heroimage1.jpg"
                alt="lodge1"
                width={700}
                height={700}
                className="w-full sm:w-[20rem]  h-[15rem] sm:h-[25rem] md:w-[30rem] md:h-[35rem] lg:w-[40rem] lg:h-[40rem] object-cover"
              />
              <p className="pt-2 font-[500] ">WIFI in cafes,rest areas</p>
            </div>
          </div>
          <div className="sm:h-fit flex flex-col sm:gap-52 sm:w-fit ">
            <div className="w-full">
              <Image
                src="/heroimage1.jpg"
                alt="lodge1"
                width={700}
                height={700}
                className="w-full sm:w-[20rem]  h-[15rem] sm:h-[25rem] md:w-[30rem] md:h-[35rem] lg:w-[40rem] lg:h-[40rem] object-cover"
              />
              <p className="pt-2 font-[500] ">
                Shared facilities (toilets, showers, kitchen)
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CarCamping;
