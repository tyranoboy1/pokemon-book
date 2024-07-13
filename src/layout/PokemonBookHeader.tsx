import {
  HeaderBox,
  LanguageButton,
  TranslateBox,
} from "../components/styles/pokemon.styles";
import translate from "../assets/svg/translate.svg";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import pokemonSlice from "../store/slices/pokemonSlice";
import { RootState } from "../store/slices";

const PokemonBookHeader = () => {
  const language = useSelector((state: RootState) => state.pokemon.language);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleLanguageChange = (pLanguage: string) => {
    localStorage.setItem("language", pLanguage);
    dispatch(pokemonSlice.actions.setLanguage(pLanguage));
  };
  return (
    <HeaderBox>
      <p onClick={() => navigate("/")} style={{ cursor: "pointer" }}>
        포켓몬 도감
      </p>
      <TranslateBox>
        <img src={translate} alt="translate" />
        <LanguageButton
          type="button"
          onClick={() => handleLanguageChange("ko")}
          $isActive={language === "ko"}
        >
          KO
        </LanguageButton>
        <LanguageButton
          type="button"
          onClick={() => handleLanguageChange("en")}
          $isActive={language === "en"}
        >
          EN
        </LanguageButton>
      </TranslateBox>
    </HeaderBox>
  );
};

export default PokemonBookHeader;
