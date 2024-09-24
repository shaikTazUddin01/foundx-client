'use server'
// import { axiosInstance } from "@/src/lib/AxiosInstance";

import axiosInstance from "@/src/lib/AxiosInstance";

export const getCategories = async () => {
  try {
    // const { data } = await axiosInstance.get("/item-categories");
    const { data } = await axiosInstance.get("/item-categories");
    console.log("category-->",data);
    return data;
  } catch (error: any) {
    console.log(error);
    throw new Error(error.message);
  }
};
