/**
 * OverProfile is the first block who contains
 * the key numbers on Overview Page. It receives
 * OverviewKeyNumber components to be fullfilled
 */

import styled from '@emotion/styled';
import { Grid } from '@mui/material';
import OverviewKeyNumber from './OverviewKeyNumber';
import DataLakeIcon from '../../assets/data-lake.png';
import DeviceIcon from '../../assets/device.png';
import HourglassIcon from '../../assets/hourglass.png';
import OrganizationIcon from '../../assets/organization.png';
import { useSelector, shallowEqual } from 'react-redux';
import {
  AvastarParsedDataPoint,
  AvastarParsedDataPointState,
  PropsFilter,
} from '../../types/dataTypes';

// Styled-components
const Article = styled.article`
  background-color: var(--clr-lightest);
  border-radius: 0.5rem;
  margin-bottom: 1rem;
  padding: 0.5rem;
`;

export default function OverviewProfile(props: PropsFilter) {
  // Fetch data from State
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
    return data;
  };

  let avastarParsedDataFiltered = filterData(avastarParsedData);

  // Compute Overview KPIs
  const dataPointsShared = avastarParsedDataFiltered.length;

  let entitiesAccessedDataProfile = 0;
  for (let i = 0; i < avastarParsedDataFiltered.length; i++) {
    if (
      avastarParsedDataFiltered[i].action_type ===
      'Advertiser who has added your name to an audience based on your information or your activity outside of Facebook'
    ) {
      entitiesAccessedDataProfile++;
    } else if (
      avastarParsedDataFiltered[i].action_type ===
      'Advertiser who has added your name to an audience based on your information or your activity outside of Facebook'
    ) {
      entitiesAccessedDataProfile++;
    } else if (
      avastarParsedDataFiltered[i].action_type ===
      'Advertisers whose ads you have recently seen or clicked on'
    ) {
      entitiesAccessedDataProfile++;
    } else if (
      avastarParsedDataFiltered[i].action_type ===
      'Company that shared information with facebook about your activity on their website/application'
    ) {
      entitiesAccessedDataProfile++;
    } else if (
      avastarParsedDataFiltered[i].action_type ===
      'Apps that have been installed on your mobile device'
    ) {
      entitiesAccessedDataProfile++;
    } else if (
      avastarParsedDataFiltered[i].action_type ===
      'Account linked to your Facebook profile'
    ) {
      entitiesAccessedDataProfile++;
    } else if (
      avastarParsedDataFiltered[i].action_type === 'Game you played on Facebook'
    ) {
      entitiesAccessedDataProfile++;
    }
  }

  let devicesSharingdata = 0;
  for (let i = 0; i < avastarParsedDataFiltered.length; i++) {
    if (
      avastarParsedDataFiltered[i].action_type ===
      'Device linked to your Facebook account'
    ) {
      devicesSharingdata++;
    } else if (
      avastarParsedDataFiltered[i].action_type ===
      'Mobile device associated to your Facebook account'
    ) {
      devicesSharingdata++;
    } else if (
      avastarParsedDataFiltered[i].action_type ===
      'Use new device to access a Google service'
    ) {
      devicesSharingdata++;
    }
  }

  var yearsDataExchange = undefined;
  for (let i = 0; i < avastarParsedDataFiltered.length; i++) {
    if (
      avastarParsedDataFiltered[i].action_type ===
        'Facebook account creation date' &&
      avastarParsedDataFiltered[i].timestamp !== null
    ) {
      const registrationDate = new Date(
        // @ts-ignore
        avastarParsedDataFiltered[i]['timestamp']
      );
      const currentDate = new Date();
      yearsDataExchange =
        currentDate.getFullYear() - registrationDate.getFullYear();
    }
  }

  // Contains basic informations for each overview profile's block
  const overviewBlocks = [
    {
      title: 'Data points shared',
      icon: DataLakeIcon,
      number: dataPointsShared,
      tooltip: 'about data points',
    },
    {
      title: 'Entities accessed your data',
      icon: OrganizationIcon,
      number: entitiesAccessedDataProfile,
      tooltip: 'about entities',
    },
    {
      title: 'Devices sharing data',
      icon: DeviceIcon,
      number: devicesSharingdata,
      tooltip: 'about devices',
    },
    {
      title: 'Years of data exchange',
      icon: HourglassIcon,
      number: yearsDataExchange, // To be done once we have implemented timestamp and details in the smartParserJson and smartparserCsv
      tooltip: 'About years of data exchange',
    },
  ];

  return (
    <Article>
      <h2>Overview</h2>
      <Grid container spacing={2}>
        {overviewBlocks.map((block, index) => (
          <Grid key={index} item xs={12} md={6}>
            <OverviewKeyNumber
              title={block.title}
              icon={block.icon}
              // @ts-ignore
              number={block.number}
              tooltip={block.tooltip}
            />
          </Grid>
        ))}
      </Grid>
    </Article>
  );
}
