import { useEffect, useState, Suspense } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { useParams, useLocation } from 'react-router-dom';
import { toast } from 'react-hot-toast';

import {
  InfoTitle,
  InfoLink,
  LinkWrapper,
  BackBtn,
} from './MovieDetails.styled';
import { MovieCard } from 'components/MovieDetails/MovieDetails';
import Loader from 'components/Loader/Loader';

import { getMovieDetails } from 'services/movieApi';

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

  useEffect(() => {
    async function fetchMovieDetailsCard() {
      try {
        const movieDetails = await getMovieDetails(movieId);
        if (Object.keys(movieDetails).length === 0) {
          return toast('Sorry, movie not found! Please try again later');
        }
        setMovieDetails(movieDetails);
      } catch (error) {
        console.log(error);
      } finally {
        setLoader(false);
      }
    }
    fetchMovieDetailsCard();
  }, [movieId]);

  // ------ Go back button-------///
  const location = useLocation();
  const backLink = location.state?.from ?? '/';
  const navigate = useNavigate();
  const onGoBack = () => navigate(backLink);
  // --------------------------////

  const { poster_path, title, release_date, vote_average, overview, genres } =
    movieDetails;

  const poster = poster_path
    ? `https://image.tmdb.org/t/p/w500${poster_path}`
    : 'https://via.placeholder.com/200x300?text=Poster+Not+Found';
  const year = release_date.slice(0, 4);
  const vote = Math.floor(vote_average * 10);
  const movieGenres = genres.map(genre => genre.name).join(', ');
  return (
    <>
      <main>
        <BackBtn type="button" onClick={onGoBack}>
          Back to
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

        <InfoTitle>Additional information</InfoTitle>
        <LinkWrapper>
          <InfoLink to="cast">Cast</InfoLink>
          <InfoLink to="reviews">Reviews</InfoLink>
        </LinkWrapper>

        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
      {loader && <Loader />}
    </>
  );
}