import { useState, useEffect, Suspense } from 'react';
import { Outlet, useParams, useLocation } from 'react-router-dom';
import {AiFillBackward} from 'react-icons/ai'
import { MovieCard } from 'components/MovieDetails/MovieDetails';
import Loader from 'components/Loader/Loader';
// import defaultPoster from '../../img/defaultPoster.png';

import {
  MovieTitle,
  MovieLink,
  LinkWrapper,
  BackBtn,
} from './MovieDetails.styled';

import { getMovieDetails } from 'services/movieApi';
import { toast } from 'react-toastify';

export default function MovieDetails() {
  const [movieDetails, setMovieDetails] = useState({
    backdrop_path: '',
    genres: [],
    overview: '',
    poster_path: '',
    release_date: '',
    title: '',
    vote_average: '',
  });
  const [loader, setLoader] = useState(true);
  const { movieId } = useParams();

  const customId = "custom-id-yes";

  useEffect(() => {
    async function fetchMovieDetailsCard() {
      try {
        const movieDetails = await getMovieDetails(movieId);
        if (Object.keys(movieDetails).length === 0) {          
          return ;
        } 
        // console.log(Object.keys(movieDetails));
        // console.log(movieDetails);

        setMovieDetails(movieDetails);
      } catch (error) {
        console.log(error);
        toast.info('Oops no results found 😥, please try again later!'
        , { toastId: customId });
      } finally {
        setLoader(false);
      }
    }
    fetchMovieDetailsCard();
  }, [movieId]);

  const location = useLocation();
  // console.log(location);
  const backLinkLocation = location.state?.from ?? '/movies';  
  // console.log(backLinkLocation);

  const { poster_path, title, release_date, vote_average, overview, genres } =
    movieDetails;

  const poster = poster_path
    ? `https://image.tmdb.org/t/p/w500${poster_path}`
    : 'https://via.placeholder.com/200x300?text=Poster+Not+Found';
    // : defaultPoster;
  const year = release_date.slice(0, 4);
  const vote = Math.floor(vote_average * 10);
  const movieGenres = genres.map(genre => genre.name).join(', ');
  return (
    <>
      <main style={{ backgroundColor: "#fff", paddingLeft: "14px" }}>
        <BackBtn to={backLinkLocation}>
          <AiFillBackward size={18} style={{ marginBottom: "-2px" }} />
            Go Back
        </BackBtn>
        {movieDetails && (
          <MovieCard
            title={title}
            year={year}
            poster={poster}
            vote={vote}
            overview={overview}
            genres={movieGenres}
          />
        )}

        <MovieTitle>Additional information</MovieTitle>
        <LinkWrapper>
          <MovieLink to="cast" state={{ from: backLinkLocation }}>Cast</MovieLink>
          <MovieLink to="reviews" state={{ from: backLinkLocation }}>Reviews</MovieLink>
        </LinkWrapper>

        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
      {loader && <Loader />}
    </>
  );
}