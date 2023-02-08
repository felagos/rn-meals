import { useNavigation, useRoute } from "@react-navigation/native";
import { useLayoutEffect } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { useMealDetail } from "../hooks/useMealDetail";
import { MealDetailRouteProps } from "../types";
import { MealDetail } from '../models';

export const MealDetailScreen = () => {
  const navigation = useNavigation();
  const { params: { mealId, name } } = useRoute<MealDetailRouteProps>();
  const { isLoading, data } = useMealDetail(mealId);

  useLayoutEffect(() => {
    navigation.setOptions({ title: name });
  }, [name, navigation]);

  const ingredients = Object.keys(data).reduce((acc: string[], key) => {
    const keyTyped = key as keyof MealDetail;
    const value = data[keyTyped];

    if (key.startsWith('strIngredient') && value != null && value !== '') {
      acc.push(value);
    }

    return acc;
  }, []);

  if (isLoading) return null;

  return (
    <View style={styles.container}>
      <Image style={styles.thumbnail} source={{ uri: data.strMealThumb }} />
      <View style={styles.details}>
        <Text style={styles.textName}>{data.strMeal}</Text>
        <Text>Category: {data.strCategory}</Text>
        <Text>Area: {data.strArea}</Text>
        {data.strTags && <Text>Tags: {data.strTags.replace(/,/g, ', ')}</Text>}
      </View>
    </View>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  textName: {
    fontWeight: "bold",
    fontSize: 18,
  },
  thumbnail: {
    width: "100%",
    height: 300,
    resizeMode: "stretch",
  },
  details: {
    marginTop: 16,
  }
});