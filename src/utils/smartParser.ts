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
export const smartParser = (
  filePath: string,
  fileContent: any
): string[][] | undefined => {
  try {
    // Initialisation of the array that will store the properties describing each the data point scanned. It will be the input of the data visualisations showed in the Overview, Facebook and Google pages.
    const smartData = [];

    // Start of tests to get timestamp + details in files
    // Build a separate function with the following inputs : parsingModel and filePath at the data point step
    // Build one example per use case 
    // List the checks to be made
    // Build a v1 of the function as a separate file
    // Possible paths :
    // It can be at the data point level or previous step (cc. your_off-facebook-activity with "name")
    // (0) [nestedArrayName] (test files : other_logged_information/friend_peer_group.json )
    // (1) [i] ; [title] ; [name] ; [advertiser_name] ; [type] ; [description] (test files : apps_and_websites_off_of_facebook/apps_and_websites.json, your_topics/your_topics.json, other_logged_information/ads_interests.json)
    // (2) [data][name] ; [date][text] (test files : activity_messages/group_interactions.json ; )
    // (3) [attachments][data][name] ; [data][comment][comment] (test files : comments_and_reactions/comments.json)
    // (5) [attachments][data][0][media][description] (test files : posts/your/posts_1.json)

    // In the parsingModel, add a section with the selectors to integrate in the path as variables, depending on the number of steps to get there
    // Next steps : 
    // (1) List the files to test the parsing function 
    // (2) Make tests on use cases (0) / (1) / (2) and update the parsingModel
    // Checks : has ts/details ? Nb of steps to ts/details ? 

    // Use case (0) - Test on other_logged_information/friend_peer_group.json (WORKING)
    
    // const nestedArrayName = String(Object.keys(fileContent));

    // for (let j = 0; j < fileContent[nestedArrayName].length; j++) {
    //   const indivArray = [];
    //   console.log(fileContent[nestedArrayName]) --> HERE!
    //   for (let k = 0; k < ObjectPropertiesName.length; k++) {
    //     indivArray.push(
    //       (parsingModel as any)[filePath][nestedArrayName][
    //         'entries'
    //       ][k][ObjectPropertiesName[k]]
    //     );
    //   }
    //   console.log(indivArray);
    // }

    // Use case (1) - Test on other_logged_information/ads_interests.json (WORKING)
    
    // const nestedArrayName = String(Object.keys(fileContent));

    // for (let j = 0; j < fileContent[nestedArrayName].length; j++) {
    //   const indivArray = [];
    //   console.log(fileContent[nestedArrayName][j]) --> HERE!
    //   for (let k = 0; k < ObjectPropertiesName.length; k++) {
    //     indivArray.push(
    //       (parsingModel as any)[filePath][nestedArrayName][
    //         'entries'
    //       ][k][ObjectPropertiesName[k]]
    //     );
    //   }
    //   // console.log(indivArray);
    // }

    // Use case (2) - Test on group_interactions (WORKING)

    // const nestedArrayName = String(Object.keys(fileContent));

    // const var1 = "data"
    // const var2 = "name"

    // // Add two variables in the parsingModel to fetch : data, name

    // for (let j = 0; j < fileContent[nestedArrayName].length; j++) {
    //   for (
    //     let k = 0;
    //     k < fileContent[nestedArrayName][j]['entries'].length;
    //     k++
    //   ) {
    //     const indivArray = [];
    //     console.log(fileContent[nestedArrayName][j]['entries'][k][var1][var2]) --> HERE!
    //     for (let l = 0; l < ObjectPropertiesName.length; l++) {
    //       indivArray.push(
    //         (parsingModel.parsingmodel as any)[filePath][
    //           nestedArrayName
    //         ]['entries'][l][ObjectPropertiesName[l]]
    //       );
    //     }
    //     // console.log(indivArray)
    //   }
    // }

     // Use case (3) - Test on comments_and_reactions/comments.json (WIP)

    // End of tests to get timestamp + details in files

    // Check the type of file uploaded (.csv, .xlsx, .json, etc.)
    if (filePath.split('.')[1] === 'json') {
      // Check if the file is in the parsingModel
      const parsingModelfilePathModel = Object.keys(parsingModel);
      for (let i = 0; i < parsingModelfilePathModel.length; i++) {
        if (filePath.endsWith(parsingModelfilePathModel[i])) {
          const filePathModel = parsingModelfilePathModel[i];
          // Get depth of the file scanned. The depth is defined manually (cf. parsingModel) from the maximum number of steps it takes to get to the targeted object.
          const fileDepth = (parsingModel as any)[filePathModel][
            'file_structure_properties'
          ]['depth'];

          if (fileDepth === 0) {
            const nestedArrayName = 'None'; // If the depth === 0 then necessarily, there is no nested array name.

            for (let j = 0; j < fileContent.length; j++) {
              const indivArray = [];
              for (let k = 0; k < ObjectPropertiesName.length; k++) {
                indivArray.push(
                  (parsingModel as any)[filePathModel][nestedArrayName][
                    'entries'
                  ][k][ObjectPropertiesName[k]]
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
                  (parsingModel as any)[filePathModel][nestedArrayName][
                    'entries'
                  ][j][ObjectPropertiesName[j]]
                );
              }
              smartData.push(indivArray);
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
                  const indivArray = [];
                  for (let k = 0; k < ObjectPropertiesName.length; k++) {
                    indivArray.push(
                      (parsingModel as any)[filePathModel][nestedDataSelector][
                        'entries'
                      ][k][ObjectPropertiesName[k]]
                    );
                  }
                  smartData.push(indivArray);
                }
              } else {
                for (let j = 0; j < fileContent[nestedArrayName].length; j++) {
                  const indivArray = [];
                  for (let k = 0; k < ObjectPropertiesName.length; k++) {
                    indivArray.push(
                      (parsingModel as any)[filePathModel][nestedArrayName][
                        'entries'
                      ][k][ObjectPropertiesName[k]]
                    );
                  }
                  smartData.push(indivArray);
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
              const indivArray = [];
              for (let j = 0; j < ObjectPropertiesName.length; j++) {
                indivArray.push(
                  (parsingModel as any)[filePathModel][nestedArrayName][
                    'entries'
                  ][j][ObjectPropertiesName[j]]
                );
              }
              smartData.push(indivArray);
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

                      const indivArray = [];
                      for (let k = 0; k < ObjectPropertiesName.length; k++) {
                        indivArray.push(
                          (parsingModel as any)[filePathModel][nestedArrayName][
                            categorySelector
                          ][k][ObjectPropertiesName[k]]
                        );
                      }
                      smartData.push(indivArray);
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
                        const indivArray = [];
                        for (let k = 0; k < ObjectPropertiesName.length; k++) {
                          indivArray.push(
                            (parsingModel as any)[filePathModel][
                              nestedArrayName
                            ][categorySelector][k][ObjectPropertiesName[k]]
                          );
                        }
                        smartData.push(indivArray);
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
                    const indivArray = [];

                    for (let l = 0; l < ObjectPropertiesName.length; l++) {
                      indivArray.push(
                        (parsingModel as any)[filePathModel][nestedArrayName][
                          'entries'
                        ][l][ObjectPropertiesName[l]]
                      );
                    }
                    smartData.push(indivArray);
                  }
                }
              }
            }
          } else if (fileDepth === 3) {
            const nestedArrayName = String(Object.keys(fileContent));

            const nestedDataSelector = (parsingModel as any)[filePathModel][
              'file_structure_properties'
            ]['nested_data_point_selector']; // Select the right nested array name with nestedDataSelector property to parse the object.

            for (let j = 0; j < fileContent[nestedArrayName].length; j++) {
              for (
                let k = 0;
                k < fileContent[nestedArrayName][j][nestedDataSelector].length;
                k++
              ) {
                const indivArray = [];
                for (let l = 0; l < ObjectPropertiesName.length; l++) {
                  indivArray.push(
                    (parsingModel as any)[filePathModel][nestedArrayName][
                      'entries'
                    ][l][ObjectPropertiesName[l]]
                  );
                }
                smartData.push(indivArray);
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
                      (parsingModel as any)[filePathModel][nestedArrayName][
                        categorySelector
                      ][l][ObjectPropertiesName[l]]
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
                        (parsingModel as any)[filePathModel][nestedArrayName][
                          categorySelector
                        ][m][ObjectPropertiesName[m]]
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
    reportError({ message: getErrorMessage(error) });
  }
};
