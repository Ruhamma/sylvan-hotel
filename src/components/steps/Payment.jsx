import { useStepperContext } from "@/app/contexts/StepperContext";

export default function Payment() {
  const { userData, setUserData } = useStepperContext();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };
  return (
    <div className="flex flex-col ">
      <div className="form1 text-white space-y-2 w-full ">
        <p className="text-2xl pt-10 pb-">Methods of payment</p>
        <p className="text-text pb-10">
          Visa,Visa Electron,Mastercard,Maestro,American Express,Union Pay,JCB
        </p>

        <div className="space-y-6 pt-5">
          <div className="p-2 py-4 bg-white/10 flex items-center gap-2 cursor-pointer">
            <input type="radio" name="payment" id="check3" />

            <label htmlFor="check3">
              100% prepayment by bank card at accommodation on the territory
            </label>
          </div>
          <div className="p-2 py-4 bg-white/10 flex items-center gap-2 cursor-pointer">
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
  );
}
