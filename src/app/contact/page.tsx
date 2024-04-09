import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaFacebook, FaInstagram, FaTelegram, FaTwitter } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const contact = () => {
  return (
    <main className="min-h-screen text-black sm:mt-5">
      <div className="flex sm:flex-row flex-col gap-2 py-10 sm:items-end">
        <div className="title px-5 pt-5 sm:px-10 sm:pt-10 sm:w-[60%]  ">
          <p className="text-text">CONTACTS</p>
          <p className="font-secondary text-5xl sm:pt-0 pt-5 font-[500] sm:font-normal sm:text-5xl lg:text-7xl sm:text-right sm:pr-20 ">
            ALWAYS STAY <br />
            <p className="contaier1 bg-cover xl:mr-28">
              <p className="conent">IN TOUCH</p>{" "}
            </p>
            WITH US
          </p>
        </div>
        <div className="px-5 flex flex-col sm:flex-row gap-10 sm:gap-20 justify-between sm:w-[40%] sm:items-end">
          <div className="flex flex-col gap-5 sm:w-1/2">
            <p className="">Mon-Fri,24/7</p>
            <p className="">Korolistavi, Batumi, Georgia</p>
            <p className="">+995 576 34 56 66</p>
            <p className="">sylvansanctuary@gmail.com</p>
          </div>
          <div className="sm:flex hidden sm:flex-col flex-row flex-wrp gap-5 sm:w-1/2 text-secondary/50 ">
            <p className="underline cursor-pointer">telegram </p>
            <p className="underline cursor-pointer">whatsapp</p>
            <p className="underline cursor-pointer">instagram</p>
            <p className="underline cursor-pointer">youtube</p>
          </div>
          <div className="sm:hidden flex justify-center items-center text-secondary">
            <div className="flex gap-16 justify-evenly">
              <Link href="/">
                <FaFacebook size={25} />
              </Link>
              <Link href="/">
                <FaInstagram size={25} />
              </Link>
              <Link href="/">
                <FaXTwitter size={25} />
              </Link>
              <Link href="/">
                <FaTelegram size={25} />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Image
        src="/map.jpg"
        alt="Picture of the author"
        width={1920}
        height={1080}
        className="w-full h-[60vh] object-cover object-center"
      />
    </main>
  );
};

export default contact;
