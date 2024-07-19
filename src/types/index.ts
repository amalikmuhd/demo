export interface IMakePaymentForm {
  applicationType: string;
  organizationName: string;
  contactPersonName: string;
  organizationEmail: string;
  phoneNumber: string;
}

export type ISignUp = {
  email: string;
  firstName: string;
  lastName: string;
  password: string;
  phoneNumber: string;
};

export interface ISignIn {
  email: string;
  password: string;
}
