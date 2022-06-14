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

const DashedArea = styled(Box)`
  background-color: var(--clr-lightest);
  border-radius: 0.625rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px dashed rgba(0, 0, 0, 0.25);
  padding: 3rem 2rem;
  text-transform: none;
`;

const Drop = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
`;

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
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      p={5}
      gap={2}
    >
      <DashedArea>
        <Box>
          <Icon src={CloudUploadIcon} alt={CloudUploadIcon} />
        </Box>

        <Drop>
          <Typography
            sx={{
              lineHeight: '1.5rem',
              fontWeight: 400,
              fontSize: '1rem',
            }}
          >
            Select a file or drag and drop here
          </Typography>
          <Typography
            sx={{
              lineHeight: '1.5rem',
              fontWeight: 400,
              fontSize: '0.833rem',
              color: 'rgba(0, 0, 0, 0.4)',
            }}
          >
            Only ZIP files are accepted.
          </Typography>
        </Drop>
        <Button component="label">
          <input
            // hidden
            multiple
            type="file"
            accept=".zip"
            onChange={handleChange}
          />
        </Button>
      </DashedArea>
    </Box>
  );
}
