import React, { useEffect, useState } from 'react';
import PageTitle from '../../components/PageTitle';
import CandidatesList from './CandidatesList';
import TripInfoCard from './TripInfoCard';
import { ContentContainer } from './styles';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useProtectedPage } from '../../hooks/useProtectedPage';


const TripDetailsPage = (props) => {
    const [trip, setTrip] = useState()
    const params = useParams()

    useProtectedPage()

    const getTripDetail = () => {
        axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/adriana-paiva/trip/${params.tripId}`, {
            headers: {
                auth: window.localStorage.getItem('token')
            }
        }).then((res) => {
            setTrip(res.data.trip)
        })
    }

    useEffect(() => {
        getTripDetail()
    }, [])

    const decideCandidate = (approve, candidateId) => {
        const body = {
            approve: approve
        }

        axios.put(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/adriana-paiva/trips/${params.tripId}/candidates/${candidateId}/decide`, body, {
            headers: {
                auth: window.localStorage.getItem('token')
            }
        }).then(() => {
            getTripDetail()
        })
    }

    return (
        <div>
            <PageTitle title={'Detalhes das viagens'} />
            {trip ? <ContentContainer>
                <TripInfoCard info={trip} />
                <CandidatesList
                    candidates={trip.candidates}
                    decideCandidate={decideCandidate}
                />
            </ContentContainer> : <div>Carregando...</div>}
        </div>
    )
}

export default TripDetailsPage;