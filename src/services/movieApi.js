import axios from "axios";

const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = 'f87210516a7f6fda7a5c975f08793382';
const setLanguage = 'en-US'

export const getTrendMovies = async (page = 1) => {
  try { 
    const response = await axios.get(
        `${BASE_URL}trending/movie/day`, {
            params: {
              api_key: API_KEY,
              language: setLanguage,
              page: page,
            },
          });   
    console.log(response);
    return response.data; 
  } catch (err) {
    throw new Error(err.message);
  }   
} 

export const getMovieDetails = async id => {
  try { 
    const response = await axios.get(`${BASE_URL}movie/${id}`, {
      params: {
        api_key: API_KEY,
        language: setLanguage,
      },
    });
    return response.data;
  } catch (err) {
    throw new Error(err.message);
  }  
};
  
export const getMovieCredits = async id => {
  try { 
    const response = await axios.get(`${BASE_URL}movie/${id}/credits`, {
      params: {
        api_key: API_KEY,
        language: setLanguage,
      },
    });
    return response.data.cast;
  } catch (err) {
    throw new Error(err.message);
  } 
};
  
export const getMovieReviews = async id => {
  try { 
    const response = await axios.get(`${BASE_URL}movie/${id}/reviews`, {
      params: {
        api_key: API_KEY,
        language: setLanguage,
      },
    });
    return response.data.results;
  } catch (err) {
    throw new Error(err.message);
  }
};
  
export const getSearchMovie = async (query, page = 1) => {    
  try { 
    const response = await axios.get(`${BASE_URL}search/movie`, {
      params: {
        api_key: API_KEY,
        language: setLanguage,
        query: query,
        page: page,
      },
    });
    console.log(response.data);    
    return response.data;
  } catch (err) {
    throw new Error(err.message);
  }
};
