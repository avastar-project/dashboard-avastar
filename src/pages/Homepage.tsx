//components
import NavHeader from '../components/Home/NavHeader';
import Header from '../components/Home/HomeHeader';
import QuestionsResumed from '../components/Home/QuestionsYouMayAskSection';
import TransparencyOverview from '../components/Home/TransparencyPersonalDataSection';
import StepperSection from '../components/Home/StepperSection';
// import GetStarted from '../components/Home/GetStartedBanner';
// import ContentPointsList from '../components/Home/ContentPointsListSection';
// import MainBenefits from '../components/Home/MainBenefitsSection';
// import UploadData from '../components/Home/UploadDataSection';
// import UploadTimeLaps from '../components/Home/UploadTimeLapsSection';
// import StepsUploadData from '../components/Home/StepsUploadDataSection';
// import LearnMoreAbout from '../components/Home/LearnMoreAboutBanner';
// import UsersReview from '../components/Home/UsersReviewSection';
import Footer from '../components/Home/HomeFooter';

//utils
import styled from '@emotion/styled';

// MUI components
import { Box, Grid } from '@mui/material';
import MainBenefitsCard from '../components/Home/MainBenefitsCardsSection';

const Container = styled(Grid)`
  width:100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
`;

const Main = styled.main``;

export default function Homepage() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Container>
        <NavHeader />
        <Grid item xs={12}>
          <Header />
          <Main>
            <QuestionsResumed />
            <TransparencyOverview/>
            <MainBenefitsCard/>
            <StepperSection/>
            {/* <GetStarted />
            <ContentPointsList />
            <MainBenefits />
            <UploadData />
            <UploadTimeLaps />
            <StepsUploadData />
            <LearnMoreAbout />
            <UsersReview /> */}
            <Footer />
          </Main>
        </Grid>
      </Container>
    </Box>
  );
}
