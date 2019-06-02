import React, { CSSProperties, ImgHTMLAttributes } from "react";
import styled from "styled-components";
import {__COLORS} from "../layout/Theme";

const Container = styled.div`
  width: 100%;
  height: 22px;
  background: ${__COLORS.PRIMARY};
  border-radius: 15px;
`;

const Progress = styled.div<{ progress: number }>`
  background: ${__COLORS.TERTRIARY};;
  width: ${props => props.progress}%;
  height: 100%;
  border-radius: 15px;
`;

type Props = {
  progress: number;
  total: number;
};

const ProgressBar = ({ progress, total }: Props) => {
  return (
    <Container>
      <Progress progress={progress} />
    </Container>
  );
};
export default ProgressBar;
