import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const BackBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px;
  border: 1px solid black;
  border-radius: 8px;
  background: none;
  cursor: pointer;
  transition: box-shadow 250ms linear;
  :hover {
    box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.6);
  }
`;

export const InfoTitle = styled.h3`
  margin-bottom: 20px;
`;

export const LinkWrapper = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
`;

export const InfoLink = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  max-width: 100px;
  max-height: 50px;
  border: 1px solid black;
  border-radius: 10px;
  text-decoration: none;
  font-size: 18px;
  font-weight: 500;
  color: black;
  transition: color 250ms linear, border 250ms linear;
  &.active {
    background-color: orangered;
    color: white;
    border: 1px solid orangered;
    box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.6);
  }
  :hover:not(.active) {
    color: orangered;
    border: 1px solid orangered;
  }
`;