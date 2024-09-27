"use server";

import axiosInstance from "@/src/lib/AxiosInstance";

export const searchItems = async (item: string) => {
  try {
    const res = await axiosInstance.get(`/search-items?searchTerm=${item}`);

    return res.data?.data;
  } catch (error) {
    throw new Error("Failed to search Item");
  }
};
