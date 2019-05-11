import React, { Component } from "react";
import styled from "styled-components";
// @ts-ignore
import AwesomeSlider from "react-awesome-slider";

import "react-awesome-slider/dist/styles.css";
import { __COLORS } from "../layout/Theme";

const Content = styled.div`
  z-index: 100;
`;

const Title = styled.h1`
  color: ${__COLORS.PRIMARY};
  font-size: calc(6rem + 2vmin);
  margin-top: -2rem;
  margin-bottom: 0;
  font-weight: bold;
`;

const SubTitle = styled.h3`
  color: ${__COLORS.FOURTH};
  font-size: calc(2rem + 2vmin);
  margin-top: 0;
`;

type Props = {
  autoPlay: boolean;
};
type State = {
  selected: number;
  intervalId: number;
  interval: number;
  totalImages: number;
};

class Gallery extends Component<Props, State> {
  state = {
    selected: 0,
    intervalId: 0,
    interval: 5000,
    totalImages: 3
  };

  componentWillUnmount(): void {
    clearInterval(this.state.intervalId);
  }

  timer(): void {
    let selected = (this.state.selected + 1) % this.state.totalImages;
    this.setState({ selected });
  }

  startTimer(): void {
    clearInterval(this.state.intervalId);
    const intervalId = setInterval(this.timer.bind(this), this.state.interval);
    this.setState({ intervalId });
  }

  render() {
    return (
      <AwesomeSlider
        infinite={true}
        selected={this.state.selected}
        onFirstMount={() => {
          if (this.props.autoPlay) {
            this.startTimer();
          }
        }}
        onTransitionEnd={(ref: any) => {
          if (this.props.autoPlay) {
            let index = ref.currentIndex;
            this.setState({ selected: index });
          }
        }}
      >
        <div data-src="assets/images/2.jpg">
          <Content>
            <Title>Lucia e Davor</Title>
            <SubTitle>Lorem Ipsum Lorem Lorem Ipsum Lorem Lorem</SubTitle>
          </Content>
        </div>
        <div data-src="assets/images/1.jpg" />
        <div data-src="assets/images/3.jpg" />
      </AwesomeSlider>
    );
  }
}

export default Gallery;
