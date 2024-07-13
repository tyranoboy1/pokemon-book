import { combineReducers } from "@reduxjs/toolkit";
import pokemonSlice from "./pokemonSlice";

export const rootReducer = combineReducers({
  pokemon: pokemonSlice.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;
