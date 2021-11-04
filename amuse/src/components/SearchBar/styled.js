import styled from "styled-components"

export const SearchContainer = styled.div`
   input{
      background-color: #f2dc9b;     
      width: 18rem;
      height: 30px;      
   }  
` 
export const SearchForm = styled.div`
   display: flex;
   flex-direction: row;
   padding: 0.2rem;
`
export const SearchField = styled.input`
   width: 100%;
   padding: 10px 35px 10px 15px;
   border: none;
   border-radius: 100px;
   outline: none;
`
export const SearchButton = styled.button`
   background: transparent;
   border: none;
   outline: none;
   margin-left: -33px;
   img {
      width: 20px;
      height: 20px;
      object-fit: cover;
   }
`