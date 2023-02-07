import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScreensEnum } from "../enums";
import { CategoriesScreen, MealsScreen } from "../screens";
import { StackParamList } from "../types";

const Stack = createNativeStackNavigator<StackParamList>();

export const AppNavigator = () => (
  <NavigationContainer>
    <SafeAreaView style={styles.container}>
      <Stack.Navigator>
        <Stack.Screen name={ScreensEnum.CATEGORIES} component={CategoriesScreen} options={{ headerShown: false }} />
        <Stack.Screen name={ScreensEnum.MEALS} component={MealsScreen} />
      </Stack.Navigator>
    </SafeAreaView>
  </NavigationContainer>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});