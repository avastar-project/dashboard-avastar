//utils
import styled from 'styled-components';

// MUI
import { Button,Box,Grid } from '@mui/material';

// Icons
import UploadFileIcon from '../../assets/icon-upload-file.png';

// Styled-components
const StyledSecStart = styled.section`
  background-color: var(--clr-lighter);
  padding:2rem 4rem;

  & > .grid {
    line-height: 2rem;

    & > h2 {
      padding-bottom:1rem;
    }

    & > p {
      width:90%
    }
  }
  `;

  const ButtonWrapper = styled.div`
  padding: 1.25rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap:2rem;

  & > .MuiButton-contained {
    width:13rem;
  }

  & > a {
    text-transform:none;
  }

  `;

export default function SecStartBanner() {
  return (
    <Box sx={{ flexGrow: 1}}>
    <StyledSecStart>
    <Grid item xs={12} className='grid'>
    <h2>Ready to get started ?</h2>
    <p>Upload the personal data files you collected from platforms on Avastar.</p>
    <p>Your data is safe with us as we can't and don't want to see your data. The files you upload never leave your computer, all your data is stored locally on your browser. It will also be deleted every time your session is refreshed.</p>
    <ButtonWrapper>
    <Button variant="contained" href="/facebook" startIcon={<img src={UploadFileIcon} alt='#'/>}>
     Upload Facebook data
      </Button>
      <Button variant="contained" href="/google" startIcon={<img src={UploadFileIcon} alt='#'/>}>
      Upload Google data
      </Button>
    </ButtonWrapper>
    </Grid>
    </StyledSecStart>
    </Box>
  );
}