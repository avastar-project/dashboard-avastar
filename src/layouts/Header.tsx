// Components
import { Link } from 'react-router-dom';

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
  background-color: white;

  & > img {
    margin-left: 1rem;
  }
`;

// Component
export default function Header() {
  return (
    <StyledHeader>
      <Link to="/">Upload Data</Link>
      <img src={UserIcon} alt="" />
    </StyledHeader>
  );
}
