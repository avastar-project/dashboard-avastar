/**
 * LearnMoreAboutBanner is a component who represents
 * the banner of the Homepage page about Avastar open source project allowing to learn more about the platform
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

export default function LearnMoreAbout() {
  return (
    <StyledBanner>
      <Title variant="h4">Avastar is an open-source platform</Title>
      <Grid container item xs={12} alignItems="center" spacing={2}>
        <Grid item xs={8}>
          <Typography variant="body1">
            The code behind our platform is open-source and maintained by a
            community of developers engaged to improve digital transparency and
            privacy.
          </Typography>
        </Grid>
        <Grid item xs={3}>
          <Button variant="contained" href="/overview">
            Learn more
          </Button>
        </Grid>
      </Grid>
    </StyledBanner>
  );
}
