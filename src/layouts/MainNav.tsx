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
  background-color: var(--clr-lightest);
  padding: 0.5rem 1rem;
  border: var(--bor-light);
`;

const BrandLogo = styled.img`
  width: 4rem;
`;

const NavList = styled.ul`
  display: flex;
  flex-flow: column wrap;
  list-style-type: none;
  margin-top: 2rem;
`;

const NavItem = styled.li`
  margin: 0.5rem 0.25rem;
  border-radius: 0.5rem;
  padding: 0.35rem 0.25rem;
  font-weight: 400;
  transition: 0.5s all ease;

  &:hover {
    background-color: var(--clr-light);
    font-weight: 500;
    transition: 0.5s all ease;
  }
`;

const NavLink = styled(Link)`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;

  & > img {
    margin-right: 0.5rem;
  }
`;

export default function MainNav() {
  return (
    <StyledNav>
      <BrandLogo src={AvastarLogo} alt="Avastar logo" />
      <NavList>
        {/* Mapping navLinks array to display each element */}
        {/* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map */}
        {navLinks.map((elt, index) => (
          <NavItem key={index}>
            <NavLink to={elt.link}>
              <img src={elt.icon} alt={`${elt.name}-icon`} />
              {elt.name}
            </NavLink>
          </NavItem>
        ))}
      </NavList>
    </StyledNav>
  );
}
