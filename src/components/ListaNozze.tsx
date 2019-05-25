import React from "react";
import styled from "styled-components";
import { MyPackage } from "./MyPackage";

const Container = styled.div`
  display: flex;
  flex: 1;
`;

const Packages = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export type Package = {
  id: number;
  title: string;
  thumbnail: string;
  totalPrice: number; // prezzo totale del pacchetto
  totalPaid: number; // quanto è stato pagato
  contributors: number;
};

const getFakeData = async (): Promise<Package[]> => {
  return [
    {
      id: 1,
      thumbnail:
        "https://images.pexels.com/photos/731217/pexels-photo-731217.jpeg?auto=compress&cs=tinysrgb&h=650&w=940%20940w,%20https://images.pexels.com/photos/731217/pexels-photo-731217.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260%201260w,%20https://images.pexels.com/photos/731217/pexels-photo-731217.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940%201880w,%20https://images.pexels.com/photos/731217/pexels-photo-731217.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260%202520w",
      title: "Volo per le Maldive",
      totalPrice: 1280,
      totalPaid: 300,
      contributors: 2
    },
    {
      id: 2,
      thumbnail:
        "https://images.pexels.com/photos/872831/pexels-photo-872831.jpeg?auto=compress&cs=tinysrgb&h=650&w=940 940w, https://images.pexels.com/photos/872831/pexels-photo-872831.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260 1260w, https://images.pexels.com/photos/872831/pexels-photo-872831.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940 1880w, https://images.pexels.com/photos/872831/pexels-photo-872831.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260 2520w",
      title: "Cena Romantica per due alle Maldive",
      totalPrice: 240,
      totalPaid: 100,
      contributors: 1
    },
    {
      id: 3,
      thumbnail:
        "https://images.pexels.com/photos/1450354/pexels-photo-1450354.jpeg?auto=compress&cs=tinysrgb&h=650&w=940 940w, https://images.pexels.com/photos/1450354/pexels-photo-1450354.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260 1260w, https://images.pexels.com/photos/1450354/pexels-photo-1450354.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940 1880w, https://images.pexels.com/photos/1450354/pexels-photo-1450354.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260 2520w",
      title: "Gita Panoramica sopra l'isola",
      totalPrice: 400,
      totalPaid: 380,
      contributors: 4
    },
    {
      id: 4,
      thumbnail:
        "https://images.pexels.com/photos/3188/love-romantic-bath-candlelight.jpg?auto=compress&cs=tinysrgb&h=650&w=940 940w, https://images.pexels.com/photos/3188/love-romantic-bath-candlelight.jpg?auto=compress&cs=tinysrgb&h=750&w=1260 1260w, https://images.pexels.com/photos/3188/love-romantic-bath-candlelight.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940 1880w, https://images.pexels.com/photos/3188/love-romantic-bath-candlelight.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260 2520w",
      title: "Massaggio Rilassante",
      totalPrice: 150,
      totalPaid: 0,
      contributors: 0
    }
  ];
};

type State = {
  packages: Package[];
};

class ListaNozze extends React.Component<{}, State> {
  state = {
    packages: []
  };

  async componentDidMount() {
    const packages = await getFakeData();
    this.setState({ packages });
  }

  render() {
    const { packages } = this.state;
    return (
      <Container>
        {packages.length > 0 && (
          <Packages>
            {packages.map((p: Package) => {
              return <MyPackage myPackage={p} />;
            })}
          </Packages>
        )}
      </Container>
    );
  }
}

export default ListaNozze;
