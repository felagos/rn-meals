import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getMealsByCategory } from "../services";

export const useMeals = (category: string) => {
  const queryClient = useQueryClient();
  
  return useQuery(['meals', category], () => getMealsByCategory(category), {
    staleTime: 2 * (60 * 1000),
    placeholderData: () => queryClient.getQueryData(['meals', category]),
  });
  
};