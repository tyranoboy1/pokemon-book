import {
  HeaderBox,
  LanguageButton,
  TranslateBox,
} from "../components/styles/pokemon.styles";
import translate from "../assets/svg/translate.svg";
import { useNavigate } from "react-router-dom";

const PokemonBookHeader = () => {
  const navigate = useNavigate();
  return (
    <HeaderBox>
      <p onClick={() => navigate("/")} style={{ cursor: "pointer" }}>
        포켓몬 도감
      </p>
      <TranslateBox>
        <img src={translate} alt="translate" />
        <LanguageButton type="button">KO</LanguageButton>
        <LanguageButton type="button">EN</LanguageButton>
      </TranslateBox>
    </HeaderBox>
  );
};

export default PokemonBookHeader;
