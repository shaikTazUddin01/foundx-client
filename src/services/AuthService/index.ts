"use server";
import { axiosInstance } from "@/src/lib/AxiosInstance";
import { IUser } from "@/src/types";
import { jwtDecode, JwtPayload } from "jwt-decode";
import { cookies } from "next/headers";
import { FieldValues } from "react-hook-form";

export const registerUser = async (userData: FieldValues) => {
  try {
    const { data } = await axiosInstance.post("/auth/register", userData);

    if (data?.success) {
      cookies().set("accessToken", data?.data?.accessToken);
      cookies().set("refreshToken", data?.data?.refreshToken);
    }
    return data?.data;
  } catch (error: any) {
    throw new Error(error);
  }
};
export const loginUser = async (userData: FieldValues) => {
  try {
    const { data } = await axiosInstance.post("/auth/login", userData);

    if (data?.success) {
      cookies().set("accessToken", data?.data?.accessToken);
      cookies().set("refreshToken", data?.data?.refreshToken);
    }
    return data?.data;
  } catch (error: any) {
    throw new Error(error);
  }
};

export const logout=()=>{
  cookies().delete('accessToken')
  cookies().delete('refreshToken')
}


export const currentUser = async () => {
  let decoded = null;

  const accessToken = cookies().get("accessToken")?.value;

  if (accessToken) {
    const decoded :Partial<IUser> = jwtDecode(accessToken);

    return {
      _id: decoded._id,
      name: decoded.name,
      email: decoded.email,
      role: decoded.role,
      status: decoded.status,
    };
  }
};
