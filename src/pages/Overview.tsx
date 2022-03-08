import PlotlyContainer from '../components/Overview/PlotlyContainer';
import styled from '@emotion/styled';

// MUI components
import { Box, Grid } from '@mui/material';

// Styled-components
const Container = styled(Grid)`
  margin: 0;
  width: calc(100% - 1rem);
`;

const Header = styled.header`
  border: solid 1px red;
`;

const Main = styled.main`
  border: solid 1px blue;
`;

const Aside = styled.aside`
  border: solid 1px green;
`;

export default function Overview() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Container container spacing={2}>
        <Grid item xs={12}>
          <Header>Header</Header>
        </Grid>
        <Grid item xs={12} md={9}>
          <Main>
            {/* Contains each stat view */}
            <PlotlyContainer title="Overview" tooltip="Global stats" />
            <PlotlyContainer title="What is being tracked ?" tooltip="about" />
            <PlotlyContainer
              title="How my data is collected ?"
              tooltip="about"
            />
            <PlotlyContainer title="WHo has my data ?" tooltip="about" />
            <PlotlyContainer title="Search my data" tooltip="about" />
          </Main>
        </Grid>
        <Grid item xs={12} md={3}>
          <Aside>Aside</Aside>
        </Grid>
      </Container>
    </Box>
  );
}
