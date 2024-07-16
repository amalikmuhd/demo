import * as yup from "yup";

export const makePaymentFormSchema = yup.object({
  applicationType: yup.string().required("Application type is required"),
  organizationName: yup.string().required("Organization name is required"),
  contactPersonName: yup.string().required("Contact person name is required"),
  organizationEmail: yup.string().email("Invalid email").required("Email is required"),
  phoneNumber: yup.string().required("Phone number is required"),
});
