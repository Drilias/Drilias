import React, { useContext} from "react";
import MovieCard from '../../components/MovieCard/MovieCard';
import Header from "../../components/Header/Header";
import { GlobalStateContext } from "../../global/GlobalStateContext";
import Pagination from "../../components/Pagination/Pagination";
import {BASE_URL} from "../../constants/Urls/base_url";
import {HomeContainer} from "./styled";
import axios from "axios";

const Home = () => {   
  const {setMovies, currentPage, setCurrentPage, totalResults, setLoading} = useContext(GlobalStateContext); 
  
  const nextPage = async (pageNumber) => {
    setLoading(true)
    await axios
      .get(`${BASE_URL}/popular?api_key=${process.env.REACT_APP_API_KEY}&page=${pageNumber}`)
      .then(response => {
         setMovies(response.data.results)
         setCurrentPage(pageNumber) 
         setLoading(false)
      })      
      .catch(error => {
         alert(error.response.data.message)
      })     
  }

  const numberPages = Math.floor(totalResults/5)   

  return (
    <HomeContainer>
      <Header/>        
      <MovieCard/>        
        {totalResults > 20? 
          <Pagination 
            pages={numberPages} 
            nextPage={nextPage}
            currentPage={currentPage}
          />:''
        }
    </HomeContainer>
  );
};

export default Home;

