import styled from "styled-components";

export const PosterBoard = styled.div`
  display: flex;
  flex-direction: column;  
  max-height:340px; 
  background-color: #120826;
  margin-top:1rem;  
  button{
    color: #fcba03;
    border:none;   
    background-color:#120826;
    height:30px;
    font-size:15px;  
    :hover{
      background-color:#6336b3
    }
  } 
`
export const Poster = styled.img`
  object-fit: contain;
  width:100%;
  max-height:310px;
  margin-right: 1.8rem;  
  transition:transform 450ms;
    :hover{
      transform: scale(1.08);   
    }   
`
export const ContainerCard = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 2%;  
  padding-bottom:1rem;  
`