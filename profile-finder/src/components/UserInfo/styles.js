import styled from "styled-components";

export const MainContainer = styled.div`   
  padding: 1rem;
  margin:1rem;   
  font-weight:bolder;
  font-size:20px;
  color: black;   
  width:60vw; 
    img{
      width:200px;
      border-radius:50%;
    }
    a{
      text-decoration:none;
      color:#106451;   
    }
    section{
        margin:2rem;
    }
    @media only screen 
    and (min-device-width: 320px) 
    and (max-device-width: 568px)
    and (-webkit-min-device-pixel-ratio: 2) {
      display:flex;
      flex-direction:column;
      justify-content:center;  
      align-items: center;
      width:100%; 
      margin:1rem;
    }  
`
export const PersonalInfo = styled.section`
  display: flex;
  justify-content: space-evenly;
  align-items:center;
  @media only screen 
    and (min-device-width: 320px) 
    and (max-device-width: 568px)
    and (-webkit-min-device-pixel-ratio: 2) {
      display:flex;
      flex-direction:column;
      justify-content:center;  
      align-items: center;
      width:100%; 
    }  
`