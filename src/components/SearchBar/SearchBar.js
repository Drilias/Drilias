import React, {useContext} from 'react';
import { SearchContainer, SearchForm, SearchField, SearchButton } from './styled';
import searchIcon from '../../img/search.png';
import { GlobalStateContext } from '../../global/GlobalStateContext';

const SearchBar = () => {  
   const { setSearch } = useContext(GlobalStateContext);    
   
   return (
        <SearchContainer>
           <SearchForm action="/">                      
              <SearchField 
                 type="text"
                 placeholder="Search by title"      
                 onChange={ event => setSearch(event.target.value)}                              
              />            
              <SearchButton type="submit">
                 <img src={searchIcon} alt="search icon"/>
              </SearchButton>
           </SearchForm>                    
        </SearchContainer>
    )
}

export default SearchBar

