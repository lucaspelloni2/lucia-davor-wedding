import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { __COLORS } from "../layout/Theme";
import MyIcon, { IconTypes } from "../views/Icon";
import { EXTRA_SMALL_DEVICES } from "../layout/Mobile";
import { PICTURES, REDUX, TYPOGRAPHY } from "./Routes";

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const IconContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const NavigationLink = styled(NavLink)`
  &:hover {
    transform: translateY(2px);
  }
  border-radius: 5px;
  transition: 0.25s all;
  position: relative;
  text-decoration: none;
  font-size: 0.875rem;
  font-weight: 500;
  padding: 1rem;
  color: ${__COLORS.PRIMARY}
  background-color: #fff;
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
  margin: 0 10px;
  cursor: pointer;

  &.${props => props.activeClassName} {
    & ${IconContainer} {
      & > svg {
        fill: #fff;
      }
    }
    background-color: ${__COLORS.PRIMARY};
    color: #fff;
  }
`;

const Title = styled.small`
  ${EXTRA_SMALL_DEVICES`
    display: none;
  `};
`;

NavigationLink.defaultProps = {
  activeClassName: "active"
};

const NavigationTabs = () => {
  return (
    <Container>
      <NavigationLink to={TYPOGRAPHY}>
        <IconContainer>
          <MyIcon name={IconTypes.TYPOGRAPHY} color={__COLORS.PRIMARY} />
          <Title>Typography</Title>
        </IconContainer>
      </NavigationLink>

      <NavigationLink to={REDUX}>
        <IconContainer>
          <MyIcon name={IconTypes.REDUX} color={__COLORS.PRIMARY} />
          <Title>Redux</Title>
        </IconContainer>
      </NavigationLink>

      <NavigationLink to={PICTURES}>
        <IconContainer>
          <MyIcon name={IconTypes.PICTURE} color={__COLORS.PRIMARY} />
          <Title>Pictures</Title>
        </IconContainer>
      </NavigationLink>
    </Container>
  );
};

export default NavigationTabs;
