/**
 * OverviewKeyNumber is a component who represents
 * a key number on the first block of the Overview
 * Page.
 */

import { Tooltip, IconButton, Box } from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';
import styled from '@emotion/styled';

// Styled-components
const Header = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
`;

const Tendency = styled.div`
  background-color: var(--clr-light);
  width: 48px;
  text-align: center;
  border-radius: 4px;
`;

const Body = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-evenly;
`;

const LeftSection = styled.div`
  & img {
    width: 96px;
    height: 96px;
  }
`;

const RightSection = styled.div`
  & p {
    font-size: 48px;
  }
`;

// TypeScript props
type OverviewBlockProps = {
  title: string;
  icon: string;
  number: number;
  tooltip: string;
};

export default function OverviewKeyNumber({
  title,
  icon,
  number,
  tooltip,
}: OverviewBlockProps) {
  return (
    <Box sx={{ p: 1, border: 1, borderColor: 'grey.300' }}>
      <Header>
        <Tooltip title={tooltip}>
          <IconButton>
            <InfoIcon />
          </IconButton>
        </Tooltip>
        <Tendency>-</Tendency>
      </Header>
      <Body>
        <LeftSection>
          <img src={icon} alt="" />
        </LeftSection>
        <RightSection>
          <h3>{title}</h3>
          <p>{number}</p>
        </RightSection>
      </Body>
    </Box>
  );
}
