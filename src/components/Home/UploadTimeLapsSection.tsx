/**
 * UploadTimeLapsSection is a component that represents
 * the "What  it takes" section of the Homepage informing about the time needed to get data
 */

//utils
import styled from 'styled-components';

// MUI
import { Box, Grid, Typography } from '@mui/material';

// Typescript types
interface ProcessTimeLaps {
  content: string;
  box: string;
}

// Contains each process time-laps information
const processTimeLaps: ProcessTimeLaps[] = [
  {
    content: `Depending on the platform, it can take up to 48h to receive your personal data files.`,
    box: 'Request your data',
  },
  {
    content: `The upload process on Avastar will take a few seconds.
      `,
    box: 'Upload your data',
  },
  {
    content: `Immediatly after, you uploaded your files.
      `,
    box: `View your footprint`,
  },
];

const StyledBox = styled(Box)`
  background-color: var(--clr-darkest);
  padding: 4.5rem 4.851rem 3.25rem 4.851rem;
  }
  `;

const Title = styled(Typography)`
  color:var(--clr-lightest);
  padding-bottom: 4.438rem;
`;

const ProcessList = styled(Box)`
  width: 100%;
`;

const ProcessItem = styled(Box)`
  width: 100%;
`;

const BoxContainer = styled(Box)`
  position: relative;
  && {background-color:var(--clr-blue-light)};
  color: var(--clr-lightest);
  border-radius: 4px 20px 20px 4px;
  padding: 0 20px;
  overflow: hidden;
  width: auto;
  height: 40px;

  &&:before {
    content: '';
    position: absolute;
    top: 0;
    right: -9px;
    height: 0;
    width: 0;
    border-top: 20px solid transparent;
    border-bottom: 20px solid transparent;
    border-left: 10px solid var(--clr-blue);
    border-radius: 4px;
  }

  &&:after {
    content: '';
    position: absolute;
    top: 0;
    left: -1px;
    height: 0;
    width: 0;
    border-top: 20px solid transparent;
    border-bottom: 20px solid transparent;
    border-left: 10px solid var(--clr-darkest);
    border-radius: 4px;
  }

  &&:first-child:before {
    display: none;
  }

  &&:last-child:after {
    display: none;
  }
`;

const Content = styled(Typography)`

  color: var(--clr-lightest);
`;

export default function UploadTimeLaps() {
  return (
    <StyledBox>
      <Title variant="h4">What it takes</Title>
      <Grid>
        <ProcessList display="flex" justifyContent="space-between">
          {/* Mapping process time-laps array to display each element */}
          {/* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map */}
          {processTimeLaps.map(
            (processTimeLaps: ProcessTimeLaps, index: number) => (
              <ProcessItem key={index}>
                <BoxContainer>
                  <Typography variant="h6" textAlign="center" lineHeight={2}>
                    {processTimeLaps.box}
                  </Typography>
                </BoxContainer>
                <Box p={4}>
                  <Content variant="body1">{processTimeLaps.content}</Content>
                </Box>
              </ProcessItem>
            )
          )}
        </ProcessList>
      </Grid>
    </StyledBox>
  );
}
