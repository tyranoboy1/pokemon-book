import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IPokemonSlceInitial {
  language: string;
}

const initialState: IPokemonSlceInitial = {
  language: "ko",
};
export const pokemonSlice = createSlice({
  name: "pokemonSlce",
  initialState,
  reducers: {
    setLanguage: (state, action: PayloadAction<string>) => {
      state.language = action.payload;
    },
  },
});

export default pokemonSlice;
