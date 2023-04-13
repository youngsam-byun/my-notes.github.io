import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      black: string;
      white: string;
      gray: string;
      orange: string;
      yellow: string;
      green: string;
      red: string;
      blue: string;
      indigo: string;
    };
  }
}
