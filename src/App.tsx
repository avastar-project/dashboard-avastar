import { useEffect, useState } from 'react'
import { Container, CssBaseline, Step, Stepper, Typography } from '@mui/material'

import ProcessStep from './ProcessStep'
import ResultsStep from './ResultsStep'
import UploadStep from './UploadStep'

const App = () => {
  const [activeStep, setActiveStep] = useState<number>(0)

  const [uploadedFile, setUploadedFile] = useState<File>()
  const [results, setResults] = useState<Results>()

  useEffect(() => {
    if (activeStep === 0 && uploadedFile !== undefined) setActiveStep(1)
    if (activeStep === 1 && results !== undefined) setActiveStep(2)
  }, [activeStep, results, uploadedFile])

  return (
    <>
      <CssBaseline />
      <Container maxWidth="lg" sx={{ m: 4 }}>
        <Typography variant="h3">Reimagined Eureka</Typography>
        <Typography variant="subtitle1">Avastar JS in-browser test</Typography>
        <Stepper activeStep={activeStep} orientation="vertical">
          <Step>
            <UploadStep setUploadedFile={setUploadedFile} />
          </Step>
          <Step>
            <ProcessStep uploadedFile={uploadedFile} setResults={setResults} />
          </Step>
          <Step>
            <ResultsStep results={results} />
          </Step>
        </Stepper>
      </Container>
    </>
  )
}

export default App
