/**
 * StepsUploadDataSection is a component that represents the section of the Homepage page regarding the 4 steps to upload data.
 */

//utils
import styled from 'styled-components';

// MUI components
import { Box, Typography } from '@mui/material';
// Icons
import RequestDataIcon from '../../assets/icon-request-data.jpg';
import UploadDataIcon from '../../assets/icon-upload-data.png';
import DigitalFootprintIcon from '../../assets/icon-digital-footprint.jpg';
import ActionTakenDataIcon from '../../assets/icon-action-taken-data.jpg';

// Typescript types
interface Steps {
  name: string;
  content: {
    p1: string;
    p2: string;
    pItalic: string;
  };
  icon: string;
}

// Contains each steps infomations
const steps: Steps[] = [
  {
    name: 'Request your data',
    content: {
      p1: `Start by requesting your personal data from Google and Facebook. To make it easier, we have prepared a tutorial for you.`,
      p2: `It can take up to 48 hours to receive your personal data. Facebook will send you a notification and Google an email when your files are ready to be downloaded.`,
      pItalic: `At the end of this step, you should have received multiple files in Zip format.Download them locally on your device.`,
    },
    icon: RequestDataIcon,
  },
  {
    name: 'Visualise your data',
    content: {
      p1: `Once you have received your personal data files, you can initialise your Avastar digital identity card by clicking here.
        `,
      p2: `Then, you can drag and drop the files from each platform in the dedicated drop zones.
        `,
      pItalic: `After you imported your data, the charts will immediately appear in the overview page.
        `,
    },
    icon: UploadDataIcon,
  },
  {
    name: 'See your digital footprint',
    content: {
      p1: `Navigate your personal data Dashboard to gain understanding on all the data points collected by platforms about you.`,
      p2: `To help you take decisions on how to manage your online privacy, we have prepared simple and interactive guides.
        `,
      pItalic: `Identify clear actions you want to take in order to improve the balance between your experience on apps and your online privacy.`,
    },
    icon: DigitalFootprintIcon,
  },
  {
    name: 'Take action on your data',
    content: {
      p1: `Now, it’s up to you to take action on your data.
        `,
      p2: `You can start with deleting/modifying data or prevent companies from collecting a specific type of data by personalising your privacy settings. `,
      pItalic: `We are currently experimenting with automating these manual actions. More to come soon!`,
    },
    icon: ActionTakenDataIcon,
  },
];

// Styled-components
const StyledSteps = styled.div`
  line-height: 1.5rem;
`;

const StepsList = styled.ul`
  list-style-type: none;
  padding: 2rem;
  width: 100%;

  & > li:nth-child(odd) {
    flex-direction: row-reverse;
  }
`;

const StepItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4rem;
  list-style-type: none;
  width: 100%;
  padding: 1rem 2rem;
`;
const ImgContainer = styled(Box)`
  width: 50%;

  & > img {
    object-fit: cover;
    width: 50%;
  }
`;

const ContentContainer = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  list-style-type: none;
  width: 50%;

  & > li:first-child {
    position: relative;
    text-transform: uppercase;
    font-size: 2rem;
    padding-top: 1.5rem;
    padding-bottom: 1.5rem;
  }

  & > li:first-child:before {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 15%;
    border-top: 0.4rem solid var(--clr-blue-primary);
  }

  & > li:last-child {
    font-style: italic;
  }
`;

export default function StepsUploadData() {
  return (
    <StyledSteps>
      <StepsList>
        {/* Mapping steps array to display each element */}
        {/* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map */}
        {steps.map((steps: Steps, index: number) => (
          <StepItem key={index}>
            <ImgContainer display="flex" justifyContent="center">
              <img src={steps.icon} alt={`icon-${steps.name}`} />
            </ImgContainer>
            <ContentContainer>
              <li>
                <Typography variant="h4">{steps.name}</Typography>
              </li>
              <li>
                <Typography variant="body1">{steps.content.p1}</Typography>
              </li>
              <li>
                <Typography variant="body1">{steps.content.p2}</Typography>
              </li>
              <li>
                <Typography variant="body1">{steps.content.pItalic}</Typography>
              </li>
            </ContentContainer>
          </StepItem>
        ))}
      </StepsList>
    </StyledSteps>
  );
}
