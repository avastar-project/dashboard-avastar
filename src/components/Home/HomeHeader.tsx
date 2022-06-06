/**
 * HomeHeader is a component who represents
 * the first block of the Homepage page.
 */

// img
import HeaderPic from '../../assets/home-header.png';

// utils styled
import styled from 'styled-components';

// MUI components
import { Box, Typography } from '@mui/material';

const Container = styled(Box)`
  padding: 18.125rem 9.75rem 13.125rem 9.75rem;
  background: var(--bck-clr);
  color: var(--clr-lightest);
`;

const Headline1 = styled(Typography)``;

const ImgContainer = styled(Box)`
  width: 100%;
`;

const Img = styled.img`
  width: 23.893rem;
  height: 23.936rem;
`;

const Headline2 = styled(Typography)`
  padding-top: 3.125rem;
`;

export default function HomeHeader() {
  return (
    <Container alignItems="center">
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <Box sx={{ width: '48rem', height: 'auto' }}>
          <Headline1
            sx={{
              lineHeight: '4.75rem',
              fontWeight: 900,
              fontSize: '2.986rem',
            }}
          >
            {' '}
            Visualise what the internet knows about you in minutes
          </Headline1>
          <Headline2
            sx={{ lineHeight: '2.5rem', fontWeight: 500, fontSize: '1.728rem' }}
          >
            {' '}
            Undersand what your favorite apps know about you and learn how to
            manage your online privacy
          </Headline2>
        </Box>
        <Box>
          <ImgContainer>
            <Img src={HeaderPic} alt="picture home header" />
          </ImgContainer>
        </Box>
      </Box>
    </Container>
  );
}
