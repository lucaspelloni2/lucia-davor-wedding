import React, {ReactNode} from "react";
import styled from "styled-components";
import { __COLORS, __GRAY_SCALE } from "../layout/Theme";
import { EXTRA_SMALL_DEVICES } from "../layout/Mobile";

const SpanContainer = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid ${__GRAY_SCALE._200};
  padding: 1rem;
  border-radius: 7px;
  margin-bottom: 30px;
  box-shadow: rgba(0, 0, 0, 0.1) 0 0 20px;
  ${EXTRA_SMALL_DEVICES`
    flex-direction: column;
    text-align: center;
  `};
`;

const Avatar = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  margin: 0 15px;
  ${EXTRA_SMALL_DEVICES`
    margin-bottom: 15px;
  `};
`;

const Span = styled.div`
  color: ${__COLORS.TERTRIARY};
  line-height: 1.4;
`;

type Props = {
    children: ReactNode;
};
export const LuciaDavorMessage = ({ children }: Props) => {
  return (
    <SpanContainer>
      <Avatar src="assets/images/avatar.jpg" />
      <Span>{children}</Span>
    </SpanContainer>
  );
};
