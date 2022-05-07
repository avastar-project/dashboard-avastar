// Example for how to create a plotly component
import Plotly from 'plotly.js-basic-dist';
import createPlotlyComponent from 'react-plotly.js/factory';
import { useSelector, shallowEqual } from 'react-redux';
import {
  AvastarParsedDataPoint,
  AvastarParsedDataPointState,
} from '../../../types/dataTypes';

const Plot = createPlotlyComponent(Plotly);

export default function TrackedChart() {
  // Fetch data from State
  const avastarParsedData: readonly AvastarParsedDataPoint[] = useSelector(
    (state: AvastarParsedDataPointState) => state.avastarParsedData,
    shallowEqual
  );
  // Aggregate the count of each data type
  let locationalCount = 0;
  let behaviouralCount = 0;
  let communicationCount = 0;
  let technicalCount = 0;
  let socialRelationshipCount = 0;
  let contactCount = 0;
  let transactionalCount = 0;
  let financialCount = 0;
  let socioDemographicCount = 0;
  let contractualCount = 0;
  let otherCount = 0;
  for (let i = 0; i < avastarParsedData.length; i++) {
    if (avastarParsedData[i].data_type == 'location') {
      locationalCount++;
    } else if (avastarParsedData[i].data_type == 'behavioural') {
      behaviouralCount++;
    } else if (avastarParsedData[i].data_type == 'communications') {
      communicationCount++;
    } else if (avastarParsedData[i].data_type == 'technical') {
      technicalCount++;
    } else if (avastarParsedData[i].data_type == 'social relationships') {
      socialRelationshipCount++;
    } else if (avastarParsedData[i].data_type == 'contact') {
      contactCount++;
    } else if (avastarParsedData[i].data_type == 'transactional') {
      transactionalCount++;
    } else if (avastarParsedData[i].data_type == 'financial') {
      financialCount++;
    } else if (avastarParsedData[i].data_type == 'socio-demographic') {
      socioDemographicCount++;
    } else if (avastarParsedData[i].data_type == 'contractual') {
      contractualCount++;
    } else {
      otherCount++;
    }
  }

  return (
    <Plot
      data={[
        {
          x: [
            'Locational',
            'Behavioural',
            'Communications',
            'Technical',
            'Social relationships',
            'Contact',
            'Transactional',
            'Financial',
            'Socio-demographic',
            'Contractual',
          ],
          y: [
            locationalCount,
            behaviouralCount,
            communicationCount,
            technicalCount,
            socialRelationshipCount,
            contactCount,
            transactionalCount,
            financialCount,
            socioDemographicCount,
            contractualCount,
          ],
          textposition: 'auto',
          type: 'bar',
          mode: 'lines+markers',
          marker: { cmin: 0, cmax: 255 },
        },
      ]}
      // Doc link for layout references : https://plotly.com/javascript/reference/#layout
      layout={{ autosize: true, title: 'Volume of data points' }}
      config={{ responsive: true }}
    />
  );
}
