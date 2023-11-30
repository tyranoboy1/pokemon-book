import React from "react";
import { PokemonBookContainer } from "../components/styles/pokemon.styles";
import { Outlet } from "react-router-dom";

const PokemonBookLayout = () => {
  return (
    <PokemonBookContainer>
      <Outlet />
    </PokemonBookContainer>
  );
};

export default PokemonBookLayout;
