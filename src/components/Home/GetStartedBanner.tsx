/**
 GetStartedBanner is a component representing the first banner of the Homepage page about how to get started by getting its data.
 */

//utils
import styled from 'styled-components';

// MUI components
import { Button, Grid, Typography } from '@mui/material';

// Styled-components
const StyledBanner = styled(Grid)`
  background-color: var(--clr-lighter);
  padding: 2.009rem 4.851rem 3.25rem 4.851rem;
`;

const Title = styled(Typography)`
  padding-bottom: 2rem;
`;

export default function GetStarted() {
  return (
    <StyledBanner>
      <Title variant="h4">How to get started ?</Title>
      <Grid container item xs={12} alignItems="center" spacing={2}>
        <Grid item xs={8}>
          <Typography variant="body1">
            Request your personal data in your favorite apps. Start with Google
            and Facebook.
          </Typography>
        </Grid>
        <Grid item xs={3}>
          <Button variant="contained" href="/overview">
            Get my data
          </Button>
        </Grid>
      </Grid>
    </StyledBanner>
  );
}
