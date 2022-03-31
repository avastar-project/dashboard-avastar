// Components
//  Imported Button component from MUI
import { Button } from '@mui/material';

// Utils
import styled from 'styled-components';

// Icons
import UserIcon from '../assets/icons/user-header-24.png';

// Styled-components
const StyledHeader = styled.header`
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-end;
  align-items: center;
  height: 4rem;
  padding: 0 1rem;
  background-color: var(--clr-lightest);
  border: var(--bor-light);

  & > img {
    margin-left: 1rem;
  }

  & a {
    color: white;
  }
`;

// Component
export default function Header() {
  return (
    <StyledHeader>
      {/* Calling MUI Button component */}
      <Button variant="contained" href="/">
        Upload data
      </Button>
      <img src={UserIcon} alt="" />
    </StyledHeader>
  );
}
