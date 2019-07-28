import React from "react";
import styled from "styled-components";
import { __COLORS } from "../layout/Theme";

const Container = styled.div<{ progress: number }>`
  width: 100%;
  height: 22px;
  opacity: ${props => (props.progress === 0 ? 0.1 : 1)};
  background: ${__COLORS.TERTRIARY};
  border-radius: 15px;
`;

const Progress = styled.div<{ progress: number }>`
  background: ${__COLORS.PRIMARY};
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
    <Container progress={progress}>
      <Progress progress={progress}>
        <LabelContainer>{paid !== 0 && <Label>{paid}</Label>}</LabelContainer>
      </Progress>
    </Container>
  );
};
export default ProgressBar;
