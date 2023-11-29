import axios from "axios";
import React, { useEffect, useState } from "react";

const Pokemon = () => {
  const [data, setData] = useState<any>([]);
  const url = "https://pokeapi.co/api/v2/pokemon?limit=150";

  useEffect(() => {
    const getPokemonInfo = async () => {
      try {
        const response = await axios.get(url);
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
    <div>
      {data.map((pokemon: any) => (
        <div key={pokemon.id}>
          <h3>{pokemon.name}</h3>
          <img src={pokemon.image} alt={pokemon.name} />
        </div>
      ))}
    </div>
  );
};

export default Pokemon;
