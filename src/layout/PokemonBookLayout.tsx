import { PokemonBookContainer } from "../components/styles/pokemon.styles";
import { Outlet } from "react-router-dom";
import PokemonBookHeader from "./PokemonBookHeader";

const PokemonBookLayout = () => {
  return (
    <PokemonBookContainer>
      <PokemonBookHeader />
      <Outlet />
    </PokemonBookContainer>
  );
};

export default PokemonBookLayout;
