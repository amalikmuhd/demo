import React, { useEffect, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import CustomInput from "./CustomInput";
import CustomButton from "./CustomButton";
import { FaArrowRight } from "react-icons/fa6";
import { IMakePaymentForm } from "../types";
import { IoMdCheckmarkCircle } from "react-icons/io";
import ScreenLoader from "./ScreenLoader";
import RemitaPaymentScreen from "./RemitaPaymentScreen";
import ScreenLoaderRedirect from "./ScreenLoaderRedirect";
import RemitaSuccess from "./RemitaSuccess";

interface MakePaymentForm {
  handleNext: () => void | undefined;
}

const MakePaymentForm: React.FC<MakePaymentForm> = ({ handleNext }) => {
  const [loading, setLoading] = useState("initial");
  const [secondForm, sectSecondForm] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { isValid },
  } = useForm<IMakePaymentForm>({
    // resolver: yupResolver(makePaymentFormSchema),
  });

  const onSubmit: SubmitHandler<IMakePaymentForm> = (data) => {
    console.log(data);
    handleNext();
  };

  useEffect(() => {
    if (loading === "loading") {
      setTimeout(() => {
        setLoading("payment");
      }, 2000);
    } else if (loading === "redirect") {
      setTimeout(() => {
        setLoading("initial");
      }, 2000);
    }
  }, [loading]);

  return (
    <>
      {loading === "loading" && <ScreenLoader />}
      {loading === "payment" && (
        <RemitaPaymentScreen
          handleNext={() => {
            setLoading("success");
            sectSecondForm(true);
          }}
        />
      )}
      {loading === "success" && <RemitaSuccess handleNext={() => setLoading("redirect")} />}
      {loading === "redirect" && <ScreenLoaderRedirect />}
      {loading === "initial" && (
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col items-center">
          <div className="w-[40%]">
            <div className={`${secondForm && "opacity-25"}`}>
              <div className="flex flex-row items-start gap-1  mt-[16px] mb-[16px]">
                <label className="text-left mb-[8px] font-inter font-semibold text-[18px]">
                  Proceed to make payment using Remita
                </label>
              </div>
              <CustomInput
                name="applicationType"
                label="Select Application type"
                plainText
                plainStyle="bg-[#F6F6F6] border border-black/10 rounded-md "
                valueInput={"Private"}
                control={control as never}
                placeholder={"₦00.00"}
              />
              <div className="mb-[10px]" />
              <CustomInput
                label={"Payment Fee"}
                name="paymentFee"
                plainText
                plainStyle="bg-[#E5E5E5] font-extrabold text-black/60"
                valueInput={"₦100,000.00"}
                control={control as never}
                placeholder={"₦00.00"}
              />
              <div className="mb-[10px]" />
              <CustomInput
                name="email"
                label={"Email"}
                plainText
                plainStyle="bg-[#F6F6F6] border border-black/10 rounded-md "
                valueInput="bjohndoe@gmail.com"
                asterisk
                control={control as never}
              />
            </div>

            {!secondForm && (
              <>
                <div className="flex flex-row justify-between gap-6 mt-[16px] mb-[40px]">
                  <div className="flex flex-row items-start gap-1 mb-[16px]">
                    <label className="text-left mb-[8px] font-inter font-normal text-sm text-black/40">
                      <label className="text-left font-inter font-normal text-sm text-[#DD1D1D]">Note: </label>
                      This payment is based on the application type you selected initially when filling the form. The
                      payment will be made through Remita. Copy the RRR transaction code from the receipt after payment
                      for further verification.
                    </label>
                  </div>
                </div>
                <CustomButton
                  name={`Make Payment ₦100,000`}
                  trailingIcon={<FaArrowRight />}
                  onClick={() => setLoading("loading")}
                />
              </>
            )}

            {secondForm && (
              <>
                <div className="mt-[40px]" />
                <div className={`bg-gray-400 h-[1px] w-4/4`} />
                <div className="mb-[40px]" />

                <div className="flex flex-row items-start gap-1  mt-[16px] mb-[16px]">
                  <label className="text-left mb-[8px] font-inter font-semibold text-[18px]">
                    To confirm payment made please enter the RRR code generated for this transaction
                  </label>
                </div>

                <div className="flex flex-row items-center gap-4">
                  <CustomInput name="nin" label={"Enter RRR (Check payment reciept)"} control={control as never} />
                  <div className="flex-[0.5]">
                    <CustomButton
                      paddingVertical={"py-[13px]"}
                      name={isValid ? "Check" : "Payment confirmed"}
                      style={`mt-[26px] ${!isValid && "bg-[#EDEDED]"}`}
                      textColor={`${isValid && "text-black"}`}
                      trailingIcon={!isValid && <IoMdCheckmarkCircle className="text-[#12A53E]" />}
                    />
                  </div>
                </div>

                <div className="mt-[20px]" />
                <CustomButton disabled={isValid} name="Continue" trailingIcon={<FaArrowRight />} onClick={handleNext} />
              </>
            )}
            <div className="mb-[40px]" />
          </div>
        </form>
      )}
    </>
  );
};

export default MakePaymentForm;
