import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

import { List } from './Cast.styled';
import Loader from 'components/Loader/Loader';

import { getMovieCredits } from 'services/movieApi';

const customId = "custom-id-yes";

export default function Cast() {
  const [casts, setCasts] = useState([]);
  const [error, setError] = useState(false);
  const [loader, setLoader] = useState(true);
  const { movieId } = useParams();

  useEffect(() => {
    async function fetchCasts() {
      try {
        const casts = await getMovieCredits (movieId);
        if (casts.length === 0) {
          setError(true);
          return toast.warn('Ooops, there are no cast! Please, try again later',
          {toastId: customId});
        }
        setCasts(casts);
      } catch (error) {
        console.log(error);
      } finally {
        setLoader(false);
      }
    }
    fetchCasts();
  }, [movieId]);

  return (
    <>
      {casts && (
        <List>
          {casts.map(cast => (
            <li key={cast.cast_id}>
              <img
                src={
                  cast.profile_path
                    ? `https://image.tmdb.org/t/p/w500${cast.profile_path}`
                    // : 'https://via.placeholder.com/100x150?text=Photo+Not+Found'
                    : 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/330px-No-Image-Placeholder.svg.png'
                }
                alt={cast.name}
                />
              <h4>{cast.name}</h4>
              <p>Character: {cast.character}</p>
            </li>
          ))}
        </List>
      )}
      <ToastContainer autoClose={2000} position="top-center" theme="light" />
      {error && <p>We don't have cast for this movie </p>}
      {loader && <Loader />}
    </>
  );
}