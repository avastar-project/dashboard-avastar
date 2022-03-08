// Example for how to create a plotly component
import Plotly from 'plotly.js-basic-dist';
import createPlotlyComponent from 'react-plotly.js/factory';
const Plot = createPlotlyComponent(Plotly);

const values = [
  ['Facebook', 'Facebook', '...', 'Google'],
  ['Location', 'Behavioural', '...', 'Socio-demographic'],
  ['Observed', 'Inferred', '...', 'Volounteered'],
  ['2021-02-14', '2022-01-12', '...', '-'],
  [
    'Add primary location',
    'Infer area of interest',
    '...',
    'Share persnal trait',
  ],
  ['Paris', 'Air France', '...', 'male'],
];

// TODO - Search why React-plotly.js can't use 'table' types
// Documentation : https://plotly.com/javascript/table/
export default function DataTable() {
  return (
    <Plot
      data={[
        {
          type: 'table',
          name: 'example table',
          // 'cells' & 'header' trace doesn't works...
        },
      ]}
      // Doc link for layout references : https://plotly.com/javascript/reference/#layout
      layout={{ autosize: true }}
      config={{ responsive: true }}
    />
  );
}
