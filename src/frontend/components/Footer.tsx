import React from "react";
import styled from "styled-components";
import { __COLORS } from "../layout/Theme";
import MyImage, { AssetType } from "../views/Figure";

const Container = styled.div`
  min-height: 250px;
  background: ${__COLORS.TERTRIARY};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Text = styled.span`
  color: ${__COLORS.WHITE};
  font-size: 17px;
  font-weight: 100;
`;

const Logo = styled(MyImage)`
  width: 82px;
  height: auto;
  margin: 18px 0;
`;

const AxelraAddress = styled(Text)`
  margin: 0;
  font-size: 14px;
  font-style: italic;
  line-height: 1.4;
`;

const Footer = () => {
  return (
    <Container id={"footer"}>
      <Content>
        <Text>Developed and Designed by</Text>
        <Logo source={"axelra.png"} assetType={AssetType.LOGO} />
        <AxelraAddress>Axelra AG</AxelraAddress>
        <AxelraAddress>Bahnhofstrasse 3</AxelraAddress>
        <AxelraAddress>8001 Zürich</AxelraAddress>
      </Content>
    </Container>
  );
};

export default Footer;
