import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: #f3f3f5;
    font-size: 14px;
    color: #fff;
    font-family: sans-serif;
  }
`;
