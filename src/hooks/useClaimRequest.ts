import { useMutation } from "@tanstack/react-query";
import { ClaimRequest } from "../services/ClaimItem";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";

export const useClaimRequist = () => {
  return useMutation({
    mutationKey: ["CLAIM_REQUEST"],
    mutationFn: async (claimData: FieldValues) => {
      return await ClaimRequest(claimData);
    },
    onSuccess() {
      toast.success("claim success");
    },
    onError(error) {
      toast.error(error?.message);
    },
  });
};
