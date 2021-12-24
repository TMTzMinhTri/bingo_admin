import light from './light';
import dark from './dark';
import { Components, PaletteMode } from '@mui/material';
import { grey } from '@mui/material/colors';

const components: Components = {
  MuiButton: {
    styleOverrides: {
      root: {
        borderRadius: 5,
        textTransform: 'capitalize',
      },
    },
  },
  MuiTabs: {
    styleOverrides: {
      root: {
        backgroundColor: grey[300],
        paddingBlock: 1
      },
      indicator: {
        backgroundColor: 'transparent',
      },
    },
  },
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

const GetDesignTokens = (mode: PaletteMode) => ({
  palette: {
    mode,
  },
  ...(mode === 'light' ? light : dark),
  components,
  shape: {
    borderRadius: 12,
  },
});

export default GetDesignTokens;
