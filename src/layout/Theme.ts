import { CSSProperties } from "react";
import { createGlobalStyle, ThemeProviderProps } from "styled-components";

type Props = {
  googleUrl: string;
};
export const MainTheme: CSSProperties & Props = {
  fontFamily: "Cormorant Garamond, sans-serif",
  googleUrl:
    "https://fonts.googleapis.com/css?family=Cormorant+Garamond:300,400,500,700",
  boxShadow: "0 4px 6px rgba(50,50,93,0.11), 0 1px 3px rgba(0,0,0,0.08)"
  // add more general CSS properties here
};

// Colors Palette https://colorhunt.co/
export enum __COLORS {
  PRIMARY = "#ffb4ac",
  SECONDARY = "#679186",
  TERTRIARY = "#264e70",
  FOURTH = "#ffebd3",
  WHITE = "#fff",
  BLACK = "#000"
}
export enum __GRAY_SCALE {
  _WHITE = "#fff",
  _100 = "#f6f9fc",
  _200 = "#e9ecef",
  _300 = "#dee2e6",
  _400 = "#ced4da",
  _500 = "#adb5bd",
  _600 = "#8898aa",
  _700 = "#525f7f",
  _800 = "#32325d",
  _900 = "#212529",
  _BLACK = "#000"
}

export enum __ALERTS {
  INFO = "#11cdef",
  SUCCESS = "#2ece89",
  WARNING = "#fb6240",
  ERROR = "#f5365c"
}
// You can either import a Google Font: https://fonts.google.com
// Or declare a custom font: https://tinyurl.com/y6omstqa
// eslint-disable-next-line no-unexpected-multiline
export const GlobalStyle = createGlobalStyle<{
  theme: ThemeProviderProps<any>;
}>`
  @import url(${MainTheme.googleUrl});
  html {
    font-family: ${(p: ThemeProviderProps<any>) => p.theme.fontFamily};
  }
  body {
    padding: 0;
    margin: 0;
    border: 0;
    line-height: 1;
    font-weight: inherit;
    font-style: inherit;
    font-size: 100%;
    font-family: inherit;
    outline: none;
  }
  h1, h2, h3, h4, h5, h6, p {
    color: ${__COLORS.PRIMARY};
    font-weight: 100;
    line-height: 1.4;
  }
  
  h1 {
   font-size: calc(22.28px + 2vmin);
  }
  
  p {
    word-break: break-word;
    line-height: 1.4;
  }
  
   .aws-sld__bullets{
      display: none;
   }
   
   .aws-sld__wrapper{
      height: 100vh;
   }
   
   .aws-btn {
    --loader-bar-color: blue;
    --loader-bar-height: 40px;
    }

`;
