import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import CustomButton from "./CustomButton";
import { FaArrowRight } from "react-icons/fa6";
import { IMakePaymentForm } from "../types";
import CustomFileInput from "./CustomFileInput";

interface MakePaymentForm {
  handleNext: () => void | undefined;
}

const UploadDocument: React.FC<MakePaymentForm> = ({ handleNext }) => {
  const { control, handleSubmit } = useForm<IMakePaymentForm>({
    // resolver: yupResolver(makePaymentFormSchema),
  });

  const onSubmit: SubmitHandler<IMakePaymentForm> = (data) => {
    console.log(data);
    handleNext();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col items-center">
      <div className="w-[60%]">
        <>
          <div className="flex flex-row justify-between gap-6 mb-[10px]">
            <label className="text-left font-inter font-normal text-sm">
              Upload the required documents. Ensure documents are clearly scanned and readable
            </label>
          </div>
        </>

        <>
          <div className="flex flex-row justify-between gap-6 mt-[21px]">
            <CustomFileInput name="tax" asterisk label={"1. Tax Clearance Certificate"} control={control as never} />
          </div>
          <div className="flex flex-row justify-between gap-6 mt-[21px]">
            <CustomFileInput
              name="passport"
              asterisk
              label={"2. Passport sized Photograph"}
              control={control as never}
            />
          </div>
          <div className="flex flex-row justify-between gap-6 mt-[21px]">
            <CustomFileInput name="idCard" asterisk label={"3. National ID Card"} control={control as never} />
          </div>
          <div className="flex flex-row justify-between gap-6 mt-[21px]">
            <CustomFileInput
              name="internationalPassport"
              asterisk
              label={"4. International Passport"}
              control={control as never}
            />
          </div>
          <div className="flex flex-row justify-between gap-6 mt-[21px]">
            <CustomFileInput
              name="age"
              asterisk
              label={"5. Birth Certificate / Age Declaration"}
              control={control as never}
            />
          </div>
          <div className="flex flex-row justify-between gap-6 mt-[21px]">
            <CustomFileInput
              name="allocation"
              asterisk
              label={"6. C-of-O / R-of-O for previous Allocations"}
              control={control as never}
            />
          </div>

          <div className="mb-[60px]" />
        </>

        <CustomButton name="Submit Documents" trailingIcon={<FaArrowRight />} />
        <div className="mb-[40px]" />
      </div>
    </form>
  );
};

export default UploadDocument;
