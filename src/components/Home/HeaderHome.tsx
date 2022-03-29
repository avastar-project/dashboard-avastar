//img
import AvastarLogo from '../../assets/logo.png';

//utils
import styled from 'styled-components';

// MUI components
import { Box, Grid } from '@mui/material';

const StyledHeader = styled(Grid)`
display:grid;
grid-template-row:1fr 1fr 1fr;
margin:4rem;
max-width:100%;
height:30rem;

& > span {
  grid-row:3;
}`;

const BrandLogo = styled.img`
grid-row:1;
width: 4rem;

`;

const MainContent = styled.main`
display:grid;
grid-template-columns:70% 30%;
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

export default function HeaderHome() {
    return (
  <Box sx={{ flexGrow: 1 }}>
   <StyledHeader>
    <Grid item xs={12}>
       <BrandLogo src={AvastarLogo} alt="Avastar logo" />
      <MainContent>
      <p>Get an immediate overview of your digital footprint & learn how to manage your online privacy.</p>
      <Illustration alt="#Placeholder illustration"/>
      </MainContent>
       <span>Undersand what your favorite apps know about you and do with your data.</span>
    </Grid>
 </StyledHeader>
</Box>
    );
  }
  