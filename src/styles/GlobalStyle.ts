import { createGlobalStyle, css } from 'styled-components';

export const GlobalStyle = createGlobalStyle` 
${({ theme }) => css`
  html {
    *,
    *::before,
    *::after {
      box-sizing: border-box;
      margin: 0;
    }

    body {
      font-family: 'lucida grande', tahoma, verdana, arial, sans-serif;
    }

    h1 {
      font-size: 2rem;
    }
    h2 {
      font-size: 1.5rem;
    }
    p {
      font-size: 1rem;
    }
    height: 100%;

    body {
      display: flex;
      flex-direction: column;
      justify-content: left;
      height: 100%;
      margin: 0;
      font-family: sans-serif;
    }
  }
`}
`;
