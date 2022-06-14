import PlotlyContainer from '../components/Overview/PlotlyContainer';
import OverviewProfile from '../components/Overview/OverviewProfile';
// Calling Plotly Charts for integration on Overview page
import TrackedChart from '../components/Overview/Charts/TrackedChart';
import DataCollectedChart from '../components/Overview/Charts/DataCollectedChart';
// import DataTable from '../components/Overview/PlotlyCharts/DataTable';
import DataTable from '../components/Overview/Charts/DataTable';
import ForceGraph from '../components/Overview/Charts/ForceDirectedGraph';
// MUI components
import { Box, Grid, Typography } from '@mui/material';
import { useEffect } from 'react';
import { scrollToTop } from '../utils/scrollToTop';
import Filter from '../components/Overview/Filter';
import { useState } from 'react';
import {
  platformList,
  data_type,
  data_origin,
  nodesList,
} from '../types/dataTypes';
import { Container } from '@mui/system';

export default function Overview() {
  const [platform, setPlatform] = useState('');
  const [origin, setOrigin] = useState('');
  const [type, setType] = useState('');
  const [nodes, setNodes] = useState('');

  useEffect(() => {
    scrollToTop(); // https://v5.reactrouter.com/web/guides/scroll-restoration
  }, []);

  const Filters = () => (
    <>
      <Grid item xs={12}>
        <Typography
          sx={{
            fontWeight: 500,
          }}
        >
          Filters
        </Typography>
      </Grid>
      <Grid item container columnSpacing={4} xs={12}>
        <Grid item>
          <Filter
            onChange={setPlatform}
            optionsList={platformList}
            name="Platform"
          ></Filter>
        </Grid>
        <Grid item>
          <Filter
            onChange={setType}
            optionsList={data_type}
            name="Type"
          ></Filter>
        </Grid>
        <Grid item>
          <Filter
            onChange={setOrigin}
            optionsList={data_origin}
            name="Origin"
          ></Filter>
        </Grid>
      </Grid>
    </>
  );

  return (
    <Container
      maxWidth={'xl'}
      sx={{
        p: 4,
      }}
    >
      <Grid sx={{ minWidth: 800 }} container pb={4}>
        <Grid item xs={6}>
          <Typography
            sx={{
              pt: 1,
              fontSize: '36px',
              fontWeight: 600,
            }}
          >
            My identity
          </Typography>
        </Grid>

        <Grid container item xs={6} pl={8}>
          <Filters />
        </Grid>

        <OverviewProfile
          platform={platform}
          origin={origin}
          type={type}
          nodes={nodes}
        />
        <Grid item xs={12} container columnSpacing={3}>
          <PlotlyContainer
            title="What is being tracked ?"
            color="#d1c5fd"
            tooltip="Types of personal information that are directly or indirectly collected by companies"
            plotlyComponent={
              <TrackedChart
                platform={platform}
                origin={origin}
                type={type}
                nodes={nodes}
              />
            }
            isSearch={false}
          />
          <PlotlyContainer
            title="How my data is collected ?"
            color="#BDE8D1"
            tooltip="Ways in which companies obtained data about you"
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
          <Box display="flex" width={'100%'} justifyContent="flex-end">
            <Filter
              onChange={setNodes}
              optionsList={nodesList}
              name="Companies"
            ></Filter>
          </Box>
          <PlotlyContainer
            title="Who has my data ?"
            color="#BAE9FC"
            tooltip="Companies that have collected your data. They are grouped by categories identifiable with colours: 
              Red: companies that paid to display you advertising content
              Purple: companies that collected data about you outside the apps you installed
              Orange: apps and games you installed/played
              Blue: companies connected to Facebook and Google (same parent organisation)"
            plotlyComponent={
              <ForceGraph
                platform={platform}
                origin={origin}
                type={type}
                nodes={nodes}
              />
            }
            isSearch={false}
          />
          <PlotlyContainer
            title="Search my data"
            color="#d1c5fd"
            tooltip="The whole list of information you shared accessible from a filterable table."
            plotlyComponent={<DataTable />}
            isSearch={false}
          />
        </Grid>
      </Grid>
    </Container>
  );
}
