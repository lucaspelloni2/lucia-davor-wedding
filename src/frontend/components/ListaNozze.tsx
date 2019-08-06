import React from "react";
import styled from "styled-components";
import { MyPackage } from "./MyPackage";
import { connect } from "react-redux";
import { RootState } from "../reducers/store";
import { Dispatch } from "redux";
import { fetchPackages } from "../reducers/packages/actions";

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
  soldout: boolean;
};

export type Contributor = {
  message: string;
  contribution: number;
  email?: string;
};

type Props = {
  onSelectPackage: (p: Package) => void;
  fetchPackages: () => any;
  packages: Package[];
  error: string | undefined;
  loading: boolean;
};

class ListaNozze extends React.Component<Props, {}> {
  async componentDidMount() {
    this.props.fetchPackages();
  }

  render() {
    const { packages, error } = this.props;
    return (
      <Container>
        {error ? <h1>Bug</h1> : null}
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

export default connect(
  (state: RootState) => ({
    packages: state.packages.packages,
    loading: state.packages.loading,
    error: state.packages.error
  }),
  (dispatch: Dispatch) => {
    return {
      fetchPackages: () => {
        dispatch(fetchPackages());
      }
    };
  }
)(ListaNozze);
