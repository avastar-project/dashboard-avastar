import { useCallback, useEffect, useState } from 'react'
import { BlobReader, TextWriter, ZipReader } from '@zip.js/zip.js'
import { Box, CircularProgress, StepContent, StepLabel, Typography } from '@mui/material'

interface UploadStepProps {
  uploadedFile: File | undefined
  setResults: React.Dispatch<Results>
}

const processFile = (filename: string, fileContent: any): object => {
  switch (filename) {
    case "ads_information/advertisers_you've_interacted_with.json":
      return {
        ads_interactions: fileContent['history_v2'],
      }
    case 'ads_information/advertisers_who_uploaded_a_contact_list_with_your_information.json':
      return {
        advertisers: fileContent['custom_audiences_v2'],
      }
    case 'other_logged_information/ads_interests.json':
      return {
        ads_interests: fileContent['topics_v2'],
      }
    default:
      return {}
  }
}

const ProcessStep = ({ uploadedFile, setResults }: UploadStepProps) => {
  const [processing, setProcessing] = useState<boolean>(false)
  const [listingTime, setListingTime] = useState<number>()
  const [processingTime, setProcessingTime] = useState<number>()
  const [fileSize, setFileSize] = useState<number>()

  const process = useCallback(async () => {
    if (uploadedFile !== undefined) {
      let results = {}
      setProcessing(true)
      setFileSize(uploadedFile.size)
      const startTime = Date.now()
      const listingTime = Date.now()

      const reader = new ZipReader(new BlobReader(uploadedFile))
      const entries = await reader.getEntries()

      for (let fileEntry of entries) {
        switch (fileEntry.filename) {
          case 'ads_information/advertisers_who_uploaded_a_contact_list_with_your_information.json':
          case "ads_information/advertisers_you've_interacted_with.json":
          case 'other_logged_information/ads_interests.json':
            if (fileEntry.getData !== undefined) {
              const fileContent = JSON.parse(await fileEntry.getData(new TextWriter()))
              results = {
                ...results,
                ...processFile(fileEntry.filename, fileContent),
              }
            } else {
              console.log('No get data function')
            }
            break
          default:
            break
        }
      }

      setListingTime(Date.now() - listingTime)
      setProcessingTime(Date.now() - startTime)
      setProcessing(false)
      setResults(results)
    }
  }, [uploadedFile, setResults])

  useEffect(() => {
    process()
  }, [process])

  return (
    <>
      <StepLabel>
        <Box sx={{ display: 'flex', flexDirection: 'row' }}>
          <Typography sx={{ mr: 1 }}>Processing your file</Typography>
          {processing && <CircularProgress variant="indeterminate" color="primary" size={16} />}
          {!processing && processingTime && <Typography color="textSecondary">{processingTime}ms</Typography>}
        </Box>
      </StepLabel>
      <StepContent>
        {processing === true && (
          <Box sx={{ flexDirection: 'row', maxWidth: '300px' }}>
            <CircularProgress variant="indeterminate" />
          </Box>
        )}
        {listingTime && (
          <Typography variant="body1" color="textSecondary">
            Listing time: {listingTime}ms
          </Typography>
        )}
        {processingTime && (
          <Typography variant="body1" color="textSecondary">
            Total processing time: {processingTime}ms
          </Typography>
        )}
      </StepContent>
    </>
  )
}

export default ProcessStep
