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

export default function TrackedChart(props: PropsFilter) {
  var plotType: Plotly.PlotType = 'bar';
  var dataPointCounter: DataPointCounterType = {};
  const avastarParsedData: readonly AvastarParsedDataPoint[] = useSelector(
    (state: AvastarParsedDataPointState) => state.avastarParsedData,
    shallowEqual
  );
  let filterData = (data: readonly AvastarParsedDataPoint[]) => {
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
      dataPointCounter[object.data_type] =
        (dataPointCounter[object.data_type] || 0) + 1;
    });
    return dataPointCounter;
  };

  let data = filterData(avastarParsedData);

  // Definitions for each data points
  const tooltips = {
    'behavioural': 'Websites visited and adverts clicked on, data on use of games app, actions performed on apps',
    'communications': 'Entries in social media and in email exchanges',
    'contact': 'Home and work address, email address, phone number',
    'financial': 'Information on income and credit ratings',
    'location': 'Location data shared by mobile devices, GPS data, planned journeys, sensor data collected from RFID tag',
    'social relationships': 'Links between family members and friends',
    'socio-demographic': 'Age, ethnicity, gender, occupation, social class',
    'technical': 'IP addresses and device data',
    'transactional': 'Purchase made with loyalty cards, transactions completed online'
  }

  const dataPlot = [
    {
      x: Object.keys(data),
      y: Object.values(data),
      type: plotType,
      // @ts-ignore
      hovertext: [tooltips[Object.keys(data)[0]], tooltips[Object.keys(data)[1]], tooltips[Object.keys(data)[2]], tooltips[Object.keys(data)[3]], tooltips[Object.keys(data)[4]], tooltips[Object.keys(data)[5]], tooltips[Object.keys(data)[6]], tooltips[Object.keys(data)[7]], tooltips[Object.keys(data)[8]], tooltips[Object.keys(data)[9]]],
      hovertemplate: 
      "<b>%{x}</b><br><br>" +
      "Data Points: %{y:,}<br>" +
      "Definition: %{hovertext}<br>" +
      "<extra></extra>",
      mode: 'markers',
      marker: {
        cmin: 0,
        cmax: 255,
        color: [
          '#636EFA',
          '#EF553B',
          '#00CC96',
          '#AB63FA',
          '#FFA15A',
          '#19D3F3',
          '#FF6692',
        ],
      },
    },
  ];
  var layout = {
    autosize: true,
    hovermode: "closest",
    hoverlabel: { bgcolor: "#FFF" },
    config: { responsive: true },
    xaxis: {
      categoryorder: 'total descending',
    },
    yaxis: {
      title: 'Volume of data points',
      showgrid: false,
    },
  };

  // @ts-ignore
  return <Plot data={dataPlot} layout={layout} />;
}
