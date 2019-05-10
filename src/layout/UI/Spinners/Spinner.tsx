import React from "react";
import styled, { keyframes } from "styled-components";
import { __COLORS } from "../../Theme";

const Animation = keyframes`
    0%, 100% {
        opacity: 1;
    }
    50% {
        opacity: 0.5;
    }
`;

const Grid = styled.div<{ color: __COLORS }>`
  display: inline-block;
  position: relative;
  width: 64px;
  height: 64px;
  & div {
    position: absolute;
    width: 13px;
    height: 13px;
    border-radius: 50%;
    background: ${props => props.color};
    animation: ${Animation} 1.2s linear infinite;
  }
  & div:nth-child(1) {
    top: 6px;
    left: 6px;
    animation-delay: 0s;
  }
  & div:nth-child(2) {
    top: 6px;
    left: 26px;
    animation-delay: -0.4s;
  }
  & div:nth-child(3) {
    top: 6px;
    left: 45px;
    animation-delay: -0.8s;
  }
  & div:nth-child(4) {
    top: 26px;
    left: 6px;
    animation-delay: -0.4s;
  }
  & div:nth-child(5) {
    top: 26px;
    left: 26px;
    animation-delay: -0.8s;
  }
  & div:nth-child(6) {
    top: 26px;
    left: 45px;
    animation-delay: -1.2s;
  }
  & div:nth-child(7) {
    top: 45px;
    left: 6px;
    animation-delay: -0.8s;
  }
  & div:nth-child(8) {
    top: 45px;
    left: 26px;
    animation-delay: -1.2s;
  }
  & div:nth-child(9) {
    top: 45px;
    left: 45px;
    animation-delay: -1.6s;
  }
`;
type Props = {
  color: __COLORS;
};
export const Spinner = ({ color }: Props) => {
  return (
    <Grid color={color}>
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
    </Grid>
  );
};
