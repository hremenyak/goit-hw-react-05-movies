import { Outlet } from 'react-router-dom';
import { Header, Link, Container } from './SharedLayout.styled';
const SharedLayout = () => {
  return (
    <Container>
      <Header>
        <Link to="/">Home</Link>
        <Link to="/movies">Movies</Link>
      </Header>
      <Outlet />
    </Container>
  );
};

export default SharedLayout;

//OUTLET TO ADD
