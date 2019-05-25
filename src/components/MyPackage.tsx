import React from "react";
import styled from "styled-components";
import { Package } from "./ListaNozze";
import MyImage from "../views/Figure";
import { EXTRA_SMALL_DEVICES } from "../layout/Mobile";

const Card = styled.div`
  flex: 1 0 26%; /* explanation below */
  display: flex;
  margin: 20px 20px 20px 0;
  flex-direction: column;
  min-height: 500px;
  max-width: 380px;
  min-width: 250px;
  position: relative;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
    0 10px 10px -5px rgba(0, 0, 0, 0.04);
  border-radius: 10px;
  ${EXTRA_SMALL_DEVICES`
    flex: 1 0 30%; 
    `};
`;

const Image = styled.img`
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
`;

type Props = {
  myPackage: Package;
};

export const MyPackage = ({ myPackage }: Props) => {
  return (
    <Card>
      <Image src={myPackage.thumbnail} style={{ width: "100%" }} />
      <h1>{myPackage.title}</h1>
    </Card>
  );
};
