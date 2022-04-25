/**
 GetStartedBanner is a component representing the first banner of the Homepage page about how to get started by getting its data.
 */

 import { useState } from 'react';

//components
import DropZone from '../DropZone';

//utils
import styled from 'styled-components';

// MUI components
import { Box, Button, Dialog,DialogContent,DialogTitle,Grid, Typography } from '@mui/material';

//Draggable modal box
import Paper, { PaperProps } from '@mui/material/Paper';
import Draggable from 'react-draggable';

// Styled-components
const StyledBanner = styled(Grid)`
  background-color: var(--clr-lighter);
  padding: 2.009rem 4.851rem 3.25rem 4.851rem;
`;

const Title = styled(Typography)`
  padding-bottom: 2rem;
`;

function PaperComponent(props: PaperProps) {
  return (
    <Draggable
      handle="#draggable-dialog-title"
      cancel={'[class*="MuiDialogContent-root"]'}
    >
      <Paper {...props} />
    </Draggable>
  );
}

export default function GetStarted() {
  //Dialog interaction
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <StyledBanner>
      <Title variant="h4">How to get started ?</Title>
      <Grid container item xs={12} alignItems="center" spacing={2}>
        <Grid item xs={8}>
          <Typography variant="body1">
            Request your personal data in your favorite apps. Start with Google
            and Facebook.
          </Typography>
        </Grid>
        <Grid item xs={3}>
          <Button variant="contained"  onClick={handleClickOpen} >
            Get my data
          </Button>
        </Grid>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="draggable-dialog-title"
          PaperComponent={PaperComponent}
        >
          <DialogTitle
            sx={{ pt: 4 }}
            style={{
              cursor: 'move',
              textAlign: 'center',
              textTransform: 'uppercase',
            }}
            id="draggable-dialog-title"
          >
            Upload
          </DialogTitle>
          <DialogContent>
            <Box>
              <DropZone />
            </Box>
          </DialogContent>
        </Dialog>
      </Grid>
    </StyledBanner>
  );
}
