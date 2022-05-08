import PlotlyContainer from '../components/Overview/PlotlyContainer';
import styled from '@emotion/styled';
import OverviewProfile from '../components/Overview/OverviewProfile';
// Calling Plotly Charts for integration on Overview page
import TrackedChart from '../components/Overview/PlotlyCharts/TrackedChart';
import DataCollectedChart from '../components/Overview/PlotlyCharts/DataCollectedChart';
import DataTable from '../components/Overview/PlotlyCharts/DataTable';
import Filter from '../components/Overview/Filter';
import { useState } from 'react';
// MUI components
import { Box, Grid } from '@mui/material';

// DATA JSON
import data_aggregat from '../fake-data/fake-data-agg.json';

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
  border: solid 1px green;
`;

// Data
var platformList: String[] = [];
platformList = data_aggregat.data_classification
  .map((value) => value.platform)
  .filter((value, index, _arr) => _arr.indexOf(value) === index);
// console.log('platformList', platformList)

var data_type: String[] = [];
data_type = data_aggregat.data_classification
  .map((value) => value.data_type)
  .filter((value, index, _arr) => _arr.indexOf(value) === index);
// console.log('data_type', data_type)

var data_origin: String[] = [];
data_origin = data_aggregat.data_classification
  .map((value) => value.data_origin)
  .filter((value, index, _arr) => _arr.indexOf(value) === index);
// console.log('data_origin', data_origin)

// var interaction_date: string|number[] = []
// interaction_date = data_aggregat.data_classification.map( (value) => value.interaction_date).filter( (value, index, _arr) => _arr.indexOf(value) === index);
// console.log('interaction_date', interaction_date)

export default function Overview() {
  const [platform, setPlatform] = useState('');
  const [origin, setOrigin] = useState('');
  const [type, setType] = useState('');
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Container container spacing={2}>
        <Grid item xs={12}>
          {/* Will contain form's select input fields */}
          <Header>Header</Header>
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
        </Grid>
        <Grid item xs={12} md={9}>
          <Main>
            <OverviewProfile />
            {/* Contains each stat view */}
            <PlotlyContainer
              title="What is being tracked ?"
              color="#d1c5fd"
              tooltip="about"
              plotlyComponent={
                <TrackedChart platform={platform} origin={origin} type={type} />
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
                />
              }
              isSearch={false}
            />
            <PlotlyContainer
              title="Who has my data ?"
              color="#BAE9FC"
              tooltip="about"
              plotlyComponent={
                <TrackedChart platform={''} origin={''} type={''} />
              }
              isSearch={false}
            />
            <PlotlyContainer
              title="Search my data"
              color="#d1c5fd"
              tooltip="about"
              plotlyComponent={<DataTable />}
              // isSearch on true to see the associated search bar
              isSearch={true}
            />
          </Main>
        </Grid>
        <Grid item xs={12} md={3}>
          <Aside>Aside</Aside>
        </Grid>
      </Container>
    </Box>
  );
}
