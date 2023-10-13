import { createNativeStackNavigator } from '@react-navigation/native-stack';
import type { ColorPaletteRouteParams } from '@/screens/color-palette/color-palette.types';

export type RootStackParamList = {
  Home: undefined;
  ColorPalette: ColorPaletteRouteParams;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default Stack;
