import { useMutation } from "@tanstack/react-query";
import { FieldValues } from "react-hook-form";
import { loginUser, registerUser } from "../services/AuthService";
import { toast } from "sonner";

export const useAuthRegistration = () => {
  return useMutation({
    mutationKey: ["USER_REGISTER"],
    mutationFn: async (userData: FieldValues) => {
      return await registerUser(userData);
    },
    onSuccess: () => {
     toast.success("Registration Success")
    },
    onError:(error)=>{
      toast.error(error.message)
    }
  });
};
export const useAuthLogin = () => {
  return useMutation({
    mutationKey: ["USER_LOGIN"],
    mutationFn: async (userData: FieldValues) => {
      return await loginUser(userData);
    },
    onSuccess: () => {
     toast.success("login Success")
    },
    onError:(error)=>{
      toast.error(error.message)
    }
  });
};
