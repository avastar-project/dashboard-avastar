// Example for how to create a plotly component
import Plotly from 'plotly.js-basic-dist';
import createPlotlyComponent from 'react-plotly.js/factory';
import { useSelector, shallowEqual } from 'react-redux';
import {
  AvastarParsedDataPoint,
  AvastarParsedDataPointState,
} from '../../../types/dataTypes';

const Plot = createPlotlyComponent(Plotly);

export default function DataCollectedChart() {
  // Fetch data from State
  const avastarParsedData: readonly AvastarParsedDataPoint[] = useSelector(
    (state: AvastarParsedDataPointState) => state.avastarParsedData,
    shallowEqual
  );
  // Aggregate the count of each data type
  let observedCount = 0;
  let volunteeredCount = 0;
  let inferredCount = 0;
  let otherCount = 0;
  for (let i = 0; i < avastarParsedData.length; i++) {
    if (avastarParsedData[i].data_origin == 'observed') {
      observedCount++;
    } else if (avastarParsedData[i].data_origin == 'volunteered') {
      volunteeredCount++;
    } else if (avastarParsedData[i].data_origin == 'inferred') {
      inferredCount++;
    } else {
      otherCount++;
    }
  }

  return (
    <Plot
      data={[
        {
          x: ['Observed', 'Volunteered', 'Inferred'],
          y: [observedCount, volunteeredCount, inferredCount],
          width: [0.4, 0.4, 0.4],
          textposition: 'auto',
          type: 'bar',
          mode: 'lines+markers',
          marker: {
            cmin: 0,
            cmax: 255,
            color: ['#636EFA', '#EF553B', '#00CC96'],
          },
        },
      ]}
      // Doc link for layout references : https://plotly.com/javascript/reference/#layout
      layout={{
        autosize: true,
        title:
          'Breakdown of methodologies used by platform to collect your data',
        xaxis: { categoryorder: 'total descending' },
        yaxis: { showgrid: false, title: 'Volume of data points' },
        font: { size: 11 },
      }}
      config={{ responsive: true, displayModeBar: false, showTips: false }}
    />
  );
}
