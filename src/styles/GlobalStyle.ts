import { createGlobalStyle, css } from 'styled-components';
import { defaultTheme } from './default-theme';
export const DefaultGlobalStyle = createGlobalStyle` 
${({ theme }) => {
  return css`
    html {
      body {
        * {
          margin: 0;
          padding: 0;
        }
        overflow: scroll;
        h1 {
          font-size: 2.5rem;
        }
        h2 {
          font-size: 2rem;
        }
        h3 {
          font-size: 1.5rem;
        }
        h4 {
          font-size: 1.25rem;
        }
        p {
          font-size: 1rem;
        }
        .ui.container {
          display: flex;
          width: 100rem;
          background-color: #f0f0f0;
          background: ${defaultTheme.colors.white};
          color: ${defaultTheme.colors.black};
          font-family: sans-serif;
        }
        .grid {
          background-color: #d0d0d0;
        }
        .row {
          background-color: #e0e0e0;
        }
        .column {
          border: 1px solid black;
          background-color: #c0c0c0;
          display: flex !important;
          justify-content: center;
        }
      }
    }
  `;
}}
`;
