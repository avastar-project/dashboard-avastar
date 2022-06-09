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

const StyledBenefits = styled(Box)`
  padding: 0 9.438rem 5.375rem 10.063rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const BenefitsList = styled.ul`
  list-style-type: none;
  display: flex;
  gap: 6.75rem;
`;

const BenefitItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.25rem;
  width: 19rem;
  height: 25.563rem;
  background-color: var(--clr-lightest);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 0.625rem;
  padding: 2.313rem 1.75rem;
`;

const Title = styled(Typography)`
  padding-bottom: 2.75rem;
`;

const ImgContainer = styled(Box)`
  width: 100%;
`;

const Img = styled.img`
  width: 3.438rem;
  height: 3.438rem;
`;

export default function MainBenefitsCard() {
  return (
    <StyledBenefits>
      <Title
        id="about"
        sx={{
          lineHeight: '2.5rem',
          fontWeight: 700,
          fontSize: '2.074rem',
        }}
      >
        A few things you may ask yourself right now
      </Title>
      <Box>
        <BenefitsList>
          {/* Mapping array to display each element */}
          {/* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map */}
          {benefitsCard.map((benefitsCard: BenefitsCard, index: number) => (
            <BenefitItem key={index}>
              <Box display="flex" alignItems="center" gap={2}>
                <ImgContainer>
                  <Img src={benefitsCard.icon} alt={`${benefitsCard.icon}`} />
                </ImgContainer>
              </Box>
              <Typography
                sx={{
                  lineHeight: '1.5rem',
                  fontWeight: 600,
                  fontSize: '1.44rem',
                }}
              >
                {benefitsCard.title}
              </Typography>
              <Typography
                sx={{
                  lineHeight: '1.5rem',
                  fontWeight: 400,
                  fontSize: '1rem',
                }}
              >
                {benefitsCard.content}
              </Typography>
            </BenefitItem>
          ))}
        </BenefitsList>
      </Box>
    </StyledBenefits>
  );
}
