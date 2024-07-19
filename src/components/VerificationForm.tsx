import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import CustomInput from "./CustomInput";
import CustomButton from "./CustomButton";
import { FaArrowRight } from "react-icons/fa6";

import { IoMdCheckmarkCircle } from "react-icons/io";
import { VerificationSchema, VerificationSchema2 } from "../models";

interface Props {
  rrr: string;
}
interface Props2 {
  nin: string;
}
interface MakePaymentForm {
  handleNext: () => void | undefined;
}

const VerificationForm: React.FC<MakePaymentForm> = ({ handleNext }) => {
  const {
    control,
    handleSubmit,
    formState: { isValid: one, errors },
  } = useForm<Props>({
    resolver: yupResolver(VerificationSchema),
  });
  const {
    control: control2,
    handleSubmit: handleSubmit2,
    formState: { isValid: two, errors: errors2 },
  } = useForm<Props2>({
    resolver: yupResolver(VerificationSchema2),
  });

  const onSubmit: SubmitHandler<Props> = (data) => {
    console.log(data);
  };
  const onSubmit2: SubmitHandler<Props2> = (data) => {
    console.log(data);
  };

  return (
    <div className="flex flex-col items-center">
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
              paddingVertical={`py-[13px]`}
              name={!one ? "Check" : "RRR confirmed"}
              style={`${errors.rrr ? "mt-[2px]" : "mt-[26px]"} ${one && "bg-[#EDEDED]"}`}
              textColor={`${one ? "text-black" : "text-white"}`}
              trailingIcon={one && <IoMdCheckmarkCircle className="text-[#12A53E]" />}
              onClick={handleSubmit(onSubmit)}
            />
          </div>
        </div>

        <div className={`flex flex-row items-center gap-4 my-[20px] ${!one && "opacity-30"}`}>
          <CustomInput name="nin" label={"2. Enter NIN"} control={control2 as never} />
          <div className="flex-[0.5]">
            <CustomButton
              paddingVertical={"py-[13px]"}
              name={!two ? "Check" : "NIN confirmed"}
              style={`${errors2.nin ? "mt-[2px]" : "mt-[26px]"} ${two && "bg-[#EDEDED]"}`}
              textColor={`${two ? "text-black" : "text-white"}`}
              trailingIcon={two && <IoMdCheckmarkCircle className="text-[#12A53E]" />}
              onClick={handleSubmit2(onSubmit2)}
            />
          </div>
        </div>

        <div className="mt-[40px]" />
        <CustomButton
          disabled={one && two ? false : true}
          name="Continue"
          trailingIcon={<FaArrowRight />}
          onClick={handleNext}
        />
      </div>
    </div>
  );
};

export default VerificationForm;
