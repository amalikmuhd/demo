import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { FaArrowRight } from "react-icons/fa6";
import { IMakePaymentForm } from "../types";
import CustomButton from "../components/CustomButton";
import CustomInput from "../components/CustomInput";
import Header from "../components/Header";
import { AppBar } from "../components/AppBar";
import { useNavigate } from "react-router-dom";
import Finish from "../components/Finish";

const Signup: React.FC = () => {
  const [loading, setLoading] = useState(false);

  const { control, handleSubmit } = useForm<IMakePaymentForm>({
    // resolver: yupResolver(makePaymentFormSchema),
  });

  const onSubmit: SubmitHandler<IMakePaymentForm> = (data) => {
    console.log(data);
    navigation("/success");
  };
  const navigation = useNavigate();

  return (
    <>
      {loading && <Finish handleNext={() => navigation("/login")} />}

      <>
        <Header />

        <div className="w-[50%] flex flex-row justify-center mx-auto mb-[40px]">
          <AppBar onClick={() => navigation("/")} title="Application for Individual" />
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col items-center">
          <div className="w-[40%]">
            <div className="flex flex-row my-[5px]">
              <label className="text-left font-inter font-semibold text-[20px]">Create an account</label>
            </div>
            <div className="mb-[10px]">
              <CustomInput name="firstName" label={"First Name"} asterisk control={control as never} />
              <div className="my-[14px]" />
              <CustomInput name="lastName" label={"Last Name"} asterisk control={control as never} />
              <div className="my-[14px]" />
              <CustomInput name="email" label={"Email"} asterisk control={control as never} />
              <div className="my-[14px]" />
              <CustomInput name="phoneNumber" label={"Phone No."} asterisk control={control as never} />
              <div className="my-[14px]" />
              <CustomInput name="password" label={"Create Password"} asterisk control={control as never} />
            </div>
            <div className="my-[40px]" />
            <CustomButton name="Sign up" trailingIcon={<FaArrowRight />} />

            <div className="flex flex-row justify-center items-center gap-1  mt-[16px]">
              <label className="font-inter font-normal text-[14px]">Already have an account??</label>
              <label
                className="font-inter font-normal text-[#216D98] text-[14px]"
                // onClick={() => navigation("/login")}
              >
                Login
              </label>
            </div>
            <div className="mb-[40px]" />
          </div>
        </form>
      </>
    </>
  );
};

export default Signup;
