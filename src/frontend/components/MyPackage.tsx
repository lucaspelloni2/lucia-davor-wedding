import React from "react";
import styled from "styled-components";
import { Contributor, Package } from "./ListaNozze";
import { EXTRA_SMALL_DEVICES } from "../layout/Mobile";
import { __COLORS, __COLORS_ARRAY, __GRAY_SCALE } from "../layout/Theme";
import MyIcon, { IconTypes } from "../views/Icon";
import ProgressBar from "../views/ProgressBar";

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

const Button = styled.div`
  padding: 11px 20px;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 100;
  color: ${__COLORS.WHITE};
  background: ${__COLORS.TERTRIARY};
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 35px 0;
  align-items: center;
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
  width: 85%;
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

const Label = styled.label`
  color: ${__GRAY_SCALE._600};
  font-size: 15px;
  margin-bottom: auto;
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
  onClick: (p: Package) => void;
};

export const MyPackage = ({ myPackage, onClick }: Props) => {
  let totalPaid = 0;
  myPackage.contributors.forEach((c: Contributor) => {
    totalPaid += c.contribution;
  });
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
            <Label>Totale Regalato</Label>
            <Value>{totalPaid === 0 ? "0 CHF" : totalPaid + " CHF"}</Value>
          </LabelContainer>
          <LabelContainer>
            <Label>Prezzo Totale</Label>
            <Value>{myPackage.totalPrice} CHF</Value>
          </LabelContainer>

          <LabelContainer>
            <Label>Partecipanti</Label>
            {myPackage.contributors.length === 0 ? (
              <Value>-</Value>
            ) : (
              <Value>
                {myPackage.contributors.map((c: Contributor, i: number) => {
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
            )}
          </LabelContainer>
        </Labels>
        <ProgressBar
          paid={totalPaid}
          total={myPackage.totalPrice}
          progress={(totalPaid / myPackage.totalPrice) * 100}
        />
        <ButtonContainer>
          <Button
            onClick={() => {
              onClick(myPackage);
            }}
          >
            Contribuisci al regalo!
          </Button>
        </ButtonContainer>
      </OuterCard>
    </Card>
  );
};
