import React from 'react';
import { View, FlatList } from 'react-native';
import type { HomeProps } from './home.types';
import { Palette } from '@/types/palette';
import { PALETTE_ARRAY } from '../../constants/palettes';
import PalettePreview from '../../components/palette-preview';
import Separator from '../../components/separator';

const Home = ({ navigation }: HomeProps) => {
  const handlePalettePress = (palette: Palette) => {
    navigation.navigate('ColorPalette', {
      paletteName: palette,
    });
  };
  return (
    <View>
      <FlatList
        data={PALETTE_ARRAY}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <PalettePreview palette={item} onPress={handlePalettePress} />
        )}
        ItemSeparatorComponent={Separator}
      />
    </View>
  );
};

export default Home;
