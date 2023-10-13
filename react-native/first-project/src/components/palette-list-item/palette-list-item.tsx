import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import type { PaletteListItemProps } from './palette-list-item.types';

const PaletteListItem = ({ palette }: PaletteListItemProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{palette}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default PaletteListItem;
