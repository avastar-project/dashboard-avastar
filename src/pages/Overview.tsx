import PlotlyContainer from '../components/Overview/PlotlyContainer';
import styled from '@emotion/styled';
import OverviewProfile from '../components/Overview/OverviewProfile';
// Calling Plotly Charts for integration on Overview page
import TrackedChart from '../components/Overview/PlotlyCharts/TrackedChart';
import DataCollectedChart from '../components/Overview/PlotlyCharts/DataCollectedChart';
// import DataTable from '../components/Overview/PlotlyCharts/DataTable';
import DataTable from '../components/Overview/PlotlyCharts/DataTableTest';
import OverviewEducLink from '../components/Overview/OverviewEducLink';
import MoreDataContainer from '../components/Overview/MoreDataContainer';
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

const Main = styled.main``;

const Aside = styled.aside`
  border-radius: 0.5rem;
  over-flow: hidden;
`;

export default function Overview() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Container container spacing={2}>
        <Grid item xs={12}>
          {/* Will contain form's select input fields */}
          <Header>Header</Header>
        </Grid>
        <Grid item xs={12} md={9}>
          <Main>
            <OverviewProfile />
            {/* Contains each stat view */}
            <PlotlyContainer
              title="What is being tracked ?"
              tooltip="about"
              plotlyComponent={<TrackedChart />}
              isSearch={false}
            />
            <PlotlyContainer
              title="How my data is collected ?"
              tooltip="about"
              plotlyComponent={<DataCollectedChart />}
              isSearch={false}
            />
            <PlotlyContainer
              title="Who has my data ?"
              tooltip="about"
              plotlyComponent={<TrackedChart />}
              isSearch={false}
            />
            <PlotlyContainer
              title="Search my data"
              tooltip="about"
              plotlyComponent={ <DataTable />}
              // isSearch on true to see the associated search bar
              isSearch={false}
            />
            <MoreDataContainer />
          </Main>
        </Grid>
        <Grid item xs={12} md={3}>
          <Aside>
            <OverviewEducLink />
          </Aside>
        </Grid>
      </Container>
    </Box>
  );
}
