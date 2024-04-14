import { useStepperContext } from "@/app/contexts/StepperContext";

export default function Details() {
  const { userData, setUserData } = useStepperContext();
  console.log(userData.email);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };
  return (
    <div className="flex flex-col ">
      <div className="form1 text-white space-y-2 w-full ">
        <p className="text-2xl my-10">CHECK IN/CHECKOUT TIME</p>
        <p className="text-text pb-10">
          You can choose a time that is convenient for you.Early check-in and
          late check-out service is available at an extra charge.sStandard
          check-in time is 14:00 and checkout time is 12:00
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
              className="border-white border-[1px] bg-transparent p-2 px-1 text-sm text-text w-full"
              onChange={handleChange}
              value={userData["checkInTime"] || ""}
            />
          </div>
          <div className="flex flex-col gap-1 w-full">
            <label htmlFor="checkOutTime" className="text-sm text-text ">
              Check Out *
            </label>
            <input
              type="time"
              name="checkOutTime"
              id="checkOutTime"
              className="border-white border-[1px] bg-transparent p-2 px-1 text-sm text-text w-full"
              onChange={handleChange}
              value={userData["checkOutTime"] || ""}
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
                className="border-white border-[1px] bg-transparent p-2 px-1 text-sm text-text"
              ></textarea>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
