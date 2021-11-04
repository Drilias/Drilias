import React, {useContext} from 'react';
import { img_url } from '../../constants/Urls/img_url';
import {PosterBoard, Poster, ContainerCard} from './styled';
import { GlobalStateContext } from "../../global/GlobalStateContext";
import { Link } from 'react-router-dom';

const MovieCard = () => {      
    const { filteredMovies } = useContext(GlobalStateContext);  
    
    const movieFrames = filteredMovies && filteredMovies.map((movie) => {       
    return (
        <PosterBoard>
            <Poster             
                key={movie.id}                       
                src={`${img_url}${movie.poster_path}`} 
                alt={movie.title}
            />    
            <Link 
                to={`/movie/${movie.id}`} 
                style={{ textDecoration: 'none', color:'#fcba03', 
                justifyContent:'center', display:'flex'}}>              
                <button>View details</button>                 
            </Link>
        </PosterBoard>       
    )});

    return(
        <ContainerCard>
           {movieFrames}
        </ContainerCard>
    )
};

export default MovieCard;
