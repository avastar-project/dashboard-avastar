// img
import AvastarLogo from '../../assets/logo-horizontal-text-print-dark.png';
//  Imported Button component from MUI
import { Box, Link, Typography } from '@mui/material';

// Utils
import styled from 'styled-components';

// Typescript types
interface NavLinksHeader {
  name: string;
  link: string;
}

// Contains each page link infomations
const navLinks: NavLinksHeader[] = [
  {
    name: 'Our solution',
    link: '#services',
  },
  {
    name: 'Who we are',
    link: '#about',
  },
  {
    name: 'How does it work',
    link: '#how-it-works',
  },
  {
    name: 'Upload your data',
    link: '#dropzone',
  },
];

// Styled-components
const StyledNavLink = styled.div`
  position: absolute;
  left: 0px;
  top: 5.625rem;
  width: 100%;
  height: 6.688rem;
  display: flex;
  padding: 1.875rem 9.75rem;
  & a {
    color: white;
  }
`;
const ImgContainer = styled(Box)`
  width: 100%;
`;

const BrandLogo = styled.img`
  width: 13.063rem;
  height: 2.774rem;
`;

const NavList = styled.ul`
  list-style-type: none;
  display: flex;
  gap: 4.625rem;
  justify-content: space-evenly;
  width: 55.75rem;
  height: auto;
  text-transform: uppercase;
`;

const NavItem = styled.li``;
const NavLink = styled(Link)``;

const preventDefault = (event: React.SyntheticEvent) => event.preventDefault();

// Component
export default function HeaderNavLink() {
  return (
    <StyledNavLink>
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <ImgContainer>
          <BrandLogo src={AvastarLogo} alt="Avastar logo" />
        </ImgContainer>
        <Box onClick={preventDefault}>
          <NavList>
            {/* Mapping navLinks array to display each element */}
            {/* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map */}
            {navLinks.map((navLinks: NavLinksHeader, index: number) => (
              <NavItem key={index}>
                <NavLink href={navLinks.link} underline="hover">
                  <Typography
                    sx={{
                      lineHeight: '4.75rem',
                      fontWeight: 500,
                      fontSize: '1rem',
                    }}
                  >
                    {navLinks.name}
                  </Typography>
                </NavLink>
              </NavItem>
            ))}
          </NavList>
        </Box>
      </Box>
    </StyledNavLink>
  );
}
