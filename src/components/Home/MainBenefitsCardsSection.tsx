/**
 * MainBenefitsCardsSection is a component that represents
 * the "Card" section of the Homepage page about a few things users may ask themself about using Avastar
 */

//utils
import styled from 'styled-components';

// Img
import PadlockIcon from '../../assets/padlock.png';
import EqualizerIcon from '../../assets/equalizer.png';
import IdentityProfilIcon from '../../assets/identity-profil.png';

import { Box, Typography } from '@mui/material';

// Typescript types
interface BenefitsCard {
  title: string;
  content: string;
  icon: string;
}

// Contains each benefit's card informations
const benefitsCard: BenefitsCard[] = [
  {
    title: 'Yes, your data is safe',
    content: `Your data is safe with us as we can’t and don’t want to see your data. The files you will use never leave your computer, all your data is stored locally on your browser. It will also be deleted every time your session is refreshed.`,
    icon: PadlockIcon,
  },
  {
    title: 'No, you don’t need any technical skills',
    content: `We remove the pain of manually analyzing the personal data you shared, so you can focus on managing your privacy. We provide you with all the information you need in order to understand your data and act upon it.`,
    icon: EqualizerIcon,
  },
  {
    title: 'No, we are not interested in your data',
    content: `Avastar has been founded by a community of engaged developers willing to build the next generation of Internet users. One that has the power to control their digital identity and has the means to decide how their data is used.`,
    icon: IdentityProfilIcon,
  },
];

const BenefitsList = styled(Box)``;
const BenefitItem = styled(Box)``;

const Title = styled(Typography)``;

export default function MainBenefitsCard() {
  return (
    <Box
      sx={{
        padding: {
          xl: ' 0 9.438rem 5.375rem 10.063rem;', // xl: 1536
          lg: ' 0 0.438rem 5.375rem 1.063rem;', // lg: 1200
          md: ' 0 0.438rem 5.375rem 1.063rem;', // md: 900
          sm: ' 0 0.438rem 5.375rem 1.063rem;', // sm: 600
          xs: ' 0 0.438rem 5.375rem 1.063rem;', // xs: 300
        },
        width: '100%',
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
      }}
    >
      <Title
        id="about"
        sx={{
          paddingBottom: {
            xl: '2.75rem',
            lg: '2.75rem',
            md: '2.75rem',
            sm: '2.75rem',
            xs: '2.75rem',
          },
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
            xs: '1.721rem',
          },
        }}
      >
        A few things you may ask yourself right now
      </Title>
      <Box>
        <BenefitsList
          component="ul"
          sx={{
            listStyle: 'none',
            display: 'flex',
            // padding: '2.313rem 1.75rem',
            flexDirection: {
              xl: 'row',
              lg: 'row',
              md: 'row',
              sm: 'column',
              xs: 'column',
            },
            gap: {
              xl: '6.75rem',
              lg: '6.75rem',
              md: '2.75rem',
              sm: '6.75rem',
              xs: '3.75rem',
            },
          }}
        >
          {/* Mapping array to display each element */}
          {/* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map */}
          {benefitsCard.map((benefitsCard: BenefitsCard, index: number) => (
            <BenefitItem
              key={index}
              component="li"
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                backgroundColor: 'var(--clr-lightest)',
                boxShadow: 3,
                borderRadius: '0.625rem',
                gap: {
                  xl: '1.25rem',
                  lg: '1.25rem',
                  md: '1.25rem',
                  sm: '1.25rem',
                  xs: '1.25rem',
                },
                width:{
                  xl: '19rem',
                  lg: '19rem',
                  md: '19rem',
                  sm: '19rem',
                  xs: '15rem',
                },
                height: {
                  xl: '25.563rem',
                  lg: '25.563rem',
                  md: '25.563rem',
                  sm: '25.563rem',
                  xs: '23rem',
                },
                padding: '1.313rem 0.75rem',
              }}
            >
              <Box 
               sx={{
                display: 'flex',
                justifyContent:'center',
                alignItems: {
                  xl: 'center',
                  lg: 'center',
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
                  sx={{
                    width: 37.06,
                    height: 45,
                  }}
                >
                  <Box
                    component="img"
                    src={benefitsCard.icon}
                    alt={`${benefitsCard.icon}`}
                    sx={{
                      width: {
                        xl: '100%',
                        lg: '100%',
                        md: '100%',
                        sm: '100%',
                        xs:'100%'
                      },
                      height: 'auto',
                    }}
                  />
                </Box>
              </Box>
              <Typography
               sx={{
                lineHeight: {
                  xl: '1.5rem',
                  lg: '1.5rem',
                  md: '1.5rem',
                  sm: '1.5rem',
                  xs: '1.5rem',
                },
                fontWeight: {
                  xl: 600,
                  lg: 600,
                  md: 600,
                  sm: 600,
                  xs: 600,
                },
                fontSize: {
                  xl: '1.44rem',
                  lg: '1.44rem',
                  md: '1.44rem',
                  sm: '1.44rem',
                  xs: '1.195rem',
                },
              }}
              >
                {benefitsCard.title}
              </Typography>
              <Typography
               sx={{
                lineHeight: {
                  xl: '1.5rem',
                  lg: '1.5rem',
                  md: '1.5rem',
                  sm: '1.5rem',
                  xs: '1.5rem',
                },
                fontWeight: {
                  xl: 400,
                  lg: 400,
                  md: 400,
                  sm: 400,
                  xs: 400,
                },
                fontSize: {
                  xl: '1rem',
                  lg: '1rem',
                  md: '1rem',
                  sm: '1rem',
                  xs: '0.875rem',
                },
              }}
              >
                {benefitsCard.content}
              </Typography>
            </BenefitItem>
          ))}
        </BenefitsList>
      </Box>
    </Box>
  );
}
