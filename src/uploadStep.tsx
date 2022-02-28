import { StepContent, StepLabel, Typography } from '@mui/material'

import Dropzone from './dropZone'

interface UploadStepProps {
  setUploadedFile: React.Dispatch<React.SetStateAction<File | undefined>>
}

const UploadStep = ({ setUploadedFile }: UploadStepProps) => {
  return (
    <>
      <StepLabel>
        <Typography>Upload your .zip</Typography>
      </StepLabel>
      <StepContent>
        Upload the .zip file you downloaded from Facebook. Limit size: 5GB
        <Dropzone setUploadedFile={setUploadedFile} />
      </StepContent>
    </>
  )
}

export default UploadStep
