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

const Title = styled(Typography)``;

const VideoSection = styled(Box)``;

const DropZoneSection = styled(Box)``;

const IconContainer = styled(Box)``;

function getSteps() {
  return [
    <Typography
      component="b"
      sx={{
        lineHeight: {
          xl: '2.5rem',
          lg: '2.5rem',
          md: '2.5rem',
          sm: '2.5rem',
          xs: '2.5rem',
        },
        fontWeight: {
          xl: 600,
          lg: 600,
          md: 600,
          sm: 600,
          xs: 600,
        },
        fontSize: {
          xl: '1.728rem',
          lg: '1.728rem',
          md: '1.728rem',
          sm: '1.728rem',
          xs: '1.728rem',
        },
      }}
    >
      Let's get started by requesting your data
    </Typography>,
    <Typography
      id="dropzone"
      component="b"
      sx={{
        lineHeight: {
          xl: '2.5rem',
          lg: '2.5rem',
          md: '2.5rem',
          sm: '2.5rem',
          xs: '2.5rem',
        },
        fontWeight: {
          xl: 600,
          lg: 600,
          md: 600,
          sm: 600,
          xs: 600,
        },
        fontSize: {
          xl: '1.728rem',
          lg: '1.728rem',
          md: '1.728rem',
          sm: '1.728rem',
          xs: '1.728rem',
        },
      }}
    >
      Now, you just have to convert your data files
    </Typography>,
    <Typography
      component="b"
      sx={{
        lineHeight: {
          xl: '2.5rem',
          lg: '2.5rem',
          md: '2.5rem',
          sm: '2.5rem',
          xs: '2.5rem',
        },
        fontWeight: {
          xl: 600,
          lg: 600,
          md: 600,
          sm: 600,
          xs: 600,
        },
        fontSize: {
          xl: '1.728rem',
          lg: '1.728rem',
          md: '1.728rem',
          sm: '1.728rem',
          xs: '1.728rem',
        },
      }}
    >
      Let's discover what the internet knows about you
    </Typography>,
  ];
}

function getStepContent(step: number) {
  switch (step) {
    case 0:
      return (
        <VideoSection
          sx={{
            paddingTop: '1.125rem',
            display: 'flex',
            flexDirection: {
              xl: 'row',
              lg: 'row',
              md: 'row',
              sm: 'column',
              xs: 'column',
            },
            alignItems: {
              xl: 'flex-start',
              lg: 'flex-start',
              md: 'center',
              sm: 'center',
              xs: 'center',
            },
            gap: {
              xl: '3.875rem',
              lg: '3.875rem',
              md: '3.875rem',
              sm: '3.875rem',
              xs: '1.875rem',
            },
          }}
        >
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            gap="1.125rem"
          >
            <Typography
              sx={{
                lineHeight: {
                  xl: '2rem',
                  lg: '2rem',
                  md: '2rem',
                  sm: '2rem',
                  xs: '2rem',
                },
                fontWeight: {
                  xl: 400,
                  lg: 400,
                  md: 400,
                  sm: 400,
                  xs: 400,
                },
                fontSize: {
                  xl: '1.2rem',
                  lg: '1.2rem',
                  md: '1.2rem',
                  sm: '1.2rem',
                  xs: '1.2rem',
                },
              }}
            >
              You can start by requesting your data from Google and Facebook.{' '}
            </Typography>
            <Typography
              sx={{
                lineHeight: {
                  xl: '2rem',
                  lg: '2rem',
                  md: '2rem',
                  sm: '2rem',
                  xs: '2rem',
                },
                fontWeight: {
                  xl: 400,
                  lg: 400,
                  md: 400,
                  sm: 400,
                  xs: 400,
                },
                fontSize: {
                  xl: '1.2rem',
                  lg: '1.2rem',
                  md: '1.2rem',
                  sm: '1.2rem',
                  xs: '1.2rem',
                },
              }}
            >
              It can take up to 48h to receive your data files: Facebook will
              send you a notification and Google an e-mail when your files are
              ready to be downloaded.{' '}
            </Typography>
            <Typography
              sx={{
                lineHeight: {
                  xl: '2rem',
                  lg: '2rem',
                  md: '2rem',
                  sm: '2rem',
                  xs: '2rem',
                },
                fontWeight: {
                  xl: 400,
                  lg: 400,
                  md: 400,
                  sm: 400,
                  xs: 400,
                },
                fontSize: {
                  xl: '1.2rem',
                  lg: '1.2rem',
                  md: '1.2rem',
                  sm: '1.2rem',
                  xs: '1.2rem',
                },
              }}
            >
              At the end of this step, you should have received multiple files
              in Zip format. Download them locally on your device.
            </Typography>
          </Box>
          <Box width={'100%'}>
            <video width="100%" height="auto" controls>
              <source
                src={require('../../assets/video/tutorial-download-data.mp4')}
                type="video/mp4"
              />
            </video>
          </Box>
        </VideoSection>
      );
    case 1:
      return (
        <DropZoneSection
          sx={{
            // paddingTop: '2.125rem',
            display: 'flex',
            flexDirection: 'column',
            alignItems: {
              xl: 'flex-start',
              lg: 'flex-start',
              md: 'center',
              sm: 'center',
              xs: 'center',
            },
            gap: {
              xl: '2.125rem',
              lg: '2.125rem',
              md: '2.125rem',
              sm: '2.125rem',
              xs: '2.125rem',
            },
            
          }}
        >
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
              digital identity card. Read your data files right here and finally
              visualize what you always wanted to know about your data!
            </Typography>
            <Typography
              sx={{
                lineHeight: '2rem',
                fontWeight: 400,
                fontSize: '1.2rem',
              }}
            >
              The data you import and visualize will not reach any server. These
              files never leave your computer, all your data is stored locally
              on your browser. It will also be deleted every time your session
              is refreshed.
            </Typography>
          </Box>
          <Box
            sx={{
              display: 'flex',
              flexDirection: {
                xl: 'row',
                lg: 'row',
                md: 'row',
                sm: 'column',
                xs: 'column',
              },
              alignItems: {
                xl: 'flex-start',
                lg: 'flex-start',
                md: 'center',
                sm: 'center',
                xs: 'center',
              },
              gap: {
                xl: '3.875rem',
                lg: '3.875rem',
                md: '3.875rem',
                sm: '2.5rem',
                xs: '2.5rem',
              },
            }}
          >
            <Box>
              <IconContainer position='relative'>
                <Box component='img' src={GoogleIcon} alt={GoogleIcon}   sx={{
                    position: 'absolute',
                    top: '-1.5rem',
                    left: {
                      xl: '10.3rem',
                      lg: '10.3rem',
                      md: '10rem',
                      sm: '10.3rem',
                      xs: '9.9rem',
                    },
                    zIndex: 1,
                  }}/>
              </IconContainer>
              <DropZone />
            </Box>
            <Box >
              <IconContainer position='relative'>
                <Box
                  component="img"
                  src={FacebookIcon}
                  alt={FacebookIcon}
                  sx={{
                    position: 'absolute',
                    top: '-1.5rem',
                    left: {
                      xl: '10.3rem',
                      lg: '10.3rem',
                      md: '10rem',
                      sm: '10rem',
                      xs: '9.9rem',
                    },
                    zIndex: 1,
                  }}
                />
              </IconContainer>
              <DropZone />
            </Box>
          </Box>
        </DropZoneSection>
      );
    case 2:
      return (
        <VideoSection
        sx={{
          paddingTop: '1.125rem',
          display: 'flex',
          flexDirection: {
            xl: 'row',
            lg: 'row',
            md: 'row',
            sm: 'column',
            xs: 'column',
          },
          alignItems: {
            xl: 'flex-start',
            lg: 'flex-start',
            md: 'center',
            sm: 'center',
            xs: 'center',
          },
          gap: {
            xl: '3.875rem',
            lg: '3.875rem',
            md: '3.875rem',
            sm: '3.875rem',
            xs: '1.875rem',
          },
        }}
        >
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
              Visualize what kind of information has been collected by apps and
              websites about you since you got started on the internet.{' '}
            </Typography>
            <Typography
              sx={{
                lineHeight: '2rem',
                fontWeight: 400,
                fontSize: '1.2rem',
              }}
            >
              For each visualization, we've included explanations to help you
              decide with whom and what data to share on the internet.{' '}
            </Typography>
            <Typography
              sx={{
                lineHeight: '2rem',
                fontWeight: 400,
                fontSize: '1.2rem',
              }}
            >
              We developed resources to help you manage the information you
              shared with companies and identify sensitive information that may
              harm your online reputation in the future.
            </Typography>
          </Box>
          <Box width={'100%'} pt={2}>
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
    <Box
      sx={{
        width: '100%',
        padding: {
          xl: ' 0 9.438rem 5.688rem 10.063rem;', // xl: 1536
          lg: ' 0 9.438rem 5.688rem 10.063rem;', // lg: 1200
          md: ' 0 0.438rem 5.688rem 1.063rem;', // md: 900
          sm: ' 0 0.438rem 5.688rem 1.063rem;', // sm: 600
          xs: ' 0 0.438rem 5.688rem 1.063rem;', // xs: 300
        },
        display: 'flex',
        flexDirection: {
          xl: 'column',
          lg: 'column',
          md: 'column',
          sm: 'column',
          xs: 'column',
        },
        alignItems: {
          xl: 'center',
          lg: 'center',
          md: 'center',
          sm: 'center',
          xs: 'center',
        },
        gap: {
          xl: '2.50rem',
          lg: '2.50rem',
          md: '2.50rem',
          sm: '2.50rem',
          xs: '2.50rem',
        },
      }}
    >
      <Title
        id="how-does-it-work"
        sx={{
          width: '100%',
          lineHeight: '2.5rem',
          fontWeight: 700,
          fontSize: '2.074rem',
          textAlign: 'center',
          paddingBottom: '1.5rem',
        }}
      >
        How does it work ?
        <Typography
          sx={{
            lineHeight: '2.5rem',
            fontWeight: 400,
            fontSize: '1rem',
          }}
        >
          We strongly suggest that you use a computer for the next steps
        </Typography>
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
              <Box pt={2}>
                <Box display="flex" justifyContent="flex-end">
                  <Button
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    size="small"
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
                    size="small"
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
    </Box>
  );
}
