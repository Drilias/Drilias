import styled from "styled-components";

export const SearchBoard = styled.div`
  display:flex;
  justify-content: center;
  align-items:center; 
  flex-direction:column;
  margin-top:2rem;
  @media screen and (max-width: 600px) {      
    margin:5rem; 
    width:100vw;
  }   
`  
export const SearchingArea = styled.div`
  display:flex;
  justify-content: center;
  align-items:center;
  background-color:#D8712D; 
  padding:14px;
  border-radius: 10px;  
    input{     
        padding: 8px; 
        margin:2px;   
        border-radius: 5px; 
        border:0;   
        cursor: pointer;
        width: 40rem;
        font-size:17px;
        &:hover{
          opacity: .9;          
        } 
        @media screen and (max-width: 600px) {  
           width:98%; 
        }   
    }
    button{
        padding: 8px;    
        border-radius: 5px; 
        border:0;   
        cursor: pointer;
        background-color:#edba77; 
        img{
          width:20px;
          &:hover{
          opacity: .9;          
        }  
      }
    }
    @media screen and (max-width: 600px) {  
       width:100%;        
    }  
`
