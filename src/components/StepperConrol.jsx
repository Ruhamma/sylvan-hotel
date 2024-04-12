export default function StepperControl({ handleClick, currentStep, steps }) {
  return (
    <div className="container mt-4 mb-8 flex justify-around">
      <button
        onClick={() => handleClick()}
        className={`cursor-pointer  border-2 border-tertiary bg-tertiary/30 py-1 px-10 uppercase text-tertiary transition duration-200 ease-in-out hover:bg-slate-700 hover:text-white  ${
          currentStep === 1 ? " cursor-not-allowed opacity-50 " : ""
        }`}
      >
        Back
      </button>

      <button
        onClick={() => handleClick("next")}
        className="cursor-pointer text-tertiary bg-white/40 py-1 px-10  uppercase  transition duration-200 ease-in-out hover:bg-tertiary hover:text-white"
      >
        {currentStep === steps.length - 1 ? "Confirm" : "Next"}
      </button>
    </div>
  );
}
