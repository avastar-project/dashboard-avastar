/**
 * @name SmartParser
 * @description Function to read, parse and categorise the personal data files uploaded by the user.
 * @param {array} FilesUploaded names of the files uploaded.
 * @param {array} FilesContent variables that store the content of the files uploaded.
 * @param {array} DataModel mapping of the data points properties contained in each file
 * @param {array} ObjectPropertiesName list of the properties used to describe a data point
 * @returns {array} array with the properties of all the data points scanned in the personal data files uploaded by the user.
 */

// Import necessary packages
import Plot from 'react-plotly.js';

// Import data model to map the properties of the scanned data points in the user personal data files
import DataModel from '../utils/DataModel.json';

// Import facebook personal data files from fake-data folder (temporary approach). In production, the files will be retrieved from the datauploader component output
import AccountActivity from '../fake-data/facebook-data-fake/security_and_login_information/account_activity.json';
import AccountsCenter from '../fake-data/facebook-data-fake/facebook_accounts_center/accounts_center.json';
import AddressBooks from '../fake-data/facebook-data-fake/other_personal_information/your_address_books.json';
import AdsInterests from '../fake-data/facebook-data-fake/other_logged_information/ads_interests.json';
import AdvertisersUsingYourInfos from '../fake-data/facebook-data-fake/ads_information/advertisers_using_your_activity_or_information.json';
import AdvertisersYouInteractedWith from "../fake-data/facebook-data-fake/ads_information/advertisers_you've_interacted_with.json";
import AppsAndWebsites from '../fake-data/facebook-data-fake/apps_and_websites_off_of_facebook/apps_and_websites.json';
import AuthorizedLogins from '../fake-data/facebook-data-fake/security_and_login_information/authorized_logins.json';
import BrowserCookies from '../fake-data/facebook-data-fake/security_and_login_information/browser_cookies.json';
import CommentsInGroups from '../fake-data/facebook-data-fake/groups/your_comments_in_groups.json';
import CommentsPosted from '../fake-data/facebook-data-fake/comments_and_reactions/comments.json';
import CoverPhotosPosted from '../fake-data/facebook-data-fake/posts/album/0.json';
import CreatorBadges from '../fake-data/facebook-data-fake/groups/creator_badges.json';
import EventsInteractions from '../fake-data/facebook-data-fake/activity_messages/events_interactions.json';
import EventsInvitations from '../fake-data/facebook-data-fake/events/event_invitations.json';
import EventResponses from '../fake-data/facebook-data-fake/events/your_event_responses.json';
import FollowedPages from '../fake-data/facebook-data-fake/pages/pages_you_follow.json';
import FriendsPeerGroup from '../fake-data/facebook-data-fake/other_logged_information/friend_peer_group.json';
import FriendRequestsRejected from '../fake-data/facebook-data-fake/friends_and_followers/rejected_friend_requests.json';
import FriendRequestsReceived from '../fake-data/facebook-data-fake/friends_and_followers/friend_requests_received.json';
import FriendRequestsSent from '../fake-data/facebook-data-fake/friends_and_followers/friend_requests_sent.json';
import GroupInteractions from '../fake-data/facebook-data-fake/activity_messages/group_interactions.json';
import GroupMembershipActivity from '../fake-data/facebook-data-fake/groups/your_group_membership_activity.json';
import HangoutsConversations from '../fake-data/google-data-fake/Hangouts/Hangouts.json';
import HomeAppData from '../fake-data/google-data-fake/Application Google Home/HomeApp.json';
import HomeAppHistory from '../fake-data/google-data-fake/Application Google Home/HomeHistory.json';
import InstantGames from '../fake-data/facebook-data-fake/facebook_gaming/instant_games.json';
import IpAddressActivity from '../fake-data/facebook-data-fake/security_and_login_information/ip_address_activity.json';
import JournalPhotosPosted from '../fake-data/facebook-data-fake/posts/album/2.json';
import LikedPages from "../fake-data/facebook-data-fake/pages/pages_you've_liked.json";
import LoginProtectionData from '../fake-data/facebook-data-fake/security_and_login_information/login_protection_data.json';
import LoginsLogouts from '../fake-data/facebook-data-fake/security_and_login_information/logins_and_logouts.json';
import MobileDevices from '../fake-data/facebook-data-fake/security_and_login_information/mobile_devices.json';
import OffFacebookActivity from '../fake-data/facebook-data-fake/apps_and_websites_off_of_facebook/your_off-facebook_activity.json';
import PaymentHistory from '../fake-data/facebook-data-fake/facebook_payments/payment_history.json';
import PeopleInteractions from '../fake-data/facebook-data-fake/activity_messages/people_and_friends.json';
import PostsAndComments from '../fake-data/facebook-data-fake/comments_and_reactions/posts_and_comments.json';
import PostsGroups from '../fake-data/facebook-data-fake/groups/your_posts_in_groups.json';
import PrimaryLocation from '../fake-data/facebook-data-fake/location/primary_location.json';
import PrimaryPublicLocation from '../fake-data/facebook-data-fake/location/primary_public_location.json';
import PrivacyCheckupInteractions from '../fake-data/facebook-data-fake/privacy_checkup/interactions.json';
import ProfileInformation from '../fake-data/facebook-data-fake/profile_information/profile_information.json';
import ProfilePhotosPosted from '../fake-data/facebook-data-fake/posts/album/1.json';
import RecentlyViewed from '../fake-data/facebook-data-fake/your_interactions_on_facebook/recently_viewed.json';
import RecentlyVisited from '../fake-data/facebook-data-fake/your_interactions_on_facebook/recently_visited.json';
import RecommendedPages from "../fake-data/facebook-data-fake/pages/pages_you've_recommended.json";
import SavedItems from '../fake-data/facebook-data-fake/saved_items_and_collections/saved_items_and_collections.json';
import SearchHistory from '../fake-data/facebook-data-fake/search/your_search_history.json';
import Timezone from '../fake-data/facebook-data-fake/location/timezone.json';
import UnfollowedPages from "../fake-data/facebook-data-fake/pages/pages_you've_unfollowed.json";
import UserPosts from '../fake-data/facebook-data-fake/posts/your_posts_1.json';
import UserVideos from '../fake-data/facebook-data-fake/posts/your_videos.json';
import WhereYouLoggedIn from "../fake-data/facebook-data-fake/security_and_login_information/where_you're_logged_in.json";
import WhoYouFollow from '../fake-data/facebook-data-fake/friends_and_followers/who_you_follow.json';
import YourApps from '../fake-data/facebook-data-fake/apps_and_websites_off_of_facebook/your_apps.json';
import YourGroups from '../fake-data/facebook-data-fake/groups/your_groups.json';
import YourPages from '../fake-data/facebook-data-fake/pages/your_pages.json';

// (WIP) Google files to add in the DataModel and test the function
import Autofill from '../fake-data/google-data-fake/Chrome/Autofill.json';
import BrowserHistory from '../fake-data/google-data-fake/Chrome/BrowserHistory.json';
import Extensions from '../fake-data/google-data-fake/Chrome/Extensions.json';
import PlayStoreLibrary from '../fake-data/google-data-fake/Google Play Store/Library.json';
import Reviews from '../fake-data/google-data-fake/Maps (your places)/Reviews.json';
import SavedPlaces from '../fake-data/google-data-fake/Maps (your places)/Saved Places.json'; // TBD
import GoogleProfile from '../fake-data/google-data-fake/Profil/Profil.json'; // TBD
// Geolocation history file ?

// (WIP) Missing csv files to parse (x7)
// ../fake-data/google-data-fake/Activité du journal des accès/Activités _ liste des services Google auxquels vos.csv
// ../fake-data/google-data-fake/Activité du journal des accès/Appareils _ liste des appareils (par exemple, Nest.csv
// ../fake-data/google-data-fake/Google Pay/Envois et demandes d_argent/Envois et demandes d_argent.csv
// ../fake-data/google-data-fake/Saved/Adresses vendeurs.csv
// ../fake-data/google-data-fake/Saved/Favourite places.csv
// ../fake-data/google-data-fake/Saved/Want to go.csv
// ../fake-data/google-data-fake/YouTube et YouTube Music/subscriptions/subscriptions.csv

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
  'activity_messages/events_interactions.json',
  'apps_and_websites_off_of_facebook/apps_and_websites.json',
  'apps_and_websites_off_of_facebook/your_apps.json',
  'comments_and_reactions/posts_and_comments.json',
  'events/event_invitations.json',
  'facebook_gaming/instant_games.json',
  'facebook_payments/payment_history.json',
  'friends_and_followers/friend_requests_received.json',
  'friends_and_followers/friend_requests_sent.json',
  'friends_and_followers/rejected_friend_requests.json',
  'friends_and_followers/who_you_follow.json',
  'groups/creator_badges.json',
  'groups/your_comments_in_groups.json',
  'groups/your_group_membership_activity.json',
  'groups/your_groups.json',
  'location/timezone.json',
  'other_personal_information/your_address_books.json',
  'pages/pages_you_follow.json',
  "pages_you've_liked.json",
  "pages/pages_you've_unfollowed.json",
  "pages/pages_you've_recommended.json",
  'pages/your_pages.json',
  'posts/album/1.json',
  'posts/album/2.json',
  'posts/your_videos.json',
  'privacy_checkup/interactions.json',
  'saved_items_and_collections/saved_items_and_collections.json',
  'search/your_search_history.json',
  'security_and_login_information/account_activity.json',
  'security_and_login_information/authorized_logins.json',
  'security_and_login_information/browser_cookies.json',
  'security_and_login_information/ip_address_activity.json',
  'security_and_login_information/login_protection_data.json',
  'security_and_login_information/logins_and_logouts.json',
  'security_and_login_information/mobile_devices.json',
  "security_and_login_information/where_you're_logged_in.json",
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
  CoverPhotosPosted,
  ProfileInformation,
  EventsInteractions,
  AppsAndWebsites,
  YourApps,
  PostsAndComments,
  EventsInvitations,
  InstantGames,
  PaymentHistory,
  FriendRequestsReceived,
  FriendRequestsSent,
  FriendRequestsRejected,
  WhoYouFollow,
  CreatorBadges,
  CommentsInGroups,
  GroupMembershipActivity,
  YourGroups,
  Timezone,
  AddressBooks,
  FollowedPages,
  LikedPages,
  UnfollowedPages,
  RecommendedPages,
  YourPages,
  ProfilePhotosPosted,
  JournalPhotosPosted,
  UserVideos,
  PrivacyCheckupInteractions,
  SavedItems,
  SearchHistory,
  AccountActivity,
  AuthorizedLogins,
  BrowserCookies,
  IpAddressActivity,
  LoginProtectionData,
  LoginsLogouts,
  MobileDevices,
  WhereYouLoggedIn,
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

let TestFunction = (
  // Training function to parse files with errors (currently : profile_information)
  FilesUploaded: any,
  FilesContent: any,
  DataModel: any,
  ObjectPropertiesName: any
) => {
  const FileUploaded = FilesUploaded.slice(20, 21); // 57 is the max length (all files between 0 and 20 have been tested)
  const FileContent = FilesContent.slice(20, 21);

  const nestedArrayName = String(Object.keys(FileContent));

  Object.entries(FileContent[nestedArrayName]['profile_v2']).forEach(function (
    item,
    index
  ) {
    let categorySelector = item[0];
    // console.log(categorySelector);
    for (let k = 0; k < ObjectPropertiesName.length; k++) {
      // console.log(
      //   (DataModel.datamodel as any)[FileUploaded]['profile_v2'][
      //     categorySelector
      //   ][k][ObjectPropertiesName[k]]
      // );
    }
  });
};

TestFunction(FilesUploaded, FilesContent, DataModel, ObjectPropertiesName);

// Definition of the main function that will be used to parse the content of the files uploaded by the user.
let SmartParser = (
  FilesUploaded: any,
  FilesContent: any,
  DataModel: any,
  ObjectPropertiesName: any
) => {
  // Pre-select the files for test purposes (to be removed once I'm done building/testing the function)
  const FileUploaded = FilesUploaded.slice(56, 57); // 57 is the max length (all files between 0 and 20 have been tested)
  const FileContent = FilesContent.slice(56, 57);

  // solve issues with th following files (10) : profile_information/profile_information.json file (20 - 21), security_and_login_information/browser_cookies.json (51 - 52)

  // Iterate on the list of files uploaded
  // With the data uploader it will be easier to retrieve the content of the files/file names (properties of the object). For now, it relies on the fact that the objects in FilesUploaded and FilesContent have the same order.
  for (let i = 0; i < FileContent.length; i++) {
    // Define the array that will store the properties describing all the data points scanned
    const aggArray = [];

    console.log(FileUploaded[i]);

    // Check the type of file uploaded (.csv, .xlsx, .json, etc.)
    // For now we focus only on JSON files uploaded from Facebook platform
    if (FileUploaded[i].split('.')[1] === 'json') {
      // Check if the file is empty
      if (Object.keys(FileContent[i]).length === 0) {
        console.log('empty');
      } else {
        // Get depth of the file scanned. The depth is defined manually (cf. DataModel) from the maximum number of steps it takes to get to the desired object
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
              // Check if the file has multiple nested array names and select the right one with nestedDataSelector property (cc. DataModel)
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
    // Print the output of the function in the console
    console.log(aggArray);
  }
};

// Execution of the function with its parameters
SmartParser(FilesUploaded, FilesContent, DataModel, ObjectPropertiesName);

export default BarChart;
