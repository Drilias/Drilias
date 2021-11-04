import React, { useEffect, useState } from "react";
import { GlobalStateContext } from "./GlobalStateContext";
import {BASE_URL} from "../constants/Urls/base_url";
import axios from "axios";

export const GlobalState = (props) => {
  const [movies, setMovies] = useState([]);  
  const [loading, setLoading] = useState(false); 
  const [search, setSearch] = useState(''); 
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);  
  const [totalResults, setTotalResults] = useState(100);     
  const [currentGenre, setCurrentGenre] = useState([]);    
 
  useEffect(() => { 
    getMovies();
  }, []);
  
  useEffect(() => {
    setFilteredMovies(
      movies && movies.filter(movie => {
        return movie.title.toLowerCase().includes(search.toLowerCase())
      }))   
  },[search, movies]);   

  useEffect(() => {
    getMoviesByGenre(currentGenre);
  }, [currentGenre]);

  const getMovies = () => {
      setLoading(true)
      axios
        .get(`${BASE_URL}/popular?api_key=${process.env.REACT_APP_API_KEY}`)
        .then(response => {
          setMovies(response.data.results)
          setLoading(false)
        })      
        .catch(error => {
          alert(error.response.data.message)
        })
  };  
  
  const getMoviesByGenre = (currentGenre) => { 
    setLoading(true);   
    axios
      .get(`${BASE_URL}/popular?api_key=${process.env.REACT_APP_API_KEY}&with_genres=${currentGenre}`)
      .then(response => {
         setMovies(response.data.results)  
         setLoading(false);  
      })
      .catch(error => {
        alert(error.response.data.message)
      })    
  };  

  if(loading){
    return <p>Loading movies...</p>
  };   
  
  const data = {
    movies,
    setMovies,     
    loading, 
    setLoading,
    search,
    setSearch,
    filteredMovies,
    setFilteredMovies, 
    currentPage,
    setCurrentPage,
    totalResults,  
    setTotalResults,   
    currentGenre,
    setCurrentGenre    
  };  

  return (
    <GlobalStateContext.Provider value={data}>     
      {props.children}            
    </GlobalStateContext.Provider>
  );
}; 

