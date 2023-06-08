import {ReactComponent as Busqueda} from "../../assets/lupa.svg";

import styled from "styled-components";

export const SearchContainer = styled.div`
  margin-top: 30px;
  height: 30px;
  width: 300px;
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;

export const SearchInput = styled.input`
  width: 60%;
  padding: 12px 20px;
  border: black;
  border-radius: 7px 0px 0px 7px;
  box-sizing: border-box;
  box-shadow: inset 0 0 5px #808080;
`;

export const SearchIcon = styled(Busqueda)`
  width: 50px;
  height: 80px;
  fill: #39ff14;

  &:hover {
    scale: 1.1;
  }
`;

export const SearchIconContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background-color: white;
  box-shadow: inset 0 0 5px #808080;
  padding: 10px;


  &:hover {
    box-shadow: inset 0 0 10px #39ff14;
  }
`;
