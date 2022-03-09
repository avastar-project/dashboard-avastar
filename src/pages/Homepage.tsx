import { useEffect, useState } from 'react'
import { Container, CssBaseline, Step, Stepper, Typography } from '@mui/material'

import UploadStep from './UploadStep';

const Home = () => {
  const [activeStep, setActiveStep] = useState<number>(0)
  const [uploadedFile, setUploadedFile] = useState<File>()

  useEffect(() => {
    if (activeStep === 0 && uploadedFile !== undefined) setActiveStep(1)
    if (activeStep === 1 && results !== undefined) setActiveStep(2)
  }, [activeStep, uploadedFile])


export default function Homepage() {
// Pour qu'un composant React fonctionne, on ajoute les functions / hooks avant le return()
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
