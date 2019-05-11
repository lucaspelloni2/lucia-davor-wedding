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
    totalImages: 2
  };

  componentWillUnmount(): void {
    clearInterval(this.state.intervalId);
  }

  timer(): void {
    let selected = (this.state.selected + 1) % this.state.totalImages;
    this.setState({ selected });
  }

  render() {
    return (
      <AwesomeSlider
        infinite={true}
        selected={this.state.selected}
        onFirstMount={() => {
          const intervalId = setInterval(
            this.timer.bind(this),
            this.state.interval
          );
          this.setState({ intervalId });
        }}
      >
        <div data-src="assets/images/1.jpg" />
        <div data-src="assets/images/2.jpg" />
      </AwesomeSlider>
    );
  }
}

export default Gallery;
