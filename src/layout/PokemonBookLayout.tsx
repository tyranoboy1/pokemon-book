import { PokemonBookContainer } from "../components/styles/pokemon.styles";
import { Outlet } from "react-router-dom";
import PokemonBookHeader from "./PokemonBookHeader";
import PokemonBookFooter from "./PokemonBookFooter";

const PokemonBookLayout = () => {
  return (
    <PokemonBookContainer>
      <PokemonBookHeader />
      <Outlet />
      <PokemonBookFooter />
    </PokemonBookContainer>
  );
};

export default PokemonBookLayout;
