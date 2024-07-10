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

const PokemonCard = (props: IPokemonInfo) => {
  const { detailData } = props;

  const navigate = useNavigate();

  return (
    <Card key={detailData?.id}>
      <PokemonTagBox>
        <Text
          fontSize="14px"
          fontWeight="700"
          fontFamily="Galmuri"
        >{`PN.${detailData?.id}`}</Text>
        <PokemonTypeContainer>
          {detailData?.types?.map((item: any) => (
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
          detailData?.sprites?.versions?.["generation-v"]?.["black-white"]
            .animated?.front_default
        }
        alt="pokemonImg"
      ></PokemonImg>
      <PokemonNameBox>
        <Text fontSize="20px" fontWeight="700" fontFamily="Galmuri14">
          {detailData?.name}
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
