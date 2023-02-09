import { View, Text, StyleSheet } from "react-native"
import { Measure } from "../models"

interface Props {
  measures: Measure[];
}

export const MeasureIngredients = ({ measures }: Props) => (
  <View style={[styles.details, styles.centerContainer]}>
    <Text style={styles.title}>Ingredients And Measures</Text>
    {
      measures.map(({ ingredient, measure }, index) => (
        <View key={index} style={styles.measureItem}>
          <Text>{ingredient} - {measure}</Text>
        </View>
      ))
    }
  </View>
)


const styles = StyleSheet.create({
  title: {
    fontWeight: "bold",
    fontSize: 18,
    marginBottom: 8,
  },
  details: {
    marginTop: 16,
  },
  centerContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  measureItem: {
    padding: 8,
    marginBottom: 4,
    borderRadius: 16,
    backgroundColor: "#e7e1e1",
  }
})