import React from "react";
import styled from "styled-components";
import { __COLORS } from "../layout/Theme";
import MyImage, { AssetType } from "../views/Figure";

const Container = styled.div`
  min-height: 150px;
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
  font-weight: bold;
`;

const Logo = styled(MyImage)`
  width: 82px;
  height: auto;
  margin: 18px 0;
`;

const Link = styled.a``;

const Footer = () => {
  return (
    <Container id={"footer"}>
      <Content>
        <Text>Made with ❤️</Text>
        <Link href={"https://axelra.com"} target="_blank">
          <Logo source={"axelra.png"} assetType={AssetType.LOGO} />
        </Link>
        {/*        <AxelraAddress>Axelra AG</AxelraAddress>
        <AxelraAddress>Bahnhofstrasse 3</AxelraAddress>
        <AxelraAddress>8001 Zürich</AxelraAddress>*/}
      </Content>
    </Container>
  );
};

export default Footer;
