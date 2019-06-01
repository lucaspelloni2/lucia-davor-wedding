import React from "react";
import styled from "styled-components";
import { Package } from "./ListaNozze";
import { EXTRA_SMALL_DEVICES } from "../layout/Mobile";
import { __COLORS } from "../layout/Theme";

const Card = styled.div`
  &:hover {
    transform: scale(1.01);
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.2),
      0 10px 10px -5px rgba(0, 0, 0, 0.08);
  }
  transition: 0.3s ease-in-out all;
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

const InnerCard = styled.div`
  width: 80%;
  background: #fff;
  padding: 12px;
  align-self: center;
  margin-top: -10%;
  border-radius: 5px;
  box-shadow: 0 10px 15px -5px rgba(0, 0, 0, 0.1),
    0 5px 5px -5px rgba(0, 0, 0, 0.01);
  text-align: center;
`;

const OuterCard = styled.div`
  align-self: center;
  width: 80%;
  margin-top: 10px;
`;

const Title = styled.h2`
  font-size: 22px;
  color: ${__COLORS.SECONDARY};
`;

/*
const Line = styled.div`
  margin: 0 40%;
  height: 2px;
  background: ${__COLORS.SECONDARY};
`;
*/

const TotalPrice = styled.h2`
  margin: 0;
  font-size: 22px;
  font-weight: bold;
`;

type Props = {
  myPackage: Package;
};

export const MyPackage = ({ myPackage }: Props) => {
  return (
    <Card>
      <Image src={myPackage.thumbnail} style={{ width: "100%" }} />
      <InnerCard>
        <Title>{myPackage.title}</Title>
      </InnerCard>
      <OuterCard>
        <TotalPrice>{myPackage.totalPrice} CHF</TotalPrice>
      </OuterCard>
    </Card>
  );
};
