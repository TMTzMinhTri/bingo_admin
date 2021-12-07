import { Theme, ThemeOptions } from '@mui/material/styles';

declare module '@mui/material/styles' {
  function createTheme(options?: IBingoThemeOptions): IbingoTheme;
}

declare global {
  interface IbingoTheme extends Theme {
    drawerWidth?: number;
  }
  interface IBingoThemeOptions extends ThemeOptions {
    drawerWidth?: number;
  }
}
