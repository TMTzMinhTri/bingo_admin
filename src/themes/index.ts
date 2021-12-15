import createCache from '@emotion/cache';
import { deepmerge } from '@mui/utils';

import light from './light';
import dark from './dark';
import { Components, createTheme, Theme } from '@mui/material';

export function createEmotionCache() {
  return createCache({ key: 'css' });
}
const typeTheme = [light, dark];

const components: Components = {
  MuiButton: {
    styleOverrides: {
      root: {
        borderRadius: 5,
        textTransform: 'capitalize',
      },
    },
  },
  // MuiPaper: {
  //   styleOverrides: {
  //     root: {
  //       padding: 24,
  //     },
  //   },
  // },
  MuiInputLabel: {
    styleOverrides: {
      root: {
        marginBottom: 8,
        position: 'unset',
      },
      shrink: {
        transform: 'none !important',
      },
    },
  },
  MuiTableContainer: {
    styleOverrides: {
      root: {
        position: 'relative',
      },
    },
  },
};

// Create a theme instance.
const theme = (type: number = 0): IbingoTheme => {
  const options: IBingoThemeOptions = {
    drawerWidth: 240,
    components,
    shape: {
      borderRadius: 12,
    },
  };
  return createTheme(deepmerge<IBingoThemeOptions>(typeTheme[type], options));
};

export default theme;
