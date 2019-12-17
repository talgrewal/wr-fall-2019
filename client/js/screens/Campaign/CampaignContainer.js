import React, {Component} from 'react';
import {Text} from 'react-native';
import Campaign from './Campaign';
import {queryViewer} from '../../config/modals';
import gql from 'graphql-tag';
import {withNavigation} from 'react-navigation';
import {Mutation, Query, Subscription} from '@apollo/react-components';
import {UserContext} from '../../context/UserProvider';
import client from '../../config/api';
import Loader from '../../components/Loader/';

// const CAMPAIGN_SUBSCRIPTION = gql`
//   subscription {
//     user(where: {node: {id: $userId}}) {
//       mutation
//       node {
//         campaigns {
//           id
//           title
//           category
//           description
//           image
//           subscribers {
//             id
//             name
//             email
//           }
//         }
//       }
//     }
//   }
// `;

// const CAMPAIGN_SUBSCRIPTION = gql`
//   subscription($userId: ID!) {
//     user(where: {node: {id: $userId}}) {
//       mutation
//       node {
//         campaigns {
//           id
//           title
//           category
//           description
//           image
//           subscribers {
//             id
//             name
//             email
//           }
//         }
//       }
//     }
//   }
// `;

const CAMPAIGN_SUBSCRIPTION_ALL = gql`
  subscription($campaignId: ID!) {
    campaign(where: {node: {id: $campaignId}}) {
      mutation
      node {
        subscribers {
          id
          email
          password
          name
        }
      }
    }
  }
`;

class CampaignContainer extends Component {
  render() {
    return (
      <UserContext.Consumer>
        {({user}) => {
          return (
            this.props.navigation.state.params.campaign.id && (
              <Subscription
                subscription={CAMPAIGN_SUBSCRIPTION_ALL}
                variables={{
                  campaignId: this.props.navigation.state.params.campaign.id,
                }}>
                {({loading, error, data}) => {
                  if (error) return <Text>{error.message}</Text>;
                  // if (loading) return <Loader />;
                  console.log(
                    'campaigns',
                    data && data.campaign.node.subscribers,
                  );

                  console.log(
                    'gamma',
                    this.props.navigation.state.params.campaign.id,
                  );
                  return (
                    <Campaign
                      campaigns={data && data.campaign.node.subscribers}
                      user={user}
                    />
                  );
                }}
              </Subscription>
            )
          );
        }}
      </UserContext.Consumer>
    );
  }
}

export default withNavigation(CampaignContainer);
