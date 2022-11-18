import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { BackLink } from './BackButton.styled';

const BackButton = ({ children }) => {
  const location = useLocation();
  const backLink = location.state?.from ?? '/movies';
  return <BackLink to={backLink}> {children}</BackLink>;
};

export default BackButton;

BackButton.propTypes = {
  children: PropTypes.node,
};
