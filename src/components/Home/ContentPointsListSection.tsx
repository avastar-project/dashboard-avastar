/**
 * ContentPointsListSection is a component that represents
 * the section of the Homepage page listing the advantage to use the platform
 */

//utils
import styled from 'styled-components';

// MUI components
import {Box, Grid} from '@mui/material';

// Typescript types
interface ResumeList {
  content: string;
}
// Contains each content pointlist infomations
const resumeList : ResumeList[] =
 [
  {
    content: `Avoid spending hours reading companies' privacy policies to decide which personal information they can or can’t access.`
  },
  {
    content: `Get an immediate overview of your digital footprint and understand what companies know about you and do with your data.
    `
  },
  {
    content: `We automate the process of visualising your digital identity from raw files you requested so you can focus on making decisions about how you manage your image and privacy.
    `
  },
];
// Styled-components
const StyledResume = styled.section`
  background-color: var(--clr-lightest);
  padding:2rem 4rem;
 
  & > p {
    width:50%;
    font-size:2.5rem;
      margin-bottom:1rem;
  }
  `;

   const LinkList = styled.ul`
   line-height: 2.5rem;`;

    const LinkItem = styled.li`
    margin-left:4rem;
    `;


export default function ContentPointsList() {
  return (
<Box sx={{ flexGrow: 1 }}>
<StyledResume>
  <p>We give you back the transparency you deserve on the internet.</p>
  <Grid >
    <LinkList>With Avastar, you no longer need to be technical to understand your data:
        {/* Mapping list array to display each element */}
          {/* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map */}
        {resumeList.map((resumeList: ResumeList, index:number) => (
          <LinkItem key={index} >
       {resumeList.content}
          </LinkItem>
        ))}
      </LinkList>
      </Grid>
</StyledResume>
</Box>
  );
}

