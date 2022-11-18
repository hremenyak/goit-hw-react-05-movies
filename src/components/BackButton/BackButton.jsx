import { useLocation } from 'react-router-dom';
import { BackLink } from './BackButton.styled';

const BackButton = ({ children }) => {
  const location = useLocation();
  const backLink = location.state?.from ?? '/movies';
  return <BackLink to={backLink}> {children}</BackLink>;
};

export default BackButton;

// backlink till the end
