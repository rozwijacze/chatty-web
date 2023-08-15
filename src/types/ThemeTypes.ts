export interface CustomTheme {
    palette: {
      [key: string]: {
        main: string;
        light: string;
        dark: string;
      };
    };
    typography: {
      [key: string]: string | number;
    };
  }
