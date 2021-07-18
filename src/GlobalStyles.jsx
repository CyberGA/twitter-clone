import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
*,
*:before,
*:after {
  box-sizing: border-box;
}

* {
  &::-webkit-scrollbar {
    width: 8px;
  }
  
  /* Track */
  &::-webkit-scrollbar-track {
    background: #f1f1f1; 
  }
   
  /* Handle */
  &::-webkit-scrollbar-thumb {
    background: #ccc; 
  }
  
  /* Handle on hover */
  &::-webkit-scrollbar-thumb:hover {
    background: #555; 
  }
}

html,
body {
  width: 100%;
  height: 100%;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica,
    Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: #fff;
  color: #000;
  font-size: 16px;
}

a{
  text-decoration: none;
}

ul {
  list-style: none;
  padding-inline: 0;
      margin-block: 0;
      margin-inline: 0;
}

button {
  border: none;
outline: none;
}
`;
