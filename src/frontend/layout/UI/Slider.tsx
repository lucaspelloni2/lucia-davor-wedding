import React, { Component } from "react";
import Slider from "react-rangeslider";


type State = {
  value: number;
};

class MySlider extends Component<{}, State> {
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
    console.log("Change event completed");
  };

  render() {
    const { value } = this.state;
    return (
      <div>
        <Slider
          min={0}
          max={100}
          value={value}
          onChangeStart={this.handleChangeStart}
          onChange={this.handleChange}
          onChangeComplete={this.handleChangeComplete}
        />
        <div className="value">{value}</div>
      </div>
    );
  }
}

export default MySlider;
