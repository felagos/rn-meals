import { useRoute } from "@react-navigation/native";
import { View, StyleSheet } from "react-native";
import { useMeal } from "../hooks/useMeal";
import { MealsRouteProps } from "../types";

export const MealsScreen = () => {
  const { params: { category } } = useRoute<MealsRouteProps>();

  useMeal(category);

  return (
    <View style={styles.container} />
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  }
});