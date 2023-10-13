import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import type { ColorBoxProps } from './color-box.types';

const ColorBox = ({ color }: ColorBoxProps) => {
  return (
    <View style={[styles.box, styles[color]]}>
      <Text>{color}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    padding: 10,
    alignItems: 'center',
    fontWeight: 'bold',
  },
  orange: {
    backgroundColor: 'orange',
  },
  cyan: {
    backgroundColor: 'cyan',
  },
  magenta: {
    backgroundColor: 'magenta',
  },
  blue: {
    backgroundColor: 'blue',
  },
});

export default ColorBox;
