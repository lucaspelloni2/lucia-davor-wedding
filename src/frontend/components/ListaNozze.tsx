import React from "react";
import styled from "styled-components";
import { MyPackage } from "./MyPackage";
import { connect } from "react-redux";
import { RootState } from "../reducers/store";
import { Dispatch } from "redux";
import { fetchPackages } from "../reducers/packages/actions";
import { __COLORS, __GRAY_SCALE } from "../layout/Theme";
import {
  EXTRA_LARGE_DEVICES,
  EXTRA_SMALL_DEVICES,
  LARGE_DEVICES,
  MEDIUM_DEVICES,
  SMALL_DEVICES
} from "../layout/Mobile";
import { LuciaDavorMessage } from "../views/LuciaDavorMessage";

const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`;

const Packages = styled.div`
  display: grid;
  grid-auto-rows: 1fr;
  grid-gap: 2rem;
  grid-template-columns: repeat(3, 1fr);

  ${LARGE_DEVICES`
    grid-template-columns: repeat(3, 1fr);
   `};
  ${MEDIUM_DEVICES`
    grid-template-columns: repeat(2, 1fr);
    `};

  ${EXTRA_SMALL_DEVICES`
    grid-template-columns: repeat(1, 1fr);
  `};
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
        {error && <h3>Something went wrong.</h3>}
        <LuciaDavorMessage>
          Il regalo più bello per noi è quello di poter festeggiare il nostro
          matrimonio circondati dall’affetto di tutte le persone che ci stanno
          più a cuore! Tuttavia, nel caso aveste il piacere di farci un regalo
          di nozze, qui sotto troverete alcune proposte per contribuire alla
          nostra luna di miele. Qualora aveste un’idea per un regalo che non si
          trovasse nella lista, potete tranquillamente versare l’importo al
          nostro conto con la descrizione del regalo o accompagnarci
          personalmente ad acquistarlo!
        </LuciaDavorMessage>

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
