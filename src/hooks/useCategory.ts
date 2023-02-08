import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getCategories } from "../services";
import ImageColors from "react-native-image-colors";
import { IOSImageColors } from "react-native-image-colors/lib/typescript/types";
import { useEffect, useState } from "react";
import { Category } from "../models";

export const useCategory = () => {
  const queryClient = useQueryClient();
  const [data, setData] = useState<Category[]>([]);

  const query = useQuery(['categories'], getCategories, {
    staleTime: 2 * (60 * 1000),
    placeholderData: () => queryClient.getQueryData(['categories']),
  });

  useEffect(() => {
    const assignColor = async () => {
      if (!query.data) return [];

      const assignedColor = query.data.map(async cat => {
        const result = await ImageColors.getColors(cat.strCategoryThumb)
        const color = result.platform === 'android' ?
          result.dominant :
          (result as IOSImageColors).secondary;

        return { ...cat, color };
      });

      return Promise.all(assignedColor);
    }

    assignColor().then(data => setData(data));

  }, [query.data]);

  return {
    isLoading: query.isLoading,
    data,
  };
}