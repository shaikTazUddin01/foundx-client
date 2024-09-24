
import { useMutation } from "@tanstack/react-query";
import { createItemPost } from "../services/RecentPost";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";

export const useCreatePost = () => {
  return useMutation({
    mutationKey: ["createPost"],
    mutationFn: async (formData: FieldValues) => await createItemPost(formData),
    onSuccess:()=>{
      toast.success("post created")
    },onError:(error)=>{
      toast.error(error.message)
    }
  });
};
