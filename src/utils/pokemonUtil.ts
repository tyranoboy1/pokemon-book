import normal from "../assets/img/pokeType/normal.png";
import water from "../assets/img/pokeType/water.png";
import steel from "../assets/img/pokeType/steel.png";
import rock from "../assets/img/pokeType/rock.png";
import psychic from "../assets/img/pokeType/psychic.png";
import poison from "../assets/img/pokeType/poison.png";
import ice from "../assets/img/pokeType/ice.png";
import ground from "../assets/img/pokeType/ground.png";
import grass from "../assets/img/pokeType/grass.png";
import ghost from "../assets/img/pokeType/ghost.png";
import flying from "../assets/img/pokeType/flying.png";
import fire from "../assets/img/pokeType/fire.png";
import fighting from "../assets/img/pokeType/fighting.png";
import fairy from "../assets/img/pokeType/fairy.png";
import electric from "../assets/img/pokeType/electric.png";
import dragon from "../assets/img/pokeType/dragon.png";
import dark from "../assets/img/pokeType/dark.png";
import bug from "../assets/img/pokeType/bug.png";

export const getTypeRenderImg = (pType: string): string => {
  switch (pType) {
    case "normal":
      return normal;
    case "fire":
      return fire;
    case "water":
      return water;
    case "electric":
      return electric;
    case "grass":
      return grass;
    case "ice":
      return ice;
    case "fighting":
      return fighting;
    case "poison":
      return poison;
    case "ground":
      return ground;
    case "flying":
      return flying;
    case "psychic":
      return psychic;
    case "bug":
      return bug;
    case "rock":
      return rock;
    case "ghost":
      return ghost;
    case "dragon":
      return dragon;
    case "dark":
      return dark;
    case "steel":
      return steel;
    case "fairy":
      return fairy;
    default:
      return "";
  }
};
