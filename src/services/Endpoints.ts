import { ISignIn, ISignUp } from "../types";
import Api from "./Api";

//  Auth

export const signup = (payload: ISignUp) => Api.post("signup-fake", payload);
export const signin = (payload: ISignIn) => Api.post("signin-fake", payload);
export const userProfile = () => Api.get(`user-profile-fake`);
