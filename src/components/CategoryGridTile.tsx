import { useMemo } from "react";
import {
  Pressable,
  Text,
  View,
  StyleSheet,
  Platform
} from "react-native";

interface Props {
  title: string;
  color?: string;
  onPress: () => void;
}

export const CategoryGridTile = ({ title, color, onPress }: Props) => {
  const colorText = useMemo(() => {
    if (!color) return '#ffffff';

    const colorValue = parseInt(color.replace('#', '0x'));
    return colorValue > (0xffffff / 2) ? '#000000' : '#ffffff';
  }, [color]);

  return (
    <View style={[styles.container, { backgroundColor: color }]}>
      <Pressable
        onPress={onPress}
        android_ripple={{ color: '#ccc' }}
        style={({ pressed }) => [styles.button, pressed ? styles.butomPressed : null]}>
        <View style={styles.innerContainer}>
          <Text style={[styles.title, { color: colorText }]} ellipsizeMode='clip' >{title}</Text>
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 16,
    height: 150,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
    overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
  },
  innerContainer: {
    flex: 1,
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  butomPressed: {
    opacity: 0.5,
  }
});