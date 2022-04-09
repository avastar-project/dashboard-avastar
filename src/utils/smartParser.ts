/**
 * @name smartParser
 * @description Function to read, parse and categorise the personal data files uploaded by the user.
 * @param {array} FileUploaded name of the file uploaded.
 * @param {array} FileContent variable that store the content of the file uploaded. Temporarily it is imported from the fake_data folder. When the datauploader component will be merged, it will take its output as an input.
 * @returns {array} array with the properties of all the data points scanned in the personal data files uploaded by the user.
 */

// Import data model to map the properties of the scanned data points in the user personal data files
import parsingModel from './parsingModel.json';

// Import facebook personal data files from fake-data folder. This is a temporary approach. Once the datauploader component is merged, the SmartParser function will take its output as an input.
import AccountActivity from '../fake-data/facebook-data-fake/security_and_login_information/account_activity.json';
import AccountsCenter from '../fake-data/facebook-data-fake/facebook_accounts_center/accounts_center.json';
import AddressBooks from '../fake-data/facebook-data-fake/other_personal_information/your_address_books.json';
import AdsInterests from '../fake-data/facebook-data-fake/other_logged_information/ads_interests.json';
import AdvertisersUsingYourInfos from '../fake-data/facebook-data-fake/ads_information/advertisers_using_your_activity_or_information.json';
import AdvertisersYouInteractedWith from "../fake-data/facebook-data-fake/ads_information/advertisers_you've_interacted_with.json";
import AppsAndWebsites from '../fake-data/facebook-data-fake/apps_and_websites_off_of_facebook/apps_and_websites.json';
import AuthorizedLogins from '../fake-data/facebook-data-fake/security_and_login_information/authorized_logins.json';
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

// Create list of filenames uploaded by the user. This is a temporary approach. Once the datauploader component is merged, the SmartParser function will take its output as an input.
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
  'security_and_login_information/ip_address_activity.json',
  'security_and_login_information/login_protection_data.json',
  'security_and_login_information/logins_and_logouts.json',
  'security_and_login_information/mobile_devices.json',
  "security_and_login_information/where_you're_logged_in.json",
];

// Create list with the content of the files uploaded by the user. This is a temporary approach. Once the datauploader component is merged, the SmartParser function will take its output as an input.
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
  IpAddressActivity,
  LoginProtectionData,
  LoginsLogouts,
  MobileDevices,
  WhereYouLoggedIn,
];

// Create a list with the names of properties that will be used to describe each data point retrieved in the files uploaded by the user, based on the DataModel.
const ObjectPropertiesName = [
  'action_type',
  'data_origin',
  'data_type',
  'platform',
];

// Initiation of the main function that will be used to parse the content of the files uploaded by the user.
export const smartParser = (
  FilesUploaded: any,
  FilesContent: any,
) => {
  // Pre-select the files for test purposes (step by step tests to debug specific files)
  const FileUploaded = FilesUploaded.slice(10, 11)[0]; // 56 is the max length (all files have been tested)
  const FileContent = FilesContent.slice(10, 11)[0];

  // Initiation of the array that will store the properties describing each the data point scanned. It will be the input of the data visualisations showed in the Overview page.
  const smartData = [];

  // Iterate on the list of files uploaded
  // For now, the function relies on the fact that objects in FilesUploaded and FilesContent have the exact same order.
  // Check the type of file uploaded (.csv, .xlsx, .json, etc.)
  if (FileUploaded.split('.')[1] === 'json') {
    // Check if the file is empty.
    if (Object.keys(FileContent).length === 0) {
      console.log('empty');
    } else {
      // Get depth of the file scanned. The depth is defined manually (cf. DataModel) from the maximum number of steps it takes to get to the desired object.
      const fileDepth = (parsingModel.parsingmodel as any)[FileUploaded][
        'file_structure_properties'
      ]['depth'];

      if (fileDepth === 0) {
        const nestedArrayName = 'None'; // If the depth === 0 then necessarily, there is no nested array name.

        for (let j = 0; j < FileContent.length; j++) {
          const indivArray = [];
          for (let k = 0; k < ObjectPropertiesName.length; k++) {
            indivArray.push(
              (parsingModel.parsingmodel as any)[FileUploaded][nestedArrayName][
                'entries'
              ][k][ObjectPropertiesName[k]]
            );
          }
          smartData.push(indivArray);
        }
      } else if (fileDepth === 1) {
        const nestedArrayName = String(Object.keys(FileContent));

        if (typeof FileContent[nestedArrayName] === 'string') {
          // Check the type of the element that comes right after the nested array name (string vs object). If it's a string, then it means that there is only one single data point to parse.
          const indivArray = [];
          for (let j = 0; j < ObjectPropertiesName.length; j++) {
            indivArray.push(
              (parsingModel.parsingmodel as any)[FileUploaded][nestedArrayName][
                'entries'
              ][j][ObjectPropertiesName[j]]
            );
          }
          smartData.push(indivArray);
        } else {
          if (
            (parsingModel.parsingmodel as any)[FileUploaded][
              'file_structure_properties'
            ]['nested_data_point_selector'] !== ''
          ) {
            // Check if the file has multiple nested array names. Select the right one with nestedDataSelector property defined in the DataModel.
            const nestedDataSelector = (parsingModel.parsingmodel as any)[
              FileUploaded
            ]['file_structure_properties']['nested_data_point_selector'];
            for (let j = 0; j < FileContent[nestedDataSelector].length; j++) {
              const indivArray = [];
              for (let k = 0; k < ObjectPropertiesName.length; k++) {
                indivArray.push(
                  (parsingModel.parsingmodel as any)[FileUploaded][
                    nestedDataSelector
                  ]['entries'][k][ObjectPropertiesName[k]]
                );
              }
              smartData.push(indivArray);
            }
          } else {
            for (let j = 0; j < FileContent[nestedArrayName].length; j++) {
              const indivArray = [];
              for (let k = 0; k < ObjectPropertiesName.length; k++) {
                indivArray.push(
                  (parsingModel.parsingmodel as any)[FileUploaded][nestedArrayName][
                    'entries'
                  ][k][ObjectPropertiesName[k]]
                );
              }
              smartData.push(indivArray);
            }
          }
        }
      } else if (fileDepth === 2) {
        const nestedArrayName = String(Object.keys(FileContent));

        if (
          (parsingModel.parsingmodel as any)[FileUploaded][
            'file_structure_properties'
          ]['has_single_data_point'] === true
        ) {
          // Check if the file contains only one data point that we want to retrieve among all the others.
          const indivArray = [];
          for (let j = 0; j < ObjectPropertiesName.length; j++) {
            indivArray.push(
              (parsingModel.parsingmodel as any)[FileUploaded][nestedArrayName][
                'entries'
              ][j][ObjectPropertiesName[j]]
            );
          }
          smartData.push(indivArray);
        } else {
          if (Array.isArray(FileContent[nestedArrayName]) === false) {
            // Check type of the nestedArray name, being either an array ("[]") or an object ("{}") to apply the right methodology to parse the file.
            if (
              (parsingModel.parsingmodel as any)[FileUploaded][
                'file_structure_properties'
              ]['has_multiple_nested_objects'] === true // check if the file has multiple nested objects (cf. structure similar to profile_information/profile_information.json file).
            ) {
              Object.entries(FileContent[nestedArrayName]).forEach(function (
                item,
                index
              ) {
                let categorySelector = item[0]; // Get the name of the arrays that are parsed to know which properties from the data model must be applied to it.

                const indivArray = [];
                for (let k = 0; k < ObjectPropertiesName.length; k++) {
                  indivArray.push(
                    (parsingModel.parsingmodel as any)[FileUploaded][nestedArrayName][
                      categorySelector
                    ][k][ObjectPropertiesName[k]]
                  );
                }
                smartData.push(indivArray);
              });
            } else {
              Object.entries(FileContent[nestedArrayName]).forEach(function (
                item,
                index
              ) {
                let categorySelector = item[0]; // Get the name of the arrays that are parsed to know which properties from the data model must be applied to it
                for (
                  let j = 0;
                  j < FileContent[nestedArrayName][categorySelector].length;
                  j++
                ) {
                  const indivArray = [];
                  for (let k = 0; k < ObjectPropertiesName.length; k++) {
                    indivArray.push(
                      (parsingModel.parsingmodel as any)[FileUploaded][
                        nestedArrayName
                      ][categorySelector][k][ObjectPropertiesName[k]]
                    );
                  }
                  smartData.push(indivArray);
                }
              });
            }
          } else {
            for (let j = 0; j < FileContent[nestedArrayName].length; j++) {
              for (
                let k = 0;
                k < FileContent[nestedArrayName][j]['entries'].length;
                k++
              ) {
                const indivArray = [];

                for (let l = 0; l < ObjectPropertiesName.length; l++) {
                  indivArray.push(
                    (parsingModel.parsingmodel as any)[FileUploaded][nestedArrayName][
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
        const nestedArrayName = String(Object.keys(FileContent));

        const nestedDataSelector = (parsingModel.parsingmodel as any)[FileUploaded][
          'file_structure_properties'
        ]['nested_data_point_selector']; // Select the right nested array name with nestedDataSelector property to parse the object.

        for (let j = 0; j < FileContent[nestedArrayName].length; j++) {
          for (
            let k = 0;
            k < FileContent[nestedArrayName][j][nestedDataSelector].length;
            k++
          ) {
            const indivArray = [];
            for (let l = 0; l < ObjectPropertiesName.length; l++) {
              indivArray.push(
                (parsingModel.parsingmodel as any)[FileUploaded][nestedArrayName][
                  'entries'
                ][l][ObjectPropertiesName[l]]
              );
            }
            smartData.push(indivArray);
          }
        }
      } else if (fileDepth === 4) {
        const nestedArrayName = String(Object.keys(FileContent));

        for (let j = 0; j < FileContent[nestedArrayName].length; j++) {
          let categorySelector = FileContent[nestedArrayName][j]['name'];

          let hasPropertyEntries =
            FileContent[nestedArrayName][j].hasOwnProperty('entries'); // Check if the data point selector in the nested array is either children or entries.

          if (hasPropertyEntries === true) {
            for (
              let k = 0;
              k < FileContent[nestedArrayName][j]['entries'].length;
              k++
            ) {
              const indivArray = [];
              for (let l = 0; l < ObjectPropertiesName.length; l++) {
                indivArray.push(
                  (parsingModel.parsingmodel as any)[FileUploaded][nestedArrayName][
                    categorySelector
                  ][l][ObjectPropertiesName[l]]
                );
              }
              smartData.push(indivArray);
            }
          } else {
            for (
              let k = 0;
              k < FileContent[nestedArrayName][j]['children'].length;
              k++
            ) {
              for (
                let l = 0;
                l <
                FileContent[nestedArrayName][j]['children'][k]['entries']
                  .length;
                l++
              ) {
                const indivArray = [];
                for (let m = 0; m < ObjectPropertiesName.length; m++) {
                  indivArray.push(
                    (parsingModel.parsingmodel as any)[FileUploaded][nestedArrayName][
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
  } else {
    console.log('csv file');
  }
  // Print the output of the function in the console
  console.log(smartData);
};

// Execution of the function with its parameters
smartParser(FilesUploaded, FilesContent);
