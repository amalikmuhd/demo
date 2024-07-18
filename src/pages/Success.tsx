import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import CustomButton from "../components/CustomButton";
import Header from "../components/Header";
import { AppBar } from "../components/AppBar";
import { useNavigate } from "react-router-dom";
import LoaderLottie from "../components/LoaderLottie";
import animationData from "../../public/success.json";

const Success: React.FC = () => {
  const navigation = useNavigate();

  return (
    <>
      <Header />

      <div className="w-[50%] flex flex-row justify-center mx-auto mb-[40px]">
        <AppBar opacity onClick={() => navigation("/")} title="Application for Individual" />
      </div>

      <div className="flex flex-col items-center mt-[53px]">
        <div className="w-[35%]">
          <LoaderLottie width={189.91} height={189.91} icon={animationData} />
          <div className="flex flex-row justify-between gap-6 mt-[45px] mb-[10px]">
            <label className="text-left font-inter font-normal text-[20px]">You have completed your application</label>
          </div>

          <div className="flex flex-row justify-between gap-6 mb-[25px]">
            <label className="text-left font-inter font-normal text-[14px] text-black/50">
              Check your email inbox to see your login credentials. You can use them to log into the application and
              track your application.
            </label>
          </div>

          <CustomButton name="Done" trailingIcon={<FaArrowRight />} onClick={() => navigation("/dashboard")} />
        </div>
      </div>
    </>
  );
};

export default Success;
