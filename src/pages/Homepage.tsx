//components
import NavHeader from '../components/Home/NavHeader';
import Header from '../components/Home/HomeHeader';
import QuestionsResumed from '../components/Home/QuestionsYouMayAskSection';
import TransparencyOverview from '../components/Home/TransparencyPersonalDataSection';
import StepperSection from '../components/Home/StepperSection';
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
            <Footer />
          </Main>
        </Grid>
      </Container>
    </Box>
  );
}
