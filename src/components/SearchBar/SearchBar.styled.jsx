import styled from 'styled-components';

export const SearchForm = styled.form`
  display: flex;
  margin: 0 auto;
  align-items: center;
  width: 100%;
  max-width: 300px;
  background-color: #fff;
  padding-left: 16px;
  /* border: 2px solid rgb(200, 10, 10); */
  border: 2px solid rgb(63, 81, 181);
  border-radius: 26px;
  overflow: hidden;
`;

export const SearchBtn = styled.button`
  display: inline-block;
  width: 48px;
  height: 48px;
  border: 0;
  opacity: 0.6;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;
  :hover {
    opacity: 1;
  }
`;

export const SearchInput = styled.input`
  display: inline-block;
  width: 100%;
  font: inherit;
  font-size: 20px;
  border: none;
  outline: none;
  padding-left: 4px;
  padding-right: 4px;
  ::placeholder {
    font: inherit;
    font-size: 18px;
  }
`;