import React, { Component } from "react";
import styled from "styled-components";
import MyHome from "./components/MyHome";
import { Programma } from "./components/Programma";
import Sticky from "react-stickynode";
import { Header } from "./components/Header";
import Section from "./components/Section";
// @ts-ignore
import Fade from "react-reveal/Fade";
import Footer from "./components/Footer";
import SplitSection from "./components/SplitSection";
import { __COLORS } from "./layout/Theme";
import ListaNozze from "./components/ListaNozze";

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
        <SplitSection background={__COLORS.PRIMARY} text={"18 Ottobre 2019"} />
        <Fade left>
          <Section id={"programma"} title={"Programma"}>
            <Programma />
          </Section>
        </Fade>
        <SplitSection
          background={__COLORS.TERTRIARY}
          color={__COLORS.WHITE}
          text={"Lista nozze"}
        />
        <Fade right delay={30}>
          <Section id={"listanozze"} title={"Lista Nozze"}>
            <ListaNozze />
          </Section>
        </Fade>
        <Footer />
      </Container>
    );
  }
}

export default App;
