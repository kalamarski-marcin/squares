import {
  createGrid,
  createGridHeader
} from '../helpers';

const DEFAULT_ROWS = 20;
const DEFAULT_COLS = 20;

export const COLORS = {
  '#ffc0cb': [],
  '#ff0000': [],
  '#dc143c': [],
  '#800000': [],
  '#ffdead': [],
  '#ff8c00': [],
  '#ffa500': [],
  '#ff4500': [],
  '#daa520': [],
  '#d2691e': [],
  '#a0522d': [],
  '#8b4513': [],
  '#ffffe0': [],
  '#ffd700': [],
  '#ffff00': [],
  '#808000': [],
  '#90ee90': [],
  '#00ff00': [],
  '#008000': [],
  '#006400': [],
  '#e0ffff': [],
  '#40e0d0': [],
  '#008080': [],
  '#2f4f4f': [],
  '#f0f8ff': [],
  '#87cefa': [],
  '#1e90ff': [],
  '#4682b4': [],
  '#e6e6fa': [],
  '#483d8b': [],
  '#0000ff': [],
  '#00008b': [],
  '#9370db': [],
  '#8a2be2': [],
  '#9400d3': [],
  '#4b0082': [],
  '#dda0dd': [],
  '#ee82ee': [],
  '#ff00ff': [],
  '#800080': [],
  '#fff0f5': [],
  '#ff69b4': [],
  '#ff1493': [],
  '#c71585': [],
  '#f5f5f5': [],
  '#d3d3d3': [],
  '#808080': [],
  '#000000': []
};

export const initialState = {
  gridHeader: createGridHeader(DEFAULT_COLS),
  grid: createGrid(DEFAULT_ROWS, DEFAULT_COLS),
  activeColor: '#000000',
  cols: DEFAULT_COLS,
  rows: DEFAULT_ROWS,
  colors: COLORS,
  html2canvasIgnore: true,
  zoom: 1,
  mode: {
    fillSingleCell: { enabled: true },
    fillMultipleCells: { enabled: false, started: false },
    eraseCell: { enabled: false }
  }
};
