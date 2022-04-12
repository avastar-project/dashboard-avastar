/**
 GetStartedBanner is a component representing the first banner of the Homepage page about how to get started by getting its data.
 */

//utils
import styled from 'styled-components';

// MUI components
import { Button,Box,Grid } from '@mui/material';

// Styled-components
const StyledSecIntro = styled.section`
  background-color: var(--clr-lighter);
  padding:2rem 4rem;
 
  & > h2 {
      margin-bottom:1rem;
  }
  `;

  const MainContent = styled.main`
  display:grid;
  grid-template-columns:75% 25%;
  align-items: center;
  margin:1rem 0;
  
  & > a {
    width:10rem;
    text-transform:none;
  }
   `;

export default function SecIntro() {
  return (
<Box sx={{ flexGrow: 1 }}>
<StyledSecIntro>
 <Grid item xs={12}>
  <h2>How to get started ?</h2>
    <MainContent>
    <p>Request your personal data in your favorite apps. Start with Google and Facebook.</p>
    <Button variant="contained" href="/overview">Get my data</Button>
    </MainContent>
 </Grid>
</StyledSecIntro>
</Box>
  );
}

