import React from 'react';
import { Text, SafeAreaView, StyleSheet, View, FlatList } from 'react-native';
import ColorBox from './components/color-box';
import type { ColorBoxProps } from './components/color-box';
import Separator from './components/separator';

export default function App() {
  const colors: Array<ColorBoxProps['color']> = [
    'orange',
    'blue',
    'magenta',
    'cyan',
    'red',
  ];

  return (
    <SafeAreaView>
      <View style={[styles.container]}>
        <Text style={styles.title}>
          Here are some boxes with different colors
        </Text>

        <FlatList
          data={colors}
          keyExtractor={(item) => item}
          renderItem={({ item }) => <ColorBox color={item} />}
          ItemSeparatorComponent={Separator}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingVertical: 40,
    gap: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
