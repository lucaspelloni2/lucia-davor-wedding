import React from "react";
import styled from "styled-components";
import { Package } from "./ListaNozze";
import { EXTRA_SMALL_DEVICES } from "../layout/Mobile";
import { __COLORS, __COLORS_ARRAY, __GRAY_SCALE } from "../layout/Theme";
import MyIcon, { IconTypes } from "../views/Icon";

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
  position: relative;
`;

const OuterCard = styled.div`
  align-self: center;
  width: 90%;
  margin-top: 20px;
`;

const Title = styled.h2`
  font-size: 22px;
  color: ${__COLORS.TERTRIARY};
  letter-spacing: -0.5px;
  font-weight: bold;
  margin-top: -15px;
  margin-bottom: 8px;
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
  font-size: 32px;
  text-align: center;
`;

const Label = styled.label`
  color: ${__GRAY_SCALE._600};
  font-size: 15px;
`;

const LabelContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Labels = styled.div`
  display: flex;
`;

const Value = styled.h4`
  font-size: 17px;
  color: ${__COLORS.TERTRIARY};
  margin-top: 5px;
`;

type Props = {
  myPackage: Package;
};

export const MyPackage = ({ myPackage }: Props) => {
  return (
    <Card>
      <Image src={myPackage.thumbnail} style={{ width: "100%" }} />
      <InnerCard>
        <MyIcon
          name={IconTypes.GIFT}
          style={{ width: 75, height: 75, marginTop: -8 }}
          color={__COLORS.TERTRIARY}
        />
        <Title>{myPackage.title}</Title>
      </InnerCard>
      <OuterCard>
        <Labels>
          <LabelContainer>
            <Label>Prezzo Totale</Label>
            <Value>{myPackage.totalPrice} CHF</Value>
          </LabelContainer>
          <LabelContainer>
            <Label>Totale Regalato</Label>
            <Value>
              {myPackage.totalPaid === 0 ? "-" : myPackage.totalPaid + " CHF"}
            </Value>
          </LabelContainer>
          <LabelContainer>
            <Label>Partecipanti</Label>
            <Value>
              {new Array(myPackage.contributors).fill(0).map((c, i) => {
                const color = __COLORS_ARRAY[i % __COLORS_ARRAY.length];
                return (
                  <MyIcon
                    key={i}
                    name={IconTypes.USER}
                    color={color}
                    style={{ width: 18 }}
                  />
                );
              })}
            </Value>
          </LabelContainer>
        </Labels>
      </OuterCard>
    </Card>
  );
};
