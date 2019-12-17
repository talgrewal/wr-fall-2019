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

const CAMPAIGN_SUBSCRIPTION = gql`
  subscription($userId: ID!) {
    user(where: {node: {id: $userId}}) {
      mutation
      node {
        campaigns {
          id
          title
          category
          description
          image
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
            <Subscription
              subscription={CAMPAIGN_SUBSCRIPTION}
              variables={{userId: user.id}}>
              {({loading, error, data}) => {
                if (error) return <Text>{error.message}</Text>;
                // if (loading) return <Loader />;
                console.log('campaigns', data && data.user.node.campaigns);

                return (
                  <Campaign
                    campaigns={data && data.user.node.campaigns}
                    user={user}
                  />
                );
              }}
            </Subscription>
          );
        }}
      </UserContext.Consumer>
    );
  }
}

export default withNavigation(CampaignContainer);
