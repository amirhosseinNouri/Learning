import React from 'react';
import { Text, SafeAreaView, StyleSheet, View } from 'react-native';
import ColorBox from './components/color-box';

export default function App() {
  return (
    <SafeAreaView>
      <View style={[styles.container]}>
        <Text style={styles.title}>
          Here are some boxes with different colors
        </Text>
        <View style={[styles.colorContainer]}>
          <ColorBox color="cyan" />
          <ColorBox color="blue" />
          <ColorBox color="magenta" />
          <ColorBox color="orange" />
          <ColorBox color="red" />
        </View>
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
  colorContainer: {
    gap: 10,
  },
});
