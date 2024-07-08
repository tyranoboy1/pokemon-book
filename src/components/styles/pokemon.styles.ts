import styled from "styled-components";
import search from "../../assets/svg/search.svg";

/** Pokemon Home css */
export const PokemonBook = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: #d3d3d3;
  padding: 30px;
`;
export const Card = styled.div`
  width: 330px;
  height: 230px;
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f1eeff;
  border-radius: 16px;

  box-shadow: 0 30px 30px -25px rgba("#4133b7", 0.25);
  padding: 10px;
`;
export const PokemonImg = styled.img`
  width: 100%;
  height: 60%;
  object-fit: contain; /* 이미지 비율 유지하면서 컨테이너 내에 맞춤 */
  object-position: center; /* 이미지를 중앙에 위치 */
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
export const PokemonNameBox = styled.div`
  width: 100%;
  display: flex;
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
  font: inherit;
  border-radius: 6px;
  display: flex;
  width: 70px;
  align-items: center;
  justify-content: center;
  height: 30px;
  border: 2px solid #4133b7;
  align-self: flex-end;
  color: #4133b7;
  > p {
    font-size: 12px;
    font-weight: bold;
    margin-right: 5px;
  }
  &:hover,
  &:focus {
    background-color: #4133b7;
    color: #fff;
  }
`;

export const TopBar = styled.div`
  width: 90%;
  display: flex;
  justify-content: flex-end;
`;
/** Layout css */
export const PokemonBookContainer = styled.div`
  margin: 0 auto;
  max-width: 1920px;
`;
export const PokemonHeader = styled.div`
  width: 100%;
  height: 100px;
  background-color: #c0c0c0;
`;
export const HeaderBox = styled.div`
  width: 100%;
  display: flex;
  height: 100px;
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
  background-image: url(${search});
  background-position: right 10px center;
  background-repeat: no-repeat;
  background-size: 30px 50px; // 배경 이미지 크기 지정
`;
