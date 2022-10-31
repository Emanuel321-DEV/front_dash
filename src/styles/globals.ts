import { createGlobalStyle } from "styled-components"; 
import { lighten } from "polished";

export const GlobalStyle = createGlobalStyle`
  
  *{
    margin: 0;
    border: 0;
    box-sizing: border-box;
  }  

  html, body, textarea, input, button {
    font-family: 'Roboto', sans-serif;
  }

  body {
    background-color: 'gray';  
  }


  li {
    list-style: none;
  }

`
