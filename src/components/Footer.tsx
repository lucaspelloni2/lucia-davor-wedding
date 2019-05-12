import React, { ReactNode } from "react";
import styled from "styled-components";
import { __COLORS } from "../layout/Theme";

const Container = styled.div`
  min-height: 150px;
  background: ${__COLORS.SECONDARY};
`;

const Footer = () => {
  return <Container id={"footer"} />;
};

export default Footer;
