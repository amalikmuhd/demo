import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import CustomInput from "./CustomInput";
import CustomButton from "./CustomButton";
import { FaArrowRight } from "react-icons/fa6";
import { IMakePaymentForm } from "../types";
import { makePaymentFormSchema } from "../models";
import { IoMdCheckmarkCircle } from "react-icons/io";
import sms from "/sms.png";
import email from "/email.png";
import IconSelector from "./shared/IconSelectior";
import OTPInput from "react-otp-input";

interface MakePaymentForm {
  handleNext: () => void | undefined;
}

const OTPS: React.FC<MakePaymentForm> = ({ handleNext }) => {
  const {
    control,
    handleSubmit,
    formState: { isValid },
  } = useForm<IMakePaymentForm>({
    resolver: yupResolver(makePaymentFormSchema),
  });

  const onSubmit: SubmitHandler<IMakePaymentForm> = (data) => {
    console.log(data);
    handleNext();
  };

  const [check, setCheck] = useState(0);

  const [level, setLevel] = useState("initial");

  const [otp, setOtp] = useState("");
  // const [otpStep, setOtpStep] = useState(true);

  return level === "initial" ? (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col items-center">
      <div className="w-[40%]">
        <div className="flex flex-row items-start gap-1  mt-[16px] mb-[16px]">
          <label className="text-left mb-[8px] font-inter font-semibold text-[18px]">
            Please select a method to receive 6-digit OTP (One Time Password)
          </label>
        </div>

        <div className="w-[50%]">
          <div className="flex flex-row justify-between gap-10 mb-[20px]">
            <IconSelector
              className={`flex flex-col p-[18px] ${check === 1 ? "bg-[#12A53E]" : "bg-[#DFFFE9]"}`}
              trailingIcon={<IoMdCheckmarkCircle className={check === 1 ? "text-white" : "text-[#DFFFE9]"} />}
              onClick={() => setCheck(1)}
              label="Email OTP"
              src={email}
            />
            <IconSelector
              className={`flex flex-col p-[18px] ${check === 2 ? "bg-[#12A53E]" : "bg-[#DFFFE9]"}`}
              onClick={() => setCheck(2)}
              label="SMS OTP"
              src={sms}
              trailingIcon={<IoMdCheckmarkCircle className={`${check === 2 ? "text-white" : "text-[#DFFFE9]"}`} />}
            />
          </div>
        </div>

        {check !== 0 && (
          <>
            <div className="flex flex-row items-center gap-4">
              <CustomInput
                name="nin"
                label={`${check === 1 ? "Enter Email" : check === 2 ? "Enter Phone Number" : ""}`}
                control={control as never}
              />
            </div>

            <div className="mt-[20px]" />
            <CustomButton
              disabled={isValid}
              name="Send OTP"
              trailingIcon={<FaArrowRight />}
              onClick={() => setLevel("verifying")}
            />
          </>
        )}
      </div>
    </form>
  ) : level === "verifying" ? (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col items-center">
      <div className="w-[40%]">
        <div className="flex flex-row items-start gap-1  mt-[16px] mb-[16px]">
          <label className="text-left mb-[8px] font-inter font-semibold text-[18px]">
            Please select a method to receive 6-digit OTP (One Time Password)
          </label>
        </div>
        <div className="flex flex-row items-start gap-1  mt-[16px] mb-[16px]">
          <label className="text-left mb-[8px] font-inter font-normal text-[14px]">
            The OTP has been sent to you. Please enter the 6-digit OTP
          </label>
        </div>

        <div className="w-[50%]">
          <div className="flex flex-row justify-between gap-10 mb-[20px]">
            <OTPInput
              value={otp}
              onChange={setOtp}
              numInputs={6}
              inputStyle={{
                background: "#F6F6F6",
                height: 50,
                width: 50,
                borderColor: "rgba(0,0,0,0,100%)",
                borderWidth: 1,
                marginRight: 20,
                marginBottom: 10,
              }}
              renderInput={(props) => <input {...props} />}
            />
          </div>
        </div>

        <div className="mt-[20px]" />
        <CustomButton
          disabled={isValid}
          name="Verify"
          trailingIcon={<FaArrowRight />}
          onClick={() => setLevel("success")}
        />
        <p className="mt-[10px]">Resend OTP?</p>
      </div>
    </form>
  ) : level === "success" ? (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col items-center">
      <div className="w-[40%]">
        <div className="flex flex-row items-start gap-1  mt-[16px] mb-[16px]">
          <label className="text-left mb-[8px] font-inter font-semibold text-[18px]">
            Please select a method to receive 6-digit OTP (One Time Password)
          </label>
        </div>
        <div className="flex flex-row items-start gap-1  mt-[16px] mb-[16px]">
          <label className="text-left mb-[8px] font-inter font-normal text-[14px]">
            The OTP has been sent to you. Please enter the 6-digit OTP
          </label>
        </div>

        <div className="w-[100%] mb-[20px]">
          <div className="flex flex-row w-[100%] items-center gap-1">
            <OTPInput
              value={otp}
              onChange={setOtp}
              numInputs={6}
              inputStyle={{
                background: "#F6F6F6",
                height: 50,
                width: 50,
                borderColor: "rgba(0,0,0,0,100%)",
                borderWidth: 1,
                marginRight: 20,
              }}
              renderInput={(props) => <input {...props} />}
            />
            <IoMdCheckmarkCircle className="w-[40px] h-[40px] text-[#2CD75F]" />
          </div>
        </div>

        <div className="mt-[20px]" />
        <CustomButton
          disabled={isValid}
          name="Proceed to Fill form"
          trailingIcon={<FaArrowRight />}
          onClick={handleNext}
        />
        <p className="mt-[10px] text-black/30">Resend OTP?</p>
      </div>
    </form>
  ) : null;
};

export default OTPS;
