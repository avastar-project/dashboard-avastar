/**
 * OverProfile is the first block who contains
 * the key numbers on Overview Page. It receives
 * OverviewKeyNumber components to be fullfilled
 */

import styled from '@emotion/styled';
import { Box, Grid, IconButton, Tooltip, Typography } from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';

import DataPointsExchanged from '../../assets/data_points_exchanged.png';
import YearsExchanged from '../../assets/years_exchanged.png';
import DevicesSharing from '../../assets/devices_sharing.png';
import EntitiesSharing from '../../assets/entities.png';

import { useSelector, shallowEqual } from 'react-redux';
import {
  AvastarParsedDataPoint,
  AvastarParsedDataPointState,
  PropsFilter,
} from '../../types/dataTypes';

// Styled-components
const Article = styled(Box)`
  padding: 3rem 0;
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
      title: 'Years',
      subtitle: 'of data exchange',
      icon: YearsExchanged,
      number: yearsDataExchange, // To be done once we have implemented timestamp and details in the smartParserJson and smartparserCsv
      tooltip:
        'Number of years since you started sharing information with platforms (directly impacts the volume of data the platform is storing about you).',
    },
    {
      title: 'Devices',
      subtitle: 'sharing data',
      icon: DevicesSharing,
      number: devicesSharingdata,
      tooltip:
        'Number of distinct devices from which you shared information with platforms (current and former laptop, mobile phone(s), tablets, browsers, etc.)',
    },
    {
      title: 'Data',
      subtitle: 'points shared',
      icon: DataPointsExchanged,
      number: dataPointsShared,
      tooltip:
        'Number of facts or pieces of information compiled about you by the platform you use (information about your profile, date and location of login, posts, comments, information inferred about you with algorithms, etc.)',
    },
    {
      title: 'Entities',
      subtitle: 'accessing your data',
      icon: EntitiesSharing,
      number: entitiesAccessedDataProfile,
      tooltip:
        'Number of companies that have collected information about you for marketing and monetization purposes (display ads, tracking of your activity on other apps and websites, apps and games you installed, etc.)',
    },
  ];
  const stylesTitle = {
    borderLeft: '15px solid #FFA69E',
    padding: '10px',
    margin: '10px',
  };

  return (
    <Article>
      <h2 style={stylesTitle}>Overview</h2>

      <Grid
        py={2}
        container
        justifyContent={'space-between'}
        direction={'row'}
        maxWidth="1200px"
      >
        {overviewBlocks.map((block) => (
          <Grid
            key={block.title}
            item
            sx={{
              width: 250,
              backgroundColor: 'white',
              borderRadius: 3,
              pt: 0,
              pr: 0,
              pb: 2,
              pl: 2,
              display: 'flex',
              flexDirection: 'column',
              mr: 3,
              flex: 1,
            }}
          >
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'flex-end',
              }}
            >
              <Tooltip
                arrow
                title={<Typography color="inherit">{block.tooltip}</Typography>}
              >
                <IconButton>
                  <InfoIcon sx={{ color: 'orange' }} />
                </IconButton>
              </Tooltip>
            </Box>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
              }}
            >
              <Box
                component="img"
                sx={{
                  width: 90,
                  height: 80,
                  objectFit: 'contain',
                }}
                alt={block.title}
                src={block.icon}
              />
              <Box>
                <Typography
                  sx={{
                    fontSize: '24px',
                    fontWeight: '600',
                    lineHeight: '1.5rem',
                  }}
                >
                  {block.number} {block.title}
                </Typography>
                <Typography
                  sx={{
                    fontSize: '15px',
                    fontWeight: '500',
                  }}
                >
                  {block?.subtitle}
                </Typography>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Article>
  );
}
