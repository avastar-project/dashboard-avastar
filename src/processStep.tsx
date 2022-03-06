import { useCallback, useEffect, useState } from 'react'
import { BlobReader, TextWriter, ZipReader } from '@zip.js/zip.js'
import { Box, CircularProgress, StepContent, StepLabel, Typography } from '@mui/material'

interface UploadStepProps {
  uploadedFile: File | undefined
  setResults: React.Dispatch<Results>
}

// print the file name
console.log(filename)

// print the content of the zip updated
console.log(fileContent)

const reader = new ZipReader(new BlobReader(uploadedFile))
const entries = await reader.getEntries()
for (let fileEntry of entries) {
    // print each file path within the zip
    console.log(fileEntry)
      }

  return (
    <>
      <StepLabel>
        <Typography>Process your .zip</Typography>
      </StepLabel>
      <StepContent>
        <p>Check file content</p>
      </StepContent>
    </>
  )
}

export default ProcessStep
