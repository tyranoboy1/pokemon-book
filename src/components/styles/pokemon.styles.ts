import styled from "styled-components";
import search from "../../assets/svg/search.svg";

/** Pokemon Home css */
export const PokemonBook = styled.div`
  width: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 30px;
  background-color: #b0a8a0;
`;
export const Card = styled.div`
  width: 330px;
  height: 230px;
  position: relative;
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 16px;
  padding: 10px;
  background-color: #fff;
`;
export const PokemonImg = styled.img`
  width: 100%;
  height: 50%;
  object-fit: contain; /* 이미지 비율 유지하면서 컨테이너 내에 맞춤 */
  object-position: center; /* 이미지를 중앙에 위치 */
`;
export const PokemonTypeImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;
export const PokemonTagBox = styled.div`
  width: 100%;
  height: 20%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  & > span {
    margin-left: 5px;
  }
`;
export const PokemonTypeContainer = styled.div`
  height: 22px;
  align-items: center;
  display: flex;
  gap: 10px;
`;
export const PokemonTypeBox = styled.div`
  width: 100%;
  height: 100%;
`;
export const PokemonNameBox = styled.div`
  width: 100%;
  display: flex;
  margin-top: 20px;
  justify-content: center;
`;
export const PokemonCardBox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  gap: 10px;
  flex-wrap: wrap;
`;
export const DetailButton = styled.button`
  border-radius: 6px;
  position: absolute;
  display: flex;
  bottom: 10px;
  align-items: center;
  justify-content: center;
  height: 30px;
  align-self: flex-end;
  &:hover,
  &:focus {
    transform: translateY(-5px);
    cursor: pointer;
  }
`;

export const TopBar = styled.div`
  width: 90%;
  display: flex;
  justify-content: flex-end;
`;
/** Layout css */
export const PokemonBookContainer = styled.div`
  width: 100%;
  height: 100%;
  margin: 0 auto;
  max-width: 1920px;
  display: flex;
  flex-direction: column;
`;
export const PokemonHeader = styled.div`
  width: 100%;
  height: 100px;
  background-color: #c0c0c0;
`;
export const HeaderBox = styled.div`
  width: 100%;
  display: flex;
  flex: 0 0 100px;
  padding: 0px 40px;
  justify-content: space-between;
  align-items: center;
  > p {
    flex: 2;
    font-size: 30px;
    font-family: "Galmuri", sans-serif;
  }
`;
export const TranslateBox = styled.div`
  flex: 1;
  gap: 15px;
  display: flex;
  justify-content: flex-end;
  > img {
    width: 30px;
    height: 30px;
  }
`;
export const LanguageButton = styled.button`
  border-radius: 50%;
  &:hover {
    background-color: #cfffe5;
  }
  font-size: 15px;
  font-weight: 700;
`;
export const FilterTypeButtonContainer = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 40px;
`;
export const FilterTypeButtonBox = styled.div`
  /* border-radius: 12px; */
  width: 70%;
  height: 100%;
  padding: 0 30px;
  align-items: center;
  display: flex;
  /* background-color: #d3d3d3; */
  flex-wrap: wrap;
  gap: 10px;

  > img {
    width: 100px;
    height: 20px;
    object-fit: cover; /* 이미지 비율 유지하면서 컨테이너 내에 맞춤 */
    object-position: center; /* 이미지를 중앙에 위치 */
    cursor: pointer;
  }
`;
export const AllButton = styled.button`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #000;
  color: #fff;
  font-weight: 700;
`;

/** Common css */
export const Text = styled.span<{
  fontSize?: string;
  fontWeight?: string;
  fontFamily?: string;
}>`
  font-size: ${(props) => props.fontSize || "16px"};
  font-weight: ${(props) => props.fontWeight || "normal"};
  font-family: ${(props) => props.fontFamily || ""};
`;
export const PokemonSearchInputBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 40px;
`;

export const PokemonSearchInput = styled.input`
  width: 50%;
  height: 50px;
  border-radius: 14px;
  padding: 0 10px;
  font-size: 15px;
  font-weight: 700;
  background-color: #d3d3d3;
  background-image: url(${search});
  background-position: right 10px center;
  background-repeat: no-repeat;
  background-size: 30px 50px;
`;

/** Pokemon detail  */

export const DetailPokemonContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 30px;
  background-color: #b0a8a0;
`;
export const DetailPokemonCardBox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
`;

export const DetailPokemonCard = styled.div`
  width: 800px;
  border-radius: 12px;
  padding: 30px 20px;
  display: flex;
  flex-direction: column;
  height: 100%;
  background-color: #fff;
`;

export const DetailPokemonCardContentBox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;

  > img {
    width: 200px;
    height: 160px;
    object-fit: contain;
    object-position: center;
  }
`;
export const DetailPokemonCardTypeBox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  gap: 10px;
  > img {
    margin-top: 30px;
    width: 100px;
    height: 30px;
    object-fit: contain;
    object-position: center;
  }
`;
export const PokemonPositionBox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  gap: 3px;
  > img {
    margin-top: 30px;
    width: 150px;
    height: 150px;
    object-fit: contain;
    object-position: center;
  }
`;
export const PokemonInfoBoxContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  gap: 10px;
`;

export const PokemonInfoBox = styled.div`
  flex: 1;
  border-radius: 12px;
  padding: 20px 20px;
  display: flex;
  gap: 15px;
  flex-direction: column;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.5);
`;
export const PokemonFlavorBox = styled.div`
  margin-top: 10px;
  width: 100%;
  border-radius: 12px;
  padding: 20px 30px;
  word-wrap: break-word; /* 긴 단어가 박스를 벗어나는 것을 방지하고 줄바꿈 */
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.5);
`;
export const TitleBox = styled.div<{ $paddingLeft?: string }>`
  width: 100%;
  padding-left: ${(props) => props.$paddingLeft || ""};
`;
