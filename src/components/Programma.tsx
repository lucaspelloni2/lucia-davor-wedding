import React from "react";
import styled from "styled-components";
import { __COLORS, __GRAY_SCALE } from "../layout/Theme";
// @ts-ignore

const Container = styled.div`
  display: flex;
  flex: 1;
  margin-top: -2.5em;
`;

const TimeLineContainer = styled.div`
  flex: 4;
`;

const TimeLine = styled.div`
  position: relative;
  height: 500px;
  width: 2px;
  border-radius: 8px;
  background: ${__GRAY_SCALE._300};
  margin-left: 2px;
`;

const Ball = styled.div<{ top: number }>`
  &:before {
    content: "";
    width: 12px;
    border-radius: 50%;
    height: 12px;
    background: ${__GRAY_SCALE._500};
    margin-left: -5px;
    position: absolute;
    margin-top: 1.5em;
    top: ${props => props.top}%;
  }
`;

const MapContainer = styled.div`
  flex: 8;
`;

const SubTitle = styled.h3`
  color: ${__COLORS.SECONDARY};
  font-weight: 100;
`;
type Props = {};

export const Programma = () => {
  return (
    <Container>
      <TimeLineContainer>
        <SubTitle>Quando?</SubTitle>
        <TimeLine>
          <Ball top={0} />

          <Ball top={20} />

          <Ball top={40} />

          <Ball top={60} />

          <Ball top={80} />
        </TimeLine>
      </TimeLineContainer>
      <MapContainer>
        <SubTitle>Dove?</SubTitle>
      </MapContainer>
    </Container>
  );
};
