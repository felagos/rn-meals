import { useNavigation, useRoute } from "@react-navigation/native";
import { useLayoutEffect } from "react";
import { View, StyleSheet, FlatList, Text } from "react-native";
import { MealItem } from "../components";
import { ScreensEnum } from "../enums";
import { useMeals } from "../hooks/useMeal";
import { Meal } from "../models";
import { MealDetailScreenProps, MealsRouteProps } from "../types";

export const MealsScreen = () => {
  const { params: { category } } = useRoute<MealsRouteProps>();
  const navigation = useNavigation<MealDetailScreenProps>();
  const { isLoading, data } = useMeals(category);

  useLayoutEffect(() => {
    navigation.setOptions({ title: category });
  }, [category, navigation]);

  const goToDetail = (meal: Meal) => {
    const params = {
      mealId: meal.idMeal,
      name: meal.strMeal,
    };
    navigation.navigate(ScreensEnum.MEAL_DETAIL, params);
  };

  const renderItem = ({ item }: { item: Meal }) => (
    <MealItem meal={item} onPress={() => goToDetail(item)} />
  );

  if (isLoading) return null;

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={item => item.idMeal}
        renderItem={renderItem}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  }
});