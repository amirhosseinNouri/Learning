import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import Separator from '../../components/separator/separator';
import type { ColorBoxProps } from '../../components/color-box';
import ColorBox from '../../components/color-box';
import ColorBoxHeader from '../../components/color-box-header';

const colors: Array<ColorBoxProps['color']> = [
  'Base03',
  'Base02',
  'Base01',
  'Base00',
  'Base0',
  'Base1',
  'Base2',
  'Base3',
  'Yellow',
  'Orange',
  'Red',
  'Magenta',
  'Violet',
  'Blue',
  'Cyan',
  'Green',
];

const ColorPalette = () => {
  return (
    <View style={[styles.container]}>
      <FlatList
        data={colors}
        keyExtractor={(item) => item}
        renderItem={({ item }) => <ColorBox color={item} />}
        ItemSeparatorComponent={Separator}
        ListHeaderComponent={ColorBoxHeader}
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
