import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import type { HomeProps } from './home.types';

const Home = ({ navigation }: HomeProps) => {
  const handleSolarizedPress = () => {
    navigation.navigate('ColorPalette');
  };
  return (
    <View>
      <TouchableOpacity onPress={handleSolarizedPress}>
        <Text>Solarized</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;
