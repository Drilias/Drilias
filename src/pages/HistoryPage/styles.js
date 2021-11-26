import styled from "styled-components";

export const SearchedItemsContainer = styled.div`
  display:flex;
  flex-direction:column;  
  align-items:center; 
  margin-top:3rem;   
  font-size:20px;
  color: black;  
  button{
    background-color:orange;
    width:50px;
    border-radius:5px;
  }  
  @media screen and (max-width: 600px) {      
    margin:5rem; 
    width:100vw;
  }      
`