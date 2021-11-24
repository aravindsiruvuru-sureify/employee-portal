import styled from 'styled-components';

export const SearchBarContainer = styled.div`
  padding: 20px;
  height: 60px;
  z-index: 99999;
  position: fixed;
  top: 100px;
  right: 20px;
`;

export const SearchBar = styled.div`
  position: absolute;
  display: flex;
  flex-direction: row;
  right: 25px;
  top: 5px;
  height: 55px;
  width: ${({ width }) => width};
  border-radius: 5px;
  padding: 10px;
  background-color: white;
  transition: 0.5s;
  box-shadow: 1px 1px 3px 4px rgba(0, 0, 0, 0.2);
`;

export const Search = styled.div`
  width: 290px;
  height: 100%;
  position: relative;
`;

export const SearchInput = styled.input`
  outline: 0px;
  width: 90%;
  margin-left: 15px;
  height: 100%;
  font-size: 16px;
  border: 0px;
  border-bottom: 2px solid darkblue;
  &:focus {
    outline: none;
  }
`;
