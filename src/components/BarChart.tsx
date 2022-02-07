import Plot from 'react-plotly.js';

import data from '../fake-data/fake_data_agg.json'

const CountBehavioural = data.data_classification.filter(data => data.data_type === 'Behavioural').length
const CountCommunication = data.data_classification.filter(data => data.data_type === 'Communication').length
const CountContact = data.data_classification.filter(data => data.data_type === 'Contact').length
const CountLocation = data.data_classification.filter(data => data.data_type === 'Location').length
const CountSocialRelationship = data.data_classification.filter(data => data.data_type === 'Social relationship').length
const CountTechnical = data.data_classification.filter(data => data.data_type === 'Technical').length
const CountTransactional = data.data_classification.filter(data => data.data_type === 'Transactional').length

const BarChart = () => {

    return (
    <Plot
      data={[
        {type: 'bar', 
        x: ['Location', 'Behavioural', 'Communication', 'Technical', 'Social relationship', 'Contact', 'Transactional'], 
        y: [CountLocation, CountBehavioural, CountCommunication, CountTechnical, CountSocialRelationship, CountContact, CountTransactional], marker: {color : ['#636EFA','#EF553B', '#00CC96', '#AB63FA', '#FFA15A', '#19D3F3', '#FF6692']}},
      ]}
      layout={{width: 800, height: 450, title: 'What is being tracked ?', paper_bgcolor : 'rgba(0,0,0,0)', plot_bgcolor : 'rgba(0,0,0,0)', yaxis : {title : {text : 'Number of data points', font : {size: 13}}}, xaxis: {categoryorder: 'total descending'}}}
    />
    );
  }

  export default BarChart