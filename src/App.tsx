import React, { Component } from "react";
import styled from "styled-components";
import MyHome from "./components/MyHome";
import Programma from "./components/Programma";
import Sticky from "react-stickynode";
import { Header } from "./components/Header";
import Section from "./components/Section";

const Container = styled.div``;

type StickyType = {
  status: number;
};

type State = {
  stickyFixed: boolean;
};

class App extends Component {
  state = {
    stickyFixed: false
  };
  render() {
    return (
      <Container>
        <Sticky
          top={0}
          innerZ={9999}
          onStateChange={(code: StickyType) => {
            if (code.status === 0) {
              this.setState({ stickyFixed: false });
            }
            if (code.status === 2) {
              this.setState({ stickyFixed: true });
            }
          }}
        >
          <Header stickyFixed={this.state.stickyFixed} />
        </Sticky>
        <MyHome />
        <Section id={"programma"} title={"Programma"}>
          Programma Contenuto
        </Section>
      </Container>
    );
  }
}

export default App;
