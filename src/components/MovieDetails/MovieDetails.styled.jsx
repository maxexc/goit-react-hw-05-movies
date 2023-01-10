import styled from 'styled-components';

export const CardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin-top: 10px;
  margin-bottom: 30px;
  background-image: url(./img/pngegg2.png);
  > img {
    width: 320px;
    border-radius: 8px;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 1), -23px 0 20px -23px rgba(0, 0, 0, 0.8),
    23px 0 20px -23px rgba(0, 0, 0, 0.8), 0 0 40px rgba(0, 0, 0, 0.1) inset;
    transition: transform 250ms linear;
    &:hover,
    &:focus {
    transform: scale(1.03);
  }
  }
`;

export const CardInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-width: 600px;
`;