import React, { Component } from "react";
import MyImage, { AssetType } from "../views/Figure";
import GoogleMapReact from "google-map-react";

type Props = {
  source: string;
  lat: number;
  lng: number;
};
const Image = ({ source }: Props) => (
  <div>
    <MyImage
      assetType={AssetType.IMAGE}
      source={source}
      style={{ width: 50, height: 50, borderRadius: "50%" }}
    />
  </div>
);

class Map extends Component {
  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 11
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: "82%", width: "100%", borderRadius: 8 }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyAKVNh-hY3u16NrHXFfFLeHRa0undnjSJM" }}
          defaultZoom={15}
          defaultCenter={{
            lat: 46.00507,
            lng: 8.95645
          }}
        >
          <Image lat={46.00356} lng={8.9512} source={"municipio.jpg"} />
          <Image lat={46.00507} lng={8.95645} source={"parcocian.jpeg"} />
          <Image lat={46.00629} lng={8.96463} source={"villa.jpg"} />
        </GoogleMapReact>
      </div>
    );
  }
}

export default Map;
