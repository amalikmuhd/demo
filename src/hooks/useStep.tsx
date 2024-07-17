import { useState } from "react";

const useStep = (stepNames: string[]) => {
  const [step, setStep] = useState(1);
  const totalSteps = stepNames.length;

  const handleNext = () => {
    setStep((prevStep) => Math.min(prevStep + 1, totalSteps));
  };

  const handlePrevious = () => {
    setStep((prevStep) => Math.max(prevStep - 1, 1));
  };

  const indicators = [];
  for (let i = 1; i <= totalSteps; i++) {
    indicators.push(
      <div style={{ display: i === 6 ? "none" : "flex" }} key={i} className="flex flex-col items-center">
        <div style={{ display: i === 6 ? "none" : "flex" }} className="flex flex-row items-center">
          <div style={{ display: i === 6 ? "none" : "flex" }} className="flex flex-col justify-center items-center">
            <div
              style={{ display: i === 6 ? "none" : "flex" }}
              className={`w-8 h-8 rounded-full border flex items-center justify-center ${
                i <= step ? "bg-[#12A53E] " : "border-[#B2BCB5] bg-[#B2BCB5]"
              }`}
            >
              <p
                style={{ display: i === 6 ? "none" : "flex" }}
                className="text-white font-inter font-normal text-[20px]"
              >
                {i}
              </p>
            </div>
            <h1
              style={{ display: i === 6 ? "none" : "flex" }}
              className={`text-[12px] font-normal  ${i <= step ? "text-[#434343]" : "text-[#949494]"}`}
            >
              {stepNames[i - 1]}
            </h1>
          </div>

          {i < totalSteps && (
            <div
              style={{ display: i === 5 ? "none" : "flex" }}
              className={`w-20 h-1  ${i < step ? "bg-[#D9D9D9]" : "bg-[#D9D9D9]"}`}
            />
          )}
        </div>
      </div>
    );
  }

  return { handleNext, handlePrevious, step, totalSteps, indicators };
};

export default useStep;
