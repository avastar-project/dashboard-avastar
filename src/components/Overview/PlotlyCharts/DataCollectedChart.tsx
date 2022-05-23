// Example for how to create a plotly component
import Plotly from 'plotly.js-basic-dist';
import createPlotlyComponent from 'react-plotly.js/factory';
import { useSelector, shallowEqual } from 'react-redux';
import {
  AvastarParsedDataPoint,
  AvastarParsedDataPointState,
} from '../../../types/dataTypes';
import { getDataFilter } from '../../../utils/data/utilsData';

const Plot = createPlotlyComponent(Plotly);


interface PropsFilter {
  platform: string;
  origin: string;
  type: string;
}

export default function DataCollectedChart(props: PropsFilter) {
  // Fetch data from State
  const avastarParsedData: readonly AvastarParsedDataPoint[] = useSelector(
    (state: AvastarParsedDataPointState) => state.avastarParsedData,
    shallowEqual
  );
  let getDataFiltered = (data: readonly AvastarParsedDataPoint[]) => {
    interface Anything {
    [key: string]: any;
    }
    var counts: Anything = {};
    var data_filter: readonly AvastarParsedDataPoint[] = data;
    if (props.platform) {
      data_filter = data_filter.filter((object) => {
        return object.platform === props.platform;
      });
    }

    if (props.type) {
      data_filter = data_filter.filter((object) => {
        return object.data_type === props.type;
      });
    }
    if (props.origin) {
      data_filter = data_filter.filter((object) => {
        return object.data_origin === props.origin;
      });
    }
    data_filter.forEach((object) => {
        counts[object.data_origin as string] = parseInt(counts[object.data_origin] || 0) + 1;
    });
    return counts;

    // return data_filter;
  };
  let data = getDataFiltered(avastarParsedData);

  return (
    <Plot
      data={[
        {
          x: Object.keys(data),
          y: Object.values(data),
          width: [0.4, 0.4, 0.4],
          textposition: 'auto',
          type: 'bar',
          mode: 'lines+markers',
          marker: {
            cmin: 0,
            cmax: 255,
            color: ['#636EFA', '#EF553B', '#00CC96'],
          },
        },
      ]}
      // Doc link for layout references : https://plotly.com/javascript/reference/#layout
      layout={{
        autosize: true,
        title:
          'Breakdown of methodologies used by platform to collect your data',
        xaxis: { categoryorder: 'total descending' },
        yaxis: { showgrid: false, title: 'Volume of data points' },
        font: { size: 11 },
      }}
      config={{ responsive: true, displayModeBar: false, showTips: false }}
    />
  );
}
