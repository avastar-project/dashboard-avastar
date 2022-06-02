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
  var plotType: Plotly.PlotType = 'bar';
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

  const dataPlot = [
    {
      type: 'pie',
      hole: 0.5,
      labels: Object.keys(data),
      values: Object.values(data),
      textposition: 'inside',
      insidetextorientation: 'tangential',
      marker: {
        colors: ['pink', 'lightgreen', 'skyblue', 'orange'],
        line: {
          width: 3,
          color: ['red', 'green', 'blue', 'grey'],
        },
      },
    },
  ];

  var layout = {
    autosize: true,
  };
  // @ts-ignore
  return <Plot data={dataPlot} layout={layout} />;
}
