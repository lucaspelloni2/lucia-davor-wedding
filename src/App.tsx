import React from "react";
import styled from "styled-components";
import MyHome from "./components/MyHome";
import Programma from "./components/Programma";

const Container = styled.div`

 
`;

const App: React.FC = () => {
  return (
    <Container>
      <MyHome />
      <Programma />
    </Container>
  );
};

export default App;
