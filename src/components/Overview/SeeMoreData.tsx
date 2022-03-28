//utils
import styled from 'styled-components';

// MUI
import { Button } from '@mui/material';

// Styled-components
const StyledMoreData = styled.section`
  background-color: var(--clr-lightest);
  padding: 0.5rem 1rem;
  border-radius:0.5rem;

  & > p {
    padding:2rem;
  }

  `;

  const ButtonWrapper = styled.div`
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap:2rem;

  & > a {
  box-shadow: none;
  background-color: var(--clr-lightest);
  border: 2px solid var(--clr-light);
  color:var(--clr-dark);
  width:6rem;
  text-align:center;
  }

  & > a:hover {
    background-color: var(--clr-lighter);
  }
  `;

  
export default function SeeMoreData() {
  return (
    <StyledMoreData>
    <h2>See more data!</h2>
    <p>Get a more granular view on what data each platform has collected about you.</p>
<ButtonWrapper>
    <Button variant="contained" href="/facebook">Facebook</Button> 
    <Button variant="contained" href="/google">Google</Button> 
</ButtonWrapper>
    </StyledMoreData>
  );
}