import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import CustomButton from "./CustomButton";
import { FaArrowRight } from "react-icons/fa6";
import { IMakePaymentForm } from "../types";
import CustomFileInput from "./CustomFileInput";
import { useLocation } from "react-router-dom";

interface MakePaymentForm {
  handleNext: () => void | undefined;
}

const UploadDocument: React.FC<MakePaymentForm> = ({ handleNext }) => {
  // const [loading, setLoading] = useState(true);
  const params = useLocation();
  const { control, handleSubmit } = useForm<IMakePaymentForm>({
    // resolver: yupResolver(makePaymentFormSchema),
  });

  const onSubmit: SubmitHandler<IMakePaymentForm> = (data) => {
    console.log(data);
    // setLoading(false);
    handleNext();
  };

  return (
    //
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col items-center">
      {params.state.type === "Individual" ? (
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
                name="passportsizedphotograph"
                asterisk
                label={"2. Passport sized Photograph"}
                control={control as never}
              />
            </div>
            <div className="flex flex-row justify-between gap-6 mt-[21px]">
              <CustomFileInput
                name="nationalIdCard"
                asterisk
                label={"3. National ID Card"}
                control={control as never}
              />
            </div>
            <div className="flex flex-row justify-between gap-6 mt-[21px]">
              <CustomFileInput
                name="internationalpassport"
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
                name="allocations"
                asterisk
                label={"6. C-of-O / R-of-O for previous Allocations"}
                control={control as never}
              />
            </div>
            <div className="flex flex-row justify-between gap-6 mt-[21px]">
              <CustomFileInput
                name="paymentSlip"
                asterisk
                label={"7. Remita Payment Receipt"}
                control={control as never}
              />
            </div>
            <div className="mb-[60px]" />
          </>

          <CustomButton name="Submit Documents" trailingIcon={<FaArrowRight />} />
          <div className="mb-[40px]" />
        </div>
      ) : (
        <div className="w-[60%]">
          <>
            org
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
                label={"2. Registration / Particulars of Director"}
                control={control as never}
              />
            </div>
            <div className="flex flex-row justify-between gap-6 mt-[21px]">
              <CustomFileInput
                name="idCard"
                asterisk
                label={"3. Certificate of Incorporation"}
                control={control as never}
              />
            </div>
            <div className="flex flex-row justify-between gap-6 mt-[21px]">
              <CustomFileInput
                name="internationalPassport"
                asterisk
                label={"4. Memorandum and Articles of Association"}
                control={control as never}
              />
            </div>
            <div className="flex flex-row justify-between gap-6 mt-[21px] opacity-30">
              <CustomFileInput name="age" asterisk label={"Letter of Recommendation"} control={control as never} />
            </div>
            <div className="flex flex-row justify-between gap-6 mt-[21px]">
              <CustomFileInput
                name="shematicDesign"
                asterisk
                label={"5. Shematic Design / Project Feasibility Studies"}
                control={control as never}
              />
            </div>
            <div className="flex flex-row justify-between gap-6 mt-[21px]">
              <CustomFileInput
                name="environmental"
                asterisk
                label={"6. Environmental Impact Analysis Report"}
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
            <div className="flex flex-row justify-between gap-6 mt-[21px]">
              <CustomFileInput
                name="payment"
                asterisk
                label={"7. Payment Slip / Draft for PPP (N 1,000,000)"}
                control={control as never}
              />
            </div>
            <div className="flex flex-row justify-between gap-6 mt-[21px]">
              <CustomFileInput
                name="allocation"
                asterisk
                label={"8. Remita Payment Receipt"}
                control={control as never}
              />
            </div>

            <div className="mb-[60px]" />
          </>

          <CustomButton name="Submit Documents" trailingIcon={<FaArrowRight />} />
          <div className="mb-[40px]" />
        </div>
      )}
    </form>
  );
};

export default UploadDocument;
