import {
  MAP_RAINBOW_COLORS_TO_HEX,
  MAP_FRONTEND_MASTERS_COLORS_TO_HEX,
  MAP_SOLARIZED_COLORS_TO_HEX,
  PALETTE,
} from '@/constants/palettes';
import type { ExtractObjectKeys } from './global';

export type Palette = ExtractObjectKeys<typeof PALETTE>;

export type RainbowColors = ExtractObjectKeys<typeof MAP_RAINBOW_COLORS_TO_HEX>;

export type FrontendMastersColors = ExtractObjectKeys<
  typeof MAP_FRONTEND_MASTERS_COLORS_TO_HEX
>;

export type SolarizedColors = ExtractObjectKeys<
  typeof MAP_SOLARIZED_COLORS_TO_HEX
>;

export type Color = RainbowColors | FrontendMastersColors | SolarizedColors;

export type MapPaletteToColors = {
  Solarized: SolarizedColors;
  Rainbow: RainbowColors;
  FrontendMasters: FrontendMastersColors;
};
