// Example for how to create a plotly component
import Plotly from 'plotly.js-basic-dist';
import createPlotlyComponent from 'react-plotly.js/factory';
const Plot = createPlotlyComponent(Plotly);

export default function TrackedChart() {
  return (
    <Plot
      data={[
        {
          x: [
            'Locational',
            'Behavioural',
            'Communications',
            'Technical',
            'Social relationships',
            'Contact',
            'Transactional',
            'Financial',
            'Socio-demographic',
            'Contractual',
          ],
          y: [295, 275, 185, 95, 90, 75, 45, 25, 10, 5],
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
