import React from 'react';
import { FlatList, TouchableOpacity } from 'react-native';
import { PALETTE_ARRAY } from '../../constants/palettes';
import type { PaletteListProps } from './palette-list.types';
import PaletteListItem from '../palette-list-item';

const PaletteList = ({ onPress }: PaletteListProps) => {
  return (
    <FlatList
      data={PALETTE_ARRAY}
      keyExtractor={(item) => item}
      renderItem={({ item }) => (
        <TouchableOpacity onPress={() => onPress(item)}>
          <PaletteListItem palette={item} />
        </TouchableOpacity>
      )}
    />
  );
};

export default PaletteList;
