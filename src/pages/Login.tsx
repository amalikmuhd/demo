import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { FaArrowRight } from "react-icons/fa6";
import CustomButton from "../components/CustomButton";
import CustomInput from "../components/CustomInput";
import Header from "../components/Header";
import { AppBar } from "../components/AppBar";
import { useLocation, useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginFormSchema } from "../models";

interface Props {
  email: string;
  password: string;
}
const Login: React.FC = () => {
  const params = useLocation();
  const { control, handleSubmit } = useForm<Props>({
    resolver: yupResolver(loginFormSchema),
  });

  const onSubmit: SubmitHandler<Props> = (data) => {
    console.log(data);
    navigation("/dashboard");
  };
  const navigation = useNavigate();

  return (
    <>
      <Header />

      <div className="w-[50%] flex flex-row justify-center mx-auto mb-[40px]">
        <AppBar
          individual={params.state.type === "Individual"}
          onClick={() => navigation("/")}
          title={`Application for ${params.state.type || ""}`}
        />
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col items-center">
        <div className="w-[40%]">
          <div className="flex flex-row my-[30px]">
            <label className="text-left font-inter font-semibold text-[20px]">Log In to your Account</label>
          </div>
          <div className="mb-[40px]">
            <CustomInput
              name="email"
              label={`${params.state.type === "Individual" ? "" : "Organization"} Email`}
              asterisk
              control={control as never}
            />
            <div className="my-[14px]" />
            <CustomInput name="password" label={"Password"} asterisk control={control as never} />
          </div>
          <div className="my-[40px]" />
          <CustomButton
            name="Log in"
            trailingIcon={<FaArrowRight />}
            // onClick={() => navigation("/dashboard")}
          />

          <div className="flex flex-row justify-center items-center gap-1  mt-[16px]">
            <label className="font-inter font-normal text-[14px]">Don’t have an account?</label>
            <label
              className="font-inter font-normal text-[#216D98] text-[14px]"
              onClick={() => navigation("/signup", { state: { type: params.state.type } })}
            >
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
