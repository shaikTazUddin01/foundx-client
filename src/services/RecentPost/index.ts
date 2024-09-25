"use server";
import envConfig from "@/src/config/envConfig";
import axiosInstance from "@/src/lib/AxiosInstance";
// import { axiosInstance } from "@/src/lib/AxiosInstance";
import { delay } from "@/src/utils/delay";
import { revalidateTag } from "next/cache";
import { FieldValues } from "react-hook-form";

export const getRecentPost = async () => {
  const fetchOption = {
    next: {
      tags: ["posts"],
    },
  };
  const res = await fetch(
    `${envConfig.baseApi}/items?sortBy=-createdAt&limit=9`,
    fetchOption
  );
  // await delay(10000);
  return res.json();
};

// get single recent post
export const getSingleRecentPost = async (item:string) => {
  // let fetchOptions={}
  // fetchOptions={
  //   cache:"no-store"
  // }
  const { data } = await axiosInstance.get(`/items/${item}`);
  // await delay(10000);
  return data
};

export const createItemPost = async (formData: FieldValues) => {
  try {
    const { data } = await axiosInstance.post("/items", formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    revalidateTag("posts");
    return data;
  } catch (error: any) {
    throw new Error(error.message);
  }
};
