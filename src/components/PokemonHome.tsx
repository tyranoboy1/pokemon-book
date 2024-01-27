import axios from "axios";
import { useEffect, useState } from "react";
import {
  PokemonBook,
  PokemonSearchInput,
  PokemonSearchInputBox,
  TitleText,
  TopBar,
} from "./styles/pokemon.styles";
import PokemonCard from "./PokemonCard";
import { FaBookOpen } from "react-icons/fa6";
import { IPokemonData } from "./interface/pokemon.interface";
import { useNavigate } from "react-router-dom";
const PokemonHome = () => {
  const [data, setData] = useState<any>([]);
  const navigate = useNavigate();
  const url = "https://pokeapi.co/api/v2/pokemon?limit=1000";
  const url1 = "https://pokeapi.co/api/v2/pokemon-species/1";

  useEffect(() => {
    const getPokemonInfo = async () => {
      try {
        const response = await axios.get(url);
        // const response1 = await axios.get(url1);
        console.log("response", response);
        // console.log("response1", response1);
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

  useEffect(() => {
    console.log("data", data);
  });
  return (
    <>
      <TitleText>포켓몬 도감</TitleText>
      <TopBar>
        <FaBookOpen size={50} onClick={() => navigate("/pokemon-mybook")} />
      </TopBar>
      <PokemonSearchInputBox>
        {/* <PokemonSearchInput /> */}
      </PokemonSearchInputBox>
      <PokemonBook>
        <PokemonCard pokemonData={data} />
      </PokemonBook>
    </>
  );
};

export default PokemonHome;
