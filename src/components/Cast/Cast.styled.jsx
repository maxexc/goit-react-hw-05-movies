import styled from 'styled-components';

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, 100px);
  justify-content: center;
  gap: 20px;
  padding: 20px 0;
  margin-right: 10px;
  >li {
    list-style: none;
    >img {
      width: 100px;
      height: 150px;
    }
  }
`;