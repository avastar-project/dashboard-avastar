/**
 * PlotlyContainer component represent a container
 * who receives a Plotly Chart on Overview Page.
 */

import {
  Tooltip,
  IconButton,
  TextField,
  Typography,
  Grid,
  Box,
  Paper,
} from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';
import styled from '@emotion/styled';

// Typescript Props
type PlotlyContainerProps = {
  title: string;
  color: string;
  tooltip: string;
  plotlyComponent: React.ReactNode;
  isSearch: boolean;
  big?: boolean;
};

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
  big = false,
}: PlotlyContainerProps) {
  const stylesTitle = {
    borderLeft: '15px solid' + color,
    padding: '10px',
    margin: '10px',
  };
  return (
    <Grid
      key={title}
      sx={{
        borderRadius: 3,
        p: 1,
        overflow: 'auto',
        mb: 5,
      }}
      item
      xs={12}
      xl={big ? 12 : 6}
    >
      <Paper
        sx={{
          borderRadius: 3,
        }}
      >
        <Header>
          <h2 style={stylesTitle}>{title}</h2>
          <div>
            {isSearch && (
              <TextField id="search-bar" label="Search" variant="outlined" />
            )}
            <Tooltip
              arrow
              title={<Typography color="inherit">{tooltip}</Typography>}
            >
              <IconButton>
                <InfoIcon sx={{ color }} />
              </IconButton>
            </Tooltip>
          </div>
        </Header>
        {/* Receive an unknown Plotly component */}
        {plotlyComponent}
      </Paper>
    </Grid>
  );
}
