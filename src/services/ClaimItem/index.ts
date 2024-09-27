"use server";
import axiosInstance from "@/src/lib/AxiosInstance";

export const ClaimRequest = async (claimData: any) => {
  try {
    // console.log("---->", claimData);
    const { data } = await axiosInstance.post("/claim-request", claimData);
    // console.log("data-->", data);
    return data;
  } catch (error: any) {
    throw new Error(error?.message);
  }
};

export const getMyClaimRequest = async () => {
  try {
    // console.log("---->", claimData);
    const { data } = await axiosInstance.get("/claim-request/my-claim-request");
    // console.log("data-->", data);
    return data;
  } catch (error: any) {
    throw new Error(error?.message);
  }
};
export const receivedClaimRequest = async () => {
  try {
    // console.log("---->", claimData);
    const { data } = await axiosInstance.get(
      "/claim-request/received-claim-request"
    );
    // console.log("data-->", data);
    return data;
  } catch (error: any) {
    throw new Error(error?.message);
  }
};
