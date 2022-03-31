//components
import HeaderHome from '../components/Home/HeaderHome';
import SecIntro from '../components/Home/SecIntro';
import SecServicesList from '../components/Home/SecServicesList';
import SecServicesUtility from '../components/Home/SecServicesUtility';
import SecStartBanner from '../components/Home/SecStartBanner';

import SecDiagramProcess from '../components/Home/SecDiagramProcess';
import SecBanner from '../components/Home/SecBanner';

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

const SecStepsProcess = styled.section`
border: solid 1px brown;`;

const SecUsersReview= styled.section`
border: solid 1px pink;`;

const Footer = styled.footer`
border: solid 1px black;`

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
         <SecStepsProcess>
           <div>Request your data</div>
           <div>Upload your data</div>
           <div>See your digital footprint</div>
           <div>take action on your data</div>
         </SecStepsProcess>
         <SecBanner/>
         <SecUsersReview>What our users say</SecUsersReview>
         <Footer>Footer</Footer>
         </Main>
       </Grid>
     </Container>
   </Box>
   
  );
}
