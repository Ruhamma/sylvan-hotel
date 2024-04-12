"use client";
import Banner from "@/components/Banner";
import Link from "next/link";
import React, { useEffect, useState } from "react";
interface Lodge {
  id: number;
  name: string;
  price: number;
}

const lodges: Lodge[] = [
  {
    id: 1,
    name: "LODGE #1 - Cozy small romantic house with panoramic view",
    price: 100,
  },
  {
    id: 2,
    name: "LODGE #2 - Wooden house on the lake shore with open terrace",
    price: 150,
  },
  {
    id: 3,
    name: "LODGE #3 - Cozy wooden atmospheric lodge with mountain view",
    price: 200,
  },
  {
    id: 4,
    name: "LODGE #4 - Wooden house for a large company with an open veranda in the forest",
    price: 270,
  },
];
type DateLike = Date | string;
const pages = () => {
  const [checkIn, setCheckIn] = useState<DateLike>("");
  const [checkOut, setCheckOut] = useState<DateLike>("");
  const [numDays, setNumDays] = useState(0);
  const [selectedLodge, setSelectedLodge] = useState<Lodge | null>(null); // State for lodge selection (type Lodge or null)

  const handleLodgeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const lodgeId = parseInt(event.target.value);
    setSelectedLodge(lodges.find((lodge) => lodge.id === lodgeId) || null); // Find lodge by ID or set to null
  };
  const handleCheckInChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCheckIn(event.target.value);
  };

  const handleCheckOutChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCheckOut(event.target.value);
    // Update number of days on check-out change
    const newNumDays = calculateDays(checkIn, event.target.value);
    setNumDays(newNumDays);
    if (newNumDays < 0) {
      alert("Alert! Check-out date cannot be before check-in date.");
    }
  };

  const calculateDays = (startDate: DateLike, endDate: DateLike): number => {
    const date1 = new Date(startDate);
    const date2 = new Date(endDate);

    // One day in milliseconds
    const oneDay = 1000 * 60 * 60 * 24;

    // Calculate the difference in milliseconds
    const diffInTime = date2.getTime() - date1.getTime();

    // Convert the difference to days and round down
    const numDays = Math.floor(diffInTime / oneDay);

    return numDays;
  };

  console.log(checkIn, checkOut, numDays);
  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    // Handle form submission logic here (e.g., send data to server)
  };

  return (
    <div>
      <Banner title="Book YOUR ROOM NOW AND TAKE 20% OFF ON WEEKDAY STAYS" />
      <div className="booking flex justify-center  p-10 gap-10 ">
        <div className="w-full lg:w-[60%] ">
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col text-secondary">
              <div className="form1  space-y-2 w-full ">
                <p className="text-2xl my-10">BOOKING DETAILS</p>

                <div className="flex flex-wrap md:flex-nowrap gap-4">
                  <div className="flex flex-col gap-1 w-full">
                    <label htmlFor="checkIn" className="text-sm text-text ">
                      Check In *
                    </label>
                    <input
                      type="date"
                      name="checkIn"
                      id="checkIn"
                      className="border-secondary border-[1px] bg-transparent p-2 px-1 text-sm text-text"
                      required
                      value={checkIn.toString()}
                      onChange={handleCheckInChange}
                    />
                  </div>
                  <div className="flex flex-col gap-1 w-full">
                    <label htmlFor="checkOut" className="text-sm text-text ">
                      Check Out *
                    </label>
                    <input
                      type="date"
                      name="checkOut"
                      id="checkOut"
                      className="border-secondary border-[1px] bg-transparent p-2 px-1 text-sm text-text"
                      required
                      onChange={handleCheckOutChange}
                      value={checkOut.toString()} // Convert checkOut to a string
                    />
                  </div>
                </div>
                {numDays > 0 && (
                  <p className="text-sm text-text mt-5">
                    Number of Days: {numDays}
                  </p>
                )}
                <p className="text-2xl pt-10 pb-">CONTACT DETAILS</p>
                <p className="text-text pb-10">
                  A booking confirmation notification will be sent to the Email
                  you provided
                </p>
                <div className="space-y-10 mb-12">
                  <div className="flex flex-wrap md:flex-nowrap gap-4">
                    <div className="flex flex-col gap-1 w-full">
                      <label htmlFor="firstName" className="text-sm  ">
                        First name *
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        id="firstName"
                        className="border-secondary border-[1px] bg-transparent p-2 px-1 text-sm text-text"
                        placeholder="Ivan"
                        required
                      />
                    </div>
                    <div className="flex flex-col gap-1 w-full">
                      <label htmlFor="lastName" className="text-sm  ">
                        Last name *
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        id="lastName"
                        className="border-secondary border-[1px] bg-transparent p-2 px-1 text-sm text-text"
                        placeholder="pavlov"
                        required
                      />
                    </div>
                  </div>
                  <div className="flex gap-4 flex-wrap md:flex-nowrap">
                    <div className="flex flex-col gap-1 w-full">
                      <label htmlFor="email" className="text-sm  font-light ">
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        className="border-secondary border-[1px] bg-transparent p-2 px-1 text-sm text-text"
                        placeholder="ivan@gmail.com"
                        required
                      />
                    </div>
                    <div className="flex flex-col gap-1 w-full">
                      <label htmlFor="phone" className="text-sm  ">
                        Mobile number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        id="phone"
                        className="border-secondary border-[1px] bg-transparent p-2 px-1  text-text text-sm"
                        placeholder="+995"
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-6 pt-10">
                  <div className="p-2 py-4 bg-secondary/10 flex items-center gap-2">
                    <input type="checkbox" name="check1" id="check1" />
                    <label htmlFor="check1">
                      I want to learn about promotions and hotel news by email
                    </label>
                  </div>
                  <div className="p-2 py-4 bg-secondary/10 flex items-center gap-2">
                    <input type="checkbox" name="check2" id="check2" />
                    <label htmlFor="check2">I'm booking for someone else</label>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col text-secondary">
              <p className="text-2xl my-10">CHOOSE LODGE</p>
              <select
                className="lodge-select border-2 border-secondary p-2"
                value={selectedLodge?.id || ""} // Use optional chaining for potential null value
                onChange={handleLodgeChange}
              >
                <option value="">-- Please Select a Lodge --</option>
                {lodges.map((lodge) => (
                  <option key={lodge.id} value={lodge.id}>
                    {lodge.name} ({lodge.price})
                  </option>
                ))}
              </select>
              {selectedLodge && ( // Conditionally render price only if a lodge is selected
                <p className="text-sm text-text mt-5">
                  Selected Lodge Price: {selectedLodge.price} $
                </p>
              )}
            </div>
            <div className="flex flex-col ">
              <div className="form1 text-secondary space-y-2 w-full ">
                <p className="text-2xl my-10">CHECK IN/CHECKOUT TIME</p>
                <p className="text-text pb-10">
                  You can choose a time that is convenient for you.Early
                  check-in and late check-out service is available at an extra
                  charge.sStandard check-in time is 14:00 and checkout time is
                  12:00
                </p>
                <div className="flex flex-wrap md:flex-nowrap gap-4">
                  <div className="flex flex-col gap-1 w-full">
                    <label htmlFor="checkInTime" className="text-sm text-text ">
                      Check In *
                    </label>
                    <input
                      type="time"
                      name="checkInTime"
                      id="checkInTime"
                      className="border-secondary border-[1px] bg-transparent p-2 px-1 text-sm text-text"
                    />
                  </div>
                  <div className="flex flex-col gap-1 w-full">
                    <label
                      htmlFor="checkOutTime"
                      className="text-sm text-text "
                    >
                      Check Out *
                    </label>
                    <input
                      type="time"
                      name="checkOutTime"
                      id="checkOutTime"
                      className="border-secondary border-[1px] bg-transparent p-2 px-1 text-sm text-text"
                    />
                  </div>
                </div>
                <p className="text-2xl pt-10 pb-5">Additional Comments</p>

                <div className="space-y-10 mb-12">
                  <div className="flex flex-wrap md:flex-nowrap gap-4">
                    <div className="flex flex-col gap-1 w-full">
                      <label htmlFor="firstName" className="text-sm text-text ">
                        Comments
                      </label>
                      <textarea
                        placeholder="Enter your comment..."
                        rows={10}
                        className="border-secondary border-[1px] bg-transparent p-2 px-1 text-sm text-text"
                      ></textarea>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col ">
              <div className="form1 text-secondary space-y-2 w-full ">
                <p className="text-2xl pt-10 pb-">Methods of payment</p>
                {selectedLodge && numDays > 0 && (
                  <>
                    <p className="my-4 text-xl">
                      Total {numDays * selectedLodge.price} $
                    </p>
                    <p className="text-sm text-text">
                      {numDays}days x {selectedLodge?.price} ${" "}
                    </p>
                  </>
                )}
                <p className="text-text pb-10">
                  Visa,Visa Electron,Mastercard,Maestro,American Express,Union
                  Pay,JCB
                </p>

                <div className="space-y-6 pt-5">
                  <div className="p-2 py-4 bg-secondary/10 flex items-center gap-2 cursor-pointer">
                    <input type="radio" name="payment" id="check3" />

                    <label htmlFor="check3">
                      100% prepayment by bank card at accommodation on the
                      territory
                    </label>
                  </div>
                  <div className="p-2 py-4 bg-secondary/10 flex items-center gap-2 cursor-pointer">
                    <input type="radio" name="payment" id="check4" />
                    <label htmlFor="check4">
                      100% prepayment by cash at accommodation on the territory
                    </label>
                  </div>
                  <div className="p-2 py-4 bg-black/5 flex items-center gap-2 cursor-pointer relative">
                    <input type="radio" name="payment" id="check1" disabled />
                    <label htmlFor="check1">100% prepayment by bank card</label>
                    <p className="absolute top-1 right-1 text-xs text-text">
                      Coming soon
                    </p>
                  </div>
                  <div className="relative p-2 py-4 bg-black/5 flex items-center gap-2 cursor-pointer">
                    <input type="radio" name="payment" id="check2" disabled />
                    <label htmlFor="check2">50% prepayment by bank card</label>
                    <p className="absolute top-1 right-1 text-xs text-text">
                      Coming soon
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <button
              type="submit"
              className="bg-secondary py-2 px-10 text-white my-10"
            >
              <Link href="/success">BOOK</Link>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default pages;
