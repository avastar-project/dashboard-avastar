import { useState } from 'react';
import * as jszip from 'jszip';
import { smartParser } from '../utils/smartParser';
import parsingModel from '../utils/parsingModel.json';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import { readFileAsync } from '../utils/readFileAsync';

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
`;

interface FormType {
  file: File[];
}

const prepareData = async (data: FormType) => {
  const readFile = await readFileAsync(data.file[0]);
  const zipFiles = await jszip.loadAsync(readFile);
  return zipFiles;
};

export default function DropzoneFiles() {
  const parsingModelFilepath = Object.keys(parsingModel);

  const [smartDataBloc, setSmartDataBloc] = useState<string[][]>([]);

  const { register, handleSubmit } = useForm<FormType>(); // initialize the hook

  const onSubmit = async (data: FormType) => {
    const preparedData = await prepareData(data);

    for (const [filename, fileproperties] of Object.entries(
      preparedData.files
    )) {
      if (filename.split('.')[1] === 'json') {
        // semi-risky way to guess if it's a json file; maybe we should combine it with a regexp
        for (let i = 0; i < parsingModelFilepath.length; i++) {
          if (filename.endsWith(parsingModelFilepath[i])) {
            fileproperties
              .async('string') // function of jszip
              .then(function (fileData: any) {
                const fileContent = JSON.parse(fileData); // convert the type of fileData variable from String to Object
                if (Object.keys(fileContent).length > 0) {
                  const newElement = smartParser(filename, fileContent); // execute parsing function
                  newElement &&
                    setSmartDataBloc((smartDataBloc) =>
                      smartDataBloc.concat(newElement)
                    );
                } else {
                  console.warn('The file is empty');
                }
              });
          }
        }
      } else if (filename.split('.')[1] === 'csv') {
        console.log('csv file [WIP]');
      } else if (filename.split('.').length > 1) {
        console.log('unknown file type');
      }
    }
  };

  return (
    <>
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <input type="file" accept=".zip" {...register('file')} />
        <button type="submit">Visualize my data</button>
      </StyledForm>
      <table>
        <thead>
          <tr>
            <th>Type</th>
            <th>observed</th>
            <th>pole</th>
            <th>provider</th>
          </tr>
        </thead>
        <tbody>
          {smartDataBloc.map((element: string[], i: number) => (
            <tr key={i}>
              <td>{element[0]}</td>
              <td>{element[1]}</td>
              <td>{element[2]}</td>
              <td>{element[3]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
// accept only .zip file
