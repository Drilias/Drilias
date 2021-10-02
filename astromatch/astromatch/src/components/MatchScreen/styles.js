import styled from 'styled-components'

export const ListContainer = styled.main`
  display: grid;
  grid-auto-rows: 80px;
  padding: 10px 20px;
  grid-gap: 10px;
  overflow-x: auto;
  background-color:pink;
  border-bottom-left-radius:20px;
  border-bottom-right-radius:20px;
`
export const ListItem = styled.article`
  display: flex;
  justify-content: flex-start;
  padding: 4px 10px;
  & > h3 {
      align-self: center;
      padding-left: 15px;
  }
  & > div {
    width: 70px;
    & > img {
      border-radius: 50%;
      height: 100%;
      width: 100%;
      object-fit: cover;
    }
  }
`