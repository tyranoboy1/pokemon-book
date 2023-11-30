import axios from "axios";
import { useEffect, useState } from "react";
import {
  PokemonBook,
  PokemonSearchInput,
  PokemonSearchInputBox,
  TitleText,
} from "./styles/pokemon.styles";
import PokemonCard from "./PokemonCard";
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
      <PokemonSearchInputBox>
        <PokemonSearchInput />
      </PokemonSearchInputBox>
      <PokemonBook>
        <PokemonCard pokemonData={data} />
      </PokemonBook>
    </>
  );
};

export default PokemonHome;
