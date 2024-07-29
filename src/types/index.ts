export interface IFillForm {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  middle?: string;
}
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
