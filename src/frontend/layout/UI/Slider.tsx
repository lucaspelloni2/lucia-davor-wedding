import React, { Component } from "react";
import styled from "styled-components";
import Slider from "react-rangeslider";

const Container = styled.div`
  display: flex;
  align-items: center;
`;

const Flex = styled.div<{ number: number }>`
  flex: ${props => props.number};
`;

type State = {
  value: number;
};

type Props = {
  min: number;
  max: number;
  setValue: (value: number) => void;
};

class MySlider extends Component<Props, State> {
  state = {
    value: 10
  };

  handleChangeStart = () => {
    console.log("Change event started");
  };

  handleChange = (value: number) => {
    this.setState({
      value: value
    });
  };

  handleChangeComplete = () => {
    this.props.setValue(this.state.value);
  };

  render() {
    const { value } = this.state;
    return (
      <Container>
        <Flex number={1}>
          <span>Min. 0</span>
        </Flex>
        <Flex number={10}>
          <Slider
            min={this.props.min}
            max={this.props.max}
            value={value}
            onChangeStart={this.handleChangeStart}
            onChange={this.handleChange}
            onChangeComplete={this.handleChangeComplete}
          />
        </Flex>
        <Flex number={1} style={{ display: "flex" }}>
          <div style={{ marginLeft: "auto" }}>{this.props.max} Total.</div>
        </Flex>
      </Container>
    );
  }
}

export default MySlider;
