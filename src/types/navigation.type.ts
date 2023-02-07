import { RouteProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { ScreensEnum } from "../enums";

export type StackParamList = {
  CategoriesScreen: undefined;
  MealsScreen: { category: string };
}

export type CategoryScreenProps = NativeStackNavigationProp<StackParamList, ScreensEnum.CATEGORIES>;

export type MealsRouteProps = RouteProp<StackParamList, ScreensEnum.MEALS>;