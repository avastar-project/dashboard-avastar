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

const Headline1 = styled(Typography)``;

const Headline2 = styled(Typography)``;

export default function HomeHeader() {
  return (
    <Box
      position="relative"
      alignItems="center"
      sx={{
        padding: {
          xl: '17.75rem 9.75rem 11.438rem 9.875rem;', // xl: 1536
          lg: '12.625rem 6.25rem 13.125rem 7.313rem;', // lg: 1200
          md: '12.813rem 5.75rem 7.313rem 5.625rem;', // md: 900
          sm: '12.813rem 5.75rem 7.313rem 5.625rem;', // sm: 600
          xs: '10.063rem 2.063rem 2.938rem 1rem;', // xs: 300
        },
        background: 'var(--bck-clr)',
        color: 'var(--clr-lightest)',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: {
            xl: 'row',
            lg: 'row',
            md: 'row',
            sm: 'column',
            xs: 'column',
          },
          alignItems: {
            xl: 'center',
            lg: 'center',
            md: 'center',
            sm: 'space-between',
            xs: 'space-between',
          },
          justifyContent: {
            xl: 'space-between',
            lg: 'space-between',
            md: 'space-between',
            sm: 'center',
            xs: 'center',
          },
          gap: {
            xl: '2.625rem',
            lg: '1.625rem',
            md: '0.625rem',
            sm: '0.225rem',
            xs: '0.225rem',
          },
        }}
      >
        <Box
          sx={{
            order: { xs: 2, sm: 2, md: 1, lg: 1, xl: 1 },
          }}
        >
          <Headline1
            sx={{
              lineHeight: {
                xl: '4.75rem',
                lg: '4.75rem',
                md: '3.5rem',
                sm: '3.5rem',
                xs: '3.5rem',
              },
              fontWeight: {
                xl: 900,
                lg: 900,
                md: 800,
                sm: 800,
                xs: 800,
              },
              fontSize: {
                xl: '2.986rem',
                lg: '2.986rem',
                md: '2.488rem',
                sm: '2.488rem',
                xs: '2.488rem',
              },
            }}
          >
            {' '}
            Visualise what the internet knows about you in minutes
          </Headline1>
          <Headline2
            sx={{
              paddingTop: {
                xl: '3.125rem',
                lg: '3.125rem',
                md: '3.125rem',
                sm: '2.20rem',
                xs: '2.188rem',
              },
              lineHeight: {
                xl: '2.5rem',
                lg: '2.5rem',
                md: '2.5rem',
                sm: '2.5rem',
                xs: '2.5rem',
              },
              fontWeight: {
                xl: 500,
                lg: 500,
                md: 500,
                sm: 500,
                xs: 500,
              },
              fontSize: {
                xl: '1.728rem',
                lg: '1.728rem',
                md: '1.44rem',
                sm: '1.44rem',
                xs: '1.44rem',
              },
            }}
          >
            {' '}
            Understand what your favorite apps know about you and learn how to
            manage your online privacy
          </Headline2>
        </Box>
        <Box sx={{ order: { xs: 1, sm: 1, md: 2, lg: 2, xl: 2 } }}>
          <Box
          sx={{
            
            width: {
              lg: '100%',
              md: '90%',
              sm: '80%',
              xs: '70%',
            },
            height: 'auto',
          }}
          >
            <Box
              component="img"
              src={HeaderPic}
              alt="picture home header"
              sx={{
                height:382.976,
                width: 382.288,
                display: {
                  xl: 'block',
                  lg: 'block',
                  md: 'block',
                  sm: 'block',
                  xs: 'none',
                },
              }}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
