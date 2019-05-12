import React, { ReactNode } from "react";
import styled from "styled-components";
import { Row } from "../layout/Layout";

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
      <Row>
        <Title>{title}</Title>
      </Row>
      <Row>{children}</Row>
    </Container>
  );
};

export default Section;
