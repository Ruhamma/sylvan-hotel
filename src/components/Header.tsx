"use client";
import Link from "next/link";
import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";
import { AnimatePresence, motion, useAnimationControls } from "framer-motion";
const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const controls = useAnimationControls();
  const controls1 = useAnimationControls();

  const handleClick = () => {
    controls.start({
      height: "200px",
      transition: {
        duration: 1,
        ease: "easeOut",
      },
    });
    controls1.start({opacity:1})
    setOpenMenu(!openMenu);
  };
  return (
    <AnimatePresence>
      <motion.div
        key={openMenu ? "open" : "closed"}
        initial={{ height: "auto" }}
        animate={controls}
        exit={{ height: "50px" }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className=" nav text-white text-[14px] p-2 px-6 bg-transparent fixed top-0 left-0 right-0 z-30 "
      >
        <div className="flex sm:justify-between justify-center items-center relative">
          <Link href="/" className="text-xl font-bold">
            SYLVAN
          </Link>
          <div className="hidden gap-6 sm:flex ">
            <Link href="/lodge">LODGES</Link>
            <Link href="/car-camping">CAR CAMPING</Link>
          </div>
          <div className="hidden gap-6 sm:flex ">
            <Link href="/about">ABOUT</Link>
            <Link href="/contact">CONTACTS</Link>
          </div>
          <p className="md:block hidden">+1 123 456 78 99 41</p>
          <RxHamburgerMenu
            size={20}
            className="absolute top-1 right-2 sm:hidden text-white"
            onClick={handleClick}
          />
        </div>
        {openMenu ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="flex flex-col items-center justify-center text-xs gap-3 p-2 py-4 sm:hidden popUp rounded-md"
          >
            <Link href="/lodge">LODGES</Link>
            <Link href="/car-camping">CAR CAMPING</Link>
            <Link href="/about">ABOUT</Link>
            <Link href="/contact">CONTACTS</Link>
            <p>+1 123 456 78 99 41</p>
          </motion.div>
        ) : null}
      </motion.div>
    </AnimatePresence>
  );
};

export default Header;
