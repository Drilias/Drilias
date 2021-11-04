import styled from 'styled-components'

export const Paginator = styled.ul`
   display:flex; 
   flex-wrap: wrap; 
   align-items: center;
   justify-content: center; 
   width:95vw; 
`
export const PaginatorNumbers = styled.li`
   list-style: none;
   font-weight: bold;
   color: #381447;    
`
export const PageLink = styled.a`
   padding:0.3rem;  
   text-decoration: none;
   background-color: #5338ab;
   margin:0.2rem;
   color: #fcba03; 
   :hover{
      color:white;
      background-color: #120826;
      cursor: pointer;
   }
   :active{
      background-color: #120826;
   }
`