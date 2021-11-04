import React from 'react';
import { Typography, Button } from '@material-ui/core';
import { Link } from "react-router-dom";
import { ButtonContainerLogin, ButtonContainerAdmin, TextContainer } from './styles';


const HomePage = () => {
    return (
        <div>
            <ButtonContainerLogin>
                <Link to={'/login'}>
                    <Button variant={'outlined'} color={'primary'}>Login</Button>
                </Link>
            </ButtonContainerLogin>
            <TextContainer>
                <Typography variant='h1' align={'center'} gutterBottom>LabeX</Typography>
                <Typography variant='h4' gutterBottom>EXPLORE O UNIVERSO</Typography>
            </TextContainer>
            <ButtonContainerAdmin>
                <Link to={'/viagens/lista'}>
                    <Button variant={'outlined'} color={'primary'}>Viagens</Button>
                </Link>
            </ButtonContainerAdmin>
        </div>
    )
}

export default HomePage;