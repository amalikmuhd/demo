import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import CustomInput from "./CustomInput";
import CustomButton from "./CustomButton";
import { FaArrowRight } from "react-icons/fa6";
import { IoMdCheckmarkCircle } from "react-icons/io";
import sms from "/sms.png";
import emailIcon from "/email.png";
import IconSelector from "./shared/IconSelectior";
import OTPInput from "react-otp-input";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { AxiosError } from "axios";
import { sendOTP, verifyOTP } from "../services/Endpoints";
interface MakePaymentForm {
  handleNext: () => void | undefined;
}

interface Props {
  email: string;
}
interface ErrorResponse {
  message: string;
}

export const email = yup.object({
  email: yup.string().email("email is required").required("Input is required"),
});

export const verify = yup.object({
  otp: yup.string().required("otp is required"),
});

const OTPS: React.FC<MakePaymentForm> = ({ handleNext }) => {
  const {
    control,
    handleSubmit,
    watch,
    formState: { isValid },
  } = useForm<Props>({
    resolver: yupResolver(email),
  });

  const onSubmit: SubmitHandler<Props> = (data) => {
    console.log(data.email, "send otp");
    sendOpt.mutate(data.email);
  };

  const [check, setCheck] = useState(0);

  const [level, setLevel] = useState("initial");

  const [otp, setOtp] = useState("");

  const sendOpt = useMutation({
    mutationFn: (email: string) => {
      return sendOTP(email);
    },

    onError: (error: AxiosError<ErrorResponse>) => toast.error(error.response?.data.message),
    onSuccess: (data) => {
      if (data.data.message === "success") {
        toast.success(`OTP has been sent to ${watch("email")}`);
        setLevel("verifying");
      }
    },
  });

  const verifyOtp = useMutation({
    mutationFn: () => {
      return verifyOTP(watch("email"), otp);
    },

    onError: (error: AxiosError<ErrorResponse>) => {
      toast.error(error.response?.data.message);
    },

    onSuccess: (data) => {
      if (data.data.message === "success") {
        setLevel("success");
      }
    },
  });

  return level === "initial" ? (
    <div className="flex flex-col items-center">
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
              src={emailIcon}
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
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-row items-center gap-4">
              <CustomInput
                name="email"
                label={`${check === 1 ? "Enter Email" : check === 2 ? "Enter Phone Number" : ""}`}
                control={control as never}
              />
            </div>

            <div className="mt-[20px]" />
            <CustomButton
              disabled={!isValid}
              name="Send OTP"
              trailingIcon={
                sendOpt.isPending ? (
                  <div role="status" aria-label="loading">
                    <svg
                      className="w-6 h-6 stroke-[white] animate-spin "
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_9023_61563)">
                        <path
                          d="M14.6437 2.05426C11.9803 1.2966 9.01686 1.64245 6.50315 3.25548C1.85499 6.23817 0.504864 12.4242 3.48756 17.0724C6.47025 21.7205 12.6563 23.0706 17.3044 20.088C20.4971 18.0393 22.1338 14.4793 21.8792 10.9444"
                          stroke="stroke-current"
                          stroke-width="1.4"
                          stroke-linecap="round"
                          className="my-path"
                        ></path>
                      </g>
                      <defs>
                        <clipPath id="clip0_9023_61563">
                          <rect width="24" height="24" fill="white"></rect>
                        </clipPath>
                      </defs>
                    </svg>
                    <span className="sr-only">Loading...</span>
                  </div>
                ) : (
                  <FaArrowRight />
                )
              }
            />
          </form>
        )}
      </div>
    </div>
  ) : level === "verifying" ? (
    <div className="flex flex-col items-center">
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
              // {...register}
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
          disabled={otp.length !== 6}
          name="Verify"
          onClick={() => verifyOtp.mutate()}
          trailingIcon={
            verifyOtp.isPending ? (
              <div role="status" aria-label="loading">
                <svg
                  className="w-6 h-6 stroke-[white] animate-spin "
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_9023_61563)">
                    <path
                      d="M14.6437 2.05426C11.9803 1.2966 9.01686 1.64245 6.50315 3.25548C1.85499 6.23817 0.504864 12.4242 3.48756 17.0724C6.47025 21.7205 12.6563 23.0706 17.3044 20.088C20.4971 18.0393 22.1338 14.4793 21.8792 10.9444"
                      stroke="stroke-current"
                      stroke-width="1.4"
                      stroke-linecap="round"
                      className="my-path"
                    ></path>
                  </g>
                  <defs>
                    <clipPath id="clip0_9023_61563">
                      <rect width="24" height="24" fill="white"></rect>
                    </clipPath>
                  </defs>
                </svg>
                <span className="sr-only">Loading...</span>
              </div>
            ) : (
              <FaArrowRight />
            )
          }
        />
        <p className="mt-[10px]">Resend OTP?</p>
      </div>
    </div>
  ) : level === "success" ? (
    <div className="flex flex-col items-center">
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
        <CustomButton name="Proceed to Fill form" trailingIcon={<FaArrowRight />} onClick={handleNext} />
        <p className="mt-[10px] text-black/30">Resend OTP?</p>
      </div>
    </div>
  ) : null;
};

export default OTPS;
