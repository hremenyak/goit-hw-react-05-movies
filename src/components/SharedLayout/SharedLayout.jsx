import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Header, Link, Container } from './SharedLayout.styled';
const SharedLayout = () => {
  return (
    <Container>
      <Header>
        <Link to="/">Home</Link>
        <Link to="/movies">Movies</Link>
      </Header>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </Container>
  );
};

export default SharedLayout;
