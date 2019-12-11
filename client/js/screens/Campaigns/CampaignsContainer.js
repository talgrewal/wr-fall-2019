import React, {Component} from 'react';
import {Text, View} from 'react-native';
import Campaigns from './Campaigns';
import gql from 'graphql-tag';
import {Query} from 'react-apollo';

export const ALL_CAMPAIGNS_QUERY = gql`
  {
    campaigns {
      id
      title
      category
      description
      image
      subscribers {
        id
        name
        email
      }
      events {
        id
        title
        createdAt
        location
        image
        description
        comments {
          id
          createdAt
          comment
        }
      }
    }
  }
`;

export default class CampaignsContainer extends Component {
  render() {
    return (
      <Query query={ALL_CAMPAIGNS_QUERY}>
        {({loading, error, data}) => {
          if (loading) return <Text>Text is loading</Text>;
          if (error) return <Text>{error.message}/</Text>;
          if (data) {
            const campaignData = data.campaigns.filter(
              campaign =>
                campaign.category ===
                this.props.navigation.state.params.campaignName,
            );
            return <Campaigns campaignData={campaignData} />;
          }
        }}
      </Query>
    );
  }
}
