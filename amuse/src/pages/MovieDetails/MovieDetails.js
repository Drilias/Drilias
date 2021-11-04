import React from 'react';
import arrow from '../../img/arrow.png';
import { useHistory } from 'react-router';
import { BASE_URL} from '../../constants/Urls/base_url';
import { img_url } from '../../constants/Urls/img_url';
import { goToHome } from '../../route/coordinator';
import useRequestDetails from '../../hooks/useRequestDetails';
import { DetailsButton, InfoBoard, MovieDetailsContainer, PosterBoard} from './styled';

const MovieDetails = ({match}) => {
  const movieDetails = useRequestDetails([],`${BASE_URL}/${match.params.id}?api_key=${process.env.REACT_APP_API_KEY}`)
  const history = useHistory();  
  
  return (
    <div>
      <DetailsButton onClick={()=>goToHome(history)}>
        <img type="image" src={arrow} alt='arrow'/>
      </DetailsButton>
      <MovieDetailsContainer>      
        <PosterBoard>
            <img
            src={`${img_url}${movieDetails.poster_path}`} 
            alt={movieDetails.title}
            />
        </PosterBoard>
        <InfoBoard>
            <h3><em>{movieDetails.title}</em></h3>
            <h5>{movieDetails.tagline}</h5>
            <p>Synopsis: {movieDetails.overview} </p>    
            <p>Release date: {movieDetails.release_date}</p> 
            <p>Vote average: {movieDetails.vote_average}</p> 
            <p>Original language: {movieDetails.original_language}</p>    
        </InfoBoard>       
      </MovieDetailsContainer>
    </div>
  )
}

export default MovieDetails;