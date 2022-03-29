//utils
import styled from '@emotion/styled';

// MUI components
import { Box, Grid } from '@mui/material';

const BoxContainer = styled(Box)`
position:absolute;
top:0;
left:0;
background-color:white;
width:100%;
height:100vh;
z-index:1;
`;

const Container = styled(Grid)`
  margin: 0;
  width: calc(100% - 1rem);
`;

const HeaderHome = styled.header`
  border: solid 1px red;
`;

const SecIntro = styled.section`
border: solid 1px green;`;

const SecServicesResumed = styled.div`
border: solid 1px blue;
`;

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
    <BoxContainer>
    <Box sx={{ flexGrow: 1 }}>
     <Container container spacing={2}>
       <Grid item xs={12}>
         <HeaderHome>Header</HeaderHome>
         <Main>
         <SecIntro>How to get started</SecIntro>
         <SecServicesResumed>
           <div>We give you back the transparency you deserve on the internet</div>
           <div>What you get</div>
         </SecServicesResumed>
         <SecBanner>Ready to get started ?</SecBanner>
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
    </BoxContainer>
  );
}
