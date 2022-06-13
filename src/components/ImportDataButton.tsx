import { ChangeEvent, Dispatch, useCallback } from 'react';
import * as jszip from 'jszip';
import parsingModel from '../utils/parsingModel.json';
import { smartParserJson } from '../utils/smartParserJson';
import { smartParserCsv } from '../utils/smartParserCsv';
import { Button, Typography } from '@mui/material';
import { readFileAsync } from '../utils/readFileAsync';
import { isJSONFile } from '../utils/isJsonFile';
import { isCSVFile } from '../utils/isCsvFile';
import AddIcon from '@mui/icons-material/Add';

import { addDataBlock } from '../store/actionCreators';
import { useDispatch } from 'react-redux';
import { AvastarParsedDataPoint } from '../types/dataTypes';

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

export const ImportDataButton: React.FC = ({ children }) => {
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
    <Button
      sx={{
        m: 0,
        width: '100%',
        textTransform: 'none',
        backgroundColor: '#0034F5',
        borderRadius: 3,
        px: 3,
        py: 1.5,
        '&:hover': {
          backgroundColor: 'rgba(0, 52, 245, 0.8)',
          boxShadow: 'none',
          textShadow: 'none',
        },
      }}
      variant="contained"
      component="label"
    >
      <AddIcon
        sx={{
          marginRight: 1,
        }}
      />
      <Typography>Import data</Typography>

      <input
        // hidden
        multiple
        type="file"
        accept=".zip"
        onChange={handleChange}
        hidden
      />
    </Button>
  );
};
