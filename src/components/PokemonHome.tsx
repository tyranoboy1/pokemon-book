import axios from "axios";
import { useEffect, useState } from "react";
import {
  PokemonBook,
  PokemonCardBox,
  PokemonSearchInput,
  PokemonSearchInputBox,
} from "./styles/pokemon.styles";
import PokemonCard from "./PokemonCard";
import { IPokemonData } from "./interface/pokemon.interface";
import PokemonBookHeader from "../layout/PokemonBookHeader";
const PokemonHome = () => {
  const [data, setData] = useState<any>([]);

  const url = "https://pokeapi.co/api/v2/pokemon?limit=1000";

  useEffect(() => {
    const getPokemonInfo = async () => {
      try {
        const response = await axios.get(url);

        const testPokemon = response.data.results.map(
          (item: IPokemonData, idx: number) => {
            return {
              name: item.name,
              id: idx + 1,
              image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
                idx + 1
              }.png`,
            };
          }
        );
        setData(testPokemon);
      } catch (error) {
        console.log(error);
      }
    };
    getPokemonInfo();
  }, []);

  return (
    <>
      <PokemonBookHeader />
      <PokemonBook>
        <PokemonSearchInputBox>
          <PokemonSearchInput placeholder="포켓몬 검색" />
        </PokemonSearchInputBox>
        <PokemonCardBox>
          <PokemonCard pokemonData={data} />
        </PokemonCardBox>
      </PokemonBook>
    </>
  );
};

export default PokemonHome;
