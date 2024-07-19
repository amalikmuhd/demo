import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { FaArrowRight } from "react-icons/fa6";
import CustomButton from "../components/CustomButton";
import CustomInput from "../components/CustomInput";
import Header from "../components/Header";
import { AppBar } from "../components/AppBar";
import { useLocation, useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import { signupFormSchema } from "../models";
import { ISignUp } from "../types";
import { useMutation } from "@tanstack/react-query";
import { signup } from "../services/Endpoints";
import { AxiosError } from "axios";

import { RiLoader2Line } from "react-icons/ri";

interface ErrorResponse {
  message: string;
}
interface Props {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  phoneNumber: string;
}
const Signup: React.FC = () => {
  // const [loading, setLoading] = useState(false);
  const params = useLocation();

  const navigation = useNavigate();

  const { control, watch, handleSubmit } = useForm<Props>({
    resolver: yupResolver(signupFormSchema),
  });

  const onSubmit: SubmitHandler<Props> = (data) => {
    // console.log({
    //   email: data.email,
    //   firstName: data.firstName,
    //   lastName: data.lastName,
    //   phoneNumber: data.phoneNumber,
    //   password: data.password,
    // });
    registerUser.mutate({
      email: data.email,
      firstName: data.firstName,
      lastName: data.lastName,
      phoneNumber: data.phoneNumber,
      password: data.password,
    });
  };

  const registerUser = useMutation({
    mutationFn: (payload: ISignUp) => {
      return signup(payload);
    },

    onError: (error: AxiosError<ErrorResponse>) => {
      console.log(error.message as string);
      // ToastManager.error(error.response?.data.message as string, "top");
    },

    onSuccess: (data) => {
      if (data.data.message === "success") {
        console.log(data.data, "data.data");
        // localStorage.setItem("token", JSON.stringify(data.data));
        // setLoading(false);
        // navigation("/success", { state: { type: params.state.type } });
      }
    },
  });

  return (
    <>
      {/* {loading && <Finish handleNext={() => navigation("/login", { state: { type: params.state.type } })} />} */}

      <>
        <Header />

        <div className="w-[50%] flex flex-row justify-center mx-auto mb-[40px]">
          <AppBar
            onClick={() => navigation("/")}
            title={`Application for ${params.state.type}`}
            individual={params.state.type === "Individual"}
          />
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col items-center">
          <div className="w-[40%]">
            <div className="flex flex-row my-[5px]">
              <label className="text-left font-inter font-semibold text-[20px]">Create an account</label>
            </div>
            <div className="mb-[10px]">
              <CustomInput
                name="firstName"
                label={`${params.state.type === "Individual" ? "First" : "Organization"} Name`}
                asterisk
                control={control as never}
              />
              <div className="my-[14px]" />
              <CustomInput
                name="lastName"
                label={`${params.state.type === "Individual" ? "Last" : "Contact Person"} Name`}
                asterisk
                control={control as never}
              />
              <div className="my-[14px]" />
              <CustomInput
                name="email"
                label={`${params.state.type === "Individual" ? "" : "Organization"} Email`}
                asterisk
                control={control as never}
              />
              <div className="my-[14px]" />
              <CustomInput name="phoneNumber" label={"Phone No."} asterisk control={control as never} />
              <div className="my-[14px]" />
              <CustomInput name="password" label={"Create Password"} asterisk control={control as never} />
            </div>
            <div className="my-[40px]" />
            <CustomButton
              name="Sign up"
              trailingIcon={registerUser.isPending ? <RiLoader2Line className="text-green-600" /> : <FaArrowRight />}
            />

            <div className="flex flex-row justify-center items-center gap-1  mt-[16px]">
              <label className="font-inter font-normal text-[14px]">Already have an account??</label>
              <label
                className="font-inter font-normal text-[#216D98] text-[14px]"
                onClick={() => navigation("/login", { state: { type: params.state.type } })}
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
