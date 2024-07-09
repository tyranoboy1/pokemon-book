export interface IPokemonData {
  name: string;
  url: string;
}

export interface IPokemonInfo {
  id: number;
  name?: string;
  image?: string;
}

export interface IPokemonCardTypes {
  slot: number;
  type: {
    name: string;
    url: string;
  };
}

export interface IPokemonCardInfo {
  id: number;
  name: string;
  image: string;
  types: IPokemonCardTypes[];
  height: number;
  weight: number;
}
