import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import CustomInput from "./CustomInput";
import CustomButton from "./CustomButton";
import { FaArrowRight } from "react-icons/fa6";
import { IMakePaymentForm } from "../types";
import { makePaymentFormSchema } from "../models";
import { IoMdCheckmarkCircle } from "react-icons/io";

interface MakePaymentForm {
  handleNext: () => void | undefined;
}

const VerificationForm: React.FC<MakePaymentForm> = ({ handleNext }) => {
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

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col items-center">
      <div className="w-[40%]">
        <div className="flex flex-row items-start gap-1  mt-[16px] mb-[16px]">
          <label className="text-left mb-[20px] font-inter font-semibold text-[18px]">
            Verification of NIN Credentials
          </label>
        </div>
        <div className="flex flex-row items-center gap-4">
          <CustomInput name="rrr" label={"1. Enter RRR (Check your payment receipt) "} control={control as never} />
          <div className="flex-[0.5]">
            <CustomButton
              paddingVertical={"py-[13px]"}
              name={!isValid ? "Check" : "RRR confirmed"}
              style={`mt-[26px] ${isValid && "bg-[#EDEDED]"}`}
              textColor={`${isValid ? "text-black" : "text-white"}`}
              trailingIcon={isValid && <IoMdCheckmarkCircle className="text-[#12A53E]" />}
            />
          </div>
        </div>

        <div className={`flex flex-row items-center gap-4 my-[20px] opacity-30`}>
          <CustomInput name="nin" label={"2. Enter NIN"} control={control as never} />
          <div className="flex-[0.5]">
            <CustomButton
              paddingVertical={"py-[13px]"}
              name={!isValid ? "Check" : "NIN confirmed"}
              style={`mt-[26px] ${isValid && "bg-[#EDEDED]"}`}
              textColor={`${isValid ? "text-black" : "text-white"}`}
              trailingIcon={isValid && <IoMdCheckmarkCircle className="text-[#12A53E]" />}
            />
          </div>
        </div>

        <div className="mt-[40px]" />
        <CustomButton disabled={!isValid} name="Continue" trailingIcon={<FaArrowRight />} onClick={handleNext} />
      </div>
    </form>
  );
};

export default VerificationForm;
