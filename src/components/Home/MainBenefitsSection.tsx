/**
 * MainBenefitsSection is a component that represents
 * the "What you get" section of the Homepage page about 4 main advantages to use the platform
 */

//utils
import styled from 'styled-components';

// MUI components
import { Box, Grid, Typography } from '@mui/material';

// Icons
import TransparencyIcon from '../../assets/icon-transparency.png';
import SaveTimeIcon from '../../assets/icon-save-time.png';
import PrivacyThreatsIcon from '../../assets/icon-privacy-threats.png';
import EreputationRisksIcon from '../../assets/icon-ereputation-risks.png';

// Typescript types
interface BenefitsBlock {
  name: string;
  content: string;
  icon: string;
}
// Contains each benefit block infomations
const benefitsBlock: BenefitsBlock[] = [
  {
    name: 'gain transparency',
    content: `See what information companies have collected about you and how they can use your data. Finally understand why you think your phone is listening to you.`,
    icon: TransparencyIcon,
  },
  {
    name: 'save time and complexity',
    content: `We remove the pain of manually analysing the personal data you shared so that you can focus on deciding how you want to manage your online privacy.`,
    icon: SaveTimeIcon,
  },
  {
    name: 'understand privacy threats',
    content: `Learn what are the risks and threats associated to sharing specific data points with third-parties.`,
    icon: PrivacyThreatsIcon,
  },
  {
    name: 'prevent e-reputation risks',
    content: `Control your public image on the internet by identifying the personal information you and your network shared about you in the past.
    `,
    icon: EreputationRisksIcon,
  },
];

// Styled-components
const StyledServices = styled(Grid)`
  padding: 2.009rem 4.851rem 3.25rem 4.851rem;
`;

const Title = styled(Typography)``;

const ServiceList = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  list-style: none;
  padding: 2rem 0;
`;

const ServiceItem = styled.li`
  display: flex;
  gap: 1rem;
`;

const SubTitle = styled(Typography)`
  text-transform: uppercase;
`;

const ImgContainer = styled(Box)``;

const TextContainer = styled(Box)``;

const Content = styled(Typography)``;

export default function MainBenefits() {
  return (
    <StyledServices>
      <Title variant="h4">What you get</Title>
      <ServiceList>
        {/* Mapping benefit blocks array to display each element */}
        {/* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map */}
        {benefitsBlock.map((benefitsBlock: BenefitsBlock, index: number) => (
          <ServiceItem key={index}>
            <ImgContainer>
              <img
                src={benefitsBlock.icon}
                alt={`${benefitsBlock.name}-icon`}
              />
            </ImgContainer>
            <TextContainer>
              <SubTitle variant="h6">{benefitsBlock.name}</SubTitle>
              <Content variant="body1">{benefitsBlock.content}</Content>
            </TextContainer>
          </ServiceItem>
        ))}
      </ServiceList>
    </StyledServices>
  );
}
