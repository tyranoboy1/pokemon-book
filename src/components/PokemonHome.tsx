import axios from "axios";

import {
  AllButton,
  FilterTypeButtonBox,
  FilterTypeButtonContainer,
  PokemonBook,
  PokemonCardBox,
} from "./styles/pokemon.styles";
import PokemonCard from "./PokemonCard";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { useCallback, useEffect, useRef, useState } from "react";
import { IPokemonData } from "./interface/pokemon.interface";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import { getTypeRenderImg } from "../utils/pokemonUtil";
import useLocalStorage from "../hooks/useLocalStorage";

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
  const [filterType, setFilterType] = useState("all");
  useLocalStorage();
  const getPokemonData = async (pageParam: number) => {
    const limit = 20; /** 한 페이지에 가져올 포캣몬 개수*/
    const offset = (pageParam - 1) * limit; /** 페이지당 offset 계산 */
    try {
      const res = await axios.get(
        `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
      );
      const pokemonData = await res.data.results.map(
        (ev: any, index: number) => {
          const id = offset + index + 1;
          return {
            id,
            name: ev.name,
            url: ev.url,
          };
        }
      );

      return {
        results: pokemonData,
        nextCursor: res.data.next && pageParam + 1,
      };
    } catch (error) {
      console.error("error", error);
      return null;
    }
  };

  const getPokemonTypeData = async (pokemonType: string | undefined) => {
    if (!pokemonType || pokemonType === "all") {
      return null;
    }
    try {
      const res = await axios.get(
        `https://pokeapi.co/api/v2/type/${pokemonType}`
      );
      return res.data;
    } catch (error) {
      console.error(`error:`, error);
      return null;
    }
  };

  const filterTypeClick = (pType: string) => {
    setFilterType(pType);
  };
  const { fetchNextPage, hasNextPage, isFetchingNextPage, data, status } =
    useInfiniteQuery({
      queryKey: ["pokemon"],
      queryFn: ({ pageParam = 1 }) => getPokemonData(pageParam),
      getNextPageParam: (lastPage) => lastPage?.nextCursor,
      initialPageParam: 1,
    });

  const { data: pokemonTypeData } = useQuery({
    queryKey: ["pokemon", filterType],
    queryFn: () => getPokemonTypeData(filterType),
    enabled: !!filterType && filterType !== "all",
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

  return (
    <>
      <PokemonBook $filterType={filterType}>
        <FilterTypeButtonContainer>
          <AllButton onClick={() => setFilterType("all")}>All</AllButton>
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
          {filterType === "all"
            ? data?.pages.map((page) =>
                page?.results.map((pokemon: IPokemonData) => (
                  <PokemonCard key={pokemon.url} pokemonName={pokemon.name} />
                ))
              )
            : pokemonTypeData &&
              pokemonTypeData?.pokemon?.map((ev: any, idx: number) => (
                <PokemonCard key={idx} pokemonName={ev.pokemon.name} />
              ))}
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
