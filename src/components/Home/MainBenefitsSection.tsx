/**
 * MainBenefitsSection is a component that represents
 * the "What you get" section of the Homepage page about 4 main advantages to use the platform
 */

//utils
import styled from 'styled-components';

// MUI components
import {Box,Grid} from '@mui/material';

// Icons
import TransparencyIcon from '../../assets/icon-transparency.png';
import ClockIcon from '../../assets/icon-clock.png';
import MonitoringIcon from '../../assets/icon-monitoring.png';
import CredibilityIcon from '../../assets/icon-credibility.png';


// Typescript types
interface BenefitsBlock {
  name: string;
  content: string;
  icon: string;
}
// Contains each benefit block infomations
const benefitsBlock:BenefitsBlock[] = 
[
  {
    name: 'gain transparency',
    content: `See what information companies have collected about you and how they can use your data. Finally understand why you think your phone is listening to you.`,
    icon: TransparencyIcon,
  },
  {
    name: 'save time and complexity',
    content: `We remove the pain of manually analysing the personal data you shared so that you can focus on deciding how you want to manage your online privacy.`,
    icon: ClockIcon,
  },
  {
    name: 'understand privacy threats',
    content: `Learn what are the risks and threats associated to sharing specific data points with third-parties.`,
    icon: MonitoringIcon,
  },
  {
    name: 'prevent e-reputation risks',
    content: `Control your public image on the internet by identifying the personal information you and your network shared about you in the past.
    `,
    icon: CredibilityIcon,
  },
];

// Styled-components
const StyledServices = styled.section`
margin-top:2rem;
padding-left:4rem;
& > p {
    font-size:2.5rem;
  }
`;

const ServiceList = styled.ul`
display:grid;
grid-template-columns:1fr 1fr;
gap:4rem;
width:95%;
list-style:none;
padding:2rem 0;
`;

const ServiceItem = styled.li`
display:grid;
grid-template-columns:55% 10%;
grid-column-gap: 1rem;

& > h3 {
grid-row:1;
grid-column:1;
text-transform:uppercase;
}

& > img {
    width:100%
    }

& > p {
grid-row:1;
grid-column:1;
padding-top:3rem;
line-height: 2rem;
}
`;

export default function MainBenefits() {
  return (
    <Box sx={{ flexGrow: 1 }}>
    <StyledServices>
        <p>What you get</p>
      <Grid >
      <ServiceList>
        {/* Mapping benefit blocks array to display each element */}
          {/* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map */}
        {benefitsBlock.map((benefitsBlock:BenefitsBlock, index:number) => (
         <ServiceItem key={index}>
       <h3>{benefitsBlock.name}</h3>
       <img src={benefitsBlock.icon} alt={`${benefitsBlock.name}-icon`} />
       <p>{benefitsBlock.content}</p>
          </ServiceItem>
        ))}
      </ServiceList>
    </Grid>
    </StyledServices>
    </Box>
  );
}
