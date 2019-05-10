import { css } from "styled-components";

export const EXTRA_SMALL_DEVICES = (...args: any) => css`
  /* Extra small devices (phones, 600px and down) */
  @media only screen and (max-width: 600px) {
    ${css`
      ${args};
    `};
  }
`;

export const SMALL_DEVICES = (...args: any) => css`
  /* Small devices (portrait tablets and large phones, 600px and up) */
  @media only screen and (min-width: 600px) {
    ${css`
      ${args};
    `};
  }
`;

export const MEDIUM_DEVICES = (...args: any) => css`
  /* Medium devices (landscape tablets, 768px and up) */
  @media only screen and (min-width: 768px) {
    ${css`
      ${args};
    `};
  }
`;

export const LARGE_DEVICES = (...args: any) => css`
  /* Medium devices (landscape tablets, 768px and up) */
  @media only screen and (min-width: 992px) {
    ${css`
      ${args};
    `};
  }
`;

export const EXTRA_LARGE_DEVICES = (...args: any) => css`
  /* Medium devices (landscape tablets, 768px and up) */
  @media only screen and (min-width: 1200px) {
    ${css`
      ${args};
    `};
  }
`;
