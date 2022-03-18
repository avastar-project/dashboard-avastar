import Plotly from 'plotly.js-basic-dist';
import createPlotlyComponent from 'react-plotly.js/factory';
import data from '../fake-data/fake_data_agg.json';
const Plot = createPlotlyComponent(Plotly);



const CountObserved = data.data_classification.filter(data => data.data_origin === 'Observed').length
const CountInferred = data.data_classification.filter(data => data.data_origin === 'Inferred').length
const CountVolunteered = data.data_classification.filter(data => data.data_origin === 'Volunteered').length

const BarChartHow = () => {

    return (
    <Plot
      data={[
        {type: 'bar', 
        x: ['Observed', 'Inferred', 'Volunteered'], 
        y: [CountObserved, CountInferred, CountVolunteered], marker: {color : ['#636EFA','#EF553B', '#00CC96']}},
      ]}
      layout={{width: 800, height: 450, title: 'How is my data collected?', paper_bgcolor : 'rgba(0,0,0,0)', plot_bgcolor : 'rgba(0,0,0,0)', yaxis : {title : {text : 'Number of data points', font : {size: 13}}}, xaxis: {categoryorder: 'total descending'}}}
    />
    );
  }

  export default BarChartHow