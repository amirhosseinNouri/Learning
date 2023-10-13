import React from 'react';
import { StyleSheet, Text } from 'react-native';

const ColorBoxHeader = () => (
  <Text style={styles.header}>Here are some boxes with different colors</Text>
);

const styles = StyleSheet.create({
  header: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default ColorBoxHeader;
