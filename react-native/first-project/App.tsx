import React from 'react';
import { Text, SafeAreaView, StyleSheet, View } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={[styles.container]}>
        <Text style={styles.title}>
          Here are some boxes with different colors
        </Text>
        <View style={[styles.colorContainer]}>
          <View style={[styles.box, styles.cyan]}>
            <Text>Cyan</Text>
          </View>
          <View style={[styles.box, styles.blue]}>
            <Text>Blue</Text>
          </View>
          <View style={[styles.box, styles.magenta]}>
            <Text>Magenta</Text>
          </View>
          <View style={[styles.box, styles.orange]}>
            <Text>Orange</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
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
  box: {
    padding: 10,
    alignItems: 'center',
    fontWeight: 'bold',
  },
  orange: {
    backgroundColor: 'orange',
  },
  cyan: {
    backgroundColor: 'cyan',
  },
  magenta: {
    backgroundColor: 'magenta',
  },
  blue: {
    backgroundColor: 'blue',
  },
});
