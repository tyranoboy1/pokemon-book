import React from "react";
import { Route, Routes } from "react-router-dom";

import PokemonDetail from "./PokemonDetail";
import PokemonBookLayout from "../layout/PokemonBookLayout";
import ErrorPage from "./ErrorPage";
import Home from "../page/Home";

const PokemonRouter = () => {
  return (
    <>
      <Routes>
        <Route element={<PokemonBookLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/pokemon-detail/:id" element={<PokemonDetail />} />
          <Route path="/*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </>
  );
};

export default PokemonRouter;
