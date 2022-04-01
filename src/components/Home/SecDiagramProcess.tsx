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
      content: `Immediatly after, you uploaded your files.
      `,
      box:`View your footprint`
    },
  ];

  const StyledBox = styled(Box)`
  background-color:var(--clr-darkest);
  padding:2rem 4rem;
      & > p {
      font-size:2.5rem;
      color:var(--clr-lightest);
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
  row-gap: 2rem;
  

  & > div {
  min-height:4rem;
  }

  & > .MuiBox-root {
      position: relative;
      text-align:center;
      border-radius:0.5rem;
      padding:1.5rem;
      color:var(--clr-lightest);
      background-color:#1C76D2;
  }

  & > .MuiBox-root:after {
    content:"";
    position:absolute;
    top:50%;
    left:100%;
    width:18rem;
    height:0.2rem;
    margin-top:-0.1rem;
    background:var(--clr-lightest);
    }
  `;

export default function SecDiagramProcess() {
    return (

        <StyledBox>
        <p>What it takes</p>
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