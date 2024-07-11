import axios from "axios";

import {
  AllButton,
  FilterTypeButtonBox,
  FilterTypeButtonContainer,
  PokemonBook,
  PokemonCardBox,
  PokemonSearchInput,
  PokemonSearchInputBox,
} from "./styles/pokemon.styles";
import PokemonCard from "./PokemonCard";
import PokemonBookHeader from "../layout/PokemonBookHeader";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useCallback, useEffect, useRef, useState } from "react";
import { IPokemonData, IPokemonInfo } from "./interface/pokemon.interface";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import { getTypeRenderImg } from "../utils/pokemonUtil";

const filterTypeArray = [
  "bug",
  "dark",
  "dragon",
  "electric",
  "fairy",
  "fighting",
  "fire",
  "flying",
  "ghost",
  "grass",
  "ground",
  "ice",
  "normal",
  "poison",
  "psychic",
  "rock",
  "steel",
  "water",
];

const PokemonHome = () => {
  const [open, setOpen] = useState(false);
  const [filterType, setFilterType] = useState("");

  const getPokemonData = async (pageParam: number) => {
    const limit = 20; /** 한 페이지에 가져올 포캣몬 개수*/
    const offset = (pageParam - 1) * limit; /** 페이지당 offset 계산 */
    const res = await axios.get(
      `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
    );
    const pokemonData = await res.data.results.map((ev: any, index: number) => {
      const id = offset + index + 1;
      return {
        id,
        name: ev.name,
        url: ev.url,
      };
    });

    return {
      results: pokemonData,
      nextCursor: res.data.next && pageParam + 1,
    };
  };

  const filterTypeClick = (pType: string) => {
    setFilterType(pType);
  };
  const { fetchNextPage, hasNextPage, isFetchingNextPage, data, status } =
    useInfiniteQuery({
      queryKey: ["pokemon", filterType],
      queryFn: ({ pageParam = 1 }) => getPokemonData(pageParam),
      getNextPageParam: (lastPage) => lastPage.nextCursor,
      initialPageParam: 1,
    });

  console.log("data", data);
  const endPointRef =
    useRef<HTMLDivElement>(
      null
    ); /** 무한 스크롤을 위해 마지막 div ref 값 계산 */

  const observer = useRef<IntersectionObserver | null>(null);

  const handleObserver = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      const target = entries[0];

      if (target.isIntersecting && hasNextPage && !isFetchingNextPage) {
        setOpen(true);
        fetchNextPage().then(() => setOpen(false));
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

  useEffect(() => {}, [filterType]);

  return (
    <>
      <PokemonBookHeader />
      <PokemonBook>
        <PokemonSearchInputBox>
          <PokemonSearchInput placeholder="포켓몬 검색" />
        </PokemonSearchInputBox>
        <FilterTypeButtonContainer>
          <AllButton onClick={() => setFilterType("")}>All</AllButton>
          <FilterTypeButtonBox>
            {filterTypeArray.map((ev, idx) => (
              <img
                key={idx}
                src={getTypeRenderImg(ev)}
                alt="pokemonTypeImg"
                onClick={() => filterTypeClick(ev)}
              />
            ))}
          </FilterTypeButtonBox>
        </FilterTypeButtonContainer>
        <PokemonCardBox>
          {data?.pages.map((page) =>
            page.results.map((pokemon: IPokemonData) => (
              <PokemonCard key={pokemon.url} pokemonName={pokemon.name} />
            ))
          )}
        </PokemonCardBox>
      </PokemonBook>
      <div ref={endPointRef} />
      {status === "pending" && (
        <Backdrop
          sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={open}
        >
          <CircularProgress color="inherit" />
        </Backdrop>
      )}
    </>
  );
};

export default PokemonHome;
