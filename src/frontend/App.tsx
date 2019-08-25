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
import MediaQuery from "react-responsive";
import { DESKTOP_WIDTH } from "./layout/Layout";
import MobileNavigation from "./components/MobileNavigation";

const Container = styled.div``;

type StickyType = {
  status: number;
};

type State = {
  stickyFixed: boolean;
  selectedPackage: null | Package;
  isOpen: boolean;
  isMobileNavigation: boolean;
};

class App extends Component<{}, State> {
  state = {
    stickyFixed: false,
    selectedPackage: null,
    isOpen: false,
    isMobileNavigation: false
  };

  updatePackage(selectedPackage: Package) {
    this.setState({ selectedPackage, isOpen: true });
  }
  toggleMobileNavigation() {
    const isMobileNavigation = !this.state.isMobileNavigation;
    this.setState({ isMobileNavigation });
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
        <MobileNavigation
          isMobileNavigation={this.state.isMobileNavigation}
          showMobileNavigation={() => {
            this.toggleMobileNavigation();
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
          <Header
            stickyFixed={this.state.stickyFixed}
            isMobileNavigation={this.state.isMobileNavigation}
            showMobileNavigation={() => {
              this.toggleMobileNavigation();
            }}
          />
        </Sticky>
        <MyHome id="home" />
        <SplitSection
          color={__COLORS.TERTRIARY}
          background={__COLORS.PRIMARY}
          text={"18 Ottobre 2019"}
          iconName={IconTypes.WEDDING_DAY}
        />
        <Fade left>
          <Section id="programma" title={"Programma"}>
            <Programma />
          </Section>
        </Fade>
        <SplitSection
          background={__COLORS.TERTRIARY}
          color={__COLORS.WHITE}
          text={"Cosa ci piacerebbe"}
          iconName={IconTypes.WEDDING_LIST}
        />
        <MediaQuery minWidth={DESKTOP_WIDTH}>
          {matches => {
            if (matches) {
              return (
                <Fade right>
                  <Section id="listanozze" title={"Lista Nozze"}>
                    <ListaNozze
                      onSelectPackage={(selectedPackage: Package) => {
                        this.updatePackage(selectedPackage);
                      }}
                    />
                  </Section>
                </Fade>
              );
            } else {
              return (
                <Section id="listanozze" title={"Lista Nozze"}>
                  <ListaNozze
                    onSelectPackage={(selectedPackage: Package) => {
                      this.updatePackage(selectedPackage);
                    }}
                  />
                </Section>
              );
            }
          }}
        </MediaQuery>
        <Fade right delay={30} />
        <Footer />
      </Container>
    );
  }
}

export default App;
