import React from "react";
import { PokemonBookContainer } from "../components/styles/pokemon.styles";
import { Outlet } from "react-router-dom";
import Header from "./Header";

const PokemonBookLayout = () => {
  return (
    <PokemonBookContainer>
      <Header />
      <Outlet />
    </PokemonBookContainer>
  );
};

export default PokemonBookLayout;
