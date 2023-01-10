import { useEffect, useState, Suspense } from "react"
import Pagination from "components/Pagination/Pagination"
import { toast } from "react-toastify";

import MoviesList from "components/MoviesList/MoviesList"
import { getTrendMovies } from "services/movieApi"

const customId = "custom-id-yes";

const Home = () => {
    const [page, setPage] = useState(1);
    const [total_pages, setTotal_pages] = useState(2)
    const [responsePagination, setResponsePagination] = useState(false)
    const [trendMovies, setTrendMovies] = useState([])
    const [checkResponse, setCheckResponse] = useState(false)
    const [title, setTitle] = useState(false)
    console.log(trendMovies)    
  

    useEffect(() => {
        async function getMovies() {
            try {
                const response = await getTrendMovies(page)
                setTrendMovies(() => [...response.results])
                setTotal_pages(response.total_pages)
                // console.log(total_pages)
                if (page === 1 ) {
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
    },[page, total_pages, trendMovies.length, checkResponse]   
    )
       
    
    const handleChange = (e, p) => {
        setPage(p);
    };
          
    return (
        <>
            {responsePagination && <Pagination page={page} total_pages={total_pages} onChange={handleChange} />}
            <MoviesList Movies={trendMovies}  />                       
            {responsePagination && <Pagination page={page} total_pages={total_pages} onChange={handleChange} />}
            <Suspense >
            {title && <h1 style={{ textAlign: "center" }}>Sorry, try again later</h1>}
            </Suspense>
        </>        
    )
}

export default Home;