import React from 'react';
import { useNavigate } from 'react-router-dom';
//utils
import styled from 'styled-components';

//icons
import GoogleIcon from '../../assets/icons/Google.png';
import FacebookIcon from '../../assets/icons/Facebook.png';

//mui
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
//components
import DropZone from '../DropZone';

const StyledContainer = styled(Box)`
  padding: 0 9.438rem 5.688rem 10.063rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.5rem;
`;

const Title = styled(Typography)`
  padding-bottom: 1.5rem;
`;

const VideoSection = styled.section`
  padding-top: 1.125rem;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 3.875rem;
  width: 70.5rem;
  height: 21.063rem;
`;

const DropZoneSection = styled.section`
  padding-top: 2.125rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2.125rem;

  width: 70.25rem;
  height: auto;
`;

const IconContainer = styled(Box)`
  position: relative;
  width: 100%;
`;

const Icon = styled.img`
  position: absolute;
  top: 1.05rem;
  left: 12.55rem;
  z-index: 1;
  width: 3.125rem;
  height: 3.125rem;
`;

function getSteps() {
  return [
    <Typography
      sx={{
        lineHeight: '2.5rem',
        fontWeight: 600,
        fontSize: '1.728rem',
      }}
      component="b"
    >
      Let's get started by requesting your data
    </Typography>,
    <Typography
      id="dropzone"
      sx={{
        lineHeight: '2.5rem',
        fontWeight: 600,
        fontSize: '1.728rem',
      }}
      component="b"
    >
      Now, you just have to convert your data files
    </Typography>,
    <Typography
      sx={{
        lineHeight: '2.5rem',
        fontWeight: 600,
        fontSize: '1.728rem',
      }}
      component="b"
    >
      Let's discover what the internet knows about you
    </Typography>,
  ];
}

function getStepContent(step: number) {
  switch (step) {
    case 0:
      return (
        <VideoSection>
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            gap="1.125rem"
          >
            <Typography
              sx={{
                lineHeight: '2rem',
                fontWeight: 400,
                fontSize: '1.2rem',
              }}
            >
              You can start by requesting your personal data from Google and
              Facebook.{' '}
            </Typography>
            <Typography
              sx={{
                lineHeight: '2rem',
                fontWeight: 400,
                fontSize: '1.2rem',
              }}
            >
              It can take up to 48h to receive your data files : Facebook will
              send you a notification and Google an e-mail when your files are
              ready to be downloaded.{' '}
            </Typography>
            <Typography
              sx={{
                lineHeight: '2rem',
                fontWeight: 400,
                fontSize: '1.2rem',
              }}
            >
              At the end of this step, you should have received multiple files
              in Zip format. Download them locally on your device.
            </Typography>
          </Box>
          <Box width={'100%'}>
            <video width="100%" height="auto" controls>
              <source
                src={require('../../assets/video/video-test.mp4')}
                type="video/mp4"
              />
            </video>
          </Box>
        </VideoSection>
      );
    case 1:
      return (
        <DropZoneSection>
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            gap="0.813rem"
          >
            <Typography
              sx={{
                lineHeight: '2rem',
                fontWeight: 400,
                fontSize: '1.2rem',
              }}
            >
              Once you’ve received your data, you can initialize your Avastar
              digital identity card. Drop your data files right here and finally
              access what you always wanted to know about your personal data !
            </Typography>
            <Typography
              sx={{
                lineHeight: '2rem',
                fontWeight: 400,
                fontSize: '1.2rem',
              }}
            >
              We can’t see the data you collected from platforms as it’s stored
              and processed on your browser, so you are sure that your data
              never leaves your computer and doesn’t reach our servers.
            </Typography>
          </Box>
          <Box display="flex" alignItems="flex-start" gap="3.875rem">
            <Box>
              <IconContainer>
                <Icon src={GoogleIcon} alt={GoogleIcon} />
              </IconContainer>
              <DropZone />
            </Box>
            <Box>
              <IconContainer>
                <Icon src={FacebookIcon} alt={FacebookIcon} />
              </IconContainer>
              <DropZone />
            </Box>
          </Box>
        </DropZoneSection>
      );
    case 2:
      return (
        <VideoSection>
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            gap="1.125rem"
          >
            <Typography
              sx={{
                lineHeight: '2rem',
                fontWeight: 400,
                fontSize: '1.2rem',
              }}
            >
              Visualise what kind of information have been collected by apps and websites about you since you got started on the internet.{' '}
            </Typography>
            <Typography
              sx={{
                lineHeight: '2rem',
                fontWeight: 400,
                fontSize: '1.2rem',
              }}
            >
              For each visualisation, we've included explanations to help you decide with whom and what data you should share on the internet.{' '}
            </Typography>
            <Typography
              sx={{
                lineHeight: '2rem',
                fontWeight: 400,
                fontSize: '1.2rem',
              }}
            >
              You will have the keys to remove access to entities from which you want to protect your data and identify sensitive information that may harm your online reputation.
            </Typography>
          </Box>
          <Box width={'100%'}>
            <video width="100%" height="auto" controls>
              <source
                src={require('../../assets/video/video-test.mp4')}
                type="video/mp4"
              />
            </video>
          </Box>
        </VideoSection>
      );
    default:
      return 'Unknown step';
  }
}

export default function MultiStepper() {
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();
  let navigate = useNavigate();

  const handleNext = () => {
    if (activeStep === steps.length - 1) {
      navigate('/overview');
    } else {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <StyledContainer>
      <Title
        id="how-does-it-work"
        sx={{
          lineHeight: '2.5rem',
          fontWeight: 700,
          fontSize: '2.074rem',
        }}
      >
        How does it work ?
      </Title>
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((label, index) => (
          <Step
            key={index}
            sx={{
              '& .MuiStepLabel-root .Mui-completed': {
                color: '#0034F5', // circle color (COMPLETED)
              },
              '& .MuiStepLabel-root .Mui-active': {
                color: '#0034F5', // circle color (ACTIVE)
              },
            }}
          >
            <StepLabel>{label}</StepLabel>
            <StepContent>
              <Typography component="span">{getStepContent(index)}</Typography>
              <Box>
                <Box display="flex" justifyContent="flex-end">
                  <Button
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    sx={{
                      color: '#0034F5',
                    }}
                  >
                    Back
                  </Button>
                  <Button
                    sx={{
                      backgroundColor: '#0034F5',
                      '&:hover': {
                        backgroundColor: 'rgba(0, 52, 245, 0.8)',
                        boxShadow: 'none',
                        textShadow: 'none',
                        margin: '0px',
                      },
                    }}
                    variant="contained"
                    onClick={handleNext}
                  >
                    {activeStep === steps.length - 1
                      ? 'Access Dashboard'
                      : 'Next'}
                  </Button>
                </Box>
              </Box>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length && (
        <Paper square elevation={0}>
          <Button
            onClick={handleReset}
            sx={{
              color: '#0034F5',
            }}
          >
            See again
          </Button>
        </Paper>
      )}
    </StyledContainer>
  );
}
