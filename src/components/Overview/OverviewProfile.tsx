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

// Styled-components
const Article = styled.article`
  background-color: var(--clr-lightest);
  border-radius: 0.5rem;
  margin-bottom: 1rem;
  padding: 0.5rem;
`;

// Contains basic informations for each overview profile's block
const overviewBlocks = [
  {
    title: 'Data points shared',
    icon: DataLakeIcon,
    number: 1025,
    tooltip: 'about data points',
  },
  {
    title: 'Entities accessed your data',
    icon: OrganizationIcon,
    number: 150,
    tooltip: 'about entities',
  },
  {
    title: 'Devices sharing data',
    icon: DeviceIcon,
    number: 8,
    tooltip: 'about devices',
  },
  {
    title: 'Years of data exchange',
    icon: HourglassIcon,
    number: 11,
    tooltip: 'About years of data exchange',
  },
];

export default function OverviewProfile() {
  return (
    <Article>
      <h2>Overview</h2>
      <Grid container spacing={2}>
        {overviewBlocks.map((block, index) => (
          <Grid key={index} item xs={12} md={6}>
            <OverviewKeyNumber
              title={block.title}
              icon={block.icon}
              number={block.number}
              tooltip={block.tooltip}
            />
          </Grid>
        ))}
      </Grid>
    </Article>
  );
}
