import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import CustomInput from "./CustomInput";
import CustomButton from "./CustomButton";
import { FaArrowRight } from "react-icons/fa6";
import CustomSelect from "./CustomSelect";
import data from "../data";
import { IMakePaymentForm } from "../types";
import { makePaymentFormSchema } from "../models";

interface MakePaymentForm {
  handleNext: () => void | undefined;
}

const MakePaymentForm: React.FC<MakePaymentForm> = ({ handleNext }) => {
  const { control, handleSubmit, watch } = useForm<IMakePaymentForm>({
    resolver: yupResolver(makePaymentFormSchema),
  });

  const onSubmit: SubmitHandler<IMakePaymentForm> = (data) => {
    console.log(data);
    handleNext();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col items-center">
      <div className="w-[40%]">
        <CustomSelect
          control={control as never}
          name="applicationType"
          label="Select Application type"
          asterisk
          placeholder=" "
          options={data}
        />
        <div className="mb-[14px]" />
        <CustomInput
          label={"Payment Fee"}
          name="paymentFee"
          valueInput={watch("applicationType")}
          plainText
          control={control as never}
          placeholder={"₦00.00"}
        />
        <div className="mt-[20px]" />
        <div className={`bg-[#393737] h-[1px] w-4/4`} />
        <div className="mb-[32px]" />
      </div>

      <div className="w-[40%]">
        <CustomInput name="organizationName" label={"Organization Name"} asterisk control={control as never} />
        <div className="mb-[14px]" />
        <CustomInput name="contactPersonName" label={"Contact Person Name"} asterisk control={control as never} />
        <div className="mb-[14px]" />
        <CustomInput name="organizationEmail" label={"Organization Email"} asterisk control={control as never} />
        <div className="mb-[14px]" />
        <CustomInput name="phoneNumber" label={"Phone No."} asterisk control={control as never} />
        <div className="mb-[34px]" />
        <CustomButton name="Make Payment" trailingIcon={<FaArrowRight />} />
      </div>
    </form>
  );
};

export default MakePaymentForm;
