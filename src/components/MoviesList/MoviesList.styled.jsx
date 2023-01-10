import styled from "styled-components";
import { Link } from "react-router-dom"

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, 280px);
  justify-content: center;
  gap: 20px;
  padding: 20px 0;
  /* background-color: #fff; */
`
export const MovieItem = styled.li`
    margin: 0 auto;
    border: 1px solid lightgray;
    width: 280px;
  border-radius: 13px;
  transition: box-shadow 250ms ease-in-out, border 150ms ease-in-out,transform 250ms ease-in-out ;
  :hover{
    box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.6);
    transform: scale(1.05);
  }
    > a {
        text-overflow: clip;
    text-decoration: none;
  }
`
export const StyledLink = styled(Link)`
    object-fit: cover;
    overflow: hidden;
    width: 280px;  
    display: flex;
    flex-direction:column;
    border-radius: 13px;
    color:black;
    > span {
    padding-left: 10px;
    padding-bottom: 3px;
  }    
`
export const Poster = styled.img`
    width: 280px;
    height: 420px;
    margin-bottom:10px;
    object-fit: cover;
    overflow: hidden;
`
