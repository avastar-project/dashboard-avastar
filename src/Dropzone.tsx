import { Dispatch, SetStateAction, useCallback } from 'react'

import { useDropzone } from 'react-dropzone'

import { Box } from '@mui/material'

interface DropzoneProps {
  setUploadedFile: Dispatch<SetStateAction<File | undefined>>
}

const Dropzone = ({ setUploadedFile }: DropzoneProps) => {
  const onDrop = useCallback((acceptedFiles: File[]) => setUploadedFile(acceptedFiles[0]), [setUploadedFile])
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop, accept: '.zip', maxFiles: 1 })

  return (
    <Box
      {...getRootProps()}
      sx={{
        display: 'flex',
        m: 4,
        p: 2,
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        bgcolor: '#bbdefb',
        overflow: 'hidden',
        borderRadius: 3,
        maxWidth: '250px',
      }}>
      <input {...getInputProps()} />
      {isDragActive ? (
        <p>Drop the files here ...</p>
      ) : (
        <p>
          Drag 'n' drop your .zip
          <br />
          or
          <br />
          click to select files
        </p>
      )}
    </Box>
  )
}

export default Dropzone
