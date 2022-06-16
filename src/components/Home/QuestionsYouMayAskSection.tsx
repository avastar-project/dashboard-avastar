/**
 * QuestionsYouMayAskSection is a component that represents
 * the section of the Homepage page resuming some question that the user can wonder himself about his data.
 */

// img
import PhoneApp from '../../assets/phone-app.gif';

//utils
import styled from 'styled-components';

// MUI components
import { Box, Typography } from '@mui/material';

// Styled-components
const Title = styled(Typography)``;

export default function QuestionsResumed() {
  return (
    <Box
      sx={{
        padding: {
          xl: '3.833rem 9.75rem 3.833rem 9.875rem;', // xl: 1536
          lg: '3.833rem 6.25rem 3.833rem 7.313rem;', // lg: 1200
          md: '3.833rem 5.75rem 3.833rem 5.625rem;', // md: 900
          sm: '3.833rem 5.75rem 3.833rem7.313rem 4.625rem;', // sm: 600
          xs: '3.063rem 2.063rem 2.938rem 1rem;', // xs: 300
        },
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
          xl: '2.75rem',
          lg: '1.625rem',
          md: '0.625rem',
          sm: '0.225rem',
          xs: '0.225rem',
        },
      }}
    >
      <Box
      sx={{ order: { xs: 2, sm: 1, md: 1, lg: 1, xl: 1 } }} >
        <Box
          sx={{
            margin:{
             sm: '0 auto',
            },
            width: {
              xl:281,
              lg: 281,
              md: 281,
              sm:281,
              xs: 0,
            },
            height: 'auto',
          }}
        >
          <Box
            component="img"
            src={PhoneApp}
            alt="animated phone app"
            sx={{
              display: {
                xl: 'block',
                lg: 'block',
                md: 'block',
                sm: 'block',
                xs: 'none',
              },
              width: {
                xl:'100%',
                lg: '100%',
                md: '100%',
                sm: '100%',
              },
              height: 'auto',
            }}
          />
        </Box>
      </Box>
      <Box
      sx={{ order: { xs: 1, sm: 2, md: 2, lg: 2, xl: 2 } }}
      >
        <Title
          sx={{
            paddingBottom: '1.5rem',
            lineHeight: {
              xl: '2.5rem',
              lg: '2.5rem',
              md: '2.5rem',
              sm: '2.5rem',
              xs: '2.5rem',
            },
            fontWeight: {
              xl: 700,
              lg: 700,
              md: 700,
              sm: 700,
              xs: 700,
            },
            fontSize: {
              xl: '2.074rem',
              lg: '2.074rem',
              md: '2.074rem',
              sm: '2.074rem',
              xs: '2.074rem',
            },
          }}
        >
          Whenever you are using an app or visiting a website, companies are
          collecting information about you
        </Title>
        <Typography
          sx={{
            lineHeight: {
              xl: '2rem',
              lg: '2rem',
              md: '2rem',
              sm: '2rem',
              xs: '2rem',
            },
            fontWeight: {
              xl: 400,
              lg: 400,
              md: 400,
              sm: 400,
              xs: 400,
            },
            fontSize: {
              xl: '1.2rem',
              lg: '1.2rem',
              md: '1.2rem',
              sm: '1.2rem',
              xs: '1.2rem',
            },
          }}
        >
          Have you ever asked yourself if your phone was listening to your
          conversations? How the heck is it proposing ads about subjects you are
          sure you only talked about with friends? Do you know which sensitive
          information they get access to?
        </Typography>
      </Box>
    </Box>
  );
}
