import { useState } from 'react';
import * as jszip from 'jszip';
import parsingModel from '../utils/parsingModel.json';
import { smartParserJson } from '../utils/smartParserJson';
import { smartParserCsv } from '../utils/smartParserCsv';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import { Button } from '@mui/material';
import { readFileAsync } from '../utils/readFileAsync';
import { isJSONFile } from '../utils/isJsonFile';
import { isCSVFile } from '../utils/isCsvFile';


const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
`;

interface FormType {
  file: File[];
}

const parsingModelFilepaths = Object.keys(parsingModel);

const prepareData = async (data: FormType) => {
  const readFile = await readFileAsync(data.file[0]);
  const zipFiles = await jszip.loadAsync(readFile);
  return zipFiles;
};

const asyncParseData = async (data: FormType) => {
  const preparedData = await prepareData(data);
  const res: string[][] = [];

  for await (const [filename, fileproperties] of Object.entries(
    preparedData.files
  )) {
    if (isJSONFile(filename)) {
      for (let i = 0; i < parsingModelFilepaths.length; i++) {
        if (filename.split('/').pop() === parsingModelFilepaths[i].split('/').pop()) {
          const fileData: string = await fileproperties.async('string'); // function of jszip
          const fileContent = JSON.parse(fileData); // convert the type of fileData variable from String to Object
          if (Object.keys(fileContent).length > 0) {
            const newElement = smartParserJson(filename, fileContent); // execute parsing function
            newElement && res.push(...newElement);
          } else {
            console.warn('The file is empty');
          }
        }
      }
    } else if (isCSVFile(filename)) {
        for (let i = 0; i < parsingModelFilepaths.length; i++) {
            if (filename.split('/').pop() === parsingModelFilepaths[i].split('/').pop()) {
                const fileData: string = await fileproperties.async('string'); // function of jszip
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
  const [smartDataBloc, setSmartDataBloc] = useState<string[][]>([]);
  console.log('smartDataBloc', smartDataBloc);

  const { register, handleSubmit } = useForm<FormType>(); // initialize the hook

  const onSubmit = async (data: FormType) => {
    const parsedData = await asyncParseData(data);
    setSmartDataBloc(parsedData);
  };

  return (
    <>
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <input type="file" accept=".zip" {...register('file')} />
        <Button variant="contained" type="submit">
          Visualize my data
        </Button>
      </StyledForm>
    </>
  );
}
