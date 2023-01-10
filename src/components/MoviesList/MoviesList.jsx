import { List, Poster, StyledLink, MovieItem } from "./MoviesList.styled"
import {useLocation } from 'react-router-dom';

const MoviesList = ({ Movies }) => {
    const location = useLocation();
    return (
            <List>
                {Movies.length > 0 && Movies.map(movie => {
                    return <MovieItem key={movie.id}>
                        <StyledLink to={`/movies/${movie.id}`} state={{from:location}}>
                            <Poster src={movie.poster_path === null
                                ? 'https://dummyimage.com/400x600/7d7d7d/fff.jpg&text=image+not+found'
                                : `https://image.tmdb.org/t/p/w400/${movie.poster_path}`}
                                alt={movie.title} />
                            <span> {movie.title}</span>
                        </StyledLink>
                    </MovieItem>
                })}
            </List>
    )
}

export default MoviesList