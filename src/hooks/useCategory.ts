import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getCategories } from "../services";
import ImageColors from "react-native-image-colors";
import { IOSImageColors } from "react-native-image-colors/lib/typescript/types";

export const useCategory = () => {
  const queryClient = useQueryClient();
  const query = useQuery(['categories'], getCategories, {
    staleTime: 2 * (60 * 1000),
    placeholderData: () => queryClient.getQueryData(['categories']),
  });

  query.data?.forEach(async cat => {
    const result = await ImageColors.getColors(cat.strCategoryThumb)
    const color = result.platform === 'android' ?
      result.average :
      (result as IOSImageColors).platform;
    cat.color = color;
  });

  return query;
}