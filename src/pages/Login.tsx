import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { FaArrowRight } from "react-icons/fa6";
import { IMakePaymentForm } from "../types";
import CustomButton from "../components/CustomButton";
import CustomInput from "../components/CustomInput";
import Header from "../components/Header";
import { AppBar } from "../components/AppBar";
import { useNavigate } from "react-router-dom";

const Login: React.FC = () => {
  const { control, handleSubmit } = useForm<IMakePaymentForm>({
    // resolver: yupResolver(makePaymentFormSchema),
  });

  const onSubmit: SubmitHandler<IMakePaymentForm> = (data) => {
    console.log(data);
  };
  const navigation = useNavigate();

  return (
    <>
      <Header />

      <div className="w-[50%] flex flex-row justify-center mx-auto mb-[40px]">
        <AppBar onClick={() => navigation("/")} title="Application for Individual" />
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col items-center">
        <div className="w-[40%]">
          <div className="flex flex-row my-[30px]">
            <label className="text-left font-inter font-semibold text-[20px]">Log In to your Account</label>
          </div>
          <div className="mb-[40px]">
            <CustomInput name="firstName" label={"Email"} asterisk control={control as never} />
            <div className="my-[14px]" />
            <CustomInput name="firstName" label={"Password"} asterisk control={control as never} />
          </div>
          <div className="my-[40px]" />
          <CustomButton name="Log in" trailingIcon={<FaArrowRight />} />

          <div className="flex flex-row justify-center items-center gap-1  mt-[16px]">
            <label className="font-inter font-normal text-[14px]">Don’t have an account?</label>
            <label className="font-inter font-normal text-[#216D98] text-[14px]" onClick={() => navigation("/signup")}>
              Signup
            </label>
          </div>
          <div className="mb-[40px]" />
        </div>
      </form>
    </>
  );
};

export default Login;
