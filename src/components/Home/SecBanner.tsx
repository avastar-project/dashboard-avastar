//utils
import styled from 'styled-components';

// MUI components
import { Button,Box,Grid } from '@mui/material';

// Styled-components
const StyledSecBanner = styled.section`
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

export default function SecBanner() {
  return (
<Box sx={{ flexGrow: 1 }}>
<StyledSecBanner>
 <Grid item xs={12}>
  <h2>Avastar is an open-source platform</h2>
    <MainContent>
    <p>The code behind our platform is open-source and maintained by a community of developers engaged to improve digital transparency and privacy.</p>
    <Button variant="contained" href="#">Learn more</Button>
    </MainContent>
 </Grid>
</StyledSecBanner>
</Box>
  );
}

