/**
 * UploadDataSection is a component that represents
 * the "Ready to get started" section of the Homepage allowing to upload data.
 */
import { useState} from 'react';

//components
import DropZone from '../DropZone';

//utils
import styled from 'styled-components';

// MUI
import {
  Button,
  Box,
  Dialog,
  DialogContent,
  DialogTitle,
  Grid,
  Typography,
} from '@mui/material';

//Draggable modal box
import Paper, { PaperProps } from '@mui/material/Paper';
import Draggable from 'react-draggable';

// Icons
import UploadFileIcon from '../../assets/icon-upload-file.png';

// Styled-components
const StyledUpload = styled(Grid)`
  background-color: var(--clr-lighter);
  padding: 2.027rem 4.851rem 1.782rem 4.851rem;
`;

const Title = styled(Typography)``;

const P1 = styled(Typography)`
  padding: 1.569rem 0 2.179rem 0;
`;
const P2 = styled(Typography)``;

const ButtonWrapper = styled(Box)`
  padding-top: 2.179rem;

  & > .MuiButton-contained {
    width: 15rem;
  }
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
export default function UploadData() {

  //Dialog interaction
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
   
    <StyledUpload>
      <Title variant="h4">Ready to get started ?</Title>
      <P1 variant="body1">
        Upload the personal data files you collected from platforms on Avastar.
      </P1>
      <P2 variant="body1">
        Your data is safe with us as we can't and don't want to see your data.
        The files you upload never leave your computer, all your data is stored
        locally on your browser. It will also be deleted every time your session
        is refreshed.
      </P2>
      <ButtonWrapper display="flex" justifyContent="center" gap={2}>
        <Button
          onClick={handleClickOpen}
          variant="contained"
          startIcon={<img src={UploadFileIcon} alt="#" />}
        >
          Upload Facebook data
        </Button>
        <Button
          onClick={handleClickOpen}
          variant="contained"
          startIcon={<img src={UploadFileIcon} alt="#" />}
        >
          Upload Google data
        </Button>
      </ButtonWrapper>
      <Box>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="draggable-dialog-title"
          PaperComponent={PaperComponent}
        >
          <DialogTitle  sx={{ pt: 4 }}style={{ cursor: 'move',textAlign:'center',textTransform:'uppercase' }} id="draggable-dialog-title">
            Upload
          </DialogTitle>
          <DialogContent>
            <Box>
              <DropZone />
            </Box>
          </DialogContent>
        </Dialog>
      </Box>
    </StyledUpload>
  );
}
