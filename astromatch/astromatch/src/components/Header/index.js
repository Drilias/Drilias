import React from 'react'
import { HeaderContainer, HeartsButton} from './styles'
import logo from '../../assets/astromatchLogo.png'
import hearts from '../../assets/hearts.png'

export default function Header({ changePage }) {
    return (
        <HeaderContainer>
            <img src={logo} alt='logo'/>            
            <HeartsButton onClick={changePage}>
               <img src={hearts} alt='2 corações'/>
            </HeartsButton>
        </HeaderContainer >
    );
}