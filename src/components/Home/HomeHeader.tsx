/**
 * HomeHeader is a component who represents
 * the first block of the Homepage page.
 */

// utils styled
import styled from 'styled-components';

// MUI components
import { Grid, Typography } from '@mui/material';

const Container = styled(Grid)`
  padding: 3.683rem 4.851rem 4.954rem 4.851rem;
  background-color: var(--clr-darkest);
  color: var(--clr-lightest);

  & > .MuiGrid-container {
    padding-top: 5.422rem;
  }
`;

const Headline1 = styled(Typography)``;

const BackgroundImage = styled.p`
  text-transform: uppercase;
`;

const Headline2 = styled(Typography)`
  padding-top: 8.566rem;
`;

export default function Header() {
  return (
    <Container alignItems="center">
      <Grid container alignItems="center" spacing={6}>
        <Grid item xs={8}>
          <Headline1 variant="h2">
            {' '}
            Get an immediate overview of your digital footprint & learn how to
            manage your online privacy.
          </Headline1>
        </Grid>
        <Grid item xs={4}>
          <BackgroundImage>place holder illustration</BackgroundImage>
        </Grid>
      </Grid>
      <Headline2 variant="body1">
        {' '}
        Undersand what your favorite apps know about you and do with your data.
      </Headline2>
    </Container>
  );
}
