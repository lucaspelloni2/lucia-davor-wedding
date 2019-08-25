import React from "react";
import styled from "styled-components";
import { __COLORS, __GRAY_SCALE } from "../layout/Theme";
import Map from "./Map";
import { EXTRA_SMALL_DEVICES } from "../layout/Mobile";
import MyImage, { AssetType } from "../views/Figure";
import { Itinerario } from "./Itinerario";
import { LuciaDavorMessage } from "../views/LuciaDavorMessage";
// @ts-ignore
const Parent = styled.div`
  display: flex;
  flex-direction: column;
`;

const Container = styled.div`
  display: flex;
  flex: 1;

  ${EXTRA_SMALL_DEVICES`
    flex-direction: column;
  `};
`;

const TimeLineContainer = styled.div`
  flex: 1;

  margin-right: 20px;
`;

const MapContainer = styled.div`
  flex: 1;
`;

const SubTitle = styled.h3`
  color: ${__COLORS.SECONDARY};
  font-weight: 100;
  font-size: calc(0.4rem + 2vmin);
`;

const Destination = styled.div``;

const Title = styled.h3`
  font-weight: bold;
  color: ${__COLORS.TERTRIARY};
  margin-bottom: 0;
`;

const Ul = styled.ul`
  margin-top: 5px;
  padding-left: 30px;
`;

type Props = {};

export const Programma = () => {
  return (
    <Parent>
      <LuciaDavorMessage>
        <Destination>
          <Title>Come raggiungerci?</Title>
          <Ul>
            <li>
              <strong>Con i mezzi pubblici</strong>
            </li>
            Per arrivare a Villa Castagnola, prendete{" "}
            <a
              style={{ color: __COLORS.TERTRIARY, fontWeight: "bold" }}
              href="http://www.tplsa.ch/15/2/newa-linee-orari-linea-2.html"
              target="_blank"
            >
              il Bus numero 2{" "}
            </a>
            fino alla fermata Cassarate, Monte Bré.
            <li>
              <strong>Con l’auto</strong>
            </li>
            Vi consigliamo di posteggiare la vostra auto presso Villa
            Castagnola. In seguito, da e per l’Ex Municipio, abbiamo organizzato
            per voi i trasferimenti, per cui non avrete più bisogno della
            macchina.
          </Ul>
        </Destination>
      </LuciaDavorMessage>
      <Container>
        <TimeLineContainer>
          <SubTitle>Svolgimento</SubTitle>
          <Itinerario />
        </TimeLineContainer>
        <MapContainer>
          <SubTitle>Dove?</SubTitle>
          <Map />
        </MapContainer>
      </Container>
    </Parent>
  );
};
