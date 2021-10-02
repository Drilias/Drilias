import styled from 'styled-components'

export const HeaderContainer = styled.header`
  background-color: pink;
  display: flex;
  justify-content: space-evenly;
  align-items:  center;
  padding: 10px 10px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  border-top-left-radius:20px;
  border-top-right-radius:20px;
  img{
    width: 260px;
    padding:0;
  }
`
export const HeartsButton = styled.button`  
  border: none;
  border-radius: 20px;
  cursor:pointer; 
  background-color: pink; 
  :hover{
    background-color:#f5710c;
  }
  img{
    width: 60px;    
  }
`
