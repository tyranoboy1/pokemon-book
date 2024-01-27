import React from "react";
import { Route, Routes } from "react-router-dom";
import PokemonHome from "./PokemonHome";
import PokemonDetail from "./PokemonDetail";
import PokemonBookLayout from "../layout/PokemonBookLayout";
import PokemonMyBook from "./PokemonMyBook";
import ErrorPage from "./ErrorPage";

const PokemonRouter = () => {
  return (
    <>
      <Routes>
        <Route element={<PokemonBookLayout />}>
          <Route path="/" element={<PokemonHome />} />
          <Route path="/pokemon-detail" element={<PokemonDetail />} />
          <Route path="/pokemon-mybook" element={<PokemonMyBook />} />
          <Route path="/*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </>
  );
};

export default PokemonRouter;
