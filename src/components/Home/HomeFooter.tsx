// Components
import { Link } from 'react-router-dom';

//img
import AvastarLogo from '../../assets/logo-no-bg.png';

//utils
import styled from 'styled-components';

// MUI components
import { Box, Grid } from '@mui/material';

// Contains each page link infomations
const navLinks = [
  {
    name: 'Contact us',
    link: '#',
  },
  {
    name: 'Avastar 2022',
    link: '#',
  },
  {
    name: 'Community',
    link: '#',
  },
];

const StyledFooter = styled.footer`
background-color:var(--clr-darkest);
padding:1rem;
`;

const BrandLogo = styled.div`
position:relative;

& > img {
position:absolute;
width:50px;
}

`;
const NavList = styled.ul`
display:flex;
justify-content:space-evenly;
align-items:center;
text-decoration-line:none;
height:3.75rem;
`;

const NavItem = styled.li``;

const NavLink = styled(Link)`
color:var(--clr-lightest)`;

export default function HomeFooter() {
    return (
  <Box sx={{ flexGrow: 1 }}>
   <StyledFooter>
    <Grid item xs={12}>
    <BrandLogo> <img src={AvastarLogo} alt="Avastar logo"></img>
       </BrandLogo>
       <NavList>
       {navLinks.map((elt, index) => (
          <NavItem key={index}>
            <NavLink to={elt.link}>
              {elt.name}
            </NavLink>
          </NavItem>
        ))}
        </NavList>
    </Grid>
 </StyledFooter>
</Box>
    );
  }