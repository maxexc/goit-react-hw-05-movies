import { Route, Routes } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const API_KEY = '2f44dbe234f7609a16da7327d83f3eb3';

function App() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    axios
      .get(`https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}`)
      .then(response => {
        setVideos(response.data.results);
        console.log(response.data.results);
      });
  }, []);


  return (
    <div>
      {videos.map(video => (
        <div key={video.id}>
          <h2>{video.title}</h2>
          <img src={`https://image.tmdb.org/t/p/w500/${video.poster_path}`} alt={video.title} />
          <p>{video.overview}</p>
        </div>
      ))}
    </div>
  );
}

export default App;




// export const App = () => {
//   return (
//     <div
//       style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         color: '#010101'
//       }}
//     >
//       React homework template
//     </div>
//   );
// };
