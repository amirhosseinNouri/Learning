import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import type { ColorBoxProps } from './color-box.types';
import { MAP_COLORS_TO_HEX } from '../../constants/palettes';

const ColorBox = ({ color }: ColorBoxProps) => {
  const boxColor = {
    backgroundColor: MAP_COLORS_TO_HEX[color],
  };
  return (
    <View style={[styles.box, boxColor]}>
      <Text style={styles.text}>{color}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    padding: 10,
    alignItems: 'center',
    fontWeight: 'bold',
  },
  text: {
    color: 'white',
  },
});

export default ColorBox;
