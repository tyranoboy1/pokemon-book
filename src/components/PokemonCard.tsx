import {
  Card,
  PokemonImg,
  PokemonNameBox,
  PokemonTagBox,
  Text,
} from "./styles/pokemon.styles";
interface IPokemonCardProps {
  pokemonData: IPokemonData[];
}
interface IPokemonData {
  id: number;
  name: string;
  image: string;
}

const PokemonCard = (props: IPokemonCardProps) => {
  const { pokemonData } = props;
  return (
    <>
      {pokemonData.map((pokemon) => (
        <Card key={pokemon.id}>
          <PokemonTagBox>
            <Text fontSize="20px" fontWeight="600">{`PN ${pokemon.id}`}</Text>
          </PokemonTagBox>
          <PokemonImg src={pokemon.image} alt={pokemon.name}></PokemonImg>
          <PokemonNameBox>
            <Text fontSize="30px" fontWeight="600">
              {pokemon.name}
            </Text>
          </PokemonNameBox>
        </Card>
      ))}
    </>
  );
};

export default PokemonCard;
