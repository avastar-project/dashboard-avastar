/**
 * @name smartParser
 * @description Function to read, parse and classfify the personal data files uploaded by the user.
 * @param {string} filePath path of the file streamed, coming from the Zip folder uploaded in the DropZone component.
 * @param {object} fileContent variable that stores the content of the file streamed, coming from the Zip folder uploaded in the DropZone component.
 * @returns {array} array with the properties of all the data points scanned in the personal data files uploaded by the user.
 */

// Import parsingModel to map the properties of the scanned data points in the user personal data files
import parsingModel from './parsingModel.json';

// Import function to get a formatted error message when an exception occurs in the smarParser 
import { getErrorMessage } from './getErrorMessage';

// Create a list with the names of properties that will be used to describe each data point retrieved in the files uploaded by the user, based on the parsingModel.
const ObjectPropertiesName = [
  'action_type',
  'data_origin',
  'data_type',
  'platform',
];

// Initialisation of the function used to parse the content of the files uploaded by the user.
export const smartParser = (filePath: string, fileContent: any) => {
  try {
    // Initialisation of the array that will store the properties describing each the data point scanned. It will be the input of the data visualisations showed in the Overview, Facebook and Google pages.
    const smartData = [];
    // Check the type of file uploaded (.csv, .xlsx, .json, etc.)
    if (filePath.split('.')[1] === 'json') {
      // Check if the file is in the parsingModel
      const parsingModelfilePathModel = Object.keys(parsingModel.parsingmodel);
      for (let i = 0; i < parsingModelfilePathModel.length; i++) {
        if (filePath.endsWith(parsingModelfilePathModel[i])) {
          const filePathModel = parsingModelfilePathModel[i];
          // Get depth of the file scanned. The depth is defined manually (cf. parsingModel) from the maximum number of steps it takes to get to the targeted object.
          const fileDepth = (parsingModel.parsingmodel as any)[filePathModel][
            'file_structure_properties'
          ]['depth'];

          if (fileDepth === 0) {
            const nestedArrayName = 'None'; // If the depth === 0 then necessarily, there is no nested array name.

            for (let j = 0; j < fileContent.length; j++) {
              const indivArray = [];
              for (let k = 0; k < ObjectPropertiesName.length; k++) {
                indivArray.push(
                  (parsingModel.parsingmodel as any)[filePathModel][
                    nestedArrayName
                  ]['entries'][k][ObjectPropertiesName[k]]
                );
              }
              smartData.push(indivArray);
            }
          } else if (fileDepth === 1) {
            const nestedArrayName = String(Object.keys(fileContent));
            if (typeof fileContent[nestedArrayName] === 'string') {
              // Check the type of the element that comes right after the nested array name (string vs object). If it's a string, then it means that there is only one single data point to parse.
              const indivArray = [];
              for (let j = 0; j < ObjectPropertiesName.length; j++) {
                indivArray.push(
                  (parsingModel.parsingmodel as any)[filePathModel][
                    nestedArrayName
                  ]['entries'][j][ObjectPropertiesName[j]]
                );
              }
              smartData.push(indivArray);
            } else {
              if (
                (parsingModel.parsingmodel as any)[filePathModel][
                  'file_structure_properties'
                ]['nested_data_point_selector'] !== ''
              ) {
                // Check if the file has multiple nested array names. Select the right one with nestedDataSelector property defined in the DataModel.
                const nestedDataSelector = (parsingModel.parsingmodel as any)[
                  filePathModel
                ]['file_structure_properties']['nested_data_point_selector'];
                for (let j = 0; j < fileContent[nestedDataSelector].length; j++) {
                  const indivArray = [];
                  for (let k = 0; k < ObjectPropertiesName.length; k++) {
                    indivArray.push(
                      (parsingModel.parsingmodel as any)[filePathModel][
                        nestedDataSelector
                      ]['entries'][k][ObjectPropertiesName[k]]
                    );
                  }
                  smartData.push(indivArray);
                }
              } else { 
                if((parsingModel.parsingmodel as any)[filePathModel][
                  'file_structure_properties'
                ]['has_multiple_nested_objects'] === true) { // File structure similar to Google file Profile/Profile.json, same parsing principle as profile_information/profile_information.json file, but without nestedArrayName
                  Object.entries(fileContent).forEach(function (
                    item,
                    index
                  ) {
                    let categorySelector = item[0]; // Get the name of the arrays that are parsed to know which properties from the data model must be applied to it.
                    const indivArray = [];
                    for (let k = 0; k < ObjectPropertiesName.length; k++) {
                      indivArray.push(
                        (parsingModel.parsingmodel as any)[filePathModel]["None"][categorySelector][k][ObjectPropertiesName[k]]
                      );
                    }
                    smartData.push(indivArray);
                  });
                } else {
                  for (let j = 0; j < fileContent[nestedArrayName].length; j++) {
                    const indivArray = [];
                    for (let k = 0; k < ObjectPropertiesName.length; k++) {
                      indivArray.push(
                        (parsingModel.parsingmodel as any)[filePathModel][
                          nestedArrayName
                        ]['entries'][k][ObjectPropertiesName[k]]
                      );
                    }
                    smartData.push(indivArray);
                  }
                }
              }
            }
          } else if (fileDepth === 2) {
            const nestedArrayName = String(Object.keys(fileContent));

            if (
              (parsingModel.parsingmodel as any)[filePathModel][
                'file_structure_properties'
              ]['has_single_data_point'] === true
            ) {
              // Check if the file contains only one data point that we want to retrieve among all the others.
              const indivArray = [];
              for (let j = 0; j < ObjectPropertiesName.length; j++) {
                indivArray.push(
                  (parsingModel.parsingmodel as any)[filePathModel][
                    nestedArrayName
                  ]['entries'][j][ObjectPropertiesName[j]]
                );
              }
              smartData.push(indivArray);
            } else {
              if (Array.isArray(fileContent[nestedArrayName]) === false) {
                // Check type of the nestedArray name, being either an array ("[]") or an object ("{}") to apply the right methodology to parse the file.
                if (
                  (parsingModel.parsingmodel as any)[filePathModel][
                    'file_structure_properties'
                  ]['has_multiple_nested_objects'] === true // check if the file has multiple nested objects (cf. structure similar to profile_information/profile_information.json file).
                ) {
                  Object.entries(fileContent[nestedArrayName]).forEach(function (
                    item,
                    index
                  ) {
                    let categorySelector = item[0]; // Get the name of the arrays that are parsed to know which properties from the data model must be applied to it.

                    const indivArray = [];
                    for (let k = 0; k < ObjectPropertiesName.length; k++) {
                      indivArray.push(
                        (parsingModel.parsingmodel as any)[filePathModel][
                          nestedArrayName
                        ][categorySelector][k][ObjectPropertiesName[k]]
                      );
                    }
                    smartData.push(indivArray);
                  });
                } else {
                  Object.entries(fileContent[nestedArrayName]).forEach(function (
                    item,
                    index
                  ) {
                    let categorySelector = item[0]; // Get the name of the arrays that are parsed to know which properties from the data model must be applied to it
                    for (
                      let j = 0;
                      j < fileContent[nestedArrayName][categorySelector].length;
                      j++
                    ) {
                      const indivArray = [];
                      for (let k = 0; k < ObjectPropertiesName.length; k++) {
                        indivArray.push(
                          (parsingModel.parsingmodel as any)[filePathModel][
                            nestedArrayName
                          ][categorySelector][k][ObjectPropertiesName[k]]
                        );
                      }
                      smartData.push(indivArray);
                    }
                  });
                }
              } else {
                for (let j = 0; j < fileContent[nestedArrayName].length; j++) {
                  for (
                    let k = 0;
                    k < fileContent[nestedArrayName][j]['entries'].length;
                    k++
                  ) {
                    const indivArray = [];

                    for (let l = 0; l < ObjectPropertiesName.length; l++) {
                      indivArray.push(
                        (parsingModel.parsingmodel as any)[filePathModel][
                          nestedArrayName
                        ]['entries'][l][ObjectPropertiesName[l]]
                      );
                    }
                    smartData.push(indivArray);
                  }
                }
              }
            }
          } else if (fileDepth === 3) {
            const nestedArrayName = String(Object.keys(fileContent));

            if ((parsingModel.parsingmodel as any)[filePathModel]['file_structure_properties']['nested_data_point_selector'] != ''){
              const nestedDataSelector = (parsingModel.parsingmodel as any)[
                filePathModel
              ]['file_structure_properties']['nested_data_point_selector']; // Select the right nested array name with nestedDataSelector property to parse the object.
  
              for (let j = 0; j < fileContent[nestedArrayName].length; j++) {
                for (
                  let k = 0;
                  k < fileContent[nestedArrayName][j][nestedDataSelector].length;
                  k++
                ) {
                  const indivArray = [];
                  for (let l = 0; l < ObjectPropertiesName.length; l++) {
                    indivArray.push(
                      (parsingModel.parsingmodel as any)[filePathModel][
                        nestedArrayName
                      ]['entries'][l][ObjectPropertiesName[l]]
                    );
                  }
                  smartData.push(indivArray);
                }
              }
            } else { 
              for (let i = 0; i < fileContent[nestedArrayName].length; i++) { 
                Object.entries(fileContent[nestedArrayName][i]).forEach(function (
                  item,
                  index
                ) {
                  let categorySelector = item[0] // Get the name of the arrays that are parsed to know which properties from the data model must be applied to it
                  const indivArray = [];
                  if ((parsingModel.parsingmodel as any)[filePathModel][nestedArrayName][categorySelector] != null) { // Check if the name of the categorySelector parsed is in the parsingModel
                    for (let k = 0; k < ObjectPropertiesName.length; k++) {
                      indivArray.push(
                        (parsingModel.parsingmodel as any)[filePathModel][nestedArrayName][categorySelector][k][ObjectPropertiesName[k]]
                      );
                    }
                    smartData.push(indivArray);
                  } 
                }
                )
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
                  const indivArray = [];
                  for (let l = 0; l < ObjectPropertiesName.length; l++) {
                    indivArray.push(
                      (parsingModel.parsingmodel as any)[filePathModel][
                        nestedArrayName
                      ][categorySelector][l][ObjectPropertiesName[l]]
                    );
                  }
                  smartData.push(indivArray);
                }
              } else {
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
                    const indivArray = [];
                    for (let m = 0; m < ObjectPropertiesName.length; m++) {
                      indivArray.push(
                        (parsingModel.parsingmodel as any)[filePathModel][
                          nestedArrayName
                        ][categorySelector][m][ObjectPropertiesName[m]]
                      );
                    }
                    smartData.push(indivArray);
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
    reportError({message: getErrorMessage(error)})
  }
};
