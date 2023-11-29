import {
  PokemonHeader,
  PokemonHeaderImg,
} from "../components/styles/pokemon.styles";
// import headerImg from "../assets/img/pokemon-header.jpg";

const Header = () => {
  return (
    <PokemonHeader>
      <PokemonHeaderImg src={""} alt="pokemon-header" />
    </PokemonHeader>
  );
};

export default Header;
