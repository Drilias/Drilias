import styled from "styled-components";

export const SelectContainer = styled.form`
  display:flex;
  flex-direction:row;
  padding: 0.2rem;  
`
export const SelectField = styled.select`
   width: 100%;
   padding: 5px 10px 5px 7px;
   border: none;
   border-radius: 3px;
   outline: none;
   color:#726fa3;
   background-color:#f2dc9b;  
`
export const RefreshButton = styled.button`
   background-color:#f2dc9b;
   border:none;
   border-radius: 3px;
   outline: none;
   img{
     width:30px;
     
   }
`