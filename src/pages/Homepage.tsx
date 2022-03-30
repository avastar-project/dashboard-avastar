//components
import HeaderHome from '../components/Home/HeaderHome';
import SecIntro from '../components/Home/SecIntro';
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

const SecServicesResumed = styled.div`
border: solid 1px blue;
`;
const SecStartBanner = styled.section``;

const SecBanner= styled.section`
border: solid 1px orange;
`;

const SecSchemaProcess = styled.section`
border: solid 1px purple;`;

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
         <SecIntro />
         <SecServicesResumed>
           <div>We give you back the transparency you deserve on the internet</div>
           <div>What you get</div>
         </SecServicesResumed>
         <SecStartBanner>Ready to get started ?</SecStartBanner>
         <SecSchemaProcess>What it takes</SecSchemaProcess>
         <SecStepsProcess>
           <div>Request your data</div>
           <div>Upload your data</div>
           <div>See your digital footprint</div>
           <div>take action on your data</div>
         </SecStepsProcess>
         <SecBanner>Avastar is an open-source platform</SecBanner>
         <SecUsersReview>What our users say</SecUsersReview>
         <Footer>Footer</Footer>
         </Main>
       </Grid>
     </Container>
   </Box>
   
  );
}
