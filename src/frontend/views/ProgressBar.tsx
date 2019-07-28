import React, { CSSProperties, ImgHTMLAttributes } from "react";
import styled from "styled-components";
import { __COLORS } from "../layout/Theme";

const Container = styled.div`
  width: 100%;
  height: 22px;
  background: ${__COLORS.PRIMARY};
  border-radius: 15px;
`;

const Progress = styled.div<{ progress: number }>`
  background: ${__COLORS.TERTRIARY};
  width: ${props => props.progress}%;
  height: 100%;
  border-radius: 15px;
`;

const LabelContainer = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: flex-end;
  height: 100%;
`;

const Label = styled.span`
  color: ${__COLORS.TERTRIARY};
  margin-bottom: -38px;
  font-size: 14px;
  letter-spacing: -0.5px;
`;

type Props = {
  progress: number;
  paid: number;
  total: number;
};

const ProgressBar = ({ progress, paid, total }: Props) => {
  return (
    <Container>
      <Progress progress={progress}>
        <LabelContainer>
          <Label>{paid}</Label>
        </LabelContainer>
      </Progress>
    </Container>
  );
};
export default ProgressBar;
