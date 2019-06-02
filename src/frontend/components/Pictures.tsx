import React, { Component } from "react";
import styled from "styled-components";
import MyImage, { AssetType } from "../views/Figure";

const Container = styled.div``;

type State = {};
type Props = {};

class Pictures extends Component<Props, State> {
  state = {};

  componentDidMount() {}

  render() {
    return (
      <Container>
        <h2>Render images with custom React Components:)</h2>
        <MyImage
          source={"lion.jpg"}
          assetType={AssetType.IMAGE}
          style={{ width: "100%", borderRadius: 5 }}
        />
      </Container>
    );
  }
}

export default Pictures;
