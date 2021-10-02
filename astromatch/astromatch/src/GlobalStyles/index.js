import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components'


export const GlobalStyle = createGlobalStyle`
  *, *:after, *:before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    padding: 0;
    margin: 0;
    background-color: #CCCCCC;
  }
  button {
    box-sizing: content-box;
  }
`

export const PageContainer = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Card = styled.div`
  width: 500px;
  display: grid;
  grid-template-rows: 100px 650px;
  border-radius: 12px;
  border: 1px solid #CCCCCC;
  background: white;
`