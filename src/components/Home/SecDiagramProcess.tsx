//utils
import styled from 'styled-components';

// MUI
import { Box,Grid } from '@mui/material';

const process = [
    {
      content: `Depending on the platform, it can take up to 48h to receive your personal data files.`,
      box: 'Request your data',
    },
    {
      content: `The upload process on Avastar will take a few seconds.
      `,
      box:'Upload your data',
    },
    {
      content: `Immediatly after you uploaded your files.
      `,
      box:`View your footprint`
    },
  ];

  const StyledBox = styled(Box)`
  position relative;
  background-color:var(--clr-darkest);
  padding:2rem 4rem;
      & > p {
      font-size:2.5rem;
      color:var(--clr-lightest);
  }
  & > div {
    postion
      border-bottom: 2px solid white;
      z-index:-1;

  }
  }
  `;

  const ProcessList = styled.ul`
  display:grid;
  grid-template-columns:1fr 1fr 1fr;
  justify-content:start;
  color:var(--clr-lightest);
  list-style: none;
  background-color:var(--clr-darkest);
  padding-top:2rem;`;

  const ProcessItem = styled.li`
  display:flex;
  width:50%;
  flex-direction:column;
  justify-content:center;
  align-item:center;
  row-gap: 2rem;

  & > .MuiBox-root {
      text-align:center;
      border-radius:0.5rem;
      padding:1.5rem;
      color:var(--clr-lightest);
      background-color:#1C76D2;
    }
  `;

export default function SecDiagramProcess() {
    return (

        <StyledBox>
        <p>What it takes</p>
        <div></div>
        <Grid>
        <ProcessList>
        {/* Mapping process array to display each element */}
          {/* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map */}
        {process.map((elt, index) => (
        <ProcessItem key={index}>
        <div>{elt.content}</div>
        <Box>{elt.box}</Box>
        </ProcessItem>
        ))}
        </ProcessList>
        </Grid>
        </StyledBox>
    );  }