import { useNavigation, useRoute } from "@react-navigation/native";
import { useLayoutEffect } from "react";
import { ScrollView, StyleSheet, Text, View, Image } from "react-native";
import YoutubePlayer from "react-native-youtube-iframe";
import { useMealDetail } from "../hooks/useMealDetail";
import { MealDetailRouteProps } from "../types";
import { MealDetail, Measure } from '../models';
import { MeasureIngredients } from "../components";

export const MealDetailScreen = () => {
  const navigation = useNavigation();
  const { params: { mealId, name } } = useRoute<MealDetailRouteProps>();
  const { isLoading, data } = useMealDetail(mealId);

  useLayoutEffect(() => {
    navigation.setOptions({ 
      title: name,
    });
  }, [name, navigation]);

  const videoId = data?.strYoutube?.split('=')[1];

  const measures = Object.keys(data).reduce((acc: Measure[], key) => {
    const keyTyped = key as keyof MealDetail;
    const value = data[keyTyped];

    if (key.startsWith('strIngredient') && value != null && value !== '') {
      const index = key.replace('strIngredient', '');
      const keyMeasure = `strMeasure${index}` as keyof MealDetail;

      const measure = data[keyMeasure]?.trim() ?? '';

      acc.push({ ingredient: value, measure });
    }

    return acc;
  }, []);

  if (isLoading) return null;

  return (
    <View style={styles.container}>
      {videoId && <YoutubePlayer height={200} videoId={videoId}  />}
      {!videoId && <Image style={styles.thumbnail} source={{ uri: data.strMealThumb }} />}

      <ScrollView style={styles.details} contentContainerStyle={styles.centerContainer}>
        <Text style={styles.title}>{data.strMeal}</Text>
        <Text>Category: {data.strCategory}</Text>
        <Text>Area: {data.strArea}</Text>
        {data.strTags && <Text>Tags: {data.strTags.replace(/,/g, ', ')}</Text>}

        <MeasureIngredients measures={measures} />

        <View style={[styles.details, styles.centerContainer]}>
          <Text style={styles.title}>Instructions</Text>
          <Text>{data.strInstructions}</Text>
        </View>

      </ScrollView>
    </View>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
    marginBottom: 8,
  },
  thumbnail: {
    width: "100%",
    height: 300,
    resizeMode: "stretch",
  },
  details: {
    marginTop: 16,
  },
  centerContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
});