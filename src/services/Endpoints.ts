import { ISignIn, ISignUp } from "../types";
import Api from "./Api";

//  Auth
export const signup = (payload: ISignUp) => Api.post("signup", payload);
export const signin = (payload: ISignIn) => Api.post("signin", payload);
export const successUser = (payload: string) => Api.post("success", { email: payload });
export const sendOTP = (payload: string) => Api.post("send-otp", { email: payload });
export const verifyOTP = (email: string, otp: string) => Api.post("verify-otp", { email: email, otp: otp });
export const userProfile = () => Api.get(`user-profile`);
