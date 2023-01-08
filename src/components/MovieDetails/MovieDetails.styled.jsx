import styled from 'styled-components';

export const CardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin-top: 10px;
  margin-bottom: 30px;
  > img {
    width: 280px;
    border-radius: 8px;
  }
`;

export const CardInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-width: 600px;
`;