import { useEffect, useState, Suspense } from "react"
import Pagination from "components/Pagination/Pagination"
import { toast } from "react-toastify";

import MoviesList from "components/MoviesList/MoviesList"
import { getTrendMovies } from "services/movieApi"
import { useSearchParams } from 'react-router-dom';

const customId = "custom-id-yes";

const Home = () => {
    const [total_pages, setTotal_pages] = useState(2)
    const [responsePagination, setResponsePagination] = useState(false)
    const [trendMovies, setTrendMovies] = useState([])
    const [checkResponse, setCheckResponse] = useState(false)
    const [title, setTitle] = useState(false)
    const [searchParams, setSearchParams] = useSearchParams();
     const pageParam = Number(searchParams.get('page') ?? 1);

    console.log(trendMovies)    
  

    useEffect(() => {
        async function getMovies() {
            try {
                const response = await getTrendMovies(pageParam)
                setTrendMovies(() => [...response.results])
                setTotal_pages(response.total_pages)
                // console.log(total_pages)
                if (pageParam === 1 ) {
                toast.success(`We found total results ${response.total_results}`
                , { toastId: customId, position: "top-left", });}
                
                if (trendMovies.length !== 0) {
                    return setCheckResponse(true);                                 
                  }
                if (response.total_pages !== 0) {
                    setResponsePagination(true)
                }
                if (response.total_pages === 0) {
                    setResponsePagination(false)
                }                
            } catch (e) {
                console.error(e)
                if (!checkResponse){
                    toast.error('No respoce from server'        
                    ,        { toastId: customId });
                    setTitle(true);
                }
          }    
       }
        getMovies()
        return 
    },[pageParam, total_pages, trendMovies.length, checkResponse]   
    )
               
    return (
        <>
            {responsePagination && <Pagination currentPage={pageParam-1} total_pages={total_pages} setPage={setSearchParams} />}
            <MoviesList Movies={trendMovies}  />                       
            {responsePagination && <Pagination currentPage={pageParam-1} total_pages={total_pages} setPage={setSearchParams} />}
            <Suspense >
            {title && <h1 style={{ textAlign: "center" }}>Sorry, try again later</h1>}
            </Suspense>
        </>        
    )
}

export default Home;