import React, { CSSProperties } from "react";
import Lottie from "react-lottie";

type Props = {
  loop?: boolean;
  autoplay?: boolean;
  animationData: any;
  style?: CSSProperties;
  height: number;
  width: number;
  isPaused?: boolean;
  onComplete: () => void;
};

class LottieManager extends React.Component<Props, {}> {
  render() {
    const defaultOptions = {
      loop: this.props.loop && true,
      autoplay: this.props.autoplay || true,
      animationData: this.props.animationData,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice"
      }
    };

    return (
      <div>
        <Lottie
          speed={0.5}
          options={defaultOptions}
          height={this.props.height}
          width={this.props.width}
          isPaused={this.props.isPaused || false}
          eventListeners={[
            {
              eventName: "complete",
              callback: () => {
                this.props.onComplete();
              }
            }
          ]}
        />
      </div>
    );
  }
}

export default LottieManager;
