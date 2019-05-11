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

const NavLink = styled.div`
  &:hover {
    background-size: 4px 50px;
  }
  background: linear-gradient(
      to bottom,
      ${__COLORS.TERTRIARY} 0%,
      ${__COLORS.TERTRIARY} 100%
    )
    repeat-x 0 100%;
  background-size: 0px 0px;
  font-weight: 100;
  padding: 10px 17px;
  transition: 0.5s ease-in-out all;
  letter-spacing: 0.5px;
  cursor: pointer;
  text-transform: uppercase;
`;
type Props = {
  stickyFixed: boolean;
};
export const Header = ({ stickyFixed }: Props) => {
  return (
    <Container isActive={stickyFixed}>
      <NavLink>Home</NavLink>
      <NavLink>Programma</NavLink>
      <NavLink>Lista nozze</NavLink>
      <NavLink>Musica</NavLink>
      <NavLink>About us</NavLink>
      <NavLink>Gallery (soon)</NavLink>
    </Container>
  );
};
