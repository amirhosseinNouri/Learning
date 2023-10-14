import React from 'react';
import { View, StyleSheet } from 'react-native';
import type { PreviewBoxProps } from './preview-box.types';
import { MAP_COLORS_TO_HEX } from '../../constants/palettes';

const PreviewBox = ({ color }: PreviewBoxProps) => {
  const backgroundStyle = {
    backgroundColor: MAP_COLORS_TO_HEX[color],
  };

  return <View style={[styles.box, backgroundStyle]} />;
};

const styles = StyleSheet.create({
  box: {
    width: 40,
    height: 40,
  },
});

export default PreviewBox;
