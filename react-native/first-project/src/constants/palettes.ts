import {
  Color,
  FrontendMastersColors,
  Palette,
  RainbowColors,
  SolarizedColors,
} from '@/types/palette';

export const SOLARIZED_COLORS_ARRAY: Array<SolarizedColors> = [
  'Base03',
  'Base02',
  'Base01',
  'Base00',
  'Base0',
  'Base1',
  'Base2',
  'Base3',
  'Yellow',
  'Orange',
  'Red',
  'Magenta',
  'Violet',
  'Blue',
  'Cyan',
  'Green',
];

export const RAINBOW_COLORS_ARRAY: Array<RainbowColors> = [
  'Red',
  'Orange',
  'Yellow',
  'Green',
  'Violet',
];

export const FRONTEND_MASTERS_COLORS_ARRAY: Array<FrontendMastersColors> = [
  'Black',
  'Grey',
  'Orange',
  'Red',
  'White',
];

export const MAP_PALETTE_TO_COLORS_ARRAY: Record<Palette, Array<Color>> = {
  FrontendMasters: FRONTEND_MASTERS_COLORS_ARRAY,
  Rainbow: RAINBOW_COLORS_ARRAY,
  Solarized: SOLARIZED_COLORS_ARRAY,
};

export const PALETTE = {
  Solarized: 'Solarized',
  FrontendMasters: 'FrontendMasters',
  Rainbow: 'Rainbow',
} as const;

export const PALETTE_ARRAY: Array<Palette> = [
  'FrontendMasters',
  'Rainbow',
  'Solarized',
];

export const MAP_SOLARIZED_COLORS_TO_HEX = {
  Base03: '#002b36',
  Base02: '#073642',
  Base01: '#586e75',
  Base00: '#657b83',
  Base0: '#839496',
  Base1: '#93a1a1',
  Base2: '#eee8d5',
  Base3: '#fdf6e3',
  Yellow: '#b58900',
  Orange: '#cb4b16',
  Red: '#dc322f',
  Magenta: '#d33682',
  Violet: '#6c71c4',
  Blue: '#268bd2',
  Cyan: '#2aa198',
  Green: '#859900',
} as const;

export const MAP_RAINBOW_COLORS_TO_HEX = {
  Red: '#FF0000',
  Orange: '#FF7F00',
  Yellow: '#FFFF00',
  Green: '#00FF00',
  Violet: '#8B00FF',
} as const;

export const MAP_FRONTEND_MASTERS_COLORS_TO_HEX = {
  Red: '#c02d28',
  Black: '#3e3e3e',
  Grey: '#8a8a8a',
  White: '#ffffff',
  Orange: '#e66225',
} as const;

export const MAP_COLORS_TO_HEX = {
  ...MAP_SOLARIZED_COLORS_TO_HEX,
  ...MAP_RAINBOW_COLORS_TO_HEX,
  ...MAP_FRONTEND_MASTERS_COLORS_TO_HEX,
} as const;
