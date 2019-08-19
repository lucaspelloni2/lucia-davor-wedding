import React, { CSSProperties, ImgHTMLAttributes } from "react";
import styled from "styled-components";

export enum AssetType {
  IMAGE,
  LOGO
  // add more attributes here based on the assets folder under /public
}

const Img = styled.img``;

type Props = {
  source: string;
  assetType: AssetType;
  otherProps?: ImgHTMLAttributes<any>;
  style?: CSSProperties;
  className?: string;
};

const getPrefix = (assetType: AssetType) => {
  switch (assetType) {
    case AssetType.IMAGE:
      return "./../assets/images";
    case AssetType.LOGO:
      return "./../assets/logos";
    default:
      return "./../assets";
  }
};

const MyImage = ({ source, style, assetType, ...otherProps }: Props) => {
  let src = `${getPrefix(assetType)}/${source}`;
  return <Img style={style} src={src} {...otherProps} />;
};

export default MyImage;
