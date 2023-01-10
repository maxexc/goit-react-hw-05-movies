import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const BackBtn = styled(Link)`
  position: relative;
  width: 90px;
  display: flex;
  gap: 2px;
  justify-content: center;
  align-items: center;
  padding: 8px;
  font-size: 18px;
  font-weight: 600;
  border: 1px solid black;
  border-radius: 18px;
  background: none;
  box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.4);
  text-decoration: none;
  cursor: pointer;
  color: rgb(200, 10, 10);
  transition: box-shadow 150ms linear, transform 250ms ease-in-out;
  &:before {
    content: "";
    background: linear-gradient(90deg, rgba(255, 255, 255, .1), rgba(255, 255, 255, .5));
    height: 50px;
    width: 50px;
    position: absolute;
    top: -8px;
    left: -75px;
    transform: skewX(-45deg);
    }
  
  &:hover {
    box-shadow: 0px 3px 6px 0px rgba(0, 0, 0, 0.6);
    background: rgb(200, 10, 10);
    border: 1px solid rgb(200, 10, 10);
    color: #fff;
  }
  &:hover:before {
    left: 150px;
    transition: .5s ease-in-out;
    }
`;

export const MovieTitle = styled.h3`
  margin-bottom: 20px;
`;

export const LinkWrapper = styled.div`
  display: flex;
  gap: 75px;
  /* gap: 10px; */
  margin-bottom: 20px;
  padding: 10px 0;
  margin-right: 14px;
  border-bottom: 1px rgb(200, 10, 10) solid;
  border-top: 1px rgb(200, 10, 10) solid;
`;

export const MovieLink = styled(NavLink)`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px;
  min-width: 80px;
  max-height: 50px;
  border: 1px solid black;
  border-radius: 22px;
  text-decoration: none;
  font-size: 18px;
  font-weight: 500;
  color: black;
  box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.4);
  transition: box-shadow 150ms linear, color 250ms linear, 
  border 250ms linear, transform 250ms ease-in-out;
  &:before {
    content: "";
    background: linear-gradient(90deg, rgba(255, 255, 255, .1), rgba(255, 255, 255, .5));
    height: 50px;
    width: 50px;
    position: absolute;
    top: -8px;
    left: -65px;
    transform: skewX(-45deg);
    }
    &:hover:before {
    left: 150px;
    transition: .5s ease-in-out;
    }
  &.active {
    background-color: rgb(200, 10, 10);
    color: white;
    border: 1px solid rgb(200, 10, 10);    
    box-shadow: 0px 3px 6px 0px rgba(0, 0, 0, 0.6);  
  }
  :hover:not(.active) {
    color: rgb(200, 10, 10);
    border: 1px solid rgb(200, 10, 10);
  }
`;