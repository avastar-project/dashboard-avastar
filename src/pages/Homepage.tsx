import { useEffect, useState } from 'react'
import { Container, CssBaseline, Step, Stepper, Typography } from '@mui/material'

import UploadStep from './UploadStep';

export default function Homepage() {
const [activeStep, setActiveStep] = useState<number>(0)
  const [uploadedFile, setUploadedFile] = useState<File>()

  useEffect(() => {
    if (activeStep === 0 && uploadedFile !== undefined) setActiveStep(1)
    if (activeStep === 1 && results !== undefined) setActiveStep(2)
  }, [activeStep, uploadedFile])
  return (
    <>
      <CssBaseline />
      <Container maxWidth="lg" sx={{ m: 4 }}>
        <Stepper activeStep={activeStep} orientation="vertical">
          <Step>
            <UploadStep setUploadedFile={setUploadedFile} />
          </Step>
          <Step>
            <ProcessStep uploadedFile={uploadedFile} />
          </Step>
        </Stepper>
      </Container>
    </>
  );
}
