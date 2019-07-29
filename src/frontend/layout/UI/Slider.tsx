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

const Span = styled.span`
  font-size: 16px;
`;

type State = {
  value: number;
};

type Props = {
  min: number;
  max: number;
  initialValue: number;
  setValue: (value: number) => void;
};

class MySlider extends Component<Props, State> {
  state = {
    value: 0
  };

  componentDidUpdate(
    prevProps: Readonly<Props>,
    prevState: Readonly<State>,
    snapshot?: any
  ): void {
    if (
      this.props.initialValue !== null &&
      this.props.initialValue !== prevProps.initialValue
    ) {
      this.setState({ value: this.props.initialValue });
    }
  }

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
          <Span>
            Min. <strong>0</strong>
          </Span>
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
          <div style={{ marginLeft: "auto" }}>
            <Span>
              <strong>{this.props.max}</strong> Max.
            </Span>
          </div>
        </Flex>
      </Container>
    );
  }
}

export default MySlider;
