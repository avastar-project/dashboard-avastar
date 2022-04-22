/**
 * ContentPointsListSection is a component that represents
 * the section of the Homepage page listing the advantage to use the platform
 */

//utils
import styled from 'styled-components';

// MUI components
import {Typography } from '@mui/material';

// Typescript types
interface ResumeList {
  content: string;
}
// Contains each content pointlist infomations
const resumeList: ResumeList[] = [
  {
    content: `Avoid spending hours reading companies' privacy policies to decide which personal information they can or can’t access.`,
  },
  {
    content: `Get an immediate overview of your digital footprint and understand what companies know about you and do with your data.
    `,
  },
  {
    content: `We automate the process of visualising your digital identity from raw files you requested so you can focus on making decisions about how you manage your image and privacy.
    `,
  },
];
// Styled-components
const StyledResume = styled.section`
  padding: 2.009rem 4.851rem 2.009rem 4.851rem;
  background-color: var(--clr-lightest);
`;

const Title = styled(Typography)`
  padding-bottom: 2.318rem;
`;

const LinkList = styled.ul`
  line-height: 2rem;
`;

const LinkItem = styled.li`
  margin-left: 4rem;
`;

export default function ContentPointsList() {
  return (
    <StyledResume>
      <Title variant="h4">
        We give you back the transparency you deserve on the internet.
      </Title>
      <LinkList>
        <Typography pb={2}>
          With Avastar, you no longer need to be technical to understand your
          data:
        </Typography>
        {/* Mapping list array to display each element */}
        {/* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map */}
        {resumeList.map((resumeList: ResumeList, index: number) => (
          <LinkItem key={index}>{resumeList.content}</LinkItem>
        ))}
      </LinkList>
    </StyledResume>
  );
}
