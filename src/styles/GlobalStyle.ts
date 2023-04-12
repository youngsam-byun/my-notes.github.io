import { createGlobalStyle, css } from 'styled-components';
import { defaultTheme } from './default-theme';
export const DefaultGlobalStyle = createGlobalStyle` 
${({ theme }) => css`
  html {
    * {
      margin: 0;
      padding: 0;
    }
    width: window.innerWidth;
    height: window.innerHeight;

    .row {
      background-color: #e0e0e0;
    }
    .grid {
      background-color: #d0d0d0;
    }
    .column {
      border: 1px solid black;
      background-color: #c0c0c0;
    }

    h1 {
      font-size: 3rem;
    }
    h2 {
      font-size: 2.5rem;
    }
    h3 {
      font-size: 2rem;
    }
    h4 {
      font-size: 1.5rem;
    }
    p {
      font-size: 1rem;
    }

    body {
      .ui.container {
        background-color: #f0f0f0;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: window.innerWidth;
        height: window.innerHeight;
        background: ${defaultTheme.colors.white};
        color: ${defaultTheme.colors.black};
        font-family: sans-serif;
      }
    }
  }
`}
`;
