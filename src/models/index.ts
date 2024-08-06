import * as yup from "yup";

export const signupFormSchema = yup.object({
  firstName: yup.string().required("Name is required"),
  lastName: yup.string().required("Input is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  phoneNumber: yup.string().required("Phone number is required"),
  password: yup.string().required("Password is required"),
});
export const signupFormOrg = yup.object({
  firstName: yup.string().required("Name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  phoneNumber: yup.string().required("Phone number is required"),
  password: yup.string().required("Password is required"),
});

export const loginFormSchema = yup.object({
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup.string().required("password is required"),
});

export const VerificationSchema = yup.object({
  rrr: yup.string().required("RRR is required").min(10),
  // nin: yup.string().required("NIN is required"),
});
export const VerificationSchema2 = yup.object({
  // rrr: yup.string().required("RRR is required"),
  nin: yup.string().required("NIN is required").min(10),
});

export const otp = yup.object({
  otp: yup.string().email("Invalid email").required("Email is required"),
});
