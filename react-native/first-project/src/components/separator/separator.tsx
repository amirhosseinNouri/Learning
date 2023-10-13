import React from 'react';
import { View } from 'react-native';
import type { SeparatorProps } from './separator.types';
import { SEPARATOR_DEFAULT_HEIGHT } from './separator.constants';

const Separator = ({ height = SEPARATOR_DEFAULT_HEIGHT }: SeparatorProps) => {
  const styles = {
    height,
  };

  return <View style={[styles]} />;
};

export default Separator;
