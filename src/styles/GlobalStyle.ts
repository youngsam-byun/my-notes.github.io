import { createGlobalStyle, css } from 'styled-components';

export const DefaultGlobalStyle = createGlobalStyle` 
${({ theme }) => css`
  .ui.container {
    background-color: #f0f0f0;
  }
  .row {
    background-color: #e0e0e0;
  }
  .grid {
    background-color: #d0d0d0;
  }
  .column {
    width: 5%;
    border: 1px solid black;
    display: inline-block;
    width: 5%;
    background-color: #ccccff;
    position: relative;
    margin-left: 0.5rem;
    margin-right: 0.5rem;
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
  body {
    display: flex;
    flex-direction: column;
    justify-content: left;
  }
`}
`;
