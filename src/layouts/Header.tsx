// img
import AvastarLogo from '../assets/logo-horizontal-text-print-dark.png';
//  Imported Button component from MUI
import { Box, Button, Link, Typography } from '@mui/material';

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
    name: 'Education',
    link: '#education',
  },
];

// Styled-components
const StyledHeader = styled.header`
  background-color: var(--clr-darkest);
  display: flex;
  justify-content: space-between;
  align-items:center;
  padding: 0.5rem 1rem;
  & a {
    color: white;
  }
  & > a:last-child {
    color: white;
  }
`;
const ImgContainer = styled(Box)`
width:20%;
`;

const BrandLogo = styled.img`
width:100%;
height:auto;`;
const NavList = styled.ul`
  list-style-type: none;
  display: flex;
  gap: 2rem;
`;

const NavItem = styled.li``;
const NavLink = styled(Link)``;

const preventDefault = (event: React.SyntheticEvent) => event.preventDefault();

// Component
export default function Header() {
  return (
    <StyledHeader>
      <Box sx={{ display: 'flex', justifyContent: 'space-evenly',alignItems:'center'}}>
        {/* Calling MUI Button component */}
        <ImgContainer display="flex" justifyContent="center">
          <BrandLogo src={AvastarLogo} alt="Avastar logo" />
        </ImgContainer>
        <Box onClick={preventDefault}>
          <NavList>
            {/* Mapping navLinks array to display each element */}
            {/* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map */}
            {navLinks.map((navLinks: NavLinksHeader, index: number) => (
              <NavItem key={index}>
                <NavLink href={navLinks.link} underline="hover">
                  {navLinks.name}
                </NavLink>
              </NavItem>
            ))}
          </NavList>
        </Box>
      </Box>
      <Button sx={{ width:'9rem',textAlign:'center'}}variant="contained" href="/">
        <Typography variant="caption">+ Upload data</Typography>
      </Button>
    </StyledHeader>
  );
}
