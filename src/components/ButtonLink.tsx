import { Link } from 'react-router-dom';

import styled from 'styled-components';

// Adding types on component props
// Doc: https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/function_components
type ButtonProps = {
  link: string;
  content: string;
};

// Styled-components
const StyledLink = styled(Link)`
  background-color: var(--clr-blue);
  padding: 0.5rem;
  border-radius: 0.5rem;
  color: var(--clr-lightest);
  width: fit-content;

  &:visited {
    color: var(--clr-lightest);
  }
`;

export default function ButtonLink({ link, content }: ButtonProps) {
  return <StyledLink to={link}>{content}</StyledLink>;
}
