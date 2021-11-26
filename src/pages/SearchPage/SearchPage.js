import React, {useState} from 'react';
import axios from 'axios';
import { SearchBoard, SearchingArea } from './styles';
import UserInfo from '../../components/UserInfo/UserInfo';
import magnifier from "../../assets/magnifier.png";
import { BaseUrl } from '../../constant/BaseUrl';

const SearchPage = () => {
    const [profile, setProfile] = useState({});
    const [username, setUsername] = useState("");
    const [repositories, setRepositories] = useState([]);    

    const onChangeHandler = e => {
       setUsername(e.target.value);      
    }

    const submitHandler = e => {
        e.preventDefault();
        getProfile();
        getRepos();
        getHistory();
    }
    
    const getProfile = async () => { 
        await axios.get(`${BaseUrl}/${username}`)
           .then((response) => {
                setProfile(response.data)                 
           }).catch((error) => {
                alert(error.response.data.message)
           });        
    }    

    const getRepos = async () => { 
        await axios.get(`${BaseUrl}/${username}/repos`)
           .then((response) => {
                setRepositories(response.data)
           }).catch((error) => {
                alert(error.response.data.message)
           });        
    }   
    
    let searchedItems = JSON.parse(localStorage.getItem('searchedItems')) || [];

    const getHistory = () => {
        const index = searchedItems.indexOf(username)
        const existsInLocalStorage = index !== -1
            if(existsInLocalStorage){
                searchedItems.splice(index, 0)
            } else{
                searchedItems.push(username)
            }        
        localStorage.setItem('searchedItems', JSON.stringify(searchedItems))
    }   
    
    return (                   
        <SearchBoard>  
            <div>       
                <SearchingArea autoComplete="off">
                    <div>
                        <input 
                            type="text" value={username} 
                            onChange={onChangeHandler}                         
                            placeholder="Type a github username"
                        />              
                    </div>             
                    <div>
                        <button type="submit" onClick={submitHandler}>
                            <img src={magnifier} alt="lupa"/>
                        </button>
                    </div>   
                </SearchingArea>   
            </div>        
            <UserInfo profile={profile} repositories={repositories}/>                 
        </SearchBoard>     
    )
}

export default SearchPage;
