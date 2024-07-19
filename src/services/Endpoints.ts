import { ISignIn, ISignUp } from "../types";
import Api from "./Api";

//  Auth
export const signup = (payload: ISignUp) => Api.post("signup", payload);
export const signin = (payload: ISignIn) => Api.post("signin", payload);
export const successUser = (payload: string) => Api.post("success", { email: payload });
export const userProfile = () => Api.get(`user-profile`);
