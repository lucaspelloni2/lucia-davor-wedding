import React from "react";
import styled from "styled-components";
import { __COLORS } from "../layout/Theme";

const Container = styled.div<{ isActive: boolean }>`
  height: 80px;
  width: 100%;
  background: ${props => (props.isActive ? __COLORS.WHITE : "transparent")};
  position: absolute;
  box-shadow: ${props =>
    props.isActive ? "rgba(0, 0, 0, 0.1) 0 0 20px" : "none"};
  transition: 0.3s ease-in-out all;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${props => (props.isActive ? __COLORS.PRIMARY : __COLORS.WHITE)};
`;
type Props = {
  stickyFixed: boolean;
};
export const Header = ({ stickyFixed }: Props) => {
  return <Container isActive={stickyFixed}>Header</Container>;
};
