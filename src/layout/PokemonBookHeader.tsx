import {
  HeaderBox,
  LanguageButton,
  TranslateBox,
} from "../components/styles/pokemon.styles";
import translate from "../assets/svg/translate.svg";

const PokemonBookHeader = () => {
  return (
    <HeaderBox>
      <p>포켓몬 도감</p>
      <TranslateBox>
        <img src={translate} alt="translate" />
        <LanguageButton type="button">KO</LanguageButton>
        <LanguageButton type="button">EN</LanguageButton>
      </TranslateBox>
    </HeaderBox>
  );
};

export default PokemonBookHeader;
