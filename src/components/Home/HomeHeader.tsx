/**
 * HomeHeader is a component who represents
 * the first block of the Homepage page.
 */

// img
import AvastarLogo from '../../assets/logo-no-bg.png';

// utils
import styled from 'styled-components';

// MUI components
import { Box, Grid } from '@mui/material';

const StyledHeader = styled(Grid)`
background-color:var(--clr-darkest);
display:grid;
grid-template-row:1fr 1fr 1fr;
padding:4rem;
max-width:100%;
height:auto;
color:var(--clr-lightest);
& > span {
  grid-row:3;
}`;

const BrandLogo = styled.img`
grid-row:1;
width: 4rem;

`;

const MainContent = styled.main`
display:grid;
grid-template-columns:75% 25%;
align-items: center;
justify-content:center;
margin-top:4rem;
margin-bottom:8rem;;

& > p {
  width:60%;
  grid-row:2;
  font-size:2.5rem;
  }
 `;

const Illustration = styled.img`
grid-row:2`;

export default function Header() {
    return (
  <Box sx={{ flexGrow: 1 }}>
   <StyledHeader>
    <Grid item xs={12}>
       <BrandLogo src={AvastarLogo} alt="Avastar logo" />
      <MainContent>
      <p>Get an immediate overview of your digital footprint & learn how to manage your online privacy.</p>
      <Illustration alt="Placeholder illustration"/>
      </MainContent>
       <span>Undersand what your favorite apps know about you and do with your data.</span>
    </Grid>
 </StyledHeader>
</Box>
    );
  }