import { useEffect, useState } from "react"
import {useSearchParams } from "react-router-dom"
import {Suspense } from "react";

import { getSearchMovie } from "services/movieApi";

import { SearchBar } from "components/SearchBar/SearchBar";
import MoviesList from "components/MoviesList/MoviesList"




const Movies = () => {
    const [movies, setMovies] = useState([])
    const [responseEmpty, setResponseEmpty] = useState(false)
    const [searchParams, setSearchParams] = useSearchParams()
    const searchedMovie = searchParams.get("query") ?? ""
    
    const updateQueryString = query => {
        const nextParams = query !== '' ? { query } : {};
        setSearchParams(nextParams);
      };
    

    useEffect(() => {
        if (!searchedMovie) return
        const controller = new AbortController();
        async function getMoviesById() {
            
            try {
                const response = await getSearchMovie(searchedMovie, controller.signal)
                
                console.log(response)
                setMovies(response)

                if (response.length === 0) {
                    setResponseEmpty(true)
                }
                
            } catch (e) {
                console.error(e)
          }    
       }
       getMoviesById()
       return () => controller.abort()
    },[searchedMovie])

   

    return (
        <>   <Suspense fallback={<div>Loading subpage...</div>}>
            <SearchBar onSubmit={updateQueryString} />
            <MoviesList Movies={movies}/>
            {responseEmpty && <h1 style={{ textAlign: "center" }}>No results were found for {searchedMovie}</h1>}
            </Suspense>
        </>
    )
}

export default Movies