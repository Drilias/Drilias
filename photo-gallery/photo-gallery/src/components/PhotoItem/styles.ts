import styled from 'styled-components';

export const Container = styled.div`
  background-color: #3484ad;
  border-radius: 10px;
  padding:10px;
  text-align:center;
  img{
    max-width: 100%;     
    border-radius:10px;
  }
  button{
    background-color:#107ab0;
    color: white;
    border:0;
    padding: 8px 16px;
    font-size: 15px;
    border-radius: 10px;    
    cursor: pointer;
    text-align:center;
    &:hover{
      opacity: .9;
    }    
}
`;