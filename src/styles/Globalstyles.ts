import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
    ${reset}
  @font-face {
    font-family: "Noto Sans KR";
    font-weight: 300;
    src: url('/font/NotoSans-Light.ttf') format("truetype");
  }

  @font-face {
    font-family: "Noto Sans KR";
    font-weight: 400;
    src: url('/font/NotoSans-Regular.ttf') format("truetype");
  }

  @font-face {
    font-family: "Noto Sans KR";
    font-weight: 500;
    src: url('/fonts/NotoSans-Medium.ttf') format("truetype");
  }
  @font-face {
    font-family: "Pop";
    font-weight: 500;
    src: url('/fonts/ONEMobilePOP.ttf') format("truetype");
  }

  @font-face {
    font-family: "Noto Sans KR";
    font-weight: 700;
    src: url('/fonts/NotoSans-Bold.ttf') format("truetype");
  }
  @font-face {
    font-family: "Galmuri";
    font-weight: 700;
    src: url('/fonts/Galmuri9.ttf') format("truetype");
  }
  @font-face {
    font-family: "Galmuri14";
    font-weight: 700;
    src: url('/fonts/Galmuri14.ttf') format("truetype");
  }
    a{
        text-decoration: none;
        color: inherit;
    }
    *{
        box-sizing: border-box;
    }
    html, body, div, span, h1, h2, h3, h4, h5, h6, p, 
    a, dl, dt, dd, ol, ul, li, form, label, table{
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 10px;
    }
    body{
        line-height: 1;
        font-family: 'Noto Sans KR', sans-serif;
        vertical-align: baseline;
    }
    ol, ul{
        list-style: none;
    }
    button {
        border: 0;
        background: transparent;
        cursor: pointer;
    }
    input {
        margin: 0;        
        padding: 0;       
        border: none;     
        line-height: normal; 
        color: inherit;      
        font-family: inherit; 
        outline: none;    
        box-sizing: border-box;
}
    
`;

export default GlobalStyles;
