import React from 'react';
import { View } from 'react-native';
import type { HomeProps } from './home.types';
import { Palette } from '@/types/palette';
import PaletteList from '../../components/palette-list';

const Home = ({ navigation }: HomeProps) => {
  const handleSolarizedPress = (palette: Palette) => {
    navigation.navigate('ColorPalette', {
      paletteName: palette,
    });
  };
  return (
    <View>
      <PaletteList onPress={handleSolarizedPress} />
    </View>
  );
};

export default Home;
