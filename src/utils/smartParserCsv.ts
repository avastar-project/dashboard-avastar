/**
 * @name smartParserCsv
 * @description Function to read, parse and classfify the personal data files uploaded by the user.
 * @param {string} filePath path of the file streamed, coming from the Zip folder uploaded in the DropZone component.
 * @param {object} fileContent variable that stores the content of the file streamed, coming from the Zip folder uploaded in the DropZone component.
 * @returns {array} array with the properties of all the data points scanned in the personal data files uploaded by the user.
 */

// Import parsingModel to map the properties of the scanned data points in the user personal data files
import parsingModel from './parsingModel.json';

// Import function to get a formatted error message when an exception occurs in the smarParser
import { getErrorMessage } from './getErrorMessage';
import { isCSVFile } from './isCsvFile';
import Papa from 'papaparse';
import { AvastarParsedDataPoint, getEmptyDataPoint } from '../types/dataTypes';
import { getKeys } from './getKeys';

// Create a list with the names of properties that will be used to describe each data point retrieved in the files uploaded by the user, based on the parsingModel.
const emptyDataPoint: AvastarParsedDataPoint = getEmptyDataPoint();
const avastarParsedDataPointProperties = getKeys(emptyDataPoint); // leveraging https://stackoverflow.com/questions/52856496/typescript-object-keys-return-string

const parsingModelfilePathModel = Object.keys(parsingModel);

export const smartParserCsv = (
  filePath: string,
  fileContent: any
): AvastarParsedDataPoint[] => {
  try {
    // Initialisation of the array that will store the properties describing each the data point scanned. It will be the input of the data visualisations showed in the Overview, Facebook and Google pages.
    const smartData: AvastarParsedDataPoint[] = [];

    // Check the type of file uploaded (.csv)
    if (isCSVFile(filePath)) {
      // Check if the file is in the parsingModel
      for (let i = 0; i < parsingModelfilePathModel.length; i++) {
        if (filePath.split('/').pop() === parsingModelfilePathModel[i].split('/').pop()) {
          const filePathModel = parsingModelfilePathModel[i];
          const headerValue = (parsingModel as any)[filePathModel]['file_structure_properties']['header']
          const delimiterValue = (parsingModel as any)[filePathModel]['file_structure_properties']['delimiter']
          Papa.parse(fileContent, {
            header: headerValue,
            skipEmptyLines: true,
            delimiter : delimiterValue,
            complete: function (results) {
                        for (let j = 0; j < results.data.length; j++) {
                          const parsedDataPoint = getEmptyDataPoint();
                          for (let k = 0; k < avastarParsedDataPointProperties.length; k++) {
                            const property = avastarParsedDataPointProperties[k];
                            parsedDataPoint[property] =
                              (parsingModel as any)[filePathModel]['entries'][k]?.[
                                avastarParsedDataPointProperties[k]
                              ] ?? parsedDataPoint[avastarParsedDataPointProperties[k]];
                          }
                        smartData.push(parsedDataPoint);
                        }
            },
          });
        }
      }
    }
    return smartData;
  } catch (error) {
    console.error({ message: getErrorMessage(error, filePath) });
    return [];
  }
};
