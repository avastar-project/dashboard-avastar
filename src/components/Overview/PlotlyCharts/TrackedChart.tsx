import Plotly from "plotly.js";
import createPlotlyComponent from "react-plotly.js/factory";
import data_aggregat from "../../../fake-data/fake-data-agg.json"
//Doc link for layout references : https://plotly.com/javascript/reference


const Plot = createPlotlyComponent(Plotly);

export default function TrackedChart() {
  interface Anything {
      [key: string]: any;
  }
  var plotType: Plotly.PlotType = 'bar'

  var counts: Anything = {};
  console.log(data_aggregat)
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
      marker: {
        cmin: 0, cmax: 255, color:
          [
              '#636EFA',
              '#EF553B',
              '#00CC96',
              '#AB63FA',
              '#FFA15A',
              '#19D3F3',
              '#FF6692',
            ],}
    },
  ];
  var layout = {
    autosize: true,
    yaxis: { title: 'Volume of data points'}
  }


  return <Plot data={dataPlot} layout={layout} />;
}
