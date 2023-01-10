import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { FcFilmReel } from 'react-icons/fc';

import { Container, Header, Navigation, Link } from './SharedLayout.styled';
import Loader from 'components/Loader/Loader';

export const SharedLayout = () => {
  return (
    <Container >
      <Header>
        <Navigation>
          <Link to="/" end>
            <FcFilmReel size={34}/>
          </Link>
          <span>
          <Link to="/" end>
            Home
          </Link>
          <Link to="/movies">Movies</Link>
          </span>
        </Navigation>
      </Header>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </Container>
  );
};