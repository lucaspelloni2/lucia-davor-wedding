import React, { CSSProperties } from "react";
import styled from "styled-components";
import { __COLORS, __GRAY_SCALE } from "../layout/Theme";
import { Parallax } from "react-scroll-parallax/cjs";
import MyIcon, { IconTypes } from "../views/Icon";

const Container = styled.div<{ background: __COLORS | __GRAY_SCALE }>`
  min-height: 300px;
  background: ${props => props.background};
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const Text = styled.h1<{ color: __COLORS }>`
  text-align: center;
  color: ${props => props.color};
  font-weight: bold;
`;

const Element = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Icon = styled(MyIcon)`
  position: absolute;
  opacity: 0.08;
`;

type Props = {
  background: __COLORS | __GRAY_SCALE;
  color: __COLORS;
  iconName: IconTypes;
  text: string;
  iconWidth?: number;
};

const SplitSection = ({
  background,
  text,
  iconName,
  color,
  iconWidth
}: Props) => {
  return (
    <Container background={background}>
      <Parallax className="splitSection" y={[-20, 20]} tagOuter="div">
        <Element>
          <Text color={color}>{text}</Text>
          <Icon
            name={iconName}
            color={color}
            style={{ width: iconWidth || 300 }}
          />
        </Element>
      </Parallax>
    </Container>
  );
};

export default SplitSection;
