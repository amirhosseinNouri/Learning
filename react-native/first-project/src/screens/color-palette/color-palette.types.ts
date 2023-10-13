import type { Palette } from '@/types/palette';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { RootStackParamList } from '@/service/stack-navigator';

export type ColorPaletteRouteParams = {
  paletteName: Palette;
};

export type ColorPaletteProps = NativeStackScreenProps<
  RootStackParamList,
  'ColorPalette'
>;
