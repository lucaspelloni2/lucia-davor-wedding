import React from "react";
import styled from "styled-components";
import { __COLORS, __GRAY_SCALE } from "../layout/Theme";
import Map from "./Map";
import { EXTRA_SMALL_DEVICES } from "../layout/Mobile";
import MyImage, { AssetType } from "../views/Figure";
// @ts-ignore

const Container = styled.div`
  display: flex;
  flex: 1;
  ${EXTRA_SMALL_DEVICES`
    flex-direction: column;
  `};
`;

const TimeLineContainer = styled.div`
  flex: 1;
`;

const TimeLine = styled.div`
  position: relative;
  height: 500px;
  width: 100%;
  border-left: 2px solid ${__GRAY_SCALE._300};
  margin-left: 2px;
  ${EXTRA_SMALL_DEVICES`
    margin-left: 15px;
  `};
`;

const Ball = styled.div<{ top: number }>`
  &:before {
    content: "";
    width: 10px;
    border-radius: 50%;
    height: 10px;
    background: ${__COLORS.SECONDARY};
    margin-left: -6px;
    position: absolute;
    margin-top: 1.5em;
    top: ${props => props.top}%;
  }
`;

const BallContent = styled.div<{ top: number }>`
  color: ${__COLORS.TERTRIARY};
  background: ${__GRAY_SCALE._100};
  top: ${props => props.top}%;
  position: absolute;
  margin-top: 3px;
  margin-left: 3em;
  display: flex;
  align-items: center;
  border: 1px solid ${__GRAY_SCALE._300};
  border-radius: 4px;
`;

const Image = styled(MyImage)<{ top: number }>`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  top: ${props => props.top}%;
  position: absolute;
  margin-top: 10px;
  margin-left: -20px;
`;

const BallTime = styled.div`
  font-size: calc(0.4rem + 2vmin);
  font-weight: bold;
  padding: 0 1em;
`;

const BallDescription = styled.div`
  font-weight: 100;
  padding: 1em;
  border-left: 1px solid ${__COLORS.SECONDARY};
  font-size: 18px;
`;

const MapContainer = styled.div`
  flex: 1;
`;

const SubTitle = styled.h3`
  color: ${__COLORS.SECONDARY};
  font-weight: 100;
  font-size: calc(0.4rem + 2vmin);
`;
type Props = {};

export const Programma = () => {
  return (
    <Container>
      <TimeLineContainer>
        <SubTitle>Svolgimento</SubTitle>
        <TimeLine>
          <Ball top={0}>
            <Image
              assetType={AssetType.IMAGE}
              source={"municipio.jpg"}
              top={0}
            />
            <BallContent top={0}>
              <BallTime>14:00</BallTime>
              <BallDescription>Ritrovo al municipio di Lugano</BallDescription>
            </BallContent>
          </Ball>

          <Ball top={20}>
            <Image
              assetType={AssetType.IMAGE}
              source={"parcocian.jpeg"}
              top={20}
            />
            <BallContent top={20}>
              <BallTime>16:00</BallTime>
              <BallDescription>
                Foto al Parco Ciani se è bel tempo
              </BallDescription>
            </BallContent>
          </Ball>

          <Ball top={40}>
            <Image assetType={AssetType.IMAGE} source={"villa.jpg"} top={40} />
            <BallContent top={40}>
              <BallTime>17:00</BallTime>
              <BallDescription>
                Big Aperitivo con tantissimo alcol
              </BallDescription>
            </BallContent>
          </Ball>

          <Ball top={60}>
            <Image assetType={AssetType.IMAGE} source={"villa.jpg"} top={60} />
            <BallContent top={60}>
              <BallTime>18:00</BallTime>
              <BallDescription>
                Spostamento alla Villa Castagnola
              </BallDescription>
            </BallContent>
          </Ball>

          <Ball top={80}>
            <Image assetType={AssetType.IMAGE} source={"villa.jpg"} top={80} />
            <BallContent top={80}>
              <BallTime>19:00</BallTime>
              <BallDescription>Cena più discorso accompagnato</BallDescription>
            </BallContent>
          </Ball>
        </TimeLine>
      </TimeLineContainer>
      <MapContainer>
        <SubTitle>Dove?</SubTitle>
        <Map />
      </MapContainer>
    </Container>
  );
};
