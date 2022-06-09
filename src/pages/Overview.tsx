import PlotlyContainer from '../components/Overview/PlotlyContainer';
import styled from '@emotion/styled';
import OverviewProfile from '../components/Overview/OverviewProfile';
// Calling Plotly Charts for integration on Overview page
import TrackedChart from '../components/Overview/Charts/TrackedChart';
import DataCollectedChart from '../components/Overview/Charts/DataCollectedChart';
// import DataTable from '../components/Overview/PlotlyCharts/DataTable';
import DataTable from '../components/Overview/Charts/DataTable';
import OverviewEducLink from '../components/Overview/OverviewEducLink';
import MoreDataContainer from '../components/Overview/MoreDataContainer';
import ForceGraph from '../components/Overview/Charts/ForceDirectedGraph';
// MUI components
import { Box, Grid, Typography } from '@mui/material';
import { useSelector, shallowEqual } from 'react-redux';
import {
  AvastarParsedDataPoint,
  AvastarParsedDataPointState,
} from '../types/dataTypes';
import { useEffect } from 'react';
import { scrollToTop } from '../utils/scrollToTop';
import Filter from '../components/Overview/Filter';
import { useState } from 'react';
import {platformList, data_type, data_origin, nodesList} from '../types/dataTypes';

// Styled-components
const Container = styled(Grid)`
  margin: 0;
  width: calc(100% - 1rem);
`;

const Header = styled.header`
  width: 75%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
`;
const Title = styled(Typography)``;

const Main = styled.main``;

const Aside = styled.aside`
  border-radius: 0.5rem;
  over-flow: hidden;
`;

export default function Overview() {
  useEffect(() => {
    scrollToTop(); // https://v5.reactrouter.com/web/guides/scroll-restoration
  }, []);

  const [platform, setPlatform] = useState('');
  const [origin, setOrigin] = useState('');
  const [type, setType] = useState('');
  const [nodes, setNodes] = useState('');
  const avastarParsedData: readonly AvastarParsedDataPoint[] = useSelector(
    (state: AvastarParsedDataPointState) => state.avastarParsedData,
    shallowEqual
  );

  console.log('avastarParsedData from redux', avastarParsedData);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Container container spacing={2}>
        <Grid item xs={12}>
          <Header>
            <Title variant="h4">My identity</Title>
            <Box display="flex" justifyContent="flex-end">
              <Filter
                onChange={setPlatform}
                optionsList={platformList}
                name="Platform"
              ></Filter>
              <Filter
                onChange={setType}
                optionsList={data_type}
                name="Type"
              ></Filter>
              <Filter
                onChange={setOrigin}
                optionsList={data_origin}
                name="Origin"
              ></Filter>
            </Box>
          </Header>
        </Grid>
        <Grid item xs={12} md={9}>
          <Main>
            <OverviewProfile platform={platform} origin={origin} type={type} nodes={nodes} />
            {/* Contains each stat view */}
            <PlotlyContainer
              title="What is being tracked ?"
              color="#d1c5fd"
              tooltip="about"
              plotlyComponent={
                <TrackedChart platform={platform} origin={origin} type={type} nodes={nodes} />
              }
              isSearch={false}
            />
            <PlotlyContainer
              title="How my data is collected ?"
              color="#BDE8D1"
              tooltip="about"
              plotlyComponent={
                <DataCollectedChart
                  platform={platform}
                  origin={origin}
                  type={type}
                  nodes={nodes}
                />
              }
              isSearch={false}
            />
            <Box display="flex" justifyContent='flex-end'>
            <Filter
              onChange={setNodes}
              optionsList={nodesList}
              name="Companies"
            ></Filter>
            </Box>
            <PlotlyContainer
              title="Who has my data ?"
              color="#BAE9FC"
              tooltip="about"
              plotlyComponent={
                <ForceGraph platform={platform} origin={origin} type={type} nodes={nodes}
                />
              }
              isSearch={false}
            />
            <PlotlyContainer
              title="Search my data"
              color="#d1c5fd"
              tooltip="about"
              plotlyComponent={<DataTable />}
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
