import { useState } from 'react';
import * as jszip from 'jszip';
import parsingModel from '../utils/parsingModel.json';
import { smartParser } from '../utils/smartParser';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import { Box,Button} from '@mui/material';
import { readFileAsync } from '../utils/readFileAsync';
import { isJSONFile } from '../utils/isJsonFile';

import CloudUploadIcon from '@mui/icons-material/CloudUpload';

const StyledForm = styled.form`
position:absolute;
top:40%;
left:40%;
background-color: var(--clr-lightest);
border-radius:1rem;
`;

const Container = styled(Box)``;

const DashedArea = styled.div`
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
border:1px dashed black;
padding:2rem; `;

const Drop = styled.div`
padding:3rem;
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
        if (filename.endsWith(parsingModelFilepaths[i])) {
          const fileData: string = await fileproperties.async('string'); // function of jszip
          const fileContent = JSON.parse(fileData); // convert the type of fileData variable from String to Object
          if (Object.keys(fileContent).length > 0) {
            const newElement = smartParser(filename, fileContent); // execute parsing function
            newElement && res.push(...newElement);
          } else {
            console.warn('The file is empty');
          }
        }
      }
    } else if (filename.split('.')[1] === 'csv') {
      console.log('csv file [WIP]');
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
      <Container display="flex" flexDirection='column' alignItems='center' p={10} gap={2}>
        <Button  component='label'>
          <DashedArea >
          <CloudUploadIcon/>
            <input hidden type="file" accept=".zip" {...register('file')} /><Drop>Drag and drop your .zip file here or click</Drop>
        </DashedArea>
        </Button>
        <Button variant="contained" type="submit">
        Visualize my data
        </Button>
				</Container>
      </StyledForm>
    </>
  );
}
