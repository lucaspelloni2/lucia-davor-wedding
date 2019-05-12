import React, { ReactNode } from "react";
import styled from "styled-components";
import { Row } from "../layout/Layout";
import { Parallax } from "react-scroll-parallax/cjs";

const Container = styled.div`
  min-height: 300px;
  margin: 2em 0;
`;

const Title = styled.h1`
  font-size: calc(2.5rem + 2vmin);
`;

type Props = {
  title: string;
  children: ReactNode;
  id: string;
};

const Section = ({ id, title, children }: Props) => {
  return (
    <Container id={id}>
      <Parallax className="section" y={[-20, 30]} tagOuter="div">
        <Row>
          <Title>{title}</Title>
        </Row>
      </Parallax>
      <Row>{children}</Row>
    </Container>
  );
};

export default Section;
