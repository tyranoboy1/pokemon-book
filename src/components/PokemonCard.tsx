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
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { getTypeRenderImg } from "../utils/pokemonUtil";

const PokemonCard = (props: IPokemonInfo) => {
  const { id } = props;
  const navigate = useNavigate();

  const fetchPokemon = (id: number) => {
    return axios
      .get(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then((res) => res.data);
  };

  const { data } = useQuery({
    queryKey: ["pokemon", id],
    queryFn: () => fetchPokemon(id),
  });

  console.log("data", data);

  return (
    <Card key={id}>
      <PokemonTagBox>
        <Text
          fontSize="14px"
          fontWeight="700"
          fontFamily="Galmuri"
        >{`PN.${id}`}</Text>
        <PokemonTypeContainer>
          {data?.types?.map((item: any) => (
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
          data?.sprites?.versions?.["generation-v"]?.["black-white"].animated
            ?.front_default
        }
        alt="pokemonImg"
      ></PokemonImg>
      <PokemonNameBox>
        <Text fontSize="20px" fontWeight="700" fontFamily="Galmuri14">
          {data?.name}
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
