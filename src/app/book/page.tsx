"use client";
import Banner from "@/components/Banner";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import Loading from "@/components/Loading";
import Book from "@/components/Book";
const pages = () => {
  return (
    <div>
      <Suspense fallback={<p>Loading ...</p>}>
        <Book />
      </Suspense>
    </div>
  );
};

export default pages;
