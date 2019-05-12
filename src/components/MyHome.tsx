import React, { Component } from "react";
import styled from "styled-components";
import { FadeInBack } from "../layout/UI/Animations/BounceIn";
import Gallery from "./Gallery";
import { Header } from "./Header";
import Sticky from "react-stickynode";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  animation: ${FadeInBack} 1s cubic-bezier(0.39, 0.575, 0.565, 1) both;
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

const Title = styled.h1``;

type State = {};
type Props = {};

class MyHome extends Component<Props, State> {
  state = {};

  componentDidMount() {}

  render() {
    return (
      <Container>
        <Gallery autoPlay={true} />
      </Container>
    );
  }
}

export default MyHome;
