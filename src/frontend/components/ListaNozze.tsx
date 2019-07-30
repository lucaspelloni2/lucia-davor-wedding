import React from "react";
import styled from "styled-components";
import { MyPackage } from "./MyPackage";
import { getDomain } from "../helpers/Domain";
import { HTTP_OPTIONS, PROTOCOL_METHOD } from "../helpers/FetchOptions";
import Modal from "../layout/UI/Modal";

const Container = styled.div`
  display: flex;
  flex: 1;
`;

const Packages = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export type Package = {
  _id: string;
  title: string;
  thumbnail: string;
  totalPrice: number; // prezzo totale del pacchetto
  contributors: Contributor[];
  totalPaid: number;
  rest: number;
  median: number;
};

export type Contributor = {
  message: string;
  contribution: number;
  email?: string;
};

type State = {
  packages: Package[];
  error: null | string;
};

type Props = {
  onSelectPackage: (p: Package) => void;
};

class ListaNozze extends React.Component<Props, State> {
  state = {
    packages: [],
    error: null
  };

  async componentDidMount() {
    fetch(`${getDomain()}/api/packages`, HTTP_OPTIONS(PROTOCOL_METHOD.GET))
      .then(r => r.json())
      .then(response => {
        if (response.success) {
          this.setState({ packages: response.data });
        } else {
          this.setState({ error: String(response.error) });
        }
      });
  }

  render() {
    const { packages } = this.state;
    return (
      <Container>
        {packages.length > 0 && (
          <Packages>
            {packages.map((p: Package) => {
              return (
                <MyPackage
                  key={p._id}
                  myPackage={p}
                  onClick={(selectedPackage: Package) => {
                    this.props.onSelectPackage(selectedPackage);
                  }}
                />
              );
            })}
          </Packages>
        )}
      </Container>
    );
  }
}

export default ListaNozze;
