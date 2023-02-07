import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ScreensEnum } from "../enums";
import { CategoriesScreen, MealsScreen } from "../screens";
import { StackParamList } from "../types";

const Stack = createNativeStackNavigator<StackParamList>();

export const AppNavigator = () => (
  <NavigationContainer>
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={ScreensEnum.CATEGORIES} component={CategoriesScreen} />
      <Stack.Screen name={ScreensEnum.MEALS} component={MealsScreen} />
    </Stack.Navigator>
  </NavigationContainer>
)