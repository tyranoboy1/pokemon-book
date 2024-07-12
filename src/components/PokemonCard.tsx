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
import {
  IPokemonInfo,
  IPokemonLanguageType,
} from "./interface/pokemon.interface";

import { getTypeRenderImg } from "../utils/pokemonUtil";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import CircularProgress from "@mui/material/CircularProgress";

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
  const { data: pokemonInfoData, isLoading: isPokemonLoading } = useQuery({
    queryKey: ["pokemon", pokemonName],
    queryFn: () => fetchPokemon(pokemonName),
  });

  const { data: pokemonSpeciesData } = useQuery({
    queryKey: ["pokemonSpecies", pokemonName],
    queryFn: () => fetchSpeciesPokemon(pokemonName),
  });

  const navigate = useNavigate();

  return (
    <Card key={pokemonInfoData?.id}>
      <PokemonTagBox>
        <Text fontSize="14px" fontWeight="700" fontFamily="Galmuri">
          {pokemonInfoData ? `PN.${pokemonInfoData?.id}` : "PN."}
        </Text>
        <PokemonTypeContainer>
          {pokemonInfoData?.types?.map((item: any) => (
            <PokemonTypeBox key={item.slot}>
              <PokemonTypeImg
                src={getTypeRenderImg(item.type.name)}
                alt="pokemonImg"
              />
            </PokemonTypeBox>
          ))}
        </PokemonTypeContainer>
      </PokemonTagBox>
      {isPokemonLoading ? (
        <CircularProgress color="inherit" />
      ) : (
        <PokemonImg
          src={
            pokemonInfoData?.sprites?.versions?.["generation-v"]?.[
              "black-white"
            ].animated?.front_default || pokemonInfoData?.sprites?.front_default
          }
          alt="pokemonImg"
        />
      )}

      <PokemonNameBox>
        <Text fontSize="20px" fontWeight="700" fontFamily="Galmuri14">
          {
            pokemonSpeciesData?.names?.find(
              (ev: IPokemonLanguageType) => ev.language.name === "ko"
            )?.name
          }
        </Text>
      </PokemonNameBox>
      <DetailButton
        onClick={() => navigate(`/pokemon-detail/${pokemonInfoData?.id}`)}
      >
        <img
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/poke-ball.png"
          alt="포켓볼"
        />
      </DetailButton>
    </Card>
  );
};

export default PokemonCard;
