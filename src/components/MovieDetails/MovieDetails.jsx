import PropTypes from 'prop-types';
import { CardInfo, CardWrapper } from './MovieDetails.styled';

export const MovieCard = ({ poster, title, year, vote, overview, genres }) => {
  return (
    <CardWrapper>
      <img src={poster} alt={title} />
      <CardInfo>
        <h2>
          {title} ({year})
        </h2>
        <p>User Score: {vote}%</p>
        <h3>Overview</h3>
        <p>{overview}</p>
        <h3>Genres</h3>
        <p>{genres}</p>
      </CardInfo>
    </CardWrapper>
  );
};

MovieCard.propTypes = {
  poster: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  vote: PropTypes.number.isRequired,
  overview: PropTypes.string.isRequired,
  genres: PropTypes.string.isRequired,
};