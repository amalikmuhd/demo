import React from "react";
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

import { toast } from "sonner";

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

  const { control, handleSubmit } = useForm<Props>({
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
      email: data.email.toLowerCase(),
      firstName: data.firstName.toLowerCase(),
      lastName: data.lastName.toLowerCase(),
      phoneNumber: data.phoneNumber,
      password: data.password,
    });
  };

  const registerUser = useMutation({
    mutationFn: (payload: ISignUp) => {
      return signup(payload);
    },

    onError: (error: AxiosError<ErrorResponse>) => {
      toast.error(error.response?.data.message);
    },

    onSuccess: (data) => {
      if (data.data.message === "success") {
        localStorage.setItem("token", JSON.stringify(data.data.data));
        navigation("/success", { state: { type: params.state.type } });
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
                label={`${params.state.type === "Individual" ? "Last" : ""} Name`}
                asterisk
                control={control as never}
              />
              <div className="my-[14px]" />
              <CustomInput
                name="email"
                label={`${params.state.type === "Individual" ? "" : ""} Email`}
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
              trailingIcon={
                registerUser.isPending ? (
                  <div role="status" aria-label="loading">
                    <svg
                      className="w-6 h-6 stroke-[white] animate-spin"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_9023_61563)">
                        <path
                          d="M14.6437 2.05426C11.9803 1.2966 9.01686 1.64245 6.50315 3.25548C1.85499 6.23817 0.504864 12.4242 3.48756 17.0724C6.47025 21.7205 12.6563 23.0706 17.3044 20.088C20.4971 18.0393 22.1338 14.4793 21.8792 10.9444"
                          stroke="stroke-current"
                          stroke-width="1.4"
                          stroke-linecap="round"
                          className="my-path"
                        ></path>
                      </g>
                      <defs>
                        <clipPath id="clip0_9023_61563">
                          <rect width="24" height="24" fill="white"></rect>
                        </clipPath>
                      </defs>
                    </svg>
                    <span className="sr-only">Loading...</span>
                  </div>
                ) : (
                  <FaArrowRight />
                )
              }
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
