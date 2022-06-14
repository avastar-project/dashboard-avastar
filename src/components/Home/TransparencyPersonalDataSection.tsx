/**
 * TransparencyPersonalDataSection is a component that represents
 * the section of the Homepage page introducing the overview features
 */

// img
import OverviewPic from '../../assets/overview-page-preview.png';

//utils
import styled from 'styled-components';

// MUI components
import { Box, Typography } from '@mui/material';

// Typescript types
interface ExplanationList {
  content: string;
}

// Contains each content explanation paragraph
const explanationList: ExplanationList[] = [
  {
    content: `Avastar provides you with a dashboard to visualize which companies are tracking you, which types of personal data are collected, and informs you on how they can be used. `,
  },
  {
    content: `We automated the whole process to visualize the raw personal data you requested to platforms so you can focus on making decisions about how you manage your online privacy.
    `,
  },
  {
    content: `With Avastar, you are only a few clicks away from having a full glance at your digital identity!
    `,
  },
];

// Styled-components
const StyledExplanation = styled.section`
  padding: 0 9.438rem 5.688rem 10.063rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const ImgContainer = styled(Box)`
  width: 100%;
`;

const Img = styled.img`
  width: 37.23rem;
  height: 21.938rem;
`;

const Title = styled(Typography)`
  padding-bottom: 2.75rem;
`;
const ParagraphList = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`;

const ParagraphItem = styled.li``;

export default function TransparencyOverview() {
  return (
    <StyledExplanation>
      <Title
        id="services"
        sx={{
          lineHeight: '2.5rem',
          fontWeight: 700,
          fontSize: '2.074rem',
        }}
      >
        Get the transparency you deserve on your personal data!
      </Title>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="flex-start"
        gap="3.375rem"
      >
        <Box
          sx={{
            width: '31.438rem',
            height: '21.938rem',
          }}
        >
          <ParagraphList>
            {/* Mapping list array to display each element */}
            {/* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map */}
            {explanationList.map(
              (explanationList: ExplanationList, index: number) => (
                <ParagraphItem key={index}>
                  <Typography
                    sx={{
                      lineHeight: '2rem',
                      fontWeight: 400,
                      fontSize: '1.2rem',
                    }}
                  >
                    {explanationList.content}
                  </Typography>
                </ParagraphItem>
              )
            )}
          </ParagraphList>
        </Box>
        <Box>
          <ImgContainer>
            <Img src={OverviewPic} alt="overview page picture" />
          </ImgContainer>
        </Box>
      </Box>
    </StyledExplanation>
  );
}
