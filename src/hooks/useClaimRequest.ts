import { useMutation, useQuery } from "@tanstack/react-query";
import { ClaimRequest, getMyClaimRequest, receivedClaimRequest } from "../services/ClaimItem";
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
export const useMyClaimRequist = () => {
  return useQuery({
    queryKey: ["MY_CLAIM_REQUEST"],
    queryFn: async () => {
      return await getMyClaimRequest();
    },
  });
};
export const useReceivedClaimRequist = () => {
  return useQuery({
    queryKey: ["RECEIVED_CLAIM_REQUEST"],
    queryFn: async () => {
      return await receivedClaimRequest();
    },
  });
};
