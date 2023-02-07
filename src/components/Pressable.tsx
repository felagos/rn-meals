import React from 'react';
import { Pressable as RNPRessable, StyleSheet } from 'react-native'

interface Props {
  onPress: () => void;
  children: React.ReactNode | React.ReactNode[];
}

export const Pressable = ({ onPress, children }: Props) => (
  <RNPRessable
    android_ripple={{ color: '#ccc' }}
    style={({ pressed }) => [styles.button, pressed ? styles.buttonPressed : null]}
    onPress={onPress}
  >
    {children}
  </RNPRessable>
);

const styles = StyleSheet.create({
  button: {
    flex: 1,
  },
  buttonPressed: {
    opacity: 0.5,
  }
});