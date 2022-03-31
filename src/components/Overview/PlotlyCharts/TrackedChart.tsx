import Plotly from "plotly.js";
import createPlotlyComponent from "react-plotly.js/factory";
import * as data_aggregat from '../../../fake-data/fake_data_agg.json'

//Doc link for layout references : https://plotly.com/javascript/reference
const Plot = createPlotlyComponent(Plotly);

export default function LineChart() {
  interface Anything {
      [key: string]: any;
  }
  var plotType: Plotly.PlotType = 'bar'

  var counts: Anything = {};
  
  let getData = () =>{
    data_aggregat.data_classification.forEach(object => {
      counts[object.data_type] = (counts[object.data_type] || 0) + 1;
    })
    return counts
  } 

  let data = getData()

  const dataPlot = [
    {
      x: Object.keys(data),
      y: Object.values(data),
      type: plotType,
      marker: { cmin: 0, cmax: 255 }
    },
  ];
  const layout = {
    autosize: true,
    title: {
      text: 'Volume of data points',
      // yref: 'paper',
      // y: 0.9,
      }
  }


  return <Plot data={dataPlot} layout={layout} />;
}
