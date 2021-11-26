import React, {useEffect, useState} from 'react';
import { MainContainer } from '../../components/UserInfo/styles';
import { SearchedItemsContainer } from './styles';

const HistoryPage = () => {   
    const [searchedItems, setSearchedItems] = useState([]);
      
    useEffect(() => {
        let searchedList = JSON.parse(localStorage.getItem('searchedItems')); 
        
        if(searchedList)  {
              setSearchedItems(searchedList); 
            }
    }, []);       
    
    const searchedUsernames= searchedItems && searchedItems.map((items) => 
       <li>{items}</li>
    )

    return (
        <MainContainer>
            <SearchedItemsContainer>
                <h3>Profiles searched:</h3><br/> 
                <p>{searchedUsernames}</p>                                
            </SearchedItemsContainer>          
        </MainContainer>
    )
}

export default HistoryPage;
