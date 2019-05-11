import React from "react";
import styled from "styled-components";

export const DESKTOP_WIDTH = 1160;
export const SMALL_LAPTOPS_WIDTH = 970;
export const TABLETS_WIDTH = 750;
export const SMALL_WIDTH = 768;

export const Row = styled.div`
  display: flex;
  max-width: ${DESKTOP_WIDTH}px;
  padding-left: 20px;
  padding-right: 20px;
  margin: 0 auto;
`;
