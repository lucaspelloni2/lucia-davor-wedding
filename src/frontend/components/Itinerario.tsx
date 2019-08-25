import React from "react";
import styled from "styled-components";
import { __COLORS, __GRAY_SCALE } from "../layout/Theme";
import { getAlphaColor } from "../helpers/AlphaColor";
import MyImage, { AssetType } from "../views/Figure";
import MyIcon, { IconTypes } from "../views/Icon";
import { EXTRA_SMALL_DEVICES } from "../layout/Mobile";

export type Itinerary = {
  startTime: string;
  description: string;
  picture: string;
  address: string;
};

let data: Itinerary[] = [
  {
    startTime: "14:30",
    description: "Ritrovo a Villa Castagnola",
    picture: "villa.jpg",
    address:
      "https://www.google.com/maps/place/Grand+Hotel+Villa+Castagnola/@46.0065052,8.9696358,15z/data=!4m8!3m7!1s0x0:0xc5ac377e40a188c6!5m2!4m1!1i2!8m2!3d46.0065052!4d8.9696358"
  },
  {
    startTime: "15:00",
    description: "Partenza per l’Ex municipio di Castagnola",
    picture: "municipio.jpg",
    address:
      "https://www.google.com/maps/place/Ex+Municipio+Castagnola/@46.0012546,8.9758981,17z/data=!3m1!4b1!4m5!3m4!1s0x47842dfd22077e1d:0xcc260d37c20b18dd!8m2!3d46.0012509!4d8.9780868"
  },
  {
    startTime: "15:30",
    description: "Inizio della cerimonia civile",
    picture: "municipio.jpg",
    address: ""
  },
  {
    startTime: "16:30",
    description:
      "Trasferimento per Villa Castagnola, incluso giro per la città di Lugano",
    picture: "parcocian.jpeg",
    address:
      "https://www.google.com/maps/place/Parco+Ciani/@46.0052122,8.9558402,17z/data=!3m1!4b1!4m5!3m4!1s0x47842d8c95d06a1d:0xa3e1c8073068b40d!8m2!3d46.0052085!4d8.9580289"
  },
  {
    startTime: "> 17:00",
    description: "Aperitivo e cena presso Villa Castagnola",
    picture: "villa.jpg",
    address: ""
  }
];
const Container = styled.div`
  border-radius: 6px;
`;

const Row = styled.div`
  display: flex;
  height: 90px;
  color: ${__COLORS.TERTRIARY};
`;

const HourContainer = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-start;
  align-items: center;
  ${EXTRA_SMALL_DEVICES`
    flex: 2;
  `};
`;
const Hour = styled.span`
  font-size: 20px;
  font-weight: 100;
`;

const TextContainer = styled.div`
  display: flex;
  flex: 5;
  padding-left: 40px;
  justify-content: center;
  flex-direction: column;
`;

const Title = styled.span`
  font-weight: bold;
`;

const Directions = styled.div`
  display: flex;
  align-items: center;
  margin-top: 4px;
`;

const Border = styled.div`
  position: relative;
  background: ${getAlphaColor(0.2, __COLORS.TERTRIARY)};
  width: 2px;
  height: 100%;
`;
const SmallBall = styled.div<{ first: boolean }>`
  position: absolute;
  background: rgb(212, 220, 226);
  width: 8px;
  height: 8px;
  top: ${props => (props.first ? 0 : "inherit")};
  left: -3.3px;
  bottom: 0;
  border-radius: 50%;
`;

const Image = styled(MyImage)`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  position: absolute;
  top: 50%;
  margin-top: -20px;
  left: -19px;
`;

const Get = styled.a`
  color: ${__GRAY_SCALE._700};
  font-size: 14px;
  text-decoration: none;
  font-style: italic;
`;
type Props = {
  itinerary: Itinerary;
  index: number;
};

const Item = ({ itinerary, index }: Props) => {
  return (
    <Row>
      <HourContainer>
        <Hour>{itinerary.startTime}</Hour>
      </HourContainer>
      <Border>
        {(index === 0 || index === data.length - 1) && (
          <SmallBall first={index === 0} />
        )}
        <Image source={itinerary.picture} assetType={AssetType.IMAGE} />
      </Border>
      <TextContainer>
        <Title>{itinerary.description}</Title>
        {itinerary.address && (
          <Directions>
            <MyIcon
              name={IconTypes.ARROW}
              color={__GRAY_SCALE._500}
              style={{ width: 30, height: 20 }}
            />
            <Get href={itinerary.address} target="_blank">
              Guarda l'indirizzo esatto
            </Get>
          </Directions>
        )}
      </TextContainer>
    </Row>
  );
};

export const Itinerario = () => {
  return (
    <Container>
      {data.map((i: Itinerary, index) => {
        return <Item itinerary={i} key={index} index={index} />;
      })}
    </Container>
  );
};
