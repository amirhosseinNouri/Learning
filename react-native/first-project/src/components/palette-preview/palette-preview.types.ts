import type { Palette } from '@/types/palette';

export type PalettePreviewProps = {
  palette: Palette;
  preview?: number;
  onPress: (palette: Palette) => void;
};
