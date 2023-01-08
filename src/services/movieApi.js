import axios from "axios";

const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = 'f87210516a7f6fda7a5c975f08793382';
const setLanguage = 'en-US'

// useEffect(() => {
//     axios
//       .get(`https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}`)
//       .then(response => {
//         setVideos(response.data.results);
//         console.log(response.data.results);
//       });
//   }, []);

export const getTrendMovies = async (page = 1, signal) => {
   
    const response = await axios.get(
        `${BASE_URL}trending/movie/day`, {
            signal,
            params: {
              api_key: API_KEY,
              language: setLanguage,
              page: page,
            },
          });   
    console.log(response);
    return response.data;    
} 

export const getMovieDetails = async id => {
    const response = await axios.get(`${BASE_URL}movie/${id}`, {
      params: {
        api_key: API_KEY,
        language: 'en-US',
      },
    });
    return response.data;
  };
  
  export const getMovieCredits = async id => {
    const response = await axios.get(`${BASE_URL}movie/${id}/credits`, {
      params: {
        api_key: API_KEY,
        language: 'en-US',
      },
    });
    return response.data.cast;
  };
  
  export const getMovieReviews = async id => {
    const response = await axios.get(`${BASE_URL}movie/${id}/reviews`, {
      params: {
        api_key: API_KEY,
        language: 'en-US',
      },
    });
    return response.data.results;
  };
  
  export const getSearchMovie = async query => {
    const response = await axios.get(`${BASE_URL}search/movie`, {
      params: {
        api_key: API_KEY,
        language: 'en-US',
        query: query,
      },
    });
    return response.data.results;
  };
