import { StyleSheet, View, Image, Text } from "react-native";
import { Meal } from "../models";
import { Pressable } from "./Pressable";

interface Props {
  meal: Meal;
}

export const MealItem = ({ meal }: Props) => (
  <View style={styles.container}>
    <Pressable onPress={() => {}}>
      <Image style={styles.image} source={{ uri: meal.strMealThumb }} />
      <View style={styles.description}>
        <Text style={styles.title}>{meal.strMeal}</Text>
      </View>
    </Pressable>
  </View>
);

const styles = StyleSheet.create({
  container: {
    margin: 16,
    flexDirection: 'column',
    borderRadius: 8,
    backgroundColor: '#fff',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.20,
    shadowRadius: 1.41,
    elevation: 2,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: 200,
  },
  description: {
    margin: 16,
  },
  title: {
    fontWeight: '500',
    textAlign: 'left',
  },
  button: {
    flex: 1,
  },
  buttonPressed: {
    opacity: 0.5,
  }
});