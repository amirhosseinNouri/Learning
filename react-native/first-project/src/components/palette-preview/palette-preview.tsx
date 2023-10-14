import React from 'react';
import { Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import type { PalettePreviewProps } from './palette-preview.types';
import { MAP_PALETTE_TO_COLORS_ARRAY } from '../../constants/palettes';
import { DEFAULT_PREVIEW } from './palette-preview.constants';
import PreviewBox from '../preview-box/preview-box';

const BEGINNING = 0;

const PalettePreview = ({
  palette,
  onPress,
  preview = DEFAULT_PREVIEW,
}: PalettePreviewProps) => {
  const colors = MAP_PALETTE_TO_COLORS_ARRAY[palette];
  const previewColor = colors.slice(BEGINNING, preview);

  const handlePress = () => onPress(palette);

  return (
    <TouchableOpacity style={styles.container} onPress={handlePress}>
      <Text style={styles.text}>{palette}</Text>
      <FlatList
        data={previewColor}
        keyExtractor={(item) => item}
        renderItem={({ item }) => <PreviewBox color={item} />}
        numColumns={preview}
        columnWrapperStyle={styles.columnWrapper}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: { gap: 10 },
  previewBox: {
    width: 20,
    height: 20,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  columnWrapper: {
    gap: 5,
  },
});

export default PalettePreview;
