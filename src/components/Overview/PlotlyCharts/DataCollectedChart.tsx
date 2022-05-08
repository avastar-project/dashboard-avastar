// Example for how to create a plotly component
import Plotly from 'plotly.js-basic-dist';
import createPlotlyComponent from 'react-plotly.js/factory';
import { getDataFilter } from '../../../utils/data/utilsData';
import data_aggregat from '../../../fake-data/fake-data-agg.json';

const Plot = createPlotlyComponent(Plotly);
interface Props {
  platform: string;
  origin: string;
  type: string;
}

export default function DataCollectedChart(props: Props) {
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
      counts[object.data_origin] = (counts[object.data_origin] || 0) + 1;
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
      // data={[
      //   {
      //     x: ['Observed', 'Volunteered', 'Inferred'],
      //     y: [40, 25, 10],
      //     textposition: 'auto',
      //     type: 'bar',
      //     mode: 'lines+markers',
      //     marker: { cmin: 0, cmax: 255 },
      //   },
      // ]}
      // // Doc link for layout references : https://plotly.com/javascript/reference/#layout
      // layout={{ autosize: true, title: 'Volume of data points' }}
    />
  );
}
