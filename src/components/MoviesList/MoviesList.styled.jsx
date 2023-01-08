import styled from "styled-components";
import { Link } from "react-router-dom"

export const MoviesList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, 280px);
  justify-content: center;
  gap: 20px;
  padding: 20px 0;
 /* display: grid;
  max-width: calc(100vw - 48px);
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  grid-gap: 16px;
  margin-top: 0;
  margin-bottom: 0;
  padding: 16px 0 0 0;
  list-style: none;
  margin-left: auto;
  margin-right: auto; */
`
export const Poster = styled.img`
    width: 280px;
    height: 420px;
    /* margin-left: -2px; */
    margin-bottom:10px;
    object-fit: cover;
    overflow: hidden;
`

export const StyledLink = styled(Link)`
    object-fit: cover;
    overflow: hidden;
    /* border: 1px solid black; */
    width: 282px;  
    display: flex;
    flex-direction:column;
    border-radius: 13px;
    /* margin-left: -0.5px;
    margin-top: -0.2px; */
    /* align-items:center; */
    /* text-decoration:none; */
    /* text-align: center; */
    color:black;
    /* max-width:200px; */
    > span {
    padding-left: 10px;
    padding-bottom: 3px;
  }
    
`
export const ListItem = styled.li`
    margin: 0 auto;
    border: 1px solid gray;
    width: 279px;
  border-radius: 14px;
  transition: box-shadow 250ms ease-in-out, border 150ms ease-in-out,transform 250ms ease-in-out ;
  :hover{
    box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.6);
    /* border: 1px solid orangered; */
    transform: scale(1.05);
    /* margin-left: -0.5px;
    margin-top: -0.2px; */
  }
    > a {
        text-overflow: clip;
    text-decoration: none;
  }
  

`