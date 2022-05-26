// img
import AvastarLogo from '../../assets/logo-horizontal-text-print-dark.png';
//  Imported Button component from MUI
import { Box,Link, Typography } from '@mui/material';

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
position:absolute;
left: 0px;
top: 5.625rem;

width: 100%;
height: 6.688rem;

display: flex;

padding: 30px 156px;
& a {
  color: white;
}
`;
const ImgContainer = styled(Box)`
width:100%;
`;

const BrandLogo = styled.img`
width:30%;
height:auto;`;

const NavList = styled.ul`
list-style-type: none;
display: flex;
gap: 2rem;
justify-content:center;
width: 43.375rem;
height: auto;
text-transform:uppercase;
`;

const NavItem = styled.li``;
const NavLink = styled(Link)``;

const preventDefault = (event: React.SyntheticEvent) => event.preventDefault();

// Component
export default function HeaderNavLink() {
  return (
    <StyledNavLink>
      <Box sx={{ width:'100%' ,display: 'flex', justifyContent: 'space-between',alignItems:'center'}}>
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
                  <Typography variant='body1'>{navLinks.name}</Typography>
                </NavLink>
              </NavItem>
            ))}
          </NavList>
        </Box>
      </Box>
    </StyledNavLink>
  );
}