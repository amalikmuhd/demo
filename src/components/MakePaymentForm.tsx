// src/components/Form.tsx
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import "../styles/MakePaymentForm.css"; // You'll create this CSS file for styling
import CustomInput from "./CustomInput";

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

const MakePaymentForm: React.FC = () => {
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
        <label>Select Application type *</label>
        <select {...register("applicationType")} className={errors.applicationType ? "error" : ""}>
          <option value="">Select...</option>
          <option value="Type1">Type1</option>
          <option value="Type2">Type2</option>
        </select>
        {errors.applicationType && <p>{errors.applicationType.message}</p>}
      </div>

      <div className="form-group">
        <label>Payment Fee</label>
        <div className="bg-[#E4F0FF] h-10 flex justify-start items-center pl-[24px]">
          <p className="text-[#000000] important">₦00.00</p>
        </div>
      </div>

      <div className="form-group">
        <label>Organization Name *</label>
        {/* <CustomInput register={...register("organizationName")} style={errors.organizationName ? "error" : ""} /> */}
        <input type="text" {...register("organizationName")} className={errors.organizationName ? "error" : ""} />
        {errors.organizationName && <p>{errors.organizationName.message}</p>}
      </div>

      <div className="form-group">
        <label>Contact Person Name *</label>
        <input type="text" {...register("contactPersonName")} className={errors.contactPersonName ? "error" : ""} />
        {errors.contactPersonName && <p>{errors.contactPersonName.message}</p>}
      </div>

      <div className="form-group">
        <label>Organization Email *</label>
        <input type="email" {...register("organizationEmail")} className={errors.organizationEmail ? "error" : ""} />
        {errors.organizationEmail && <p>{errors.organizationEmail.message}</p>}
      </div>

      <div className="form-group">
        <label>Phone No. *</label>
        <input type="text" {...register("phoneNumber")} className={errors.phoneNumber ? "error" : ""} />
        {errors.phoneNumber && <p>{errors.phoneNumber.message}</p>}
      </div>

      <button type="submit" className="submit-btn">
        Make Payment
      </button>
    </form>
  );
};

export default MakePaymentForm;
