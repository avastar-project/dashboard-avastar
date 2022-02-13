import Plot from 'react-plotly.js';

import JsonData from '../fake-data/facebook-data-fake/location/primary_location.json'
import DataModel from '../utils/DataModel.json'

// create a plot to see the console.log
const BarChart = () => {

    return (
    <Plot
      data={[
        {type: 'bar',
        x: ['Location', 'Behavioural', 'Communication', 'Technical', 'Social relationship', 'Contact', 'Transactional'],
        y: [1, 2, 3, 3, 2, 3, 1], marker: {color : ['#636EFA','#EF553B', '#00CC96', '#AB63FA', '#FFA15A', '#19D3F3', '#FF6692']}},
      ]}
      layout={{width: 800, height: 450, title: 'What is being tracked ?', paper_bgcolor : 'rgba(0,0,0,0)', plot_bgcolor : 'rgba(0,0,0,0)', yaxis : {title : {text : 'Number of data points', font : {size: 13}}}, xaxis: {categoryorder: 'total descending'}}}
    />
    );
  }

// Declare file path (hardcoded for now)
const ParsedFilePath = "location/primary_location.json"

// Declare all file paths from the datamodel
var list = [Object.keys(DataModel.datamodel)]

// Check if file path is in the datamodel : for now it show False

console.log(list.includes(ParsedFilePath))

export default BarChart
