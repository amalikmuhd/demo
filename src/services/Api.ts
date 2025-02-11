import axios from "axios";

const Api = axios.create({
  // baseURL: "https://fapay-backend.onrender.com/api/v1/",
  baseURL: "https://fapay-backend.onrender.com/api/v1/",
});

Api.interceptors.request.use(
  async (config) => {
    const token = JSON.parse(localStorage.getItem("token") as never);
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

Api.interceptors.response.use(
  (res) => {
    return res;
  },
  (err) => {
    throw err;
  }
);

export default Api;
