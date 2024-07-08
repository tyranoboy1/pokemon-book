import { useState } from "react";
import {
  Card,
  DetailButton,
  PokemonImg,
  PokemonNameBox,
  PokemonTagBox,
  Text,
} from "./styles/pokemon.styles";
import { FaChevronRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { IPokemonInfo } from "./interface/pokemon.interface";

const PokemonCard = (props: IPokemonInfo) => {
  const { id, image, name } = props;
  const navigate = useNavigate();

  return (
    <Card key={id}>
      <PokemonTagBox>
        <Text
          fontSize="14px"
          fontWeight="700"
          fontFamily="Galmuri"
        >{`PN.${id}`}</Text>
      </PokemonTagBox>
      <PokemonImg src={image} alt={image}></PokemonImg>
      <PokemonNameBox>
        <Text fontSize="20px" fontWeight="700" fontFamily="Galmuri14">
          {name}
        </Text>
      </PokemonNameBox>
      <DetailButton onClick={() => navigate("/pokemon-detail")}>
        <p>More</p>
        <FaChevronRight />
      </DetailButton>
    </Card>
  );
};

export default PokemonCard;
