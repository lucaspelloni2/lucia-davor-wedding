import React, { ReactNode } from "react";
import styled from "styled-components";
import { __COLORS } from "../Theme";
import { getAlphaColor } from "../../helpers/AlphaColor";
import { Package } from "../../components/ListaNozze";

const Parent = styled.div<{ isOpen: boolean }>`
  position: fixed;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10000;
  opacity: ${props => (props.isOpen ? 1 : 0)};
  visibility: ${props => (props.isOpen ? "visible" : "hidden")};
  transition: 0.4s ease-in-out all;
  background: ${getAlphaColor(0.25, __COLORS.TERTRIARY)};
`;
const Container = styled.div`
  min-height: 400px;
  max-height: 80%;
  min-width: 600px;
  border-radius: 8px;
  background: ${__COLORS.WHITE};
  color: ${__COLORS.TERTRIARY};
  padding: 20px 40px;
  display: flex;
  flex-direction: column;
  z-index: 600;
  max-width: 50%;
`;

const Header = styled.div`
  flex: 1;
  display: flex;
  min-height: 60px;
`;

const Title = styled.h1`
  font-size: 22px;
  font-weight: bold;
  letter-spacing: 1px;
`;

const Close = styled.div`
  margin-left: auto;
  margin-right: 12px;
  margin-top: 13px;
`;

const Body = styled.div`
  flex: 4;
  overflow: scroll;
`;

const Footer = styled.div`
  flex: 1;
  padding: 5px 0 25px 0;
`;
type Props = {
  isOpen: boolean;
  close: () => void;
  selectedPackage: Package | null;
  children: ReactNode;
};

const Modal = (props: Props) => {
  return (
    <Parent isOpen={props.isOpen}>
      <Container>
        {props.selectedPackage !== null ? (
          <>
            <Header>
              <Title>
                Pachetto <strong>{props.selectedPackage.title}</strong>
              </Title>
              <Close>
                <div
                  onClick={() => {
                    props.close();
                  }}
                >
                  X
                </div>
              </Close>
            </Header>
            <Body>{props.children}</Body>
            <Footer>footer</Footer>
          </>
        ) : null}
      </Container>
    </Parent>
  );
};

export default Modal;
