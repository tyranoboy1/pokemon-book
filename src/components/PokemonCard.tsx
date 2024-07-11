import {
  Card,
  DetailButton,
  PokemonImg,
  PokemonNameBox,
  PokemonTagBox,
  PokemonTypeBox,
  PokemonTypeContainer,
  PokemonTypeImg,
  Text,
} from "./styles/pokemon.styles";
import { useNavigate } from "react-router-dom";
import { IPokemonInfo } from "./interface/pokemon.interface";

import { getTypeRenderImg } from "../utils/pokemonUtil";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const PokemonCard = (props: IPokemonInfo) => {
  const { pokemonName } = props;

  const fetchPokemon = (pokemonName: string) => {
    return axios
      .get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
      .then((res) => res.data);
  };

  const fetchSpeciesPokemon = (pokemonName: string) => {
    return axios
      .get(`https://pokeapi.co/api/v2/pokemon-species/${pokemonName}`)
      .then((res) => res.data);
  };
  const {
    data: pokemonInfoData,
    isLoading: isPokemonLoading,
    isError: isPokemonError,
  } = useQuery({
    queryKey: ["pokemon", pokemonName],
    queryFn: () => fetchPokemon(pokemonName),
  });

  const {
    data: pokemonSpeciesData,
    isLoading: isSpeciesLoading,
    isError: isSpeciesError,
  } = useQuery({
    queryKey: ["pokemonSpecies", pokemonName],
    queryFn: () => fetchSpeciesPokemon(pokemonName),
  });

  const navigate = useNavigate();

  return (
    <Card key={pokemonInfoData?.id}>
      <PokemonTagBox>
        <Text
          fontSize="14px"
          fontWeight="700"
          fontFamily="Galmuri"
        >{`PN.${pokemonInfoData?.id}`}</Text>
        <PokemonTypeContainer>
          {pokemonInfoData?.types?.map((item: any) => (
            <PokemonTypeBox key={item.slot}>
              <PokemonTypeImg
                src={getTypeRenderImg(item.type.name)}
                alt="pokemonImg"
              ></PokemonTypeImg>
            </PokemonTypeBox>
          ))}
        </PokemonTypeContainer>
      </PokemonTagBox>
      <PokemonImg
        src={
          pokemonInfoData?.sprites?.versions?.["generation-v"]?.["black-white"]
            .animated?.front_default || pokemonInfoData?.sprites?.front_default
        }
        alt="pokemonImg"
      ></PokemonImg>
      <PokemonNameBox>
        <Text fontSize="20px" fontWeight="700" fontFamily="Galmuri14">
          {pokemonInfoData?.name}
        </Text>
      </PokemonNameBox>
      <DetailButton onClick={() => navigate("/pokemon-detail")}>
        <img
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/poke-ball.png"
          alt="포켓볼"
        />
      </DetailButton>
    </Card>
  );
};

export default PokemonCard;
