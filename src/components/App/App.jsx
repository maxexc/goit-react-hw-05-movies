import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import { SharedLayout } from "components/SharedLayout/SharedLayout";
import Movies from "pages/Movies/Movies";
import MovieDetails from "pages/MovieDetails/MovieDetails";
import Cast from "components/Cast/Cast";
import Reviews from "components/Reviews/Reviews";

const Home = lazy(() => import('pages/Home/Home.jsx'));

export const App = () => {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<SharedLayout/>}>
        <Route index element={<Home/>}/>
        <Route path="movies" element={<Movies />}/>
        <Route path="movies/:movieId" element={<MovieDetails/>}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
        </Route>
        {/* <Route path="*" element={<NotFound />}/> */}
        </Route>  
        </Routes>
        </Suspense>
    </>
  );
};




// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const API_KEY = 'f87210516a7f6fda7a5c975f08793382';

// function App() {
//   const [videos, setVideos] = useState([]);

//   useEffect(() => {
//     axios
//       .get(`https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=de`)
//       .then(response => {
//         setVideos(response.data.results);
//         console.log(response.data.results);
//       });
//   }, []);


//   return (
//     <div>
//       {videos.map(video => (
//         <div key={video.id}>
//           <h2>{video.title}</h2>
//           <img src={`https://image.tmdb.org/t/p/w500/${video.poster_path}`} alt={video.title} />
//           <p>{video.overview}</p>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default App;




// // export const App = () => {
// //   return (
// //     <div
// //       style={{
// //         height: '100vh',
// //         display: 'flex',
// //         justifyContent: 'center',
// //         alignItems: 'center',
// //         fontSize: 40,
// //         color: '#010101'
// //       }}
// //     >
// //       React homework template
// //     </div>
// //   );
// // };
