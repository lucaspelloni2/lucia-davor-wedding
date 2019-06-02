import React, { Component } from "react";
import styled from "styled-components";
import { __ALERTS, __COLORS, __GRAY_SCALE } from "../layout/Theme";

const Container = styled.div``;

type State = {};
type Props = {};

const Colors = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Color = styled.div<{ background: __COLORS | __GRAY_SCALE | __ALERTS }>`
  &:first-of-type {
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
  }
  &:last-of-type {
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
  }
  padding: 1.2rem;
  flex: 1;
  background: ${props => props.background};
`;

class Typography extends Component<Props, State> {
  state = {};

  componentDidMount() {}

  render() {
    return (
      <Container>
        <h1>Heading H1</h1>
        <h2>Heading H2</h2>
        <h3>Heading H3</h3>
        <h4>Heading H4</h4>
        <h5>Heading H5</h5>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries,{" "}
        </p>
        <h2>Colors Palette </h2>
        <Colors>
          <Color background={__COLORS.PRIMARY} />
          <Color background={__COLORS.SECONDARY} />
          <Color background={__COLORS.TERTRIARY} />
          <Color background={__COLORS.FOURTH} />
        </Colors>
        <h2>Gray Scale</h2>
        <Colors>
          <Color background={__GRAY_SCALE._100} />
          <Color background={__GRAY_SCALE._200} />
          <Color background={__GRAY_SCALE._300} />
          <Color background={__GRAY_SCALE._400} />
          <Color background={__GRAY_SCALE._500} />
          <Color background={__GRAY_SCALE._600} />
          <Color background={__GRAY_SCALE._700} />
          <Color background={__GRAY_SCALE._800} />
          <Color background={__GRAY_SCALE._900} />
        </Colors>

      </Container>
    );
  }
}

export default Typography;
