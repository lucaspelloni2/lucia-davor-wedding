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
import ListaNozze, { Package } from "./components/ListaNozze";
import { IconTypes } from "./views/Icon";
import Modal from "./layout/UI/Modal";

const Container = styled.div``;

type StickyType = {
  status: number;
};

type State = {
  stickyFixed: boolean;
  selectedPackage: null | Package;
  isOpen: boolean;
};

class App extends Component<{}, State> {
  state = {
    stickyFixed: false,
    selectedPackage: null,
    isOpen: false
  };

  updatePackage(selectedPackage: Package) {
    this.setState({ selectedPackage, isOpen: true });
  }
  render() {
    return (
      <Container>
        <Modal
          isOpen={this.state.isOpen}
          selectedPackage={this.state.selectedPackage}
          close={() => {
            this.setState({ isOpen: false });
          }}
        />

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
        <SplitSection
          color={__COLORS.TERTRIARY}
          background={__COLORS.PRIMARY}
          text={"18 Ottobre 2019"}
          iconName={IconTypes.WEDDING_DAY}
        />
        <Fade left>
          <Section id={"programma"} title={"Programma"}>
            <Programma />
          </Section>
        </Fade>
        <SplitSection
          background={__COLORS.TERTRIARY}
          color={__COLORS.WHITE}
          text={"Cosa ci piacerebbe"}
          iconName={IconTypes.WEDDING_LIST}
        />
        <Fade right delay={30}>
          <Section id={"listanozze"} title={"Lista Nozze"}>
            <ListaNozze
              onSelectPackage={(selectedPackage: Package) => {
                this.updatePackage(selectedPackage);
              }}
            />
          </Section>
        </Fade>
        <Footer />
      </Container>
    );
  }
}

export default App;
