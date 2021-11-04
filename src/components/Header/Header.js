import React from 'react';
import {HeadContainer, Title, TitleContainer} from './styled';
import SearchBar from '../SearchBar/SearchBar';
import SelectGenre from '../SelectGenre/SelectGenre';

const Header = () => { 
   return (
     <HeadContainer>
        <TitleContainer>              
           <Title>Popular Movies</Title>               
        </TitleContainer>
        <SearchBar/>  
        <SelectGenre/>                 
     </HeadContainer>
    )
}

export default Header;
