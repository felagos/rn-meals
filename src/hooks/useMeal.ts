import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getMealsByCategory } from "../services";

export const useMeal = (category: string) => {
  const queryClient = useQueryClient();
  
  return useQuery(['meal', category], () => getMealsByCategory(category), {
    staleTime: 2 * (60 * 1000),
    placeholderData: () => queryClient.getQueryData(['meal', category]),
  });
  
};