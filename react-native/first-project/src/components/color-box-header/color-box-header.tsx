import React from 'react';
import { StyleSheet, Text } from 'react-native';
import type { ColorBoxHeaderProps } from './color-box-header.types';

const ColorBoxHeader = ({ header }: ColorBoxHeaderProps) => (
  <Text style={styles.header}>{header}</Text>
);

const styles = StyleSheet.create({
  header: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default ColorBoxHeader;
