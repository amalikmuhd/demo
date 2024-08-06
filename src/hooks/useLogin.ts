// import { useMutation } from "@tanstack/react-query";
// import { ISignIn } from "../types";
// import { signin } from "../services/Endpoints";
// import { AxiosError } from "axios";
// import { toast } from "sonner";
// import { useLocation, useNavigate } from "react-router-dom";

// interface ErrorResponse {
//   message: string;
// }
// interface Props {
//     email: string;
//     password: string;
// }

// const useLogin = () =>
//   useMutation<Error>({
//     mutationFn: (payload: ISignIn) => {
//       return signin(payload);
//     },

//     onError: (error: AxiosError<ErrorResponse>) => {
//       toast.error(error.response?.data.message);
//     },

//     onSuccess: (data) => {
//       if (data.data.message === "success") {
//         const navigation = useNavigate();
//         const params = useLocation();
//         localStorage.setItem("token", JSON.stringify(data.data.accessToken));
//         navigation("/dashboard", { state: { type: params.state.type } });
//       }
//     },
//   });

// export default useLogin;
