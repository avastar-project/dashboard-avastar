import { Tooltip, IconButton } from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';
import styled from '@emotion/styled';
import TrackedChart from './Plotly/TrackedChart';

// Typescript Props
type PlotlyContainerProps = {
  title: string;
  tooltip: string;
};

// Styled-components
const Article = styled.article`
  background-color: var(--clr-lightest);
  border-radius: 0.5rem;
  margin-bottom: 1rem;
  padding: 0.5rem;
`;

const Header = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
`;

export default function PlotlyContainer({
  title,
  tooltip,
}: PlotlyContainerProps) {
  return (
    <Article>
      <Header>
        <h2>{title}</h2>
        <Tooltip title={tooltip}>
          <IconButton>
            <InfoIcon />
          </IconButton>
        </Tooltip>
      </Header>
      <TrackedChart />
    </Article>
  );
}
