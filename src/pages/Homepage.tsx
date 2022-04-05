//components
import HeaderHome from '../components/Home/HeaderHome';
import SecIntro from '../components/Home/SecIntro';
import SecServicesList from '../components/Home/SecServicesList';
import SecServicesUtility from '../components/Home/SecServicesUtility';
import SecStartBanner from '../components/Home/SecStartBanner';
import SecDiagramProcess from '../components/Home/SecDiagramProcess';
import SecStepsProcess from '../components/Home/SecStepsProcess';
import SecBanner from '../components/Home/SecBanner';
import SecUsersReview from '../components/Home/SecUsersReview';
import HomeFooter from '../components/Home/HomeFooter';
//utils
import styled from '@emotion/styled';

// MUI components
import { Box, Grid } from '@mui/material';

const Container = styled(Grid)`
background-color:var(--clr-lightest);
position:absolute;
top:0;
left:0;
z-index:1;
`;

const Main = styled.main``;

export default function Homepage() {
  return (
    
    <Box sx={{ flexGrow: 1 }}>
     <Container>
       <Grid item xs={12}>
        <HeaderHome/>
         <Main>
         <SecIntro/>
         <SecServicesList/>
         <SecServicesUtility />
         <SecStartBanner/>
         <SecDiagramProcess/>
         <SecStepsProcess/>
         <SecBanner/>
         <SecUsersReview/>
         <HomeFooter/>
         </Main>
       </Grid>
     </Container>
   </Box>
   
  );
}
