import React from 'react';
import { Button, List, ListItem, ListItemText, ListItemLink } from '@material-ui/core';
import { Link } from 'react-router-dom';
import PageTitle from '../../components/PageTitle';
import { TripListsContainer } from './styles'
import { useTripsList } from '../../hooks/useTripsList';
import { useProtectedPage } from '../../hooks/useProtectedPage';

const ListTripsPage = () => {
    const trips = useTripsList()
    useProtectedPage()

    return (
        <TripListsContainer>
            <PageTitle title={'Lista de Viagens'} />
            <Link to={"/viagens/criar"} gutterBottom>
                <Button variant={'outlined'} color={'primary'}>Criar Viagem</Button>
            </Link>

            <List component="nav">
                {trips ? trips.state.map((trip) => {
                    return <Link to={`/viagens/detalhes/${trip.id}`}>
                        <ListItem button>
                            <ListItemText primary={trip.name} />
                        </ListItem>
                    </Link>
                }) : <div>Carregando...</div>}
            </List>
        </TripListsContainer>
    )
}

export default ListTripsPage;
