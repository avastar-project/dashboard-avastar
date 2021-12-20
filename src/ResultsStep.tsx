import { StepContent, StepLabel, Typography } from '@mui/material'

interface ResultsStepProps {
  results: Results | undefined
}

const ResultsStep = ({ results }: ResultsStepProps) => {
  return (
    <>
      <StepLabel>
        <Typography>See your results</Typography>
      </StepLabel>
      {results && (
        <StepContent>
          {results.ads_interactions && (
            <Typography>Ads interactions count: {results.ads_interactions.length}</Typography>
          )}
          {results.ads_interests && <Typography>Ads interests count: {results.ads_interests.length}</Typography>}
          {results.advertisers && <Typography>Advertisers count: {results.advertisers.length}</Typography>}
        </StepContent>
      )}
    </>
  )
}

export default ResultsStep
