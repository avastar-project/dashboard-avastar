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

  const dataPlot = [
    {
      x: Object.keys(data),
      y: Object.values(data),
      type: plotType,
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