"use client";
import Link from "next/link";
import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";
const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <div className="text-black text-[14px] p-2 px-6 ">
      <div className="flex sm:justify-between justify-center items-center relative">
        <p className="text-xl font-bold">SYLVAN</p>
        <div className="hidden gap-6 sm:flex ">
          <Link href="/">LODGES</Link>
          <Link href="/">CAR CAMPING</Link>
        </div>
        <div className="hidden gap-6 sm:flex ">
          <Link href="/">ABOUT</Link>
          <Link href="/">CONTACTS</Link>
        </div>
        <p className="md:block hidden">+1 123 456 78 99 41</p>
        <RxHamburgerMenu
          size={20}
          className="absolute top-1 right-2 sm:hidden text-black"
          onClick={() => {
            setOpenMenu(!openMenu);
          }}
        />
      </div>
      {openMenu ? (
        <div className="flex flex-col items-center justify-center text-xs gap-3 p-2 py-4 sm:hidden bg-secondary/50 rounded-md">
          <Link href="/">LODGES</Link>
          <Link href="/">CAR CAMPING</Link>
          <Link href="/">ABOUT</Link>
          <Link href="/">CONTACTS</Link>
          <p>+1 123 456 78 99 41</p>
        </div>
      ) : null}
    </div>
  );
};

export default Header;
