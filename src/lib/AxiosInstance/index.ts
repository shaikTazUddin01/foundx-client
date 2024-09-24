"use server";
import envConfig from "@/src/config/envConfig";
import axios from "axios";
import { cookies } from "next/headers";

 const axiosInstance = axios.create({
  baseURL: "http://localhost:5000/api/v1",
  // baseURL: envConfig.baseApi,
});

axiosInstance.interceptors.request.use(
  function (config) {
    const cookieStore = cookies();
    const accessToken = cookieStore.get("accessToken")?.value;
    // console.log('-->>',accessToken);
    if (accessToken) {
      config.headers.Authorization = accessToken;
    }

    return config;
  },
  function (error) {
    console.log(error);
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    console.log(error);
    return Promise.reject(error);
  }
);

export default axiosInstance