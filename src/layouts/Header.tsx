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
  position:fixed;
  width:100%;
  z-index:1;
  background-color: #07143A;
  // background-color:'rgba(52, 52, 52, 0.8)'
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 5rem;
  & a {
    color: white;
  }
  & > a:last-child {
    color: red;
  }
`;
const ImgContainer = styled(Box)`
  width: 50%;
`;

const BrandLogo = styled.img`
  width: 100%;
  height: auto;
`;
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
      <Box
        sx={{
          flexGrow: 1,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        {/* Calling MUI Button component */}
        <Box>
          <ImgContainer display="flex" justifyContent="center">
            <BrandLogo src={AvastarLogo} alt="Avastar logo" />
          </ImgContainer>
        </Box>
        <Box display="flex" alignItems="center" gap={3}>
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
          <Box>
            <Button
              sx={{ marginLeft: '5rem',backgroundColor:'white'}}
              variant="contained"
              href="/"
            >
              <Typography variant="caption"               sx={{color:'CaptionText'}}>+ Upload data</Typography>
            </Button>
          </Box>
        </Box>
      </Box>
    </StyledHeader>
  );
}
