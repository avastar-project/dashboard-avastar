import { ChangeEvent, Dispatch, useCallback } from 'react';
import * as jszip from 'jszip';
import parsingModel from '../utils/parsingModel.json';
import { smartParserJson } from '../utils/smartParserJson';
import { smartParserCsv } from '../utils/smartParserCsv';
import styled from 'styled-components';
import { Box, Button, Typography } from '@mui/material';
import { readFileAsync } from '../utils/readFileAsync';
import { isJSONFile } from '../utils/isJsonFile';
import { isCSVFile } from '../utils/isCsvFile';

// Icons
import CloudUploadIcon from '../assets/icons/feather_upload-cloud.png';
import { addDataBlock } from '../store/actionCreators';
import { useDispatch } from 'react-redux';
import { AvastarParsedDataPoint } from '../types/dataTypes';

const StyledForm = styled.form``;

const Container = styled(Box)``;

const DashedArea = styled(Box)``;

const Drop = styled(Box)``;

const IconContainer = styled(Box)``;

const Icon = styled.img``;


interface FormType {
  file: File[];
}

const parsingModelFilepaths = Object.keys(parsingModel);

const prepareData = async (data: FileList) => {
  const readFile = await readFileAsync(data[0]);
  const zipFiles = await jszip.loadAsync(readFile);
  return zipFiles;
};

const asyncParseData = async (data: FileList) => {
  console.log('EEE', data);
  const preparedData = await prepareData(data);
  const res: AvastarParsedDataPoint[] = [];

  for await (const [filename, fileproperties] of Object.entries(
    preparedData.files
  )) {
    if (isJSONFile(filename)) {
      for (let i = 0; i < parsingModelFilepaths.length; i++) {
        if (filename.endsWith(parsingModelFilepaths[i])) {
          const fileData: string = await fileproperties.async('string'); // function of jszip
          const fileContent = JSON.parse(fileData); // convert the type of fileData variable from String to Object
          if (Object.keys(fileContent).length > 0) {
            const newElement = smartParserJson(filename, fileContent); // execute parsing function
            newElement && res.push(...newElement);
          } else {
            console.warn('JSON file is empty');
          }
        }
      }
    }
    if (isCSVFile(filename)) {
      for (let i = 0; i < parsingModelFilepaths.length; i++) {
        if (filename.endsWith(parsingModelFilepaths[i])) {
          const fileData: string = await fileproperties.async('string');
          const newElement = smartParserCsv(filename, fileData); // execute parsing function
          newElement && res.push(...newElement);
        }
      }
    } else if (filename.split('.').length > 1) {
      console.log('unknown file type');
    }
  }
  return res;
};

export default function DropZone() {
  const dispatch: Dispatch<any> = useDispatch();

  const handleChange = useCallback(
    async (e: ChangeEvent<HTMLInputElement>) => {
      const input = e.target as HTMLInputElement;
      if (input?.files) {
        const parsedData = await asyncParseData(input.files);
        dispatch(addDataBlock(parsedData));
      }
    },
    [dispatch]
  );

  return (
    <>
      <StyledForm>
        <Container
          sx={{
            width: {
              xl: '24rem',
              lg: '24rem',
              md: '20rem',
              sm: '18rem',
              xs: '12rem',
            },
          }}
          display="flex"
          flexDirection="column"
          alignItems="center"
          gap={2}
        >
          <DashedArea
            sx={{
              width: {
                xl: '100%',
                lg: '100%',
                md: '100%',
                sm: '100%',
                xs: '100%',
              },
              backgroundColor: 'var(--clr-lightest)',
              borderRadius: '0.625rem',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              border: '1px dashed rgba(0, 0, 0, 0.25)',
              padding: '3rem 2rem',
              // textTransform: 'none',
            }}
          >
            <IconContainer>
              <Icon src={CloudUploadIcon} alt={CloudUploadIcon} />
            </IconContainer>

            <Drop
              sx={{
                padding: {
                  xl: '2rem',
                  lg: '2rem',
                  md: '2rem',
                  sm: '2rem',
                  xs: '0rem',
                },
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '0.75rem',
              }}
            >
              <Typography
                sx={{
                  textAlign: 'center',
                  lineHeight: '1.5rem',
                  fontWeight: 400,
                  fontSize: '1rem',
                  paddingBottom:'1rem'
                }}
              >
                Select a file or drag and drop here
              </Typography>{' '}
              <Typography
                sx={{
                  textAlign: 'center',
                  lineHeight: '1.5rem',
                  fontWeight: 400,
                  fontSize: '0.833rem',
                  color: 'rgba(0, 0, 0, 0.4)',
                  paddingBottom:'1rem'
                }}
              >
                Only ZIP files are accepted.
              </Typography>
            </Drop>

            <Button component="label">
              <input style={{width:'10rem'}}
                // hidden
                multiple
                type="file"
                accept=".zip"
                onChange={handleChange}
              />
            </Button>
          </DashedArea>
        </Container>
      </StyledForm>
    </>
  );
}
