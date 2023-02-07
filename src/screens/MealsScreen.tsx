import { useRoute } from "@react-navigation/native";
import { View, StyleSheet, FlatList, Text } from "react-native";
import { MealItem } from "../components";
import { useMeal } from "../hooks/useMeal";
import { Meal } from "../models";
import { MealsRouteProps } from "../types";

export const MealsScreen = () => {
  const { params: { category } } = useRoute<MealsRouteProps>();
  const { isLoading, data } = useMeal(category);


  const renderItem = ({ item }: { item: Meal }) => (
    <MealItem meal={item} />
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