import Plotly from 'plotly.js-basic-dist';
import createPlotlyComponent from 'react-plotly.js/factory';
import { useSelector, shallowEqual } from 'react-redux';
import {
  AvastarParsedDataPoint,
  AvastarParsedDataPointState,
  PropsFilter,
  DataPointCounterType,
} from '../../../types/dataTypes';

const Plot = createPlotlyComponent(Plotly);

export default function DataCollectedChart(props: PropsFilter) {
  var dataPointCounter: DataPointCounterType = {};
  const avastarParsedData: readonly AvastarParsedDataPoint[] = useSelector(
    (state: AvastarParsedDataPointState) => state.avastarParsedData,
    shallowEqual
  );
  let getData = (data: readonly AvastarParsedDataPoint[]) => {
    if (props.platform) {
      data = data.filter((object) => {
        return object.platform === props.platform;
      });
    }

    if (props.type) {
      data = data.filter((object) => {
        return object.data_type === props.type;
      });
    }
    if (props.origin) {
      data = data.filter((object) => {
        return object.data_origin === props.origin;
      });
    }
    data.forEach((object) => {
      dataPointCounter[object.data_origin] =
        (dataPointCounter[object.data_origin] || 0) + 1;
    });
    return dataPointCounter;
  };

  let data = getData(avastarParsedData);

   // Definitions for each data points
   const tooltips = {
    'volunteered': 'Information you created and explicitly shared (email address, array of demographic information, etc.)',
    'observed': 'Information you generated and supplied passively, captured by platforms recording your actions.',
    'inferred': 'Information created about you based on the analysis of observed and volunteered information (prediction of pregnancy, health issues, political opinions, sexual orientation, etc.)'
  }

  const dataPlot = [
    {
      type: 'pie',
      hole: 0.5,
      labels: Object.keys(data),
      values: Object.values(data),
      textposition: 'inside',
      insidetextorientation: 'tangential',
      mode: 'markers',
      hovertemplate: 
      "<b>%{label}</b><br><br>" +
      "Data Points: %{value:,}<br>" +
      "Definition: %{text}<br>" +
      "<extra></extra>",
      // @ts-ignore
      hovertext: [tooltips[Object.keys(data)[0]], tooltips[Object.keys(data)[1]], tooltips[Object.keys(data)[2]]],
      marker: {
        colors: ['#B27DDC', '#450AA3', '#03C1C7']
      },
    },
  ];

  var layout = {
    autosize: true,
    hovermode: "closest",
    hoverlabel: { bgcolor: "#FFF" },
    config: { responsive: true },
  };
  // @ts-ignore
  return <Plot data={dataPlot} layout={layout} />;
}
