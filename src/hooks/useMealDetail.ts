import { useQuery, useQueryClient } from "@tanstack/react-query";
import { MealDetail } from "../models";
import { getMealDetails } from "../services";

export const useMealDetail = (mealId: string) => {
  const queryClient = useQueryClient();

  const query = useQuery(['mealDetail', mealId], () => getMealDetails(mealId), {
    staleTime: 2 * (60 * 1000),
    placeholderData: () => queryClient.getQueryData(['mealDetail', mealId]),
  });

  return {
    isLoading: query.isLoading,
    data: query.data ?? {} as MealDetail,
  };

}