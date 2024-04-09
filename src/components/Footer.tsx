import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="flex flex-col text-black-100 relative bg-tertiary p-4 px-10 pt-4">
      <div className="flex gap-10 sm:gap-0   sm:flex-row flex-wrap flex-col justify-between mb-6 ">
        <div className="flex flex-col gap-3">
          <p className="text-lg font-bold">SYLVAN</p>
        </div>
        <div className="flex flex-col gap-4">
          <p className="text-xs">+1 123 456 78 99 41</p>
          <a
            href="mailto:info@
            sylvan.com"
            className="text-xs"
          >
            sylvanSanctuary@gmail.com
          </a>

          <p className="text-xs">
            1234 Sylvan Sanctuary, Sylvan City, <br /> Sylvan State, 1234
          </p>
          <p className="text-xs">Mon-Fri,24/7</p>
        </div>
        <div className="flex flex-col gap-2 text-sm ">
          <Link href="/about">About</Link>
          <Link href="/lodge">Lodges</Link>
          <Link href="/car-camping">Car Camping</Link>
          <Link href="/contacts">Contacts</Link>
        </div>
        <div className=" h-fit gap-6 space-y-2 ">
          <input
            type="text"
            name="email"
            id="email"
            className="p-2 bg-transparent border-secondary border-2 text-sm w-full"
            placeholder="Enter your email..."
          />
          <button className="bg-secondary block hover:bg-secondary/50 text-white p-2 text-sm transition-colors duration-300">
            Subscribe
          </button>
        </div>
      </div>
      <hr />
      <div className="mt-2 flex flex-col gap-6 text-xs">
        <div className="flex justify-between items-center">
          <div className="flex gap-3">
            <Link href="/">
              <FaFacebook size={20} />
            </Link>
            <Link href="/">
              <FaInstagram size={20} />
            </Link>
            <Link href="/">
              <FaTwitter size={20} />
            </Link>
          </div>
          <div className="flex gap-3">
            <Link href="/">Privacy Policy</Link>
            <Link href="/">Terms of Service</Link>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <p>© 2024 Sylvan Sanctuary</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
