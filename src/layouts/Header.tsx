// Components
import ButtonLink from '../components/ButtonLink';

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
`;

// Component
export default function Header() {
  return (
    <StyledHeader>
      <ButtonLink link="/" content="+ Upload data" />
      <img src={UserIcon} alt="" />
    </StyledHeader>
  );
}
