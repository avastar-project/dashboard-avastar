import Plot from 'react-plotly.js';

type BarChartProps = {
  results?: Results;
}

const BarChart = ({ results }: BarChartProps) => {

  const ads_interactions_count = results?.ads_interactions?.length!;
  const ads_interests_count = results?.ads_interests?.length!;

  return (
    <Plot
      data={[
        {type: 'bar', x: ['Ads interests', 'Ads interactions'], y: [ads_interactions_count, ads_interests_count]},
      ]}
      layout={{width: 380, height: 400, title: 'Data profile'}}
    />
  );
}

export default BarChart

