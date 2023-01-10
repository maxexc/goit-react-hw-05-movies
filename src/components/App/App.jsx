import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import { Toaster } from "react-hot-toast";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { SharedLayout } from "components/SharedLayout/SharedLayout";

const Loader= lazy(() => import("components/Loader/Loader"));
const Home = lazy(() => import('pages/Home/Home.jsx'));
const Movies = lazy(() => import("pages/Movies/Movies"));
const MovieDetails = lazy(() => import("pages/MovieDetails/MovieDetails"));
const Reviews = lazy(() => import("components/Reviews/Reviews"));
const Cast = lazy(() => import("components/Cast/Cast"));
const NotFound = lazy(() => import("pages/NotFound/NotFound"));



export const App = () => {
  return (
    <>
      <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<SharedLayout/>}>
        <Route index element={<Home/>}/>
        <Route path="movies" element={<Movies />}/>
        <Route path="movies/:movieId" element={<MovieDetails/>}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<NotFound />}/>
        </Route>  
      </Routes>
      </Suspense>
      
      <Toaster  position="top-center" />
      <ToastContainer autoClose={2000} position="top-center" theme="light" />
    </>
  );
};

// <Suspense fallback={<div>Loading...</div>}></Suspense> 
