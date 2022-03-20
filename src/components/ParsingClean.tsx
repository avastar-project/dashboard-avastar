/**
 * @name hash
 * @description Random hashing algorithm I found on Stack Overflow.
 * @param {string} str
 * @param {boolean} asString
 * @param {*} seed
 *
 * @returns {object} array with the properties of all the data points scanned in the personal data files uploaded by the user
 */

// Import necessary packages
import Plot from 'react-plotly.js';

// Import data model to map the properties of the scanned data points in the user personal data files
import DataModel from '../utils/DataModel.json';

// Import personal data files from fake-data folder (temporary approach). In production, the files will be retrieved from the datauploader component output
import AccountsCenter from '../fake-data/facebook-data-fake/facebook_accounts_center/accounts_center.json';
import AdsInterests from '../fake-data/facebook-data-fake/other_logged_information/ads_interests.json';
import AdvertisersUsingYourInfos from '../fake-data/facebook-data-fake/ads_information/advertisers_using_your_activity_or_information.json';
import AdvertisersYouInteractedWith from "../fake-data/facebook-data-fake/ads_information/advertisers_you've_interacted_with.json";
import CommentsPosted from '../fake-data/facebook-data-fake/comments_and_reactions/comments.json';
import EventResponses from '../fake-data/facebook-data-fake/events/your_event_responses.json';
import FriendsPeerGroup from '../fake-data/facebook-data-fake/other_logged_information/friend_peer_group.json';
import GroupInteractions from '../fake-data/facebook-data-fake/activity_messages/group_interactions.json';
import HangoutsConversations from '../fake-data/google-data-fake/Hangouts/Hangouts.json';
import HomeAppData from '../fake-data/google-data-fake/Application Google Home/HomeApp.json';
import HomeAppHistory from '../fake-data/google-data-fake/Application Google Home/HomeHistory.json';
import OffFacebookActivity from '../fake-data/facebook-data-fake/apps_and_websites_off_of_facebook/your_off-facebook_activity.json';
import PeopleInteractions from '../fake-data/facebook-data-fake/activity_messages/people_and_friends.json';
import PhotosPosted from '../fake-data/facebook-data-fake/posts/album/0.json';
import PostsGroups from '../fake-data/facebook-data-fake/groups/your_posts_in_groups.json';
import PrimaryLocation from '../fake-data/facebook-data-fake/location/primary_location.json';
import PrimaryPublicLocation from '../fake-data/facebook-data-fake/location/primary_public_location.json';
import ProfileInformation from '../fake-data/facebook-data-fake/profile_information/profile_information.json';
import RecentlyViewed from '../fake-data/facebook-data-fake/your_interactions_on_facebook/recently_viewed.json';
import RecentlyVisited from '../fake-data/facebook-data-fake/your_interactions_on_facebook/recently_visited.json';
import UserPosts from '../fake-data/facebook-data-fake/posts/your_posts_1.json';

// Create list of filenames uploaded by the user (temporary approach). In production, the file names will be retrieved from the datauploader component output
const FilesUploaded = [
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

// Create list with the content of the files uploaded by the user (temporary approach). In production, the files content will be retrieved from the datauploader component output
const FilesContent = [
  PrimaryLocation,
  PrimaryPublicLocation,
  GroupInteractions,
  OffFacebookActivity,
  AdvertisersUsingYourInfos,
  AdsInterests,
  FriendsPeerGroup,
  UserPosts,
  RecentlyViewed,
  HangoutsConversations,
  HomeAppData,
  HomeAppHistory,
  PeopleInteractions,
  AdvertisersYouInteractedWith,
  CommentsPosted,
  RecentlyVisited,
  EventResponses,
  AccountsCenter,
  PostsGroups,
  PhotosPosted,
  ProfileInformation,
];

// Create a list with the name of properties used to describe a data point. It will be used to map the data points in the files streamed with the data model inputs.
const ObjectPropertiesName = [
  'action_type',
  'data_origin',
  'data_type',
  'platform',
];

// Create a random plot to use console.log()
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

// Definition of the main function that will be used to parse the content of the files uploaded by the user.
let SmartParser = (
  FilesUploaded: any,
  FilesContent: any,
  DataModel: any,
  ObjectPropertiesName: any
) => {
  // Pre-select the files for test purposes (to be removed once I'm done building/testing the function)
  const FileUploaded = FilesUploaded.slice(0, 20); // 20 is the max length
  const FileContent = FilesContent.slice(0, 20);

  // Iterate on the list of files uploaded
  // With the data uploader it will be easier to retrieve the content of the files/file names (properties of the object). For now, it relies on the fact that the objects in FilesUploaded and FilesContent have the same order.
  for (let i = 0; i < FileContent.length; i++) {
    // Define the array that will contain the properties of all the file scanned
    const aggArray = [];
    // Check the type of file uploaded (.csv, .xlsx, .json, etc.)
    // For now we focus only on JSON files uploaded from Facebook platform
    if (FileUploaded[i].split('.')[1] === 'json') {
      // console.log(FileUploaded[i]);
      // console.log(FileContent[i]);
      // Check if the file is empty
      if (Object.keys(FileContent[i]).length === 0) {
        console.log('empty');
      } else {
        // Get depth of the file scanned. The depth is defined manually from the maximum number of steps it takes to get to the desired object
        const fileDepth = (DataModel.datamodel as any)[FileUploaded[i]][
          'file_structure_properties'
        ]['depth'];

        if (fileDepth === 0) {
          const nestedArrayName = 'None'; // If the depth === 0 then necessarily, there is no nested array name

          for (let j = 0; j < FileContent[i].length; j++) {
            const indivArray = [];
            for (let k = 0; k < ObjectPropertiesName.length; k++) {
              indivArray.push(
                (DataModel.datamodel as any)[FileUploaded[i]][nestedArrayName][
                  'entries'
                ][k][ObjectPropertiesName[k]]
              );
            }
            aggArray.push(indivArray);
          }
        } else if (fileDepth === 1) {
          const nestedArrayName = String(Object.keys(FileContent[i]));

          if (typeof FileContent[i][nestedArrayName] === 'string') {
            // Check the type of the element that comes right after the nested array name (string vs object). If it's a string, then it means that there is only one single data point to parse.
            for (let j = 0; j < ObjectPropertiesName.length; j++) {
              aggArray.push(
                (DataModel.datamodel as any)[FileUploaded[i]][nestedArrayName][
                  'entries'
                ][j][ObjectPropertiesName[j]]
              );
            }
          } else {
            if (
              (DataModel.datamodel as any)[FileUploaded[i]][
                'file_structure_properties'
              ]['nested_data_point_selector'] !== ''
            ) {
              // Check if the file has multiple nested array names and select the right one with nestedDataSelector property
              const nestedDataSelector = (DataModel.datamodel as any)[
                FileUploaded[i]
              ]['file_structure_properties']['nested_data_point_selector'];
              for (
                let j = 0;
                j < FileContent[i][nestedDataSelector].length;
                j++
              ) {
                const indivArray = [];
                for (let k = 0; k < ObjectPropertiesName.length; k++) {
                  indivArray.push(
                    (DataModel.datamodel as any)[FileUploaded[i]][
                      nestedDataSelector
                    ]['entries'][k][ObjectPropertiesName[k]]
                  );
                }
                aggArray.push(indivArray);
              }
            } else {
              for (let j = 0; j < FileContent[i][nestedArrayName].length; j++) {
                const indivArray = [];
                for (let k = 0; k < ObjectPropertiesName.length; k++) {
                  indivArray.push(
                    (DataModel.datamodel as any)[FileUploaded[i]][
                      nestedArrayName
                    ]['entries'][k][ObjectPropertiesName[k]]
                  );
                }
                aggArray.push(indivArray);
              }
            }
          }
        } else if (fileDepth === 2) {
          const nestedArrayName = String(Object.keys(FileContent[i]));

          if (
            (DataModel.datamodel as any)[FileUploaded[i]][
              'file_structure_properties'
            ]['has_single_data_point'] === true
          ) {
            // Check if the file has only one data point that we want to retrieve among all the others
            for (let j = 0; j < ObjectPropertiesName.length; j++) {
              aggArray.push(
                (DataModel.datamodel as any)[FileUploaded[i]][nestedArrayName][
                  'entries'
                ][j][ObjectPropertiesName[j]]
              );
            }
          } else {
            if (Array.isArray(FileContent[i][nestedArrayName]) === false) {
              // Check type of object by detecting if {} or [] is displayed after nestedArrayName to apply the right methodology to parse the file
              Object.entries(FileContent[i][nestedArrayName]).forEach(function (
                item,
                index
              ) {
                let categorySelector = item[0]; // Get the name of the arrays that are parsed to know which properties from the data model must be applied to it
                for (
                  let j = 0;
                  j < FileContent[i][nestedArrayName][categorySelector].length;
                  j++
                ) {
                  const indivArray = [];
                  for (let k = 0; k < ObjectPropertiesName.length; k++) {
                    indivArray.push(
                      (DataModel.datamodel as any)[FileUploaded[i]][
                        nestedArrayName
                      ][categorySelector][k][ObjectPropertiesName[k]]
                    );
                  }
                  aggArray.push(indivArray);
                }
              });
            } else {
              for (let j = 0; j < FileContent[i][nestedArrayName].length; j++) {
                for (
                  let k = 0;
                  k < FileContent[i][nestedArrayName][j]['entries'].length;
                  k++
                ) {
                  const indivArray = [];

                  for (let l = 0; l < ObjectPropertiesName.length; l++) {
                    indivArray.push(
                      (DataModel.datamodel as any)[FileUploaded[i]][
                        nestedArrayName
                      ]['entries'][l][ObjectPropertiesName[l]]
                    );
                  }
                  aggArray.push(indivArray);
                }
              }
            }
          }
        } else if (fileDepth === 3) {
          const nestedArrayName = String(Object.keys(FileContent[i]));

          const nestedDataSelector = (DataModel.datamodel as any)[
            FileUploaded[i]
          ]['file_structure_properties']['nested_data_point_selector']; // Select the right nested array name with nestedDataSelector property to parse the object

          for (let j = 0; j < FileContent[i][nestedArrayName].length; j++) {
            for (
              let k = 0;
              k < FileContent[i][nestedArrayName][j][nestedDataSelector].length;
              k++
            ) {
              const indivArray = [];
              for (let l = 0; l < ObjectPropertiesName.length; l++) {
                indivArray.push(
                  (DataModel.datamodel as any)[FileUploaded[i]][
                    nestedArrayName
                  ]['entries'][l][ObjectPropertiesName[l]]
                );
              }
              aggArray.push(indivArray);
            }
          }
        } else if (fileDepth === 4) {
          const nestedArrayName = String(Object.keys(FileContent[i]));

          for (let j = 0; j < FileContent[i][nestedArrayName].length; j++) {
            let categorySelector = FileContent[i][nestedArrayName][j]['name'];

            let hasPropertyEntries =
              FileContent[i][nestedArrayName][j].hasOwnProperty('entries'); // Check if the data point selector in the nested array is either children or entries

            if (hasPropertyEntries === true) {
              for (
                let k = 0;
                k < FileContent[i][nestedArrayName][j]['entries'].length;
                k++
              ) {
                const indivArray = [];
                for (let l = 0; l < ObjectPropertiesName.length; l++) {
                  indivArray.push(
                    (DataModel.datamodel as any)[FileUploaded[i]][
                      nestedArrayName
                    ][categorySelector][l][ObjectPropertiesName[l]]
                  );
                }
                aggArray.push(indivArray);
              }
            } else {
              for (
                let k = 0;
                k < FileContent[i][nestedArrayName][j]['children'].length;
                k++
              ) {
                for (
                  let l = 0;
                  l <
                  FileContent[i][nestedArrayName][j]['children'][k]['entries']
                    .length;
                  l++
                ) {
                  const indivArray = [];
                  for (let m = 0; m < ObjectPropertiesName.length; m++) {
                    indivArray.push(
                      (DataModel.datamodel as any)[FileUploaded[i]][
                        nestedArrayName
                      ][categorySelector][m][ObjectPropertiesName[m]]
                    );
                  }
                  aggArray.push(indivArray);
                }
              }
            }
          }
        }
      }
    } else {
      console.log('csv file');
    }
    console.log(aggArray);
  }
};

// Execution of the function with its parameters
SmartParser(FilesUploaded, FilesContent, DataModel, ObjectPropertiesName);

export default BarChart;
