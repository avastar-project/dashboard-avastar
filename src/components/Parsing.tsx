import Plot from 'react-plotly.js';
// import { isConstructorDeclaration } from 'typescript';

import PrimaryLocation from '../fake-data/facebook-data-fake/location/primary_location.json';
import PrimaryPublicLocation from '../fake-data/facebook-data-fake/location/primary_public_location.json';
import groupInteractions from '../fake-data/facebook-data-fake/activity_messages/group_interactions.json';
import offFacebookActivity from '../fake-data/facebook-data-fake/apps_and_websites_off_of_facebook/your_off-facebook_activity.json';
import advertisersUsingYourInfos from '../fake-data/facebook-data-fake/ads_information/advertisers_using_your_activity_or_information.json';
import adsInterests from '../fake-data/facebook-data-fake/other_logged_information/ads_interests.json';
import friendsPeerGroup from '../fake-data/facebook-data-fake/other_logged_information/friend_peer_group.json';
import userPosts from '../fake-data/facebook-data-fake/posts/your_posts_1.json';
import recentlyViewed from '../fake-data/facebook-data-fake/your_interactions_on_facebook/recently_viewed.json';
import hangoutsConversations from '../fake-data/google-data-fake/Hangouts/Hangouts.json';
import homeAppData from '../fake-data/google-data-fake/Application Google Home/HomeApp.json';
import homeAppHistory from '../fake-data/google-data-fake/Application Google Home/HomeHistory.json';
import peopleInteractions from '../fake-data/facebook-data-fake/activity_messages/people_and_friends.json';
import advertisersYouInteractedWith from "../fake-data/facebook-data-fake/ads_information/advertisers_you've_interacted_with.json";
import commentsPosted from '../fake-data/facebook-data-fake/comments_and_reactions/comments.json';
import recentlyVisited from '../fake-data/facebook-data-fake/your_interactions_on_facebook/recently_visited.json';
import eventResponses from '../fake-data/facebook-data-fake/events/your_event_responses.json';
import accountsCenter from '../fake-data/facebook-data-fake/facebook_accounts_center/accounts_center.json';
import PostsGroups from '../fake-data/facebook-data-fake/groups/your_posts_in_groups.json';
import photosPosted from '../fake-data/facebook-data-fake/posts/album/0.json';
import profileInformation from '../fake-data/facebook-data-fake/profile_information/profile_information.json';

import DataModel from '../utils/DataModel.json';

// create a plot to see the console.log
const BarChart = () => {
  return (
    <Plot
      data={[
        {
          type: 'bar',
          x: [
            'Location',
            'Behavioural',
            'Communication',
            'Technical',
            'Social relationship',
            'Contact',
            'Transactional',
          ],
          y: [1, 2, 3, 3, 2, 3, 1],
          marker: {
            color: [
              '#636EFA',
              '#EF553B',
              '#00CC96',
              '#AB63FA',
              '#FFA15A',
              '#19D3F3',
              '#FF6692',
            ],
          },
        },
      ]}
      layout={{
        width: 800,
        height: 450,
        title: 'What is being tracked ?',
        paper_bgcolor: 'rgba(0,0,0,0)',
        plot_bgcolor: 'rgba(0,0,0,0)',
        yaxis: { title: { text: 'Number of data points', font: { size: 13 } } },
        xaxis: { categoryorder: 'total descending' },
      }}
    />
  );
};

// CHALLENGE 1 - Check if the file exists in DataModel

// (1) Declare file path (hardcoded for now, will be dynamic when we'll have the upload component ~ list of strings representing paths)
// const ParsedFilePath = "location/primary_location.json"

// (2) Declare all file paths available in the datamodel
// const listFileNames = Object.keys(DataModel.datamodel)

// (3) Print the list of file paths supported in the datamodel
// console.log(listFileNames)

// (4) Check if hardcoded file path exists in the datamodel list of files
// let parse = (x: string) => {
//   let result;
//   if (listFileNames.includes(x) === true) {
//     result = 'exists';
//   } else {
//     result = 'NOT exists'
//   }
//   return console.log(result);
// }

// parse(ParsedFilePath)

// CHALLENGE 2 - Fetch dynamically the #hardcoded properties of the file objects in the DataModel based on retrieved nested_array_name and list of nested_object_keys
// To be retrieved in parsed file : primary_location_v2 ; ['city_region_pairs', 'zipcode']

// (1) Get nested_array_name from parsed file
// const nestedArrayName = String(Object.keys(PrimaryLocation))
// console.log(nestedArrayName)

// (2) Get list of nested_object_keys from parsed file
// const listNestedObjectKeys = Object.keys((PrimaryLocation as any)[nestedArrayName])

// (3) Create list with names of hardcoded properties in dataModel
const propertiesName = ['action_type', 'data_origin', 'data_type', 'platform'];

// (4) Read content of datamodel based on nested object keys from the file
// Hardcoded path
//console.log(DataModel.datamodel['location/primary_location.json'].primary_location_v2.city_region_pairs[0].action_type)

// Dynamic path
// console.log((DataModel.datamodel as any)[ParsedFilePath][nestedArrayName][listNestedObjectKeys[0]][1][propertiesName[1]]) // iteratation --> [i][propertiesName[i]]

// parse = (fileName) => {
//   const aggArray = []
//   for (let i = 0; i < listNestedObjectKeys.length; i++) {
//     const indivArray = []
//     for (let j = 0; j < propertiesName.length; j++) {
//       indivArray.push((DataModel.datamodel as any)[fileName][nestedArrayName][listNestedObjectKeys[i]][j][propertiesName[j]])
//     }
//     aggArray.push(indivArray)
//   }
//   return aggArray;
// }

// parse(ParsedFilePath)

// CHALLENGE 3 - Write a function that iterates on the Json objects and print for each of the entries of nestedObjectKeys : action_type, data_origin, data_type and platform
// INPUTS :
// jsonData
// dataModel
// parsedFilePath (string) -> Upload component
// nestedArrayName (string) -> dataModel
// nestedObjectKeys (list) -> jsonData

// Function inputs :
// Json file list received from the datauploader (will be a list of filepaths to open from a function)
// Data Model

// START AGAIN HERE

// INPUT 1 : Create fake list of files we would receive from the datauploader component output
const uploadedFiles = [
  'location/primary_location.json',
  'location/primary_public_location.json',
  'activity_messages/group_interactions.json',
  'apps_and_websites_off_of_facebook/your_off-facebook_activity.json',
  'ads_information/advertisers_using_your_activity_or_information.json',
  'other_logged_information/ads_interests.json',
  'other_logged_information/friend_peer_group.json',
  'posts/your_posts_1.json',
  'your_interactions_on_facebook/recently_viewed.json',
  'Hangouts/Hangouts.json',
  'Application Google Home/HomeApp.json',
  'Application Google Home/HomeHistory.json',
  'activity_messages/people_and_friends.json',
  "ads_information/advertisers_you've_interacted_with.json",
  'comments_and_reactions/comments.json',
  'your_interactions_on_facebook/recently_visited.json',
  'events/your_event_responses.json',
  'facebook_accounts_center/accounts_center.json',
  'groups/your_posts_in_groups.json',
  'posts/album/0.json',
  'profile_information/profile_information.json',
];

// INPUT 2 : Create fake list of objects that contain the content of files uploaded
const contentFiles = [
  PrimaryLocation,
  PrimaryPublicLocation,
  groupInteractions,
  offFacebookActivity,
  advertisersUsingYourInfos,
  adsInterests,
  friendsPeerGroup,
  userPosts,
  recentlyViewed,
  hangoutsConversations,
  homeAppData,
  homeAppHistory,
  peopleInteractions,
  advertisersYouInteractedWith,
  commentsPosted,
  recentlyVisited,
  eventResponses,
  accountsCenter,
  PostsGroups,
  photosPosted,
  profileInformation,
];

// INPUT 3 : dataModel

// INPUT 4 : propertiesName

// FUNCTION
// let parsing = (filesList: any, filesContent: any, dataMapping: Object, properties: any) => {

// (A) For each file that is read proceed to the following manipulations

// Get file name manually (will be possible to get dynamically from uploaded file with JS Zip)
// const fileName = filesList[1]

// Get the content of the uploaded files
// const fileContent = filesContent[1]

// Get nestedArrayName of the file read
// const nestedArrayName = String(Object.keys(fileContent))

// Get listNestedObjectKeys from the file read
// const listNestedObjectKeys = Object.keys((fileContent as any)[nestedArrayName])

// (B) Label entries for each entries of the scanned file

// Define empty aggregated array in which will be stored the properties of all entries in the scanned files
//   const aggArray = []
//   for (let i = 0; i < listNestedObjectKeys.length; i++) {
//     // Define empty array to store the 4 properties for each entries of the nestedArray
//     const indivArray = []
//     for (let j = 0; j < propertiesName.length; j++) {
//       indivArray.push((DataModel.datamodel as any)[fileName][nestedArrayName][listNestedObjectKeys[i]][j][propertiesName[j]])
//     }
//     aggArray.push(indivArray)
//   }
//   return console.log(aggArray);
// }

// parsing(uploadedFiles, contentFiles, DataModel, propertiesName)

// Next steps :
// (0) Study the different kind of JSON files structure and manage use cases. Identify all the patterns and group files that could serve as examples
// (1) Add the examples of each group in the data model file
// (2) Deal with each group of file structure one by one
// (3) Get the timestamp and details properties from JsonData dynamically for each element (in indivArray).

// Parsing - JSON Files patterns : https://docs.google.com/spreadsheets/d/1OvL82okiswHBD-EUN2_KR1TkTsLkyiR2qBID2COBJEI/edit?usp=sharing

// Pattern Group (1)
let parsingGroup1 = (
  filesList: any,
  selectedFile: any,
  filesContent: any,
  dataMapping: Object,
  properties: any
) => {
  // (A) For each file that is read proceed to the following manipulations

  // Get file name manually (will be possible to get dynamically from uploaded file with JS Zip)
  const fileName = filesList[selectedFile];

  // Get the content of the uploaded file
  const fileContent = filesContent[selectedFile];

  // Get nestedArrayName of the file read
  const nestedArrayName = String(Object.keys(fileContent));

  // Get timestamp selector from data model
  const timestampSelector = (DataModel.datamodel as any)[fileName][
    nestedArrayName
  ]['entries'][4]['timestamp'];

  // Get details selector from data model
  const detailsSelector = (DataModel.datamodel as any)[fileName][
    nestedArrayName
  ]['entries'][5]['details'];

  // (B) Label entries for each entries of the scanned file

  // Define empty aggregated array in which will be stored the properties of all entries in the scanned files
  const aggArray = [];

  // console.log(fileContent[nestedArrayName][0]['entries'][0]['data']['name']) -- Get details from Group 1
  // console.log(fileContent[nestedArrayName][0]['events'][0]['timestamp'])

  for (let i = 0; i < fileContent[nestedArrayName].length; i++) {
    for (
      let j = 0;
      j < fileContent[nestedArrayName][i]['entries'].length;
      j++
    ) {
      // ['entries'] is specific to the test file (not dynamic for now)
      const indivArray = [];
      // Get details property
      indivArray.push(
        fileContent[nestedArrayName][i]['entries'][j]['data'][detailsSelector]
      ); // ['data'] is specific to the test file (not dynamic for now)
      // Get timestamp property
      indivArray.push(''); // hardcoded for now because no timestamp in the parsed file (to be adapated)
      for (let k = 0; k < propertiesName.length; k++) {
        // Get the rest of properties
        indivArray.push(
          (DataModel.datamodel as any)[fileName][nestedArrayName]['entries'][k][
            propertiesName[k]
          ]
        );
      }
      aggArray.push(indivArray);
    }
  }
  // return console.log(aggArray)
};

parsingGroup1(uploadedFiles, 2, contentFiles, DataModel, propertiesName);

// Things to be improved :
// ... is not dynamic

// Pattern Group (2)

let parsingGroup2 = (
  filesList: any,
  selectedFile: any,
  filesContent: any,
  dataMapping: Object,
  properties: any
) => {
  // (A) For each file that is read proceed to the following manipulations

  // Get file name manually (will be possible to get dynamically from uploaded file with JS Zip)
  const fileName = filesList[selectedFile];

  // Get the content of the uploaded file
  const fileContent = filesContent[selectedFile];

  // Get nestedArrayName of the file read
  const nestedArrayName = String(Object.keys(fileContent));

  // Get timestamp selector from data model
  const timestampSelector = (DataModel.datamodel as any)[fileName][
    nestedArrayName
  ]['entries'][4]['timestamp'];

  // Get details selector from data model
  const detailsSelector = (DataModel.datamodel as any)[fileName][
    nestedArrayName
  ]['entries'][5]['details'];

  // (B) Label entries for each entries of the scanned file

  // Define empty aggregated array in which will be stored the properties of all entries in the scanned files
  const aggArray = [];

  for (let i = 0; i < fileContent[nestedArrayName].length; i++) {
    const indivArray = [];
    // Get details property
    indivArray.push(fileContent[nestedArrayName][i][detailsSelector]);
    // Get timestamp property
    indivArray.push(''); // hardcoded for now because no timestamp in the parsed file (to be adapated)
    for (let j = 0; j < propertiesName.length; j++) {
      // Get the rest of properties
      indivArray.push(
        (DataModel.datamodel as any)[fileName][nestedArrayName]['entries'][j][
          propertiesName[j]
        ]
      );
    }
    aggArray.push(indivArray);
  }
  // return console.log(aggArray)
};

parsingGroup2(uploadedFiles, 4, contentFiles, DataModel, propertiesName);

// Pattern Group (3)
let parsingGroup3 = (
  filesList: any,
  selectedFile: any,
  filesContent: any,
  dataMapping: Object,
  properties: any
) => {
  // (A) For each file that is read proceed to the following manipulations

  // Get file name manually (will be possible to get dynamically from uploaded file with JS Zip)
  const fileName = filesList[selectedFile];

  // Get the content of the uploaded file
  const fileContent = filesContent[selectedFile];

  // Get nestedArrayName of the file read
  const nestedArrayName = String(Object.keys(fileContent));

  // Get timestamp selector from data model
  const timestampSelector = (DataModel.datamodel as any)[fileName][
    nestedArrayName
  ]['entries'][4]['timestamp'];

  // Get details selector from data model
  const detailsSelector = (DataModel.datamodel as any)[fileName][
    nestedArrayName
  ]['entries'][5]['details'];

  // (B) Label entries for each entries of the scanned file

  // Define empty aggregated array in which will be stored the properties of all entries in the scanned files
  const aggArray = [];

  for (let i = 0; i < fileContent[nestedArrayName].length; i++) {
    for (let j = 0; j < fileContent[nestedArrayName][i]['events'].length; j++) {
      // ['events'] is specific to the test file (not dynamic for now)
      const indivArray = [];
      // Get details property
      indivArray.push(fileContent[nestedArrayName][i][detailsSelector]);
      // Get timestamp property
      indivArray.push(
        fileContent[nestedArrayName][i]['events'][j][timestampSelector]
      );
      for (let k = 0; k < propertiesName.length; k++) {
        // Get the rest of properties
        indivArray.push(
          (DataModel.datamodel as any)[fileName][nestedArrayName]['entries'][k][
            propertiesName[k]
          ]
        );
      }
      aggArray.push(indivArray);
    }
  }
  // return console.log(aggArray)
};

parsingGroup3(uploadedFiles, 3, contentFiles, DataModel, propertiesName);

// Things to be improved :
// ... is not dynamic

// Parsing Group (6)
let parsingGroup6 = (
  filesList: any,
  selectedFile: any,
  filesContent: any,
  dataMapping: Object,
  properties: any
) => {
  // (A) For each file that is read proceed to the following manipulations

  // Get file name manually (will be possible to get dynamically from uploaded file with JS Zip)
  const fileName = filesList[selectedFile];

  // Get the content of the uploaded file
  const fileContent = filesContent[selectedFile];

  // Get nestedArrayName of the file read
  const nestedArrayName = String(Object.keys(fileContent));

  // Get timestamp selector from data model
  const timestampSelector = (DataModel.datamodel as any)[fileName][
    nestedArrayName
  ]['entries'][4]['timestamp'];

  // Get details selector from data model
  const detailsSelector = (DataModel.datamodel as any)[fileName][
    nestedArrayName
  ]['entries'][5]['details'];

  // (B) Label entries for each entries of the scanned file

  // Define empty aggregated array in which will be stored the properties of all entries in the scanned files
  const aggArray = [];

  aggArray.push(fileContent[nestedArrayName][detailsSelector][0][0]); // [0][0] is not dynamic for now
  aggArray.push(''); // absence of timestamp is not managed for now
  for (let i = 0; i < propertiesName.length; i++) {
    aggArray.push(
      (DataModel.datamodel as any)[fileName][nestedArrayName]['entries'][i][
        propertiesName[i]
      ]
    );
  }
  // return console.log(aggArray);
};

parsingGroup6(uploadedFiles, 0, contentFiles, DataModel, propertiesName);

// Parsing Group (5)
let parsingGroup5 = (
  filesList: any,
  selectedFile: any,
  filesContent: any,
  dataMapping: Object,
  properties: any
) => {
  // (A) For each file that is read proceed to the following manipulations

  // Get file name manually (will be possible to get dynamically from uploaded file with JS Zip)
  const fileName = filesList[selectedFile];

  // Get the content of the uploaded file
  const fileContent = filesContent[selectedFile];

  // Get nestedArrayName of the file read
  const nestedArrayName = String(Object.keys(fileContent));

  // Get timestamp selector from data model
  const timestampSelector = (DataModel.datamodel as any)[fileName][
    nestedArrayName
  ]['entries'][4]['timestamp'];

  // Get details selector from data model
  const detailsSelector = (DataModel.datamodel as any)[fileName][
    nestedArrayName
  ]['entries'][5]['details'];

  // (B) Label entries for each entries of the scanned file

  // Define empty aggregated array in which will be stored the properties of all entries in the scanned files
  const aggArray = [];
  aggArray.push(fileContent[nestedArrayName][detailsSelector]); // [0][0] is not dynamic for now
  aggArray.push(''); // absence of timestamp is not managed for now
  for (let i = 0; i < propertiesName.length; i++) {
    aggArray.push(
      (DataModel.datamodel as any)[fileName][nestedArrayName]['entries'][i][
        propertiesName[i]
      ]
    );
  }
  // return console.log(aggArray);
};

parsingGroup5(uploadedFiles, 1, contentFiles, DataModel, propertiesName);

// Parsing Group (7)
let parsingGroup7 = (
  filesList: any,
  selectedFile: any,
  filesContent: any,
  dataMapping: Object,
  properties: any
) => {
  // (A) For each file that is read proceed to the following manipulations

  // Get file name manually (will be possible to get dynamically from uploaded file with JS Zip)
  const fileName = filesList[selectedFile];

  // Get the content of the uploaded file
  const fileContent = filesContent[selectedFile];

  // Get nestedArrayName of the file read
  const nestedArrayName = String(Object.keys(fileContent));

  // (B) Label entries for each entries of the scanned file

  // Define empty aggregated array in which will be stored the properties of all entries in the scanned files
  const aggArray = [];
  for (let i = 0; i < fileContent[nestedArrayName].length; i++) {
    const indivArray = [];
    indivArray.push(fileContent[nestedArrayName][i]);
    indivArray.push(''); // absence of timestamp is not managed for now
    for (let j = 0; j < propertiesName.length; j++) {
      indivArray.push(
        (DataModel.datamodel as any)[fileName][nestedArrayName]['entries'][j][
          propertiesName[j]
        ]
      );
    }
    aggArray.push(indivArray);
  }
  // return console.log(aggArray)
};

parsingGroup7(uploadedFiles, 5, contentFiles, DataModel, propertiesName);

// Parsing Group (8) - WIP
let parsingGroup8 = (
  filesList: any,
  selectedFile: any,
  filesContent: any,
  dataMapping: Object,
  properties: any
) => {
  // (A) For each file that is read proceed to the following manipulations

  // Get file name manually (will be possible to get dynamically from uploaded file with JS Zip)
  const fileName = filesList[selectedFile];

  // Get the content of the uploaded file
  const fileContent = filesContent[selectedFile];

  // Get nestedArrayName of the file read
  const nestedArrayName = String(Object.keys(fileContent));

  // (B) Label entries for each entries of the scanned file

  // Define empty aggregated array in which will be stored the properties of all entries in the scanned files
  const aggArray = [];
  aggArray.push(fileContent[nestedArrayName]);
  aggArray.push(''); // absence of timestamp is not managed for now
  for (let j = 0; j < propertiesName.length; j++) {
    aggArray.push(
      (DataModel.datamodel as any)[fileName][nestedArrayName]['entries'][j][
        propertiesName[j]
      ]
    );
  }
  // return console.log(aggArray)
};

parsingGroup8(uploadedFiles, 6, contentFiles, DataModel, propertiesName);

// Parsing Group (9)
let parsingGroup9 = (
  filesList: any,
  selectedFile: any,
  filesContent: any,
  dataMapping: Object,
  properties: any
) => {
  // (A) For each file that is read proceed to the following manipulations

  // Get file name manually (will be possible to get dynamically from uploaded file with JS Zip)
  const fileName = filesList[selectedFile];

  // Get the content of the uploaded file
  const fileContent = filesContent[selectedFile];

  // Get nestedArrayName of the file read
  const nestedArrayName = 'None';

  // Get timestamp selector from data model
  const timestampSelector = (DataModel.datamodel as any)[fileName][
    nestedArrayName
  ]['entries'][4]['timestamp'];

  // Get details selector from data model
  const detailsSelector = (DataModel.datamodel as any)[fileName][
    nestedArrayName
  ]['entries'][5]['details'];

  // (B) Label entries for each entries of the scanned file

  // Define empty aggregated array in which will be stored the properties of all entries in the scanned files
  const aggArray = [];

  for (let i = 0; i < fileContent.length; i++) {
    const indivArray = [];
    indivArray.push(fileContent[i][timestampSelector]);
    indivArray.push(fileContent[i][detailsSelector]);
    for (let j = 0; j < propertiesName.length; j++) {
      indivArray.push(
        (DataModel.datamodel as any)[fileName][nestedArrayName]['entries'][j][
          propertiesName[j]
        ]
      );
    }
    aggArray.push(indivArray);
  }
  // return console.log(aggArray)
};
parsingGroup9(uploadedFiles, 7, contentFiles, DataModel, propertiesName);

// Parsing Group (10) - WIP
let parsingGroup10 = (
  filesList: any,
  selectedFile: any,
  filesContent: any,
  dataMapping: Object,
  properties: any
) => {
  // (A) For each file that is read proceed to the following manipulations

  // Get file name manually (will be possible to get dynamically from uploaded file with JS Zip)
  const fileName = filesList[selectedFile];

  // Get the content of the uploaded file
  const fileContent = filesContent[selectedFile];

  // Get nestedArrayName of the file read
  const nestedArrayName = String(Object.keys(fileContent));

  // Get timestamp selector from data model

  // Get details selector from data model

  // (B) Label entries for each entries of the scanned file

  // Define empty aggregated array in which will be stored the properties of all entries in the scanned files
  const aggArray = [];
  for (let i = 0; i < fileContent[nestedArrayName].length; i++) {
    const indivArray = [];

    let selector = fileContent[nestedArrayName][i]['name'];

    let result = fileContent[nestedArrayName][i].hasOwnProperty('entries');

    if (result === true) {
      for (
        let j = 0;
        j < fileContent[nestedArrayName][i]['entries'].length;
        j++
      ) {
        indivArray.push(
          fileContent[nestedArrayName][i]['entries'][j]['timestamp']
        );
        indivArray.push(
          fileContent[nestedArrayName][i]['entries'][j]['data']['name']
        ); // make this part dynamic
        for (let k = 0; k < propertiesName.length; k++) {
          indivArray.push(
            (DataModel.datamodel as any)[fileName][nestedArrayName][selector][
              k
            ][propertiesName[k]]
          );
        }
      }
    } else {
      for (
        let j = 0;
        j < fileContent[nestedArrayName][i]['children'].length;
        j++
      ) {
        for (
          let k = 0;
          k < fileContent[nestedArrayName][i]['children'][j]['entries'].length;
          k++
        ) {
          indivArray.push(
            fileContent[nestedArrayName][i]['children'][j]['entries'][k][
              'timestamp'
            ]
          );
          indivArray.push(
            fileContent[nestedArrayName][i]['children'][j]['entries'][k][
              'data'
            ]['name']
          ); // make this part dynamic
          for (let l = 0; l < propertiesName.length; l++) {
            indivArray.push(
              (DataModel.datamodel as any)[fileName][nestedArrayName][selector][
                l
              ][propertiesName[l]]
            );
          }
        }
      }
    }
    aggArray.push(indivArray); // to be optimised as arrays are not separated in the right way
  }
  // return console.log(aggArray)
};
parsingGroup10(uploadedFiles, 8, contentFiles, DataModel, propertiesName);

let parsingGroup11 = (
  filesList: any,
  selectedFile: any,
  filesContent: any,
  dataMapping: Object,
  properties: any
) => {
  // (A) For each file that is read proceed to the following manipulations

  // Get file name manually (will be possible to get dynamically from uploaded file with JS Zip)
  const fileName = filesList[selectedFile];

  // Get the content of the uploaded file
  const fileContent = filesContent[selectedFile];

  // Get nestedArrayName of the file read
  const nestedArrayName = String(Object.keys(fileContent));

  // if (nestedArrayName !== "") { // check if JSON is empty
  //   console.log(fileContent)
  // }

  // console.log(fileContent[nestedArrayName].length) // check if empty for a file with nestedArray (works for use case 11)

  const value = fileContent[nestedArrayName][0];

  // if(value && Object.entries(value).length === 0){ // check if empty for an object that contains empty brackets (works for use case 12)
  //   console.log('Object is empty');
  // }
  // else console.log('Object is not empty')

  // console.log(Object.keys(fileContent).length) // check if empty for a file without nestedArray (works for use case 13)

  // Get timestamp selector from data model

  // Get details selector from data model

  // (B) Label entries for each entries of the scanned file

  // Define empty aggregated array in which will be stored the properties of all entries in the scanned files
  const aggArray = [];

  // return console.log(aggArray)
};
parsingGroup11(uploadedFiles, 10, contentFiles, DataModel, propertiesName);

let parsingGroup12 = (
  // Parsing of your_event_responses
  filesList: any,
  selectedFile: any,
  filesContent: any,
  dataMapping: Object,
  properties: any
) => {
  // (A) For each file that is read proceed to the following manipulations

  // Get file name manually (will be possible to get dynamically from uploaded file with JS Zip)
  const fileName = filesList[selectedFile];

  // Get the content of the uploaded file
  const fileContent = filesContent[selectedFile];

  // Get nestedArrayName of the file read
  const nestedArrayName = String(Object.keys(fileContent));

  // console.log(fileName);

  // console.log(Array.isArray(fileContent[nestedArrayName])); // check if {} or [] is displayed after nestedArrayName (false for your_event_responses while true for group_interactions)

  // console.log(String(Object.keys(fileContent[nestedArrayName]).length)); // If false, method to count length

  const aggArray = [];

  Object.entries(fileContent[nestedArrayName]).forEach(function (item, index) {
    let categorySelector = item[0];
    for (
      let i = 0;
      i < fileContent[nestedArrayName][categorySelector].length;
      i++
    ) {
      const indivArray = [];
      for (let j = 0; j < propertiesName.length; j++) {
        indivArray.push(
          (DataModel.datamodel as any)[fileName][nestedArrayName][
            categorySelector
          ][j][propertiesName[j]]
        );
      }
      aggArray.push(indivArray);
    }
  });

  // (B) Label entries for each entries of the scanned file

  // Define empty aggregated array in which will be stored the properties of all entries in the scanned files

  // return console.log(aggArray)
};
parsingGroup12(uploadedFiles, 16, contentFiles, DataModel, propertiesName);

let parsingGroup13 = (
  // Parsing of your_event_responses
  filesList: any,
  selectedFile: any,
  filesContent: any,
  dataMapping: Object,
  properties: any
) => {
  // (A) For each file that is read proceed to the following manipulations

  // Get file name manually (will be possible to get dynamically from uploaded file with JS Zip)
  const fileName = filesList[selectedFile];

  // Get the content of the uploaded file
  const fileContent = filesContent[selectedFile];

  // Get nestedArrayName of the file read
  const nestedArrayName = String(Object.keys(fileContent));

  // console.log(fileName);

  // console.log(Array.isArray(fileContent[nestedArrayName])); // check if {} or [] is displayed after nestedArrayName (false for your_event_responses while true for group_interactions)

  // console.log(String(Object.keys(fileContent[nestedArrayName]).length)); // If false, method to count length

  const aggArray = [];

  Object.entries(fileContent[nestedArrayName]).forEach(function (item, index) {
    // working version for file profile_information (20)
    let categorySelector = item[0];
    if (
      Object.keys(fileContent[nestedArrayName][categorySelector]).length === 0
    ) {
      // check if the content of the element scanned is not empty
      // console.log('empty');
    } else {
      // console.log(
      // (DataModel.datamodel as any)[fileName][nestedArrayName][
      //   categorySelector
      // ].slice(0, 4)
      // );
      // console.log(fileContent[nestedArrayName][categorySelector]); // Get the details of every element
    }
    // for (
    //   let i = 0;
    //   i < fileContent[nestedArrayName][categorySelector].length;
    //   i++
    // ) {
    //   const indivArray = [];
    //   for (let j = 0; j < propertiesName.length; j++) {
    //     indivArray.push(
    //       (DataModel.datamodel as any)[fileName][nestedArrayName][
    //         categorySelector
    //       ][j][propertiesName[j]]
    //     );
    //   }
    //   aggArray.push(indivArray);
    // } // Add all the types of data available in the file in the data model + a way to count only the ones that are not empty

    // Object.entries(fileContent[nestedArrayName]).forEach(function (
    //   item,
    //   index
    // ) {
    //   let categorySelector = item[0];
    //   for (
    //     let i = 0;
    //     i < fileContent[nestedArrayName][categorySelector].length;
    //     i++
    //   ) {
    //     const indivArray = [];
    //     for (let j = 0; j < propertiesName.length; j++) {
    //       indivArray.push(
    //         (DataModel.datamodel as any)[fileName][nestedArrayName][
    //           categorySelector
    //         ][j][propertiesName[j]]
    //       );
    //     }
    //     aggArray.push(indivArray);
    //   }
    // });
  });

  // (B) Label entries for each entries of the scanned file

  // Define empty aggregated array in which will be stored the properties of all entries in the scanned files

  // return console.log(aggArray)
};
parsingGroup13(uploadedFiles, 20, contentFiles, DataModel, propertiesName);

let parserGlobal = (
  // START OF GLOBAL FUNCTION (WIP)
  filesList: any,
  selectedFile: any,
  filesContent: any,
  dataMapping: Object,
  properties: any
) => {
  // 0) Initialisation

  // Get file name manually (will be possible to get dynamically from uploaded file with JS Zip)
  const fileName = filesList[selectedFile];

  // Get the content of the uploaded file (will be possible to get dynamically from uploaded file with JS Zip)
  const fileContent = filesContent[selectedFile];

  // 1) Check if the file is JSON or CSV type
  if (fileName.split('.')[1] === 'json') {
    // console.log("json")
  } else {
    // console.log("csv")
  }

  // 2) Check if file is not empty (either contains "{}" or "" for example)
  if (Object.keys(fileContent).length === 0) {
    // console.log("empty")
  } else {
    // console.log("data")
  }

  // 3) Get the nested Array Name of the file (check if there is one first)
  const fileFirstObject = Object.keys(fileContent)[0]; // Get the first object of the file and check if it's a number of a string

  if (isNaN(+fileFirstObject) === true) {
    // Check if the file is not a number to assess if it has a nested array name
    const nestedArrayName = String(Object.keys(fileContent));
  } else {
    const nestedArrayName = 'None';
  }

  // 4) Access the data points and print their properties

  // console printer for tests
  // console.log(fileName);

  const fileDepth = (DataModel.datamodel as any)[fileName][
    'file_structure_properties'
  ]['depth'];

  const aggArray = [];

  if (fileDepth === 0) {
    // File(s) : 7
    const nestedArrayName = 'None'; // If the depth === 0 then necessarily, there is no nested array name to get the data points of interest

    for (let i = 0; i < fileContent.length; i++) {
      const indivArray = [];
      for (let j = 0; j < propertiesName.length; j++) {
        indivArray.push(
          (DataModel.datamodel as any)[fileName][nestedArrayName]['entries'][j][
            propertiesName[j]
          ]
        );
      }
      aggArray.push(indivArray);
    }
  } else if (fileDepth === 1) {
    // File(s) : 4, 5, 6, 19
    const nestedArrayName = String(Object.keys(fileContent));

    if (typeof fileContent[nestedArrayName] === 'string') {
      // Check the type of the element that comes right after the nested array name (string vs object)
      for (let j = 0; j < propertiesName.length; j++) {
        aggArray.push(
          (DataModel.datamodel as any)[fileName][nestedArrayName]['entries'][j][
            propertiesName[j]
          ]
        );
      }
    } else {
      if (
        (DataModel.datamodel as any)[fileName]['file_structure_properties'][
          'nested_data_point_selector'
        ] !== ''
      ) {
        // Check if the file has a nestedDataSelector (or check if the file has multiple nestedArrayName)
        const nestedDataSelector = (DataModel.datamodel as any)[fileName][
          'file_structure_properties'
        ]['nested_data_point_selector'];

        for (let i = 0; i < fileContent[nestedDataSelector].length; i++) {
          const indivArray = [];
          for (let j = 0; j < propertiesName.length; j++) {
            indivArray.push(
              (DataModel.datamodel as any)[fileName][nestedDataSelector][
                'entries'
              ][j][propertiesName[j]]
            );
          }
          aggArray.push(indivArray);
        }
      } else {
        for (let i = 0; i < fileContent[nestedArrayName].length; i++) {
          const indivArray = [];
          for (let j = 0; j < propertiesName.length; j++) {
            indivArray.push(
              (DataModel.datamodel as any)[fileName][nestedArrayName][
                'entries'
              ][j][propertiesName[j]]
            );
          }
          aggArray.push(indivArray);
        }
      }
    }
  } else if (fileDepth === 2) {
    // File(s) : 0, 1, 2, 16

    const nestedArrayName = String(Object.keys(fileContent));

    if (
      (DataModel.datamodel as any)[fileName]['file_structure_properties'][
        'has_single_data_point'
      ] === true
    ) {
      // check if the file has only one data point of interest
      for (let i = 0; i < propertiesName.length; i++) {
        aggArray.push(
          (DataModel.datamodel as any)[fileName][nestedArrayName]['entries'][i][
            propertiesName[i]
          ]
        );
      }
    } else {
      if (Array.isArray(fileContent[nestedArrayName]) == false) {
        // check type of object by detecting if {} or [] is displayed after nestedArrayName (file 16 - your_event_responses, close to profile_information)
        Object.entries(fileContent[nestedArrayName]).forEach(function (
          item,
          index
        ) {
          let categorySelector = item[0];
          for (
            let i = 0;
            i < fileContent[nestedArrayName][categorySelector].length;
            i++
          ) {
            const indivArray = [];
            for (let j = 0; j < propertiesName.length; j++) {
              indivArray.push(
                (DataModel.datamodel as any)[fileName][nestedArrayName][
                  categorySelector
                ][j][propertiesName[j]]
              );
            }
            aggArray.push(indivArray);
          }
        });
      } else {
        for (let i = 0; i < fileContent[nestedArrayName].length; i++) {
          for (
            let j = 0;
            j < fileContent[nestedArrayName][i]['entries'].length;
            j++
          ) {
            const indivArray = [];

            for (let k = 0; k < propertiesName.length; k++) {
              indivArray.push(
                (DataModel.datamodel as any)[fileName][nestedArrayName][
                  'entries'
                ][k][propertiesName[k]]
              );
            }
            aggArray.push(indivArray);
          }
        }
      }
    }
  } else if (fileDepth === 3) {
    // File(s) : 3

    const nestedArrayName = String(Object.keys(fileContent));

    const nestedDataSelector = (DataModel.datamodel as any)[fileName][
      'file_structure_properties'
    ]['nested_data_point_selector'];

    for (let i = 0; i < fileContent[nestedArrayName].length; i++) {
      for (
        let j = 0;
        j < fileContent[nestedArrayName][i][nestedDataSelector].length;
        j++
      ) {
        const indivArray = [];
        for (let k = 0; k < propertiesName.length; k++) {
          indivArray.push(
            (DataModel.datamodel as any)[fileName][nestedArrayName]['entries'][
              k
            ][propertiesName[k]]
          );
        }
        aggArray.push(indivArray);
      }
    }
  } else if (fileDepth === 4) {
    // File(s) : 8, 15
    const nestedArrayName = String(Object.keys(fileContent));

    for (let i = 0; i < fileContent[nestedArrayName].length; i++) {
      let categorySelector = fileContent[nestedArrayName][i]['name'];

      let hasPropertyEntries =
        fileContent[nestedArrayName][i].hasOwnProperty('entries');

      if (hasPropertyEntries === true) {
        for (
          let j = 0;
          j < fileContent[nestedArrayName][i]['entries'].length;
          j++
        ) {
          const indivArray = [];
          for (let k = 0; k < propertiesName.length; k++) {
            indivArray.push(
              (DataModel.datamodel as any)[fileName][nestedArrayName][
                categorySelector
              ][k][propertiesName[k]]
            );
          }
          aggArray.push(indivArray);
        }
      } else {
        for (
          let j = 0;
          j < fileContent[nestedArrayName][i]['children'].length;
          j++
        ) {
          for (
            let k = 0;
            k <
            fileContent[nestedArrayName][i]['children'][j]['entries'].length;
            k++
          ) {
            const indivArray = [];
            for (let l = 0; l < propertiesName.length; l++) {
              indivArray.push(
                (DataModel.datamodel as any)[fileName][nestedArrayName][
                  categorySelector
                ][l][propertiesName[l]]
              );
            }
            aggArray.push(indivArray);
          }
        }
      }
    }
  }
  // return console.log(aggArray);
};
parserGlobal(uploadedFiles, 16, contentFiles, DataModel, propertiesName);

// Next steps :
// Fix issues with file : 'profile_information.json' (20) --> WIP in parsingGroup13 (to be integrated to the parsing with condition, to be done during the cleaning phase of the function)
// Imbriquer tous les checks les uns dans les autres chronologiquement
// Cleaner fichier, documenter au maximum la fonction et push une MR
// Implémenter la sélection des infos "details" et "timestamp"

export default BarChart;
