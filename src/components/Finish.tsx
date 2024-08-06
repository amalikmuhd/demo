import React from "react";
import CustomButton from "./CustomButton";
import { FaArrowRight } from "react-icons/fa6";
import LoaderLottie from "./LoaderLottie";
import animationData from "../../public/success.json";

interface FinishProps {
  handleNext: () => void | undefined;
}

const Finish: React.FC<FinishProps> = ({ handleNext }) => {
  return (
    <div className="flex flex-col items-center mt-[53px]">
      <div className="w-[35%]">
        <LoaderLottie width={189.91} height={189.91} icon={animationData} />
        <div className="flex flex-row justify-between gap-6 mt-[45px] mb-[10px]">
          <label className="text-left font-inter font-normal text-[20px]">You have completed your application</label>
        </div>

        <div className="flex flex-row justify-between gap-6 mb-[25px]">
          <label className="text-left font-inter font-normal text-[14px] text-black/80">
            Check your email inbox to see your login credentials. You can use them to log into the application and track
            your application.
          </label>
        </div>

        <CustomButton name="Done" trailingIcon={<FaArrowRight />} onClick={handleNext} />
      </div>
    </div>
  );
};

export default Finish;
