//utils
import styled from 'styled-components';

// Icons
import RequestDataIcon from '../../assets/icon-request-data.jpg';
import UploadDataIcon from '../../assets/icon-upload-data.png';
import DigitalFootprintIcon from '../../assets/icon-digital-footprint.jpg';
import ActionTakenDataIcon from '../../assets/icon-action-taken-data.jpg';

// Contains each card infomations
const steps = [
  {
    name: 'Request your data',
    content:{
        p1:`Start by requesting your personal data from Google and Facebook. To make it easier, we have prepared a tutorial for you.`,
        p2:`It can take up to 48 hours to receive your personal data. Facebook will send you a notification and Google an email when your files are ready to be downloaded.`,
        pItalic:`At the end of this step, you should have received multiple files in Zip format.Download them locally on your device.`
    },
    icon: RequestDataIcon,
  },
  {
    name: 'Upload your data',
    content:{
        p1:`Once you have received your personal data files, you can initialise your Avastar digital identity card by clicking here.
        `,
        p2:`Then, you can drag and drop the files from each platform in the dedicated drop zones.
        `,
        pItalic:`After you uploaded your data, the charts will immediately appear in the overview page.
        `
    },
    icon: UploadDataIcon,
  },
  {
    name: 'See your digital footprint',
    content:{
        p1:`Navigate your personal data Dashboard to gain understanding on all the data points collected by platforms about you.`,
        p2:`To help you take decisions on how to manage your online privacy, we have prepared simple and interactive guides.
        `,
        pItalic:`Identify clear actions you want to take in order to improve the balance between your experience on apps and your online privacy.`
    },
    icon:DigitalFootprintIcon,
  },
  {
    name: 'Take action on your data',
    content:{
        p1:`Now, it’s up to you to take action on your data. 
        `,
        p2:`You can start with deleting/modifying data or prevent companies from collecting a specific type of data by personalising your privacy settings. `,
        pItalic:`We are currently experimenting with automating these manual actions. More to come soon!`
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
  padding:2rem;
  width:100%;

  & > li:nth-child(odd){
      flex-direction:row-reverse;
     }
`;

const StepItem = styled.li`
display:flex;
justify-content:center;
align-items:center;
gap:2rem;
list-style-type:none;
width:100%;
padding:1rem 2rem;

 & > div {
   display:flex;
   width:50%;

  & > img {
    object-fit: cover;
    width: 21rem;
    height: auto;
    margin: auto;
    }
}
`;

const Content = styled.ul`
display:flex;
flex-direction:column;
gap:1rem;
list-style-type:none;
width:50%;

& > li:first-child {
  position:relative;
  text-transform: uppercase;
  font-size:2rem;
  padding-top:1.5rem;
  padding-bottom:1.5rem;
}

& > li:first-child:before {
  content: '';
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  width: 15%;
  border-top: 0.4rem solid var(--clr-blue);
}

& > li:last-child {
  font-style: italic;
}
`;

export default function StepsProcess() {
  return (
    <StyledSteps>
      <StepsList>
        {/* Mapping steps array to display each element */}
          {/* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map */}
        {steps.map((elt, index) => (
          <StepItem key={index}>
            <div>
             <img src={elt.icon} alt={`icon-${elt.name}`} /> 
            </div>
            <Content>
             <li>{elt.name}</li>
             <li>{elt.content.p1}</li>
             <li>{elt.content.p2}</li>
             <li>{elt.content.pItalic}</li>
            </Content>
          </StepItem>
        ))}
      </StepsList>
    </StyledSteps>
  );
}
