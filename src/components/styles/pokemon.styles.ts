import styled from "styled-components";

/** Pokemon Home css */

export const PokemonBook = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  place-items: center;
`;
export const Card = styled.div`
  width: 300px;
  height: 250px;
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #c0c0c0;
  border-radius: 5%;
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
export const TitleText = styled.div`
  width: 100%;
  font-size: 30px;
  display: flex;
  padding: 30px 0;

  justify-content: center;
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
export const PokemonHeaderImg = styled.img`
  width: 100%;
  height: 100%;

  object-fit: cover;
  object-position: center;
  /* 이미지를 중앙에 위치 */
`;
/** Common css */
export const Text = styled.span<{
  fontSize?: string;
  fontWeight?: string;
}>`
  font-size: ${(props) => props.fontSize || "16px"};
  font-weight: ${(props) => props.fontWeight || "normal"};
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
`;
