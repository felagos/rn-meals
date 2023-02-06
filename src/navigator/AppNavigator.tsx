import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { CategoriesScreen } from "../screens";

const Stack = createNativeStackNavigator();

export const AppNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="Home" component={CategoriesScreen} />
  </Stack.Navigator>
)