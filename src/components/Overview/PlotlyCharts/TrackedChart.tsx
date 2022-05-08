import Plotly from 'plotly.js-basic-dist';
import createPlotlyComponent from 'react-plotly.js/factory';
import { getDataFilter } from '../../../utils/data/utilsData';
import data_aggregat from '../../../fake-data/fake-data-agg.json';
//Doc link for layout references : https://plotly.com/javascript/reference

const Plot = createPlotlyComponent(Plotly);
interface Props {
  platform: string;
  origin: string;
  type: string;
}
export default function TrackedChart(props: Props) {
  interface Anything {
    [key: string]: any;
  }
  var plotType: Plotly.PlotType = 'bar';
  var counts: Anything = {};

  var data_filter: {
    platform: string;
    source: string;
    data_type: string;
    data_origin: string;
    interaction_date: any;
    action: string;
    details: any;
  }[] = data_aggregat.data_classification;
  let getData = () => {
    // data_filter = getDataFilter(props.platform, props.type, props.origin);

    if (props.platform) {
      console.log('platform', props.platform);
      data_filter = data_filter.filter((object) => {
        return object.platform === props.platform;
      });
    }

    if (props.type) {
      console.log('data_type', props.type);
      data_filter = data_filter.filter((object) => {
        return object.data_type === props.type;
      });
    }
    if (props.origin) {
      console.log('origin', props.origin);
      data_filter = data_filter.filter((object) => {
        return object.data_origin === props.origin;
      });
    }

    data_filter.forEach((object) => {
      counts[object.data_type] = (counts[object.data_type] || 0) + 1;
    });
    return counts;
  };

  let data = getData();

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
      // config={{ responsive: true }}
    />
  );
}
