import React, { Component } from "react";
import styled from "styled-components";
import { FadeInBack } from "../layout/UI/Animations/BounceIn";
import Gallery from "./Gallery";


const Container = styled.div`
  display: flex;
  align-items: center;

 // animation: {FadeInBack} 0.6s cubic-bezier(0.39, 0.575, 0.565, 1) both;
`;

type State = {};
type Props = {};

class MyHome extends Component<Props, State> {
  state = {};

  componentDidMount() {}

  render() {
    return (
      <div>
        <Gallery />
      </div>
    );
  }
}

export default MyHome;
