/**
 * TransparencyPersonalDataSection is a component that represents
 * the section of the Homepage page introducing the overview features
 */

// img
import OverviewPic from '../../assets/overview-page.png';

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
const StyledExplanation = styled(Box)``;

// const Img = styled.img`
//   width: 31.438rem;
//   height: 21.938rem;
// `;

const Title = styled(Typography)`
  // padding-bottom: 2.75rem;
`;
const ParagraphList = styled(Box)`
  // list-style-type: none;
  // display: flex;
  // flex-direction: column;
  // gap: 1.25rem;
`;

const ParagraphItem = styled.li``;

export default function TransparencyOverview() {
  return (
    <StyledExplanation
      sx={{
        width: '100%',
        padding: {
          xl: ' 0 9.438rem 5.688rem 10.063rem;', // xl: 1536
          lg: ' 0 9.438rem 5.688rem 10.063rem;', // lg: 1200
          md: ' 0 0.438rem 5.688rem 1.063rem;', // md: 900
          sm: ' 0 0.438rem 5.688rem 1.063rem;', // sm: 600
          xs: ' 0 0.438rem 5.688rem 1.063rem;', // xs: 300
        },
        display: 'flex',
        flexDirection: {
          xl: 'column',
          lg: 'column',
          md: 'column',
          sm: 'column',
          xs: 'column',
        },
        alignItems: {
          xl: 'center',
          lg: 'center',
          md: 'center',
          sm: 'center',
          xs: 'center',
        },
        gap: {
          xl: '1.25rem',
          lg: '1.25rem',
          md: '1.25rem',
          sm: '1.25rem',
          xs: '1.25rem',
        },
      }}
    >
      <Title
        id="services"
        sx={{
          paddingBottom:{
            xl:'2.75rem',
            lg: '1.625rem',
            md: '1.225rem',
            sm: '1.225rem',
            xs: '0.8rem',
          },
          lineHeight: '2.5rem',
          fontWeight: 700,
          fontSize: '2.074rem',
        }}
      >
        Get the transparency you deserve on your personal data!
      </Title>
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
        justifyContent:'center',
        alignItems: {
          xl: 'flex-start',
          lg: 'flex-start',
          md: 'center',
          sm: 'center',
          xs: 'center',
        },
        gap: {
          xl: '3.375rem',
          lg: '1.25rem',
          md: '1.25rem',
          sm: '1.25rem',
          xs: '1.25rem',
        },
      }}
      >
        <Box
         sx={{ order: {sm:2, md: 1, lg: 1, xl: 1 } }} 
        // sx={{
        //   width: '31.438rem',
        //   height: '21.938rem',
        // }}
        >
          <ParagraphList
            component="ul"
            sx={{
              listStyle: 'none',
              display: 'flex',
              flexDirection: 'column',
              gap: {
                xl: '2.625rem',
                lg: '1.625rem',
                md: '1.225rem',
                sm: '1.225rem',
                xs: '0.8rem',
              },
            }}
          >
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
        <Box
        sx={{ order: { sm:1,md: 2, lg: 2, xl: 2 } }}>
          <Box
            sx={{
              width: {
                xl: 503,
                lg: 503,
                md: 503,
                sm: 503,
                xs: 0,
              },
              height: {
                xl: 351,
                lg: 351,
                md: 351,
                sm: 351,
                xs: 0,
              },
            }}
          >
            <Box
              component="img"
              src={OverviewPic}
              alt="overview page picture"
              sx={{
                display: {
                  xl: 'block',
                  lg: 'block',
                  md: 'block',
                  sm: 'block',
                  xs: 'none',
                },
                width: {
                  xl: '100%',
                  lg: '100%',
                  md: '100%',
                  sm: '100%',
                },
                height: 'auto',
              }}
            />
          </Box>
        </Box>
      </Box>
    </StyledExplanation>
  );
}
