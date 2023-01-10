import { useEffect, useState } from "react"
import {useSearchParams } from "react-router-dom"
import {Suspense } from "react";

import { getSearchMovie } from "services/movieApi";

import { SearchBar } from "components/SearchBar/SearchBar";
import MoviesList from "components/MoviesList/MoviesList"
import Pagination from "components/Pagination/Pagination";
import { toast } from "react-toastify";

const Movies = () => {
    const [page, setPage] = useState(1);
    const [total_pages, setTotal_pages] = useState(null)
    const [movies, setMovies] = useState([])
    const [responseEmpty, setResponseEmpty] = useState(false)
    const [responsePagination, setResponsePagination] = useState(false)
    const [searchParams, setSearchParams] = useSearchParams()
    const searchedMovie = searchParams.get("query") ?? ""
    
    const updateQueryString = query => {
        const nextParams = query !== '' ? { query } : {};
        setSearchParams(nextParams);
      };
    
    const customId = "custom-id-yes";

    useEffect(() => {
        if (!searchedMovie) return
        async function getMoviesById() {
            
            try {
                const response = await getSearchMovie(searchedMovie, page)
                
                console.log(response)
                setMovies(response.results)
                setTotal_pages(response.total_pages)
                console.log(total_pages)
                
                if (page === 1) {
                toast.success(`${response.total_results} matches found for your query`
                , { toastId: customId, position: "top-left", })
                }
                if (response.total_pages === 0) {
                    setResponseEmpty(true)
                }
                if (response.total_pages !== 0) {
                    setResponsePagination(true)
                }
                if (response.total_pages === 0) {
                    setResponsePagination(false)
                }
                
            } catch (e) {
                console.error(e)
          }    
       }
       getMoviesById()
       return 
    },[searchedMovie, page, total_pages])

    const handleChange = (e, p) => {
        setPage(p);
    };

    return (
        <>   
            <Suspense fallback={<div>Loading subpage...</div>}>
                <SearchBar onSubmit={updateQueryString} />
                {responsePagination && <Pagination page={page} total_pages={total_pages} onChange={handleChange} />}
                <MoviesList Movies={movies}/>
                {responseEmpty && <h1 style={{ textAlign: "center" }}>No results were found for {searchedMovie}</h1>}
                {responsePagination && <Pagination page={page} total_pages={total_pages} onChange={handleChange} />}
            </Suspense>
        </>
    )
}

export default Movies