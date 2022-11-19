import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { BackLink } from './BackButton.styled';

const BackButton = ({ children }) => {
  const location = useLocation();
  // const backLink = location.state?.from ?? '/movies';

  return (
    <>
      {location.state?.from && (
        <BackLink to={location.state.from}> {children}</BackLink>
      )}
    </>
  );
};

export default BackButton;

BackButton.propTypes = {
  children: PropTypes.node,
};
