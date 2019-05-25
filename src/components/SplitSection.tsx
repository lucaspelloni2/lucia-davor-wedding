import React, { ReactNode } from "react";
import styled from "styled-components";
import { __COLORS, __GRAY_SCALE } from "../layout/Theme";
import { Parallax } from "react-scroll-parallax/cjs";

const Container = styled.div<{ background: __COLORS | __GRAY_SCALE }>`
  min-height: 230px;
  background: ${props => props.background};
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const Text = styled.h1<{ color?: __COLORS }>`
  text-align: center;
  color: ${props => (props.color ? props.color : __COLORS.TERTRIARY)};
  font-weight: bold;
`;

type Props = {
  background: __COLORS | __GRAY_SCALE;
  color?: __COLORS;
  text: string;
};

const SplitSection = ({ background, text, color }: Props) => {
  return (
    <Container background={background}>
      <Parallax className="splitSection" y={[-30, 30]} tagOuter="h1">
        <Text color={color}>{text}</Text>
      </Parallax>
    </Container>
  );
};

export default SplitSection;
