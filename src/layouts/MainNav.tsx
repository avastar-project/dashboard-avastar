// Components
import { Link } from 'react-router-dom';

// Utils
import styled from 'styled-components';

// Icons
import FBIcon from '../assets/icons/facebook-nav-24.png';
import GoogleIcon from '../assets/icons/google-nav-24.png';
import HomeIcon from '../assets/icons/home-nav-24.png';
import OverIcon from '../assets/icons/over-nav-24.png';
import AvastarLogo from '../assets/logo.png';

// Contains each page link infomations
const navLinks = [
  {
    name: 'Home',
    link: '/',
    icon: HomeIcon,
  },
  {
    name: 'Overview',
    link: '/overview',
    icon: OverIcon,
  },
  {
    name: 'Facebook',
    link: '/facebook',
    icon: FBIcon,
  },
  {
    name: 'Google',
    link: '/google',
    icon: GoogleIcon,
  },
];

// Styled-components
const StyledNav = styled.nav`
  height: 100vh;
  width: 15%;
  background-color: white;
`;

const StyledList = styled.ul`
  display: flex;
  flex-flow: column wrap;
  list-style-type: none;

  & > li {
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
  }

  & > li img {
    margin-right: 0.25rem;
  }
`;

export default function MainNav() {
  return (
    <StyledNav>
      <img src={AvastarLogo} alt="Avastar logo" />
      <StyledList>
        {/* Mapping navLinks array to display each element */}
        {/* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map */}
        {navLinks.map((elt, index) => (
          <li key={index}>
            <Link to={elt.link}>
              <img src={elt.icon} alt={`${elt.name}-icon`} />
              {elt.name}
            </Link>
          </li>
        ))}
      </StyledList>
    </StyledNav>
  );
}
