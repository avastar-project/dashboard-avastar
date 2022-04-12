//components
import Header from '../components/Home/HomeHeader';
import GetStarted from '../components/Home/GetStartedBanner';
import ContentPointsList from '../components/Home/ContentPointsListSection';
import MainBenefits from '../components/Home/MainBenefitsSection';
import UploadData from '../components/Home/UploadDataSection';
import UploadTimeLaps from '../components/Home/UploadTimeLapsSection';
import StepsUploadData from '../components/Home/StepsUploadDataSection';
import LearnMoreAbout from '../components/Home/LearnMoreAboutBanner';
import SecUsersReview from '../components/Home/SecUsersReview';
import Footer from '../components/Home/HomeFooter';
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
        <Header/>
         <Main>
         <GetStarted/>
         <ContentPointsList/>
         <MainBenefits/>
         <UploadData/>
         <UploadTimeLaps/>
         <StepsUploadData/>
         <LearnMoreAbout/>
         <SecUsersReview/>
         <Footer/>
         </Main>
       </Grid>
     </Container>
   </Box>
   
  );
}
