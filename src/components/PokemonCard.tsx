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
import { GoHeartFill } from "react-icons/go";
import { FiHeart } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();
  const [hearts, setHearts] = useState<{ [key: number]: boolean }>({});

  /** 하트를 누르는 함수 */
  const heartClick = (pokemonId: number) => {
    setHearts((prevHearts) => ({
      ...prevHearts,
      [pokemonId]: !prevHearts[pokemonId],
    }));
  };

  return (
    <>
      {pokemonData.map((pokemon) => (
        <Card key={pokemon.id}>
          <PokemonTagBox>
            <Text fontSize="20px" fontWeight="600">{`PN ${pokemon.id}`}</Text>
            {hearts[pokemon.id] ? (
              <GoHeartFill
                size={25}
                style={{ marginRight: "3px", marginBottom: "5px" }}
                onClick={() => heartClick(pokemon.id)}
                cursor="pointer"
              />
            ) : (
              <FiHeart
                size={25}
                style={{ marginRight: "3px", marginBottom: "5px" }}
                onClick={() => heartClick(pokemon.id)}
                cursor="pointer"
              />
            )}
          </PokemonTagBox>
          <PokemonImg src={pokemon.image} alt={pokemon.name}></PokemonImg>
          <PokemonNameBox>
            <Text fontSize="30px" fontWeight="600">
              {pokemon.name}
            </Text>
          </PokemonNameBox>
          <DetailButton onClick={() => navigate("/pokemon-detail")}>
            <p>More</p>
            <FaChevronRight />
          </DetailButton>
        </Card>
      ))}
    </>
  );
};

export default PokemonCard;
