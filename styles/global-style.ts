import { createGlobalStyle } from "styled-components";
import { reset } from "styled-reset";

export const GlobalStyle = createGlobalStyle`
  ${reset}

  * {
    box-sizing: border-box;
  }

  html,
  body {
   padding: 0;
   margin: 0;
   font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }


  body { 
    max-width: 520px;
    width: 100%;
    margin: 0 auto;
  }

  ul, ol {
    list-style: none;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`;
