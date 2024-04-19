import { useStepperContext } from "@/app/contexts/StepperContext";
import Link from "next/link";

export default function Final() {
  const { userData, setUserData } = useStepperContext();
  function calculateDaysBetweenDates(startDate, endDate) {
    // Convert strings to Date objects
    const startDateObj = new Date(startDate);
    const endDateObj = new Date(endDate);

    // Handle potential errors (e.g., invalid date strings)

    // Calculate the difference in milliseconds
    const timeDifference = endDateObj.getTime() - startDateObj.getTime();

    // Convert milliseconds to days (rounded down to whole days)
    const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

    return daysDifference;
  }

  const daysBetween = calculateDaysBetweenDates(
    userData.checkIn,
    userData.checkOut
  );

  
  return (
    <div className="container md:mt-10">
      <div className="flex flex-col items-center">
        <div className="wrapper">
          <svg
            className="checkmark"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 52 52"
          >
            <circle
              className="checkmark__circle"
              cx="26"
              cy="26"
              r="25"
              fill="none"
            />
            <path
              className="checkmark__check"
              fill="none"
              d="M14.1 27.2l7.1 7.2 16.7-16.8"
            />
          </svg>
        </div>

        <div className="mt-3 text-2xl font-semibold uppercase ">ALL DONE</div>
        <p>Staying for {daysBetween||1} days </p>
        <p className=" text-xl my-5">Total: ${(daysBetween || 1) * 30}</p>
        <div className=" text-center text-text">
          You have finished your booking process we'll send an email to {userData.email} with
          all your details
        </div>
        <Link className="mt-10" href="/success">
          <button className="h-10 px-5 text-white bg-tertiary/30 transition-colors duration-150 border border-gray-300 focus:shadow-outline hover:bg-tertiary hover:text-white">
            Book
          </button>
        </Link>
      </div>
    </div>
  );
}
