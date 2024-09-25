'use server'
import axiosInstance from "@/src/lib/AxiosInstance";

export const ClaimRequest = async (claimData: any) => {
  try {
    console.log("---->", claimData);
    const { data } = await axiosInstance.post("/claim-request", claimData);
    console.log('data-->',data);
    return data;
  } catch (error: any) {
    throw new Error(error?.message);
  }
};
