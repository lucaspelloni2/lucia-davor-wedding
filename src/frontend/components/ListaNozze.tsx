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
  contributors: Contributor[];
};

export type Contributor = {
  name: string;
  contribution: number;
  email?: string;
};

const getFakeData = async (): Promise<Package[]> => {
  return [
    {
      id: 1,
      thumbnail:
        "https://images.pexels.com/photos/2007401/pexels-photo-2007401.jpeg?auto=compress&cs=tinysrgb&h=650&w=940 940w, https://images.pexels.com/photos/2007401/pexels-photo-2007401.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260 1260w, https://images.pexels.com/photos/2007401/pexels-photo-2007401.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940 1880w, https://images.pexels.com/photos/2007401/pexels-photo-2007401.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260 2520w",
      title: "Volo per le Maldive",
      totalPrice: 1280,
      contributors: [{ name: "lucas", contribution: 300 }]
    },
    {
      id: 2,
      thumbnail:
        "https://images.pexels.com/photos/872831/pexels-photo-872831.jpeg?auto=compress&cs=tinysrgb&h=650&w=940 940w, https://images.pexels.com/photos/872831/pexels-photo-872831.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260 1260w, https://images.pexels.com/photos/872831/pexels-photo-872831.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940 1880w, https://images.pexels.com/photos/872831/pexels-photo-872831.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260 2520w",
      title: "Cena Romantica per due",
      totalPrice: 240,
      contributors: [
        { name: "lucas", contribution: 10 },
        { name: "clara", email: "clara.pelloni@gmail.com", contribution: 90 }
      ]
    },
    {
      id: 3,
      thumbnail:
        "https://images.pexels.com/photos/1450354/pexels-photo-1450354.jpeg?auto=compress&cs=tinysrgb&h=650&w=940 940w, https://images.pexels.com/photos/1450354/pexels-photo-1450354.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260 1260w, https://images.pexels.com/photos/1450354/pexels-photo-1450354.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940 1880w, https://images.pexels.com/photos/1450354/pexels-photo-1450354.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260 2520w",
      title: "Gita Panoramica sopra l'isola",
      totalPrice: 400,
      contributors: [
        { name: "david", contribution: 80 },
        { name: "julia", email: "julia.pelloni@gmail.com", contribution: 300 }
      ]
    },
    {
      id: 4,
      thumbnail:
        "https://images.pexels.com/photos/1531672/pexels-photo-1531672.jpeg?auto=compress&cs=tinysrgb&h=650&w=940 940w, https://images.pexels.com/photos/1531672/pexels-photo-1531672.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260 1260w, https://images.pexels.com/photos/1531672/pexels-photo-1531672.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940 1880w, https://images.pexels.com/photos/1531672/pexels-photo-1531672.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260 2520w",
      title: "Massaggio Rilassante",
      totalPrice: 150,
      contributors: []
    },
    {
      id: 5,
      thumbnail:
        "https://images.pexels.com/photos/1450354/pexels-photo-1450354.jpeg?auto=compress&cs=tinysrgb&h=650&w=940 940w, https://images.pexels.com/photos/1450354/pexels-photo-1450354.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260 1260w, https://images.pexels.com/photos/1450354/pexels-photo-1450354.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940 1880w, https://images.pexels.com/photos/1450354/pexels-photo-1450354.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260 2520w",
      title: "Lorem Ipsum Lorem Ipsum ",
      totalPrice: 400,
      contributors: [
        { name: "david", contribution: 300 },
        { name: "julia", email: "julia.pelloni@gmail.com", contribution: 80 }
      ]
    },
    {
      id: 6,
      thumbnail:
        "https://images.pexels.com/photos/1450363/pexels-photo-1450363.jpeg?auto=compress&cs=tinysrgb&h=650&w=940 940w, https://images.pexels.com/photos/1450363/pexels-photo-1450363.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260 1260w, https://images.pexels.com/photos/1450363/pexels-photo-1450363.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940 1880w, https://images.pexels.com/photos/1450363/pexels-photo-1450363.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260 2520w",
      title: "Lorem Ipsum Lorem",
      totalPrice: 600,
      contributors: [
        { name: "Viola", contribution: 20 },
        { name: "lucas", contribution: 130 }
      ]
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
