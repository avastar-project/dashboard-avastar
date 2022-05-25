import Plotly from 'plotly.js-basic-dist';
import createPlotlyComponent from 'react-plotly.js/factory';
import { useSelector, shallowEqual } from 'react-redux';
import {
  AvastarParsedDataPoint,
  AvastarParsedDataPointState,
} from '../../../types/dataTypes';


const Plot = createPlotlyComponent(Plotly);
interface PropsFilter {
  platform: string;
  origin: string;
  type: string;
}

export default function DataCollectedChart(props: PropsFilter) {
  interface Anything {
    [key: string]: any;
  }
  var plotType: Plotly.PlotType = 'bar';
  var counts: Anything = {};
  const avastarParsedData: readonly AvastarParsedDataPoint[] = useSelector(
    (state: AvastarParsedDataPointState) => state.avastarParsedData,
    shallowEqual
  )
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
      counts[object.data_origin] = (counts[object.data_origin] || 0) + 1;
    });
    return counts;
  };

  let data = getData(avastarParsedData);

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
    yaxis: { title: 'Volume of data points' },
  };
  return (
    <Plot
      data={dataPlot}
      layout={layout}
    />
  );
}
