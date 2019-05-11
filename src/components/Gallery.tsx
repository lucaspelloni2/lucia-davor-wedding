import React, { Component } from "react";
import styled from "styled-components";
// @ts-ignore
import AwesomeSlider from "react-awesome-slider";

import "react-awesome-slider/dist/styles.css";

class Gallery extends Component {
  render() {
    return (
      <AwesomeSlider infinite={true}>
        <div data-src="assets/images/1.jpg" />
        <div data-src="assets/images/2.jpg" />
      </AwesomeSlider>
    );
  }
}

export default Gallery;
