import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 15px;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  /* align-items: center; */
  /* gap: 12px; */
  padding: 8px;
  margin-bottom: 16px;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);  
`;

export const Navigation = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  font-weight: bold;
  > span{
    display: flex;
    gap: 12px;
  }
`;

export const Link = styled(NavLink)`
  font-size: 20px;
  color: black;
  &.active {
    color: rgb(200, 10, 10);
  }
`;