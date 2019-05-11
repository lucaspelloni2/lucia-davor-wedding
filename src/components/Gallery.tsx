import React, { Component } from "react";
import styled from "styled-components";
// @ts-ignore
import AwesomeSlider from "react-awesome-slider";

import "react-awesome-slider/dist/styles.css";

type State = {
  selected: number;
  intervalId: number;
  interval: number;
  totalImages: number;
};
class Gallery extends Component<{}, State> {
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
          this.startTimer();
        }}
        onTransitionEnd={(ref: any) => {
          let index = ref.currentIndex;
          this.setState({ selected: index });
        }}
      >
        <div data-src="assets/images/1.jpg" />
        <div data-src="assets/images/2.jpg" />
        <div data-src="assets/images/3.jpg" />
      </AwesomeSlider>
    );
  }
}

export default Gallery;
