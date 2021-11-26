import React from 'react';
import logo from "../../assets/logo.png";
import history from "../../assets/history.png";
import { HeaderArea, HeaderButton, HistoryContainer, LogoContainer } from './styles';

const Header = ({ changePage }) => {
    return ( 
      <HeaderArea>
          <LogoContainer>
              <HeaderButton onClick={() => changePage('profileSearcher')}>
                  <img src={logo} alt='Github logo'/>  
                  <h2>Profile Searcher</h2>  
              </HeaderButton>   
          </LogoContainer>      
          <HistoryContainer>
              <HeaderButton onClick={() => changePage('searcherHistory')}>
                  <img src={history} alt='history icon'/>  
                  <h2>History</h2>  
              </HeaderButton>   
          </HistoryContainer>  
      </HeaderArea>
    )
}

export default Header;
