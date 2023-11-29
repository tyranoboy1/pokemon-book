import React from "react";
import { Route, Routes } from "react-router-dom";
import PokemonHome from "./PokemonHome";
import PokemonDetail from "./PokemonDetail";
import PokemonBookLayout from "../layout/PokemonBookLayout";

const PokemonRouter = () => {
  return (
    <>
      <Routes>
        <Route element={<PokemonBookLayout />}>
          <Route path="/" element={<PokemonHome />} />
          <Route path="/pokemon-detail" element={<PokemonDetail />} />
        </Route>
      </Routes>
    </>
  );
};

export default PokemonRouter;
