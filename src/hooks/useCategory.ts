import { useQuery } from "@tanstack/react-query";
import { getCategories } from "../services/category";

export const useGetCategory = () => {
  return useQuery({
    queryKey: ["GET_CATEGORIES"],
    queryFn: async()=>await getCategories()
  });
};
