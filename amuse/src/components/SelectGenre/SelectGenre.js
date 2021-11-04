import React, {useContext} from 'react';
import { SelectField, SelectContainer, RefreshButton} from './styled';
import { GlobalStateContext } from "../../global/GlobalStateContext";
import { goToHome } from '../../route/coordinator';
import { useHistory } from 'react-router';
import reload from '../../img/reload.png';

const SelectGenre = () => {
    const { setCurrentGenre} = useContext(GlobalStateContext);    
    const history = useHistory();  
    
    const genres = [
        {"id":28,"name":"Action"},{"id":12,"name":"Adventure"},{"id":16,"name":"Animation"},
        {"id":35,"name":"Comedy"},{"id":80,"name":"Crime"},{"id":99,"name":"Documentary"},
        {"id":18,"name":"Drama"},{"id":10751,"name":"Family"},{"id":14,"name":"Fantasy"},
        {"id":36,"name":"History"},{"id":27,"name":"Horror"},{"id":10402,"name":"Music"},
        {"id":9648,"name":"Mystery"},{"id":10749,"name":"Romance"},{"id":878,"name":"Science Fiction"},
        {"id":10770,"name":"TV Movie"},{"id":53,"name":"Thriller"},{"id":10752,"name":"War"},{"id":37,"name":"Western"}
    ];    

    const onChangeGenre = (event) => {
       setCurrentGenre(event.target.value)       
    }
    
    return (
        <SelectContainer>         
            <SelectField onChange={onChangeGenre} >
                <option disable selected>Select by genre:</option>
                {genres.map(genre=>(                 
                   <option key={genre.id} 
                    value={genre.id}                                                                                      
                    >                   
                      {genre.name}                                         
                   </option>                   
                ))}                                   
            </SelectField>
            <RefreshButton onClick={()=>goToHome(history)}>
               <img type="image" src={reload} alt='reload button'/>
            </RefreshButton>
        </SelectContainer>
    )
}

export default SelectGenre;
