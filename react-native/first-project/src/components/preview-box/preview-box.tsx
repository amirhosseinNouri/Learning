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
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 1,
    borderRadius: 2,
    elevation: 2,
  },
});

export default PreviewBox;
