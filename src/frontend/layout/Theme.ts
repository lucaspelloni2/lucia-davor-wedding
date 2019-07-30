import { CSSProperties } from "react";
import { createGlobalStyle, ThemeProviderProps } from "styled-components";
import { getAlphaColor } from "../helpers/AlphaColor";

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
  ERROR = "#ff5858",
  SUCCESS = "#009975",
  BLACK = "#000"
}

export const __COLORS_ARRAY = [
  __COLORS.PRIMARY,
  __COLORS.SECONDARY,
  __COLORS.TERTRIARY
];
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
  
  figure {
    margin:0;
  }
  
   .aws-sld__bullets{
      display: none;
   }
   
   .aws-sld__wrapper{
      height: 100vh;
   }
    
    .aws-sld__content > div {
         z-index: 66;
         text-align: center;
         width: 100%;
    }
    
    .aws-sld__content>img {
        opacity: 0.65;
    }
    
    .sticky-nav-active {
      background: ${__COLORS.WHITE};
    }
    
    .aws-sld__controls__arrow-left, .aws-sld__controls__arrow-right {
      &:before, &:after {
        background: ${__COLORS.WHITE};
      }
    }
    
    
    /**
    Slider
     */
     /**
* Rangeslider
*/
.rangeslider {
  margin: 20px 0;
  position: relative;
  background: ${getAlphaColor(0.3, __COLORS.TERTRIARY)};
  -ms-touch-action: none;
  touch-action: none;
}
.rangeslider,
.rangeslider .rangeslider__fill {
  display: block;
}
.rangeslider .rangeslider__handle {
  background: #fff;
  border: 1px solid ${__COLORS.PRIMARY}
  cursor: pointer;
  display: inline-block;
  position: absolute;
}
.rangeslider .rangeslider__handle .rangeslider__active {
  opacity: 1;
}
.rangeslider .rangeslider__handle-tooltip {
  width: 40px;
  height: 40px;
  text-align: center;
  position: absolute;
  background-color: rgba(0, 0, 0, 0.8);
  font-weight: normal;
  font-size: 14px;
  transition: all 100ms ease-in;
  border-radius: 4px;
  display: inline-block;
  color: white;
  left: 50%;
  transform: translate3d(-50%, 0, 0);
}
.rangeslider .rangeslider__handle-tooltip span {
  margin-top: 12px;
  display: inline-block;
  line-height: 100%;
}
.rangeslider .rangeslider__handle-tooltip:after {
  content: ' ';
  position: absolute;
  width: 0;
  height: 0;
}
/**
* Rangeslider - Horizontal slider
*/
.rangeslider-horizontal {
  height: 16px;
  border-radius: 10px;
}
.rangeslider-horizontal .rangeslider__fill {
  height: 100%;
  background-color: ${__COLORS.PRIMARY};
     border-radius: 7px;
  top: 0;
}
.rangeslider-horizontal .rangeslider__handle {
  width: 21px;
  height: 21px;

    border-radius: 50%;
  top: 50%;
  outline: none;
  transform: translate3d(-50%, -50%, 0);
}

.rangeslider-horizontal .rangeslider__handle-tooltip {
  top: -55px;
}
.rangeslider-horizontal .rangeslider__handle-tooltip:after {
  border-left: 8px solid transparent;
  border-right: 8px solid transparent;
  border-top: 8px solid rgba(0, 0, 0, 0.8);
  left: 50%;
  bottom: -8px;
  transform: translate3d(-50%, 0, 0);
}
/**
* Rangeslider - Vertical slider
*/
.rangeslider-vertical {
  margin: 20px auto;
  height: 150px;
  max-width: 10px;
  background-color: transparent;
}
.rangeslider-vertical .rangeslider__fill,
.rangeslider-vertical .rangeslider__handle {
  position: absolute;
}
.rangeslider-vertical .rangeslider__fill {
  width: 100%;
  background-color: #7cb342;
  box-shadow: none;
  bottom: 0;
}
.rangeslider-vertical .rangeslider__handle {
  width: 30px;
  height: 10px;
  left: -10px;
  box-shadow: none;
}
.rangeslider-vertical .rangeslider__handle-tooltip {
  left: -100%;
  top: 50%;
  transform: translate3d(-50%, -50%, 0);
}
.rangeslider-vertical .rangeslider__handle-tooltip:after {
  border-top: 8px solid transparent;
  border-bottom: 8px solid transparent;
  border-left: 8px solid rgba(0, 0, 0, 0.8);
  left: 100%;
  top: 12px;
}
/**
* Rangeslider - Reverse
*/
.rangeslider-reverse.rangeslider-horizontal .rangeslider__fill {
  right: 0;
}
.rangeslider-reverse.rangeslider-vertical .rangeslider__fill {
  top: 0;
  bottom: inherit;
}
/**
* Rangeslider - Labels
*/
.rangeslider__labels {
  position: relative;
}
.rangeslider-vertical .rangeslider__labels {
  position: relative;
  list-style-type: none;
  margin: 0 0 0 24px;
  padding: 0;
  text-align: left;
  width: 250px;
  height: 100%;
  left: 10px;
}
.rangeslider-vertical .rangeslider__labels .rangeslider__label-item {
  position: absolute;
  transform: translate3d(0, -50%, 0);
}
.rangeslider-vertical .rangeslider__labels .rangeslider__label-item::before {
  content: '';
  width: 10px;
  height: 2px;
  background: black;
  position: absolute;
  left: -14px;
  top: 50%;
  transform: translateY(-50%);
  z-index: -1;
}
.rangeslider__labels .rangeslider__label-item {
  position: absolute;
  font-size: 14px;
  cursor: pointer;
  display: inline-block;
  top: 10px;
  transform: translate3d(-50%, 0, 0);
}

    

    

`;
