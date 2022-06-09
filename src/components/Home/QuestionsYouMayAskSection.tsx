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
const StyledResume = styled.section`
  padding: 2.75rem 9.438rem 5.688rem 10.063rem;
  display: flex;
  align-items: center;
  gap: 2.75rem;
`;
const ImgContainer = styled(Box)`
  width: 100%;
`;

const Img = styled.img`
  width: 24.625rem;
  height: 18.75rem;
`;

const Title = styled(Typography)`
  padding-bottom: 1.5rem;
`;

export default function QuestionsResumed() {
  return (
    <StyledResume>
      <Box>
        <ImgContainer>
          <Img src={PhoneApp} alt="animated phone app" />
        </ImgContainer>
      </Box>
      <Box
        sx={{
          width: '48.5rem',
          height: '12.5rem',
        }}
      >
        <Title
          sx={{
            lineHeight: '2.5rem',
            fontWeight: 700,
            fontSize: '2.074rem',
          }}
        >
          Whenever you are using an app or visiting a website, companies are
          collecting information about you
        </Title>
        <Typography
          sx={{
            lineHeight: '2rem',
            fontWeight: 400,
            fontSize: '1.2rem',
          }}
        >
          Have you ever asked yourself if your phone was listening to your
          conversations? How the heck is it proposing ads about subjects you are
          sure you only talked about with friends? Do you know which sensitive
          information they get access to?
        </Typography>
      </Box>
    </StyledResume>
  );
}
