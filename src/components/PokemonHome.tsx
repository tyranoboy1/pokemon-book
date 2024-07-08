import axios from "axios";

import {
  PokemonBook,
  PokemonCardBox,
  PokemonSearchInput,
  PokemonSearchInputBox,
} from "./styles/pokemon.styles";
import PokemonCard from "./PokemonCard";
import PokemonBookHeader from "../layout/PokemonBookHeader";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useCallback, useEffect, useRef, useState } from "react";
import {
  IPokemonCardInfo,
  IPokemonData,
  IPokemonInfo,
} from "./interface/pokemon.interface";

const PokemonHome = () => {
  const getPokemonData = async (pageParam: number) => {
    const limit = 30; /** 한 페이지에 가져올 포캣몬 개수*/
    const offset = (pageParam - 1) * limit; /** 페이지당 offset 계산 */
    const res = await axios.get(
      `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
    );

    return {
      results: res.data.results.map((pokemon: IPokemonData, index: number) => ({
        id: offset + index + 1,
        name: pokemon.name,
        image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
          offset + index + 1
        }.png`,
      })),
      nextCursor: res.data.next && pageParam + 1,
    };
  };

  const { fetchNextPage, hasNextPage, isFetchingNextPage, data } =
    useInfiniteQuery({
      queryKey: ["pokemon"],
      queryFn: ({ pageParam = 1 }) => getPokemonData(pageParam),
      getNextPageParam: (lastPage) => lastPage.nextCursor,
      initialPageParam: 1,
    });

  const endPointRef =
    useRef<HTMLDivElement>(
      null
    ); /** 무한 스크롤을 위해 마지막 div ref 값 계산 */

  const observer = useRef<IntersectionObserver | null>(null);

  const handleObserver = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      const target = entries[0];
      if (target.isIntersecting && hasNextPage && !isFetchingNextPage) {
        fetchNextPage();
      }
    },
    [fetchNextPage, hasNextPage, isFetchingNextPage]
  );

  useEffect(() => {
    if (observer.current) observer.current.disconnect();

    observer.current = new IntersectionObserver(handleObserver);
    if (endPointRef.current) observer.current.observe(endPointRef.current);

    return () => {
      if (observer.current) observer.current.disconnect();
    };
  }, [handleObserver]);

  return (
    <>
      <PokemonBookHeader />
      <PokemonBook>
        <PokemonSearchInputBox>
          <PokemonSearchInput placeholder="포켓몬 검색" />
        </PokemonSearchInputBox>
        <PokemonCardBox>
          {data?.pages.map((page) =>
            page.results.map((pokemon: IPokemonInfo) => (
              <PokemonCard
                key={pokemon.id}
                name={pokemon.name}
                image={pokemon.image}
                id={pokemon.id}
              />
            ))
          )}
        </PokemonCardBox>
      </PokemonBook>
      <div ref={endPointRef} />
    </>
  );
};

export default PokemonHome;
