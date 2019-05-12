import React, { ReactNode } from "react";
import styled from "styled-components";
import { __COLORS, __GRAY_SCALE } from "../layout/Theme";
import { Parallax } from "react-scroll-parallax/cjs";

const Container = styled.div<{ background: __COLORS | __GRAY_SCALE }>`
  min-height: 150px;
  background: ${props => props.background};
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const Text = styled.h1`
  text-align: center;
  color: ${__COLORS.TERTRIARY};
  font-weight: bold;
`;

type Props = {
  background: __COLORS | __GRAY_SCALE;
  text: string;
};

const SplitSection = ({ background, text }: Props) => {
  return (
    <Container background={background}>
      <Parallax className="splitSection" y={[-20, 20]} tagOuter="h1">
        <Text>{text}</Text>
      </Parallax>
    </Container>
  );
};

export default SplitSection;
