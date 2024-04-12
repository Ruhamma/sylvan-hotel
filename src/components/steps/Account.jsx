import { useStepperContext } from "@/app/contexts/StepperContext";
import { useEffect } from "react";
export default function Account() {
  const { userData, setUserData } = useStepperContext();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };
  
  return (
    <div className="flex flex-col ">
      <div className="form1 text-white space-y-2 w-full ">
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
              className="border-white border-[1px] bg-transparent p-2 px-1 text-sm text-text"
              onChange={handleChange}
              value={userData["checkIn"] || ""}
              required
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
              className="border-white border-[1px] bg-transparent p-2 px-1 text-sm text-text"
              onChange={handleChange}
              value={userData["checkOut"] || ""}
              required
            />
          </div>
        </div>
        <p className="text-2xl pt-10 pb-">CONTACT DETAILS</p>
        <p className="text-text pb-10">
          A booking confirmation notification will be sent to the Email you
          provided
        </p>
        <div className="space-y-10 mb-12">
          <div className="flex flex-wrap md:flex-nowrap gap-4">
            <div className="flex flex-col gap-1 w-full">
              <label htmlFor="firstName" className="text-sm text-white ">
                First name *
              </label>
              <input
                type="text"
                name="firstName"
                id="firstName"
                className="border-white border-[1px] bg-transparent p-2 px-1 text-sm text-text"
                placeholder="Ivan"
                required
              />
            </div>
            <div className="flex flex-col gap-1 w-full">
              <label htmlFor="lastName" className="text-sm text-white ">
                Last name *
              </label>
              <input
                type="text"
                name="lastName"
                id="lastName"
                className="border-white border-[1px] bg-transparent p-2 px-1 text-sm text-text"
                placeholder="pavlov"
                required
              />
            </div>
          </div>
          <div className="flex gap-4 flex-wrap md:flex-nowrap">
            <div className="flex flex-col gap-1 w-full">
              <label htmlFor="email" className="text-sm text-white font-light ">
                Email *
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="border-white border-[1px] bg-transparent p-2 px-1 text-sm text-text"
                placeholder="ivan@gmail.com"
                required
                onChange={handleChange}
                value={userData["email"] || ""}
              />
            </div>
            <div className="flex flex-col gap-1 w-full">
              <label htmlFor="phone" className="text-sm text-white ">
                Mobile number
              </label>
              <input
                type="tel"
                name="phone"
                id="phone"
                className="border-white border-[1px] bg-transparent p-2 px-1  text-text text-sm"
                placeholder="+995"
                onChange={handleChange}
                value={userData["phoneNumber"] || ""}
              />
            </div>
          </div>
        </div>

        <div className="space-y-6 pt-10">
          <div className="p-2 py-4 bg-white/10 flex items-center gap-2">
            <input type="checkbox" name="check1" id="check1" />
            <label htmlFor="check1">
              I want to learn about promotions and hotel news by email
            </label>
          </div>
          <div className="p-2 py-4 bg-white/10 flex items-center gap-2">
            <input type="checkbox" name="check2" id="check2" />
            <label htmlFor="check2">I'm booking for someone else</label>
          </div>
        </div>
      </div>
    </div>
  );
}
