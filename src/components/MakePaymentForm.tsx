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
import { dataIndividual, dataOrg } from "../data";
import { useLocation } from "react-router-dom";
import RemitaReceipt from "./RemitaReceipt";

interface MakePaymentForm {
  handleNext: () => void | undefined;
}

const MakePaymentForm: React.FC<MakePaymentForm> = ({ handleNext }) => {
  const params = useLocation();

  const [loading, setLoading] = useState("initial");

  const { control, handleSubmit, watch } = useForm<IMakePaymentForm>({});

  const onSubmit: SubmitHandler<IMakePaymentForm> = () => {
    handleNext();
  };

  useEffect(() => {
    if (loading === "loading") {
      setTimeout(() => {
        setLoading("payment");
      }, 2000);
    } else if (loading === "payment") {
      setTimeout(() => {
        setLoading("success");
      }, 10000);
    } else if (loading === "redirect") {
      setTimeout(() => {
        handleNext();
      }, 2000);
    }
    // if (loading === "loading") {
    //   setTimeout(() => {
    //     setLoading("payment");
    //   }, 2000);
    // } else if (loading === "redirect") {
    //   setTimeout(() => {
    //     handleNext();
    //   }, 2000);
    // }
  }, [loading]);

  const value = watch("applicationType");

  const numericalValue = parseInt(value?.replace(/₦|,/g, ""));

  // Add the application fee
  // const updatedValue = numericalValue + 250;

  // Format the updated value back to a currency string
  const updatedValue = `₦${(numericalValue + 2500).toLocaleString()}`;

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
      {loading === "success" && <RemitaSuccess handleNext={() => setLoading("receipt")} />}
      {loading === "receipt" && <RemitaReceipt handleNext={() => setLoading("redirect")} />}
      {loading === "redirect" && <ScreenLoaderRedirect />}
      {loading === "initial" && (
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col items-center">
          <div className="w-[40%]">
            <div className="mb-[40px] mt-[50px]">
              {/* <CustomInput
                label={"Application Date"}
                name="paymentFee"
                valueInput={new Date().getFullYear as never}
                plainText
                control={control as never}
                placeholder={`${(today = mm + "/" + dd + "/" + yyyy)}`}
              /> */}
              <div className="mb-[10px]" />
              <CustomSelect
                control={control as never}
                name="applicationType"
                label="Select Application type"
                asterisk
                placeholder=" "
                showTheValue={false}
                options={params?.state?.type === "Individual" ? dataIndividual : dataOrg}
              />
              <div className="mb-[10px]" />
              <CustomInput
                label={"Payment Fee"}
                name="paymentFee"
                valueInput={watch("applicationType")}
                plainText
                bgInput="bg[#E4F0FF]"
                control={control as never}
                placeholder={"₦00.00"}
              />
              <div className="mb-[10px]" />
              <CustomInput
                label={"Processing Fee"}
                name="applicationFee"
                valueInput={watch("applicationType") && "₦2,500"}
                plainText
                bgInput="bg[#E4F0FF]"
                control={control as never}
                placeholder={"₦00.00"}
              />
            </div>

            <CustomButton
              disabled={!watch("applicationType") ? true : false}
              name={`Make Payment ${updatedValue || ""}`}
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
