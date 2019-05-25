import React from "react";
import styled from "styled-components";
import { Package } from "./ListaNozze";

const Container = styled.div``;

type Props = {
  myPackage: Package;
};

export const MyPackage = ({ myPackage }: Props) => {
  return (
    <Container>
      <h1>{myPackage.title}</h1>
    </Container>
  );
};
