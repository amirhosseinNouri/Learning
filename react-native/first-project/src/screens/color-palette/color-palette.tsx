import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import Separator from '../../components/separator/separator';
import ColorBox from '../../components/color-box';
import ColorBoxHeader from '../../components/color-box-header';
import type { ColorPaletteProps } from './color-palette.types';
import { MAP_PALETTE_TO_COLORS_ARRAY } from '../../constants/palettes';

const ColorPalette = ({ route }: ColorPaletteProps) => {
  const { paletteName } = route.params;

  const colors = MAP_PALETTE_TO_COLORS_ARRAY[paletteName];

  return (
    <View style={[styles.container]}>
      <FlatList
        data={colors}
        keyExtractor={(item) => item}
        renderItem={({ item }) => <ColorBox color={item} />}
        ItemSeparatorComponent={Separator}
        ListHeaderComponent={<ColorBoxHeader header={paletteName} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    paddingHorizontal: 10,
    paddingTop: 10,
    gap: 10,
  },
});

export default ColorPalette;
