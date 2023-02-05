import { FlatList, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { CategoryGridTile } from "../components";
import { useCategory } from "../hooks"
import { Category } from "../models";

export const CategoriesScreen = () => {
  const query = useCategory();

  const renderItem = ({ item }: { item: Category }) => (
    <CategoryGridTile title={item.strCategory} color={item.color} />
  );
  const keyExtractor = (item: Category) => item.idCategory;

  return (
    <SafeAreaView style={styles.container}>

      <FlatList
      data={query.data}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
      numColumns={2}
    />
    </SafeAreaView>
  );

}

const styles = StyleSheet.create({
    container: {
    }
});
