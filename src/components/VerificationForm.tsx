// src/components/Form.tsx
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import "../styles/MakePaymentForm.css"; // You'll create this CSS file for styling

interface IFormInput {
  applicationType: string;
  organizationName: string;
  contactPersonName: string;
  organizationEmail: string;
  phoneNumber: string;
}

const schema = yup.object({
  applicationType: yup.string().required("Application type is required"),
  organizationName: yup.string().required("Organization name is required"),
  contactPersonName: yup.string().required("Contact person name is required"),
  organizationEmail: yup.string().email("Invalid email").required("Email is required"),
  phoneNumber: yup.string().required("Phone number is required"),
});

const VerificationForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form">
      <div className="form-group">
        <label>1. Enter RRR (Check your payment receipt) </label>
        <div className="flex flex-row">
          <input type="text" {...register("contactPersonName")} className={errors.contactPersonName ? "error" : ""} />

          <div onClick={() => {}} className="ml-4 w-60 bg-slate-400 text-center">
            Payment confirmed
          </div>
        </div>
      </div>

      <div className="form-group">
        <label>2. Enter NIN</label>
        <div className="flex flex-row">
          <input type="text" {...register("contactPersonName")} className={errors.contactPersonName ? "error" : ""} />
          <div onClick={() => {}} className="ml-4 w-60 bg-slate-400 text-center">
            NIN confirmed
          </div>
        </div>
        {errors.contactPersonName && <p>{errors.contactPersonName.message}</p>}
      </div>
      {/* 
      <button type="submit" className="submit-btn">
        Make Payment
      </button> */}
    </form>
  );
};

export default VerificationForm;
