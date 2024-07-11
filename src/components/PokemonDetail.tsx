import axios from "axios";
import {
  DetailPokemonCard,
  DetailPokemonCardBox,
  DetailPokemonCardContentBox,
  DetailPokemonCardTypeBox,
  DetailPokemonContainer,
  PokemonFlavorBox,
  PokemonInfoBox,
  PokemonInfoBoxContainer,
  PokemonPositionBox,
  PokemonTypeImg,
  Text,
  TitleBox,
} from "./styles/pokemon.styles";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { IPokemonLanguageType } from "./interface/pokemon.interface";
import { getTypeRenderImg } from "../utils/pokemonUtil";

const pokemonPosition: string[] = [
  "front_default",
  "front_female",
  "front_shiny",
  "front_shiny_female",
  "back_default",
  "back_female",
  "back_shiny",
  "back_shiny_female",
];
const PokemonDetail = () => {
  const { id } = useParams();
  const fetchPokemon = (pokemonId: number | undefined) => {
    return axios
      .get(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
      .then((res) => res.data);
  };

  const fetchSpeciesPokemon = (pokemonId: number | undefined) => {
    return axios
      .get(`https://pokeapi.co/api/v2/pokemon-species/${pokemonId}`)
      .then((res) => res.data);
  };
  const { data: pokemonInfoData } = useQuery({
    queryKey: ["pokemon", id],
    queryFn: () => fetchPokemon(Number(id)),
  });

  const { data: pokemonSpeciesData } = useQuery({
    queryKey: ["pokemonSpecies", id],
    queryFn: () => fetchSpeciesPokemon(Number(id)),
  });

  console.log("pokemonSpeciesData", pokemonSpeciesData);
  console.log("pokemonInfoData", pokemonInfoData);
  return (
    <DetailPokemonContainer>
      <DetailPokemonCardBox>
        <DetailPokemonCard>
          <Text fontFamily="Galmuri">{`# ${pokemonInfoData?.id} ${
            pokemonSpeciesData?.names?.find(
              (ev: IPokemonLanguageType) => ev.language.name === "ko"
            )?.name
          }`}</Text>
          <DetailPokemonCardContentBox>
            <img
              src={
                pokemonInfoData?.sprites?.versions?.["generation-v"]?.[
                  "black-white"
                ].animated?.front_default ||
                pokemonInfoData?.sprites?.front_default
              }
              alt="pokemonImg"
            />
            <DetailPokemonCardTypeBox>
              {pokemonInfoData?.types?.map((item: any) => (
                <PokemonTypeImg
                  src={getTypeRenderImg(item.type.name)}
                  alt="pokemonImg"
                  key={item.slot}
                />
              ))}
            </DetailPokemonCardTypeBox>
            <TitleBox $paddingLeft="4px">
              <Text fontFamily="Pop">도감</Text>
            </TitleBox>
            <PokemonFlavorBox>
              <Text fontFamily="Galmuri">
                {
                  pokemonSpeciesData?.flavor_text_entries.find(
                    (ev: any) => ev.language.name === "ko"
                  )?.flavor_text
                }
              </Text>
            </PokemonFlavorBox>
            <PokemonPositionBox>
              {pokemonPosition.map(
                (ev, idx) =>
                  pokemonInfoData?.sprites[ev] && (
                    <img
                      key={idx}
                      src={pokemonInfoData?.sprites[ev]}
                      alt={ev}
                    />
                  )
              )}
            </PokemonPositionBox>
            <PokemonInfoBoxContainer>
              <PokemonInfoBox>
                <TitleBox>
                  <Text fontFamily="Pop" fontWeight="700">
                    Information
                  </Text>
                </TitleBox>
                <Text fontFamily="Pop">
                  {`키: ${pokemonInfoData?.height}cm`}
                </Text>
                <Text fontFamily="Pop">
                  {`몸무게: ${pokemonInfoData?.weight}kg`}
                </Text>
              </PokemonInfoBox>
              <PokemonInfoBox></PokemonInfoBox>
            </PokemonInfoBoxContainer>
          </DetailPokemonCardContentBox>
        </DetailPokemonCard>
      </DetailPokemonCardBox>
    </DetailPokemonContainer>
  );
};

export default PokemonDetail;
