import React, { Component } from "react";
import styled from "styled-components";
import { FadeInBack } from "../layout/UI/Animations/BounceIn";
import Gallery from "./Gallery";
import { __COLORS, __GRAY_SCALE } from "../layout/Theme";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  animation: ${FadeInBack} 1s cubic-bezier(0.39, 0.575, 0.565, 1) both;
  height: 100vh;
  position: relative;
`;

const TextContainer = styled.div`
  z-index: 100;
  position: absolute;
  left: 40%;
  top: 40%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`

}
`;

type State = {};
type Props = {};

class MyHome extends Component<Props, State> {
  state = {};

  componentDidMount() {}

  render() {
    return (
      <Container>
  {/*      <TextContainer>
          <Title>Lucia e Davor</Title>
        </TextContainer>*/}
        <Gallery autoPlay={false} />
      </Container>
    );
  }
}

export default MyHome;
