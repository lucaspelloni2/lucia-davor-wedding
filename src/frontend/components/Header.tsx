import React from "react";
import styled from "styled-components";
import { __COLORS } from "../layout/Theme";
import MyIcon, { IconTypes } from "../views/Icon";
import { EXTRA_SMALL_DEVICES, SMALL_DEVICES } from "../layout/Mobile";
// @ts-ignore
import Scrollchor from "react-scrollchor";

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

const Desktop = styled.div`
  ${EXTRA_SMALL_DEVICES`
    display: none;
   `};
  display: flex;
`;

const Mobile = styled.div`
  ${EXTRA_SMALL_DEVICES`
        display: flex;
    `};

  ${SMALL_DEVICES`
        display:none;
    `};

  flex: 1;
`;
type Props = {
  stickyFixed: boolean;
  isMobileNavigation: boolean;
  showMobileNavigation: () => void;
};
export const Header = ({
  stickyFixed,
  showMobileNavigation,
  isMobileNavigation
}: Props) => {
  return (
    <Container isActive={stickyFixed}>
      <Desktop>
        <Scrollchor
          to="home"
          style={{ color: "inherit", textDecoration: "none" }}
        >
          <NavLink>Home</NavLink>
        </Scrollchor>
        <Scrollchor
          to="programma"
          style={{ color: "inherit", textDecoration: "none" }}
        >
          <NavLink>Programma</NavLink>
        </Scrollchor>
        <Scrollchor
          to="listanozze"
          style={{ color: "inherit", textDecoration: "none" }}
        >
          <NavLink>Lista nozze</NavLink>
        </Scrollchor>
        <NavLink>Musica</NavLink>
        <NavLink>Gallery (soon)</NavLink>
      </Desktop>
      <Mobile>
        <div
          style={{ marginLeft: "auto" }}
          onClick={() => {
            showMobileNavigation();
          }}
        >
          <MyIcon
            name={IconTypes.BURGER_MENU}
            color={stickyFixed ? __COLORS.PRIMARY : __COLORS.WHITE}
            style={{
              width: 45,
              marginLeft: "auto",
              marginRight: 15,
              cursor: "pointer"
            }}
          />
        </div>
      </Mobile>
    </Container>
  );
};
