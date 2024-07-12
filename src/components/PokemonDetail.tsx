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
  PokemonSkillBox,
  PokemonSkillCard,
  PokemonSkillContainer,
  PokemonTypeImg,
  Text,
  TitleBox,
} from "./styles/pokemon.styles";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { IPokemonLanguageType } from "./interface/pokemon.interface";
import { getTypeRenderImg } from "../utils/pokemonUtil";
import { CircularProgress } from "@mui/material";

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
  const fetchPokemon = async (pokemonId: number | undefined) => {
    const res = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/${pokemonId}`
    );
    return res.data;
  };

  const fetchSpeciesPokemon = async (pokemonId: number | undefined) => {
    const res = await axios.get(
      `https://pokeapi.co/api/v2/pokemon-species/${pokemonId}`
    );
    return res.data;
  };

  const fetchPokemonSkill = async (skill: string[] | undefined) => {
    if (skill && skill.length > 0) {
      const res = await Promise.all(skill.map((url) => axios.get(url)));
      return res.map((res) => res.data);
    }
  };
  const { data: pokemonInfoData, isLoading: pokemonInfoLoading } = useQuery({
    queryKey: ["pokemon", id],
    queryFn: () => fetchPokemon(Number(id)),
  });
  const { data: pokemonSkillData } = useQuery({
    queryKey: [
      "pokemonSkill",
      pokemonInfoData?.abilities?.map((ev: any) => ev.ability.url) || [],
    ],
    queryFn: () =>
      fetchPokemonSkill(
        pokemonInfoData?.abilities?.map((ev: any) => ev.ability.url) || []
      ),
  });

  const { data: pokemonSpeciesData } = useQuery({
    queryKey: ["pokemonSpecies", id],
    queryFn: () => fetchSpeciesPokemon(Number(id)),
  });

  return (
    <DetailPokemonContainer>
      <DetailPokemonCardBox>
        <DetailPokemonCard>
          <Text fontFamily="Galmuri">{`# ${pokemonInfoData?.id} ${
            pokemonSpeciesData?.names?.find(
              (ev: IPokemonLanguageType) => ev.language.name === "ko"
            )?.name || "???"
          }`}</Text>
          <DetailPokemonCardContentBox>
            {pokemonInfoLoading ? (
              <CircularProgress color="inherit" />
            ) : (
              <img
                src={
                  pokemonInfoData?.sprites?.versions?.["generation-v"]?.[
                    "black-white"
                  ].animated?.front_default ||
                  pokemonInfoData?.sprites?.front_default
                }
                alt="pokemonImg"
              />
            )}

            <DetailPokemonCardTypeBox>
              {pokemonInfoLoading ? (
                <CircularProgress color="inherit" />
              ) : (
                pokemonInfoData?.types?.map((item: any) => (
                  <PokemonTypeImg
                    src={getTypeRenderImg(item.type.name)}
                    alt="pokemonImg"
                    key={item.slot}
                  />
                ))
              )}
            </DetailPokemonCardTypeBox>
            <TitleBox $paddingLeft="4px">
              <Text fontFamily="Pop">도감</Text>
            </TitleBox>
            <PokemonFlavorBox>
              <Text fontFamily="Galmuri">
                {pokemonSpeciesData?.flavor_text_entries.find(
                  (ev: any) => ev.language.name === "ko"
                )?.flavor_text || "?????"}
              </Text>
            </PokemonFlavorBox>
            <PokemonPositionBox>
              {pokemonInfoLoading ? (
                <CircularProgress color="inherit" />
              ) : (
                pokemonPosition.map(
                  (ev, idx) =>
                    pokemonInfoData?.sprites[ev] && (
                      <img
                        key={idx}
                        src={pokemonInfoData?.sprites[ev]}
                        alt={ev}
                      />
                    )
                )
              )}
            </PokemonPositionBox>
            <PokemonInfoBoxContainer>
              <PokemonInfoBox>
                <TitleBox>
                  <Text fontFamily="Pop">Information</Text>
                </TitleBox>
                <Text fontFamily="Galmuri">
                  {`속성: ${
                    pokemonSpeciesData?.genera?.find(
                      (ev: any) => ev.language.name === "ko"
                    )?.genus || "???"
                  }`}
                </Text>
                <Text fontFamily="Galmuri">
                  {`키: ${pokemonInfoData?.height || "???"}cm `}
                </Text>
                <Text fontFamily="Galmuri">
                  {`몸무게: ${pokemonInfoData?.weight || "???"}kg`}
                </Text>
              </PokemonInfoBox>
              <PokemonSkillBox>
                <Text fontFamily="Pop">Skill</Text>
                <PokemonSkillContainer>
                  {pokemonInfoData?.abilities?.map((ev: any) => {
                    const skill = pokemonSkillData?.find(
                      (item) => item.name === ev.ability.name
                    );

                    return (
                      <PokemonSkillCard key={ev.slot}>
                        <Text fontFamily="Galmuri">
                          {`이름: ${ev?.ability?.name} ${
                            ev?.is_hidden ? "(Hidden)" : ""
                          }` || "?"}
                        </Text>
                        <Text fontFamily="Galmuri">{`설명: ${
                          skill?.flavor_text_entries?.find(
                            (ev: any) => ev.language.name === "ko"
                          )?.flavor_text || "?"
                        }`}</Text>
                      </PokemonSkillCard>
                    );
                  })}
                </PokemonSkillContainer>
              </PokemonSkillBox>
            </PokemonInfoBoxContainer>
          </DetailPokemonCardContentBox>
        </DetailPokemonCard>
      </DetailPokemonCardBox>
    </DetailPokemonContainer>
  );
};

export default PokemonDetail;
