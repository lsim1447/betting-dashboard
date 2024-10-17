import { createGlobalStyle } from 'styled-components';

// This could be extended or to use ThemeProvider
export const GlobalStyle = createGlobalStyle`
  :root {
    --blue-color: #007bff;
    --blue-darker-color: #0056b3;
    --gray-color: #cccccc;
    --gray-light-color: #dddddd;
    --gray-ligher-color: #e2e6ea;
    --gray-darkest-color: #333333;
    --green-color: #28a745;
    --green-darker-color: #218838;
    --red-color: #dc3545;
    --red-darker-color: #c82333;
    --white-color: #ffffff;
  }

  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }
`;
