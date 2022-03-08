// Example for how to create a plotly component
import Plotly from 'plotly.js-basic-dist';
import createPlotlyComponent from 'react-plotly.js/factory';
const Plot = createPlotlyComponent(Plotly);

export default function DataCollectedChart() {
  return (
    <Plot
      data={[
        {
          x: ['Observed', 'Volunteered', 'Inferred'],
          y: [40, 25, 10],
          textposition: 'auto',
          type: 'bar',
          mode: 'lines+markers',
          marker: { cmin: 0, cmax: 255 },
        },
      ]}
      // Doc link for layout references : https://plotly.com/javascript/reference/#layout
      layout={{ autosize: true, title: 'Volume of data points' }}
    />
  );
}
