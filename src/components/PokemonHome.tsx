import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  Card,
  PokemonBook,
  PokemonImg,
  PokemonNameBox,
  PokemonTagBox,
  Text,
  TitleText,
} from "./styles/pokemon.styles";
const PokemonHome = () => {
  const [data, setData] = useState<any>([]);
  const url = "https://pokeapi.co/api/v2/pokemon?limit=1000";

  useEffect(() => {
    const getPokemonInfo = async () => {
      try {
        const response = await axios.get(url);
        console.log("response", response);
        const testPokemon = response.data.results.map((item: any, idx: any) => {
          return {
            name: item.name,
            id: idx + 1,
            image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
              idx + 1
            }.png`,
          };
        });
        setData(testPokemon);
      } catch (error) {
        console.log(error);
      }
    };
    getPokemonInfo();
  }, []);

  useEffect(() => {
    console.log("data", data);
  });
  return (
    <>
      <TitleText>포켓몬 도감</TitleText>
      <PokemonBook>
        {data.map((pokemon: any) => (
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
      </PokemonBook>
    </>
  );
};

export default PokemonHome;
