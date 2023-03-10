import { useNavigation } from "@react-navigation/native";
import { FlatList, StyleSheet } from "react-native";
import { CategoryGridTile } from "../components";
import { ScreensEnum } from "../enums";
import { useCategory } from "../hooks"
import { Category } from "../models";
import { CategoryScreenProps } from "../types";

export const CategoriesScreen = () => {
  const navigation = useNavigation<CategoryScreenProps>();
  const query = useCategory();

  const onPress = (category: string) => navigation.navigate(ScreensEnum.MEALS, { category });

  const renderItem = ({ item }: { item: Category }) => (
    <CategoryGridTile
      title={item.strCategory}
      color={item.color}
      onPress={() => onPress(item.strCategory)}
    />
  );
  const keyExtractor = (item: Category) => item.idCategory;

  return (
    <FlatList
        data={query.data}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        numColumns={2}
      />
  );

}

const styles = StyleSheet.create({
  container: {
  }
});
