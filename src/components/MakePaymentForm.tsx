import React, { useEffect, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import CustomInput from "./CustomInput";
import CustomButton from "./CustomButton";
import { FaArrowRight } from "react-icons/fa6";
import { IMakePaymentForm } from "../types";
import ScreenLoader from "./ScreenLoader";
import RemitaPaymentScreen from "./RemitaPaymentScreen";
import ScreenLoaderRedirect from "./ScreenLoaderRedirect";
import RemitaSuccess from "./RemitaSuccess";
import CustomSelect from "./CustomSelect";
import { data } from "../data";

interface MakePaymentForm {
  handleNext: () => void | undefined;
}

const MakePaymentForm: React.FC<MakePaymentForm> = ({ handleNext }) => {
  const [loading, setLoading] = useState("initial");

  const { control, handleSubmit, watch } = useForm<IMakePaymentForm>({
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
        handleNext();
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
          }}
        />
      )}
      {loading === "success" && <RemitaSuccess handleNext={() => setLoading("redirect")} />}
      {loading === "redirect" && <ScreenLoaderRedirect />}
      {loading === "initial" && (
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col items-center">
          <div className="w-[40%]">
            <div className="mb-[40px] mt-[50px]">
              {/* <div className="flex flex-row items-start gap-1  mt-[16px] mb-[16px]">
                <label className="text-left mb-[8px] font-inter font-semibold text-[18px]">
                  Proceed to make payment using Remita
                </label>
              </div> */}
              <CustomSelect
                control={control as never}
                name="applicationType"
                label="Select Application type"
                asterisk
                placeholder=" "
                options={data}
              />
              <div className="mb-[10px]" />
              <CustomInput
                label={"Payment Fee"}
                name="paymentFee"
                valueInput={watch("applicationType")}
                plainText
                control={control as never}
                placeholder={"₦00.00"}
              />
            </div>

            {/* <div className="flex flex-row justify-between gap-6 mt-[16px] mb-[40px]">
                  <div className="flex flex-row items-start gap-1 mb-[16px]">
                    <label className="text-left mb-[8px] font-inter font-normal text-sm text-black/40">
                      <label className="text-left font-inter font-normal text-sm text-[#DD1D1D]">Note: </label>
                      This payment is based on the application type you selected initially when filling the form. The
                      payment will be made through Remita. Copy the RRR transaction code from the receipt after payment
                      for further verification.
                    </label>
                  </div>
                </div> */}
            <CustomButton
              disabled={!watch("applicationType") ? true : false}
              name={`Make Payment ${watch("applicationType") || ""}`}
              trailingIcon={<FaArrowRight />}
              onClick={() => setLoading("loading")}
            />
          </div>
        </form>
      )}
    </>
  );
};

export default MakePaymentForm;
