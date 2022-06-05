/**
 * @name smartParserJson
 * @description Function to read, parse and classfify the personal data files uploaded by the user.
 * @param {string} filePath path of the file streamed, coming from the Zip folder uploaded in the DropZone component.
 * @param {object} fileContent variable that stores the content of the file streamed, coming from the Zip folder uploaded in the DropZone component.
 * @returns {array} array with the properties of all the data points scanned in the personal data files uploaded by the user.
 */

// Import parsingModel to map the properties of the scanned data points in the user personal data files
import parsingModel from './parsingModel.json';

// Import function to get a formatted error message when an exception occurs in the smarParser
import { getErrorMessage } from './getErrorMessage';
import { isJSONFile } from './isJsonFile';
import { AvastarParsedDataPoint, getEmptyDataPoint } from '../types/dataTypes';
import { getKeys } from './getKeys';

// Create a list with the names of properties that will be used to describe each data point retrieved in the files uploaded by the user, based on the parsingModel.
// Trying to leverage Typescript to do this, but this is actually super tricky
// https://stackoverflow.com/questions/43909566/get-keys-of-a-typescript-interface-as-array-of-strings
// https://stackoverflow.com/questions/45670705/iterate-over-interface-properties-in-typescript
// and not practical to use in our project; would need to eject the project from create-react-app to use ttypescript
// const avastarParsedDataPointProperties = keys<AvastarParsedDataPoint>(); // using https://www.npmjs.com/package/ts-transformer-keys
// An other way to do it would be to just get an empty object and iterate over the properties
const emptyDataPoint: AvastarParsedDataPoint = getEmptyDataPoint();
const avastarParsedDataPointProperties = getKeys(emptyDataPoint); // leveraging https://stackoverflow.com/questions/52856496/typescript-object-keys-return-string

const parsingModelfilePathModel = Object.keys(parsingModel);

const getParsedDataPoint = (
  filePathModel: string,
  nestedDataSelector: string
): AvastarParsedDataPoint => {
  const parsedDataPoint = getEmptyDataPoint();
  for (let k = 0; k < avastarParsedDataPointProperties.length; k++) {
    const property = avastarParsedDataPointProperties[k];
    parsedDataPoint[property] =
      (parsingModel as any)[filePathModel][nestedDataSelector]['entries'][k]?.[
        avastarParsedDataPointProperties[k]
      ] ?? parsedDataPoint[avastarParsedDataPointProperties[k]];
  }
  return parsedDataPoint;
};

export const smartParserJson = (
  filePath: string,
  fileContent: any
): AvastarParsedDataPoint[] => {
  try {
    // Initialisation of the array that will store the properties describing each the data point scanned. It will be the input of the data visualisations showed in the Overview, Facebook and Google pages.
    const smartData: AvastarParsedDataPoint[] = [];

    // Check the type of file uploaded (.json)
    if (isJSONFile(filePath)) {
      // Check if the file is in the parsingModel
      for (let i = 0; i < parsingModelfilePathModel.length; i++) {
        if (filePath.split('/').pop() === parsingModelfilePathModel[i].split('/').pop()) {
          const filePathModel = parsingModelfilePathModel[i];
          // Get depth of the file scanned. The depth is defined manually (cf. parsingModel) from the maximum number of steps it takes to get to the targeted object.
          const fileDepth = (parsingModel as any)[filePathModel][
            'file_structure_properties'
          ]['depth'];

          if (fileDepth === 0) {
            const nestedArrayName = 'None'; // If the depth === 0 then necessarily, there is no nested array name.

            for (let j = 0; j < fileContent.length; j++) {
              const parsedDataPoint = getParsedDataPoint(
                filePathModel,
                nestedArrayName
              );

              smartData.push(parsedDataPoint);
            }
          } else if (fileDepth === 1) {
            const nestedArrayName = String(Object.keys(fileContent));

            if (typeof fileContent[nestedArrayName] === 'string') {
              // Check the type of the element that comes right after the nested array name (string vs object). If it's a string, then it means that there is only one single data point to parse.
              const parsedDataPoint = getParsedDataPoint(
                filePathModel,
                nestedArrayName
              );
              smartData.push(parsedDataPoint);
            } else {
              if (
                (parsingModel as any)[filePathModel][
                  'file_structure_properties'
                ]['nested_data_point_selector'] !== ''
              ) {
                // Check if the file has multiple nested array names. Select the right one with nestedDataSelector property defined in the DataModel.
                const nestedDataSelector = (parsingModel as any)[filePathModel][
                  'file_structure_properties'
                ]['nested_data_point_selector'];
                for (
                  let j = 0;
                  j < fileContent[nestedDataSelector].length;
                  j++
                ) {
                  const parsedDataPoint = getParsedDataPoint(
                    filePathModel,
                    nestedDataSelector
                  );
                  smartData.push(parsedDataPoint);
                }
              } else {
                if (
                  (parsingModel as any)[filePathModel][
                    'file_structure_properties'
                  ]['has_multiple_nested_objects'] === true
                ) {
                  // File structure similar to Google file Profile/Profile.json, same parsing principle as profile_information/profile_information.json file, but without nestedArrayName
                  Object.entries(fileContent).forEach(function (item) {
                    let categorySelector = item[0]; // Get the name of the arrays that are parsed to know which properties from the data model must be applied to it.
                    const parsedDataPoint = getEmptyDataPoint();
                    for (
                      let k = 0;
                      k < avastarParsedDataPointProperties.length;
                      k++
                    ) {
                      parsedDataPoint[avastarParsedDataPointProperties[k]] = (
                        parsingModel as any
                      )[filePathModel]['None'][categorySelector][k][
                        avastarParsedDataPointProperties[k]
                      ];
                    }
                    smartData.push(parsedDataPoint);
                  });
                } else {
                  // Fetch details property for the files specified in the parsing model
                  if ((parsingModel as any)[filePathModel]['file_structure_properties']['fetch_details'] === true) {
                    const detailsSelector = (parsingModel as any)[filePathModel][nestedArrayName]['entries'][5]["details"]
                    for (
                      let j = 0;
                      j < fileContent[nestedArrayName].length;
                      j++
                    ) {
                      const parsedDataPoint = getParsedDataPoint(
                        filePathModel,
                        nestedArrayName
                      );
                      parsedDataPoint['details'] = fileContent[nestedArrayName][j][detailsSelector]
                      smartData.push(parsedDataPoint);
                    }
                  } else {
                    for (
                      let j = 0;
                      j < fileContent[nestedArrayName].length;
                      j++
                    ) {
                      const parsedDataPoint = getParsedDataPoint(
                        filePathModel,
                        nestedArrayName
                      );
                      smartData.push(parsedDataPoint);
                    }
                  }
                }
              }
            }
          } else if (fileDepth === 2) {
            const nestedArrayName = String(Object.keys(fileContent));

            if (
              (parsingModel as any)[filePathModel]['file_structure_properties'][
                'has_single_data_point'
              ] === true
            ) {
              // Check if the file contains only one data point that we want to retrieve among all the others.
              const parsedDataPoint = getParsedDataPoint(
                filePathModel,
                nestedArrayName
              );
              smartData.push(parsedDataPoint);
            } else {
              if (Array.isArray(fileContent[nestedArrayName]) === false) {
                // Check type of the nestedArray name, being either an array ("[]") or an object ("{}") to apply the right methodology to parse the file.
                if (
                  (parsingModel as any)[filePathModel][
                    'file_structure_properties'
                  ]['has_multiple_nested_objects'] === true // check if the file has multiple nested objects (cf. structure similar to profile_information/profile_information.json file).
                ) {
                  Object.entries(fileContent[nestedArrayName]).forEach(
                    function (item, index) {
                      let categorySelector = item[0]; // Get the name of the arrays that are parsed to know which properties from the data model must be applied to it.
                      
                      const parsedDataPoint = getEmptyDataPoint();

                      for (
                        let k = 0;
                        k < avastarParsedDataPointProperties.length;
                        k++
                      ) {
                        parsedDataPoint[avastarParsedDataPointProperties[k]] = (
                          parsingModel as any
                        )[filePathModel][nestedArrayName][categorySelector][k][
                          avastarParsedDataPointProperties[k]
                        ];
                      }

                      // Fetch facebook account creation date timestamp for years of data exchange kpis
                      if (categorySelector == 'registration_timestamp'){
                        const registrationDate = new Date(fileContent[nestedArrayName][categorySelector] * 1000)
                        parsedDataPoint['timestamp'] = registrationDate
                        console.log(categorySelector)
                      }

                      smartData.push(parsedDataPoint);
                    }
                  );
                } else {
                  Object.entries(fileContent[nestedArrayName]).forEach(
                    function (item, index) {
                      let categorySelector = item[0]; // Get the name of the arrays that are parsed to know which properties from the data model must be applied to it
                      for (
                        let j = 0;
                        j <
                        fileContent[nestedArrayName][categorySelector].length;
                        j++
                      ) {
                        const parsedDataPoint = getEmptyDataPoint();

                        for (
                          let k = 0;
                          k < avastarParsedDataPointProperties.length;
                          k++
                        ) {
                          parsedDataPoint[avastarParsedDataPointProperties[k]] = (
                            parsingModel as any
                          )[filePathModel][nestedArrayName][categorySelector][k][
                            avastarParsedDataPointProperties[k]
                          ];
                        }
                        smartData.push(parsedDataPoint);
                      }
                    }
                  );
                }
              } else {
                for (let j = 0; j < fileContent[nestedArrayName].length; j++) {
                  for (
                    let k = 0;
                    k < fileContent[nestedArrayName][j]['entries'].length;
                    k++
                  ) {
                    const parsedDataPoint = getParsedDataPoint(
                      filePathModel,
                      nestedArrayName
                    );
                    smartData.push(parsedDataPoint);
                  }
                }
              }
            }
          } else if (fileDepth === 3) {
            const nestedArrayName = String(Object.keys(fileContent));

            if (
              (parsingModel as any)[filePathModel]['file_structure_properties'][
                'nested_data_point_selector'
              ] !== ''
            ) {
              const nestedDataSelector = (parsingModel as any)[filePathModel][
                'file_structure_properties'
              ]['nested_data_point_selector']; // Select the right nested array name with nestedDataSelector property to parse the object.

              if ((parsingModel as any)[filePathModel]['file_structure_properties']['fetch_details'] === true) {
                const detailsSelector = (parsingModel as any)[filePathModel][nestedArrayName]['entries'][5]["details"]
                for (let j = 0; j < fileContent[nestedArrayName].length; j++) {
                  for (
                    let k = 0;
                    k <
                    fileContent[nestedArrayName][j][nestedDataSelector].length;
                    k++
                  ) {
                    const parsedDataPoint = getParsedDataPoint(
                      filePathModel,
                      nestedArrayName
                    );
                    parsedDataPoint['details'] = fileContent[nestedArrayName][j][detailsSelector]
                    smartData.push(parsedDataPoint);
                  }
                }
              } else {
                for (let j = 0; j < fileContent[nestedArrayName].length; j++) {
                  for (
                    let k = 0;
                    k <
                    fileContent[nestedArrayName][j][nestedDataSelector].length;
                    k++
                  ) {
                    const parsedDataPoint = getParsedDataPoint(
                      filePathModel,
                      nestedArrayName
                    );
                    smartData.push(parsedDataPoint);
                  }
                }
              }
            } else {
              for (let i = 0; i < fileContent[nestedArrayName].length; i++) {
                Object.entries(fileContent[nestedArrayName][i]).forEach(
                  function (item) {
                    let categorySelector = item[0]; // Get the name of the arrays that are parsed to know which properties from the data model must be applied to it
                    if (
                      (parsingModel as any)[filePathModel][nestedArrayName][
                        categorySelector
                      ] != null
                    ) {
                      const parsedDataPoint = getEmptyDataPoint();
                      for (
                        let k = 0;
                        k < avastarParsedDataPointProperties.length;
                        k++
                      ) {
                        parsedDataPoint[avastarParsedDataPointProperties[k]] = (
                          parsingModel as any
                        )[filePathModel][nestedArrayName][categorySelector][k][
                          avastarParsedDataPointProperties[k]
                        ];
                      }
                      smartData.push(parsedDataPoint);
                    }
                  }
                );
              }
            }
          } else if (fileDepth === 4) {
            const nestedArrayName = String(Object.keys(fileContent));

            for (let j = 0; j < fileContent[nestedArrayName].length; j++) {

              let categorySelector = fileContent[nestedArrayName][j]['name'];

              let hasPropertyEntries =
                fileContent[nestedArrayName][j].hasOwnProperty('entries'); // Check if the data point selector in the nested array is either "children" or "entries".

              if (hasPropertyEntries === true) {
                for (
                  let k = 0;
                  k < fileContent[nestedArrayName][j]['entries'].length;
                  k++
                ) {
                  const parsedDataPoint = getEmptyDataPoint();
                    for (
                      let m = 0;
                      m < avastarParsedDataPointProperties.length;
                      m++
                    ) {
                      parsedDataPoint[avastarParsedDataPointProperties[m]] = (
                        parsingModel as any
                      )[filePathModel][nestedArrayName][categorySelector][m][
                        avastarParsedDataPointProperties[m]
                      ];
                    }
                  smartData.push(parsedDataPoint);
                }
              } else { 
                let categorySelector = fileContent[nestedArrayName][j]['name'];

                for (
                  let k = 0;
                  k < fileContent[nestedArrayName][j]['children'].length;
                  k++
                ) {
                  for (
                    let l = 0;
                    l <
                    fileContent[nestedArrayName][j]['children'][k]['entries']
                      .length;
                    l++
                  ) {
                    const parsedDataPoint = getEmptyDataPoint();
                    for (
                      let m = 0;
                      m < avastarParsedDataPointProperties.length;
                      m++
                    ) {
                      parsedDataPoint[avastarParsedDataPointProperties[m]] = (
                        parsingModel as any
                      )[filePathModel][nestedArrayName][categorySelector][m][
                        avastarParsedDataPointProperties[m]
                      ];
                    }
                    smartData.push(parsedDataPoint);
                  }
                }
              }
            }
          }
        }
      }
    }
    return smartData;
  } catch (error) {
    console.error({ message: getErrorMessage(error, filePath) });
    return [];
  }
};
