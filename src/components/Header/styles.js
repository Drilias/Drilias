import styled from "styled-components";

export const HeaderArea = styled.header`
  display:flex;
  justify-content:space-evenly;   
  background-color:#ECA44F;
  padding:2rem;
  height:10vh;
  width:100vw;
    @media only screen 
    and (min-device-width: 320px) 
    and (max-device-width: 568px)
    and (-webkit-min-device-pixel-ratio: 2) {
      display:flex;
      justify-content:space-between;  
      width:100vh; 
      height:5rem;
      padding:2rem;
    }
`
export const LogoContainer = styled.div`  
   display: flex;
   align-items: center;
   img{
       width:83px;
       height:50px;  
       opacity:.8; 
      }  
    @media only screen 
    and (min-device-width: 320px) 
    and (max-device-width: 568px)
    and (-webkit-min-device-pixel-ratio: 2) {
      padding:1rem;
      width:100%;      
    }     
`
export const HeaderButton = styled.button` 
  display:flex; 
  align-items:center;
  padding:0;
  border: none;
  border-radius: 10px;
  cursor:pointer; 
  background-color:#ECA44F; 
    :hover{
      opacity:.7; 
    }  
`
export const HistoryContainer = styled.div`  
   display: flex;
   align-items: center;
   img{
       width:60px;
       height:50px;
      }   
    @media only screen 
      and (min-device-width: 320px) 
      and (max-device-width: 568px)
      and (-webkit-min-device-pixel-ratio: 2) {
        padding:1rem;
        width:100%;      
    }         
`

