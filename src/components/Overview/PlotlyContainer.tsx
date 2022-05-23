/**
 * PlotlyContainer component represent a container
 * who receives a Plotly Chart on Overview Page.
 */

import { Tooltip, IconButton, TextField } from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';
import styled from '@emotion/styled';

// Typescript Props
type PlotlyContainerProps = {
  title: string;
  color: string;
  tooltip: string;
  plotlyComponent: React.ReactNode;
  isSearch: boolean;
};

// Styled-components
const Article = styled.article`
  background-color: var(--clr-lightest);
  border-radius: 0.5rem;
  margin-bottom: 1rem;
  padding: 0.5rem;
  overflow: auto;
`;

const Header = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
`;

export default function PlotlyContainer({
  title,
  color,
  tooltip,
  plotlyComponent,
  isSearch,
}: PlotlyContainerProps) {
  const stylesTitle = {
    borderLeft: '15px solid' + color,
    padding: '10px',
    margin: '10px',
  };
  return (
    <Article>
      <Header>
        <h2 style={stylesTitle}>{title}</h2>
        <div>
          {isSearch && (
            <TextField id="search-bar" label="Search" variant="outlined" />
          )}
          <Tooltip title={tooltip}>
            <IconButton>
              <InfoIcon />
            </IconButton>
          </Tooltip>
        </div>
      </Header>
      {/* Receive an unknown Plotly component */}
      {plotlyComponent}
    </Article>
  );
}
