import { RouteProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { ScreensEnum } from "../enums";

export type StackParamList = {
  CategoriesScreen: undefined;
  MealsScreen: {
    category: string;
  };
  MealDetailScreen: {
    mealId: string;
    name: string;
  };
}

export type CategoryScreenProps = NativeStackNavigationProp<StackParamList, ScreensEnum.CATEGORIES>;
export type MealDetailScreenProps = NativeStackNavigationProp<StackParamList, ScreensEnum.MEAL_DETAIL>;

export type MealsRouteProps = RouteProp<StackParamList, ScreensEnum.MEALS>;
export type MealDetailRouteProps = RouteProp<StackParamList, ScreensEnum.MEAL_DETAIL>;